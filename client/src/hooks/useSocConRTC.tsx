"use client";

import { useCallback, useEffect, useState } from "react";
import {
  wsConnection,
  nextConn,
  stopConn,
  upgradeConn,
} from "../../utils/socket";
import { redirect } from "next/navigation";

let ws: WebSocket;

type storageSettings = {
  audioID: string;
  cameraID: string;
  constrains: {
    audio: {
      deviceId?: string;
      echoCancellation: boolean;
    };
    video: {
      deviceId?: string;
      width: {
        min: number;
      };
      height: {
        min: number;
      };
    };
  };
};

function useSocRTC(remote: React.RefObject<HTMLVideoElement>) {
  const [localStream, setLocalStream] = useState<null | MediaStream>(null);
  const [remoteStream, setRemoteStream] = useState<null | MediaStream>(null);
  const [settings, setSettings] = useState<null | storageSettings>(null);
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null
  );

  const [pc, setPc] = useState<null | number>(null);

  const initSocket = useCallback(
    (stream: MediaStream) => {
      if (error !== null) {
        return;
      }
      try {
        ws = new WebSocket(`wss://${process.env.NEXT_PUBLIC_SERVER_URL}`);

        ws.onopen = () => {
          console.log("yo");
          setPc(123);
        };

        // const remoteVideo: HTMLVideoElement | null =
        //   document.querySelector(".remoteVideo video");

        wsConnection(
          ws,
          localStream || stream,
          setLocalStream,
          remoteStream,
          setRemoteStream
        );
      } catch (e) {
        console.log(e);
      }
    },
    [error]
  );

  useEffect(() => {
    if (error !== null) {
      return;
    }

    if (!localStorage.getItem("settings")) {
      // setError({ type: "settings", message: "No No constrains set" });
      redirect("/settings");
    }

    const stg = JSON.parse(localStorage.getItem("settings")!);
    navigator.mediaDevices
      .getUserMedia(stg.constrains)
      .then((stream: MediaStream) => {
        setLocalStream(stream);

        initSocket(stream);
      })
      .catch((err) => {
        if (err.name === "NotAllowedError") {
          console.log("User deniend permission");
          setError({
            type: "PermissionDenied",
            message: "User deniend permission",
          });
          // throw new Error("User deniend permission");
        } else if (err.name === "NotReadableError") {
          console.log("Device already in use ");
          setError({
            type: "NotReadableError",
            message: "Device already in use",
          });
        } else {
          console.error("Error accessing media devices: ", err, err.type);
        }
      });

    setSettings(stg);
  }, [error]);

  function hangup() {
    ///add shit about peerCon
    if (ws) {
      stopConn(ws, localStream, setRemoteStream);
    }
  }

  function nextConnection() {
    nextConn(ws, localStream, setRemoteStream);
  }

  async function screenShare(
    localVideoElement: React.RefObject<HTMLVideoElement>
  ) {
    // localStream?.getTracks().forEach((track) => track.stop());
    const audioConstrain = settings?.constrains.audio;

    const captureStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    const [videoTrack] = captureStream.getVideoTracks();
    let audioStream;

    if (localStream) {
      audioStream = localStream.getAudioTracks()[0];
    } else {
      audioStream = (
        await navigator.mediaDevices.getUserMedia({
          audio: audioConstrain,
        })
      ).getAudioTracks()[0];
    }

    videoTrack.addEventListener("ended", () => {
      const stream = new MediaStream([
        localStream!.getVideoTracks()[0],
        audioStream,
      ]);
      localVideoElement.current!.srcObject = stream;
      upgradeConn(ws, stream);
    });

    const stream = new MediaStream([videoTrack, audioStream]);
    localVideoElement.current!.srcObject = stream;
    // setLocalStream(stream);

    upgradeConn(ws, stream);
  }

  return {
    localStream,
    remoteStream,
    nextConnection,
    hangup,
    pc,
    setPc,
    setLocalStream,
    screenShare,
    error,
    setError,
  };
}

export default useSocRTC;
