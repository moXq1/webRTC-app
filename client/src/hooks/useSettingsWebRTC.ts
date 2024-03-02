"use client";

import { useEffect, useState } from "react";

const constrains = {
  audio: { echoCancellation: true },
  video: {
    // deviceId: cameraId,
    width: { min: 1280 },
    height: { min: 720 },
  },
};

function useSettingsWebRTC() {
  const [cameraList, setCameraList] = useState<MediaDeviceInfo[]>([]);
  const [audioList, setAudioList] = useState<MediaDeviceInfo[]>([]);

  const [audioID, setAudioID] = useState<string>();
  const [cameraID, setCameraID] = useState<string>();

  const [isConstrains, setConstrains] = useState(constrains);

  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null
  );

  async function getConnectedDevices() {
    let s;
    try {
      s = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      const devices = await navigator.mediaDevices.enumerateDevices();

      setCameraList(devices.filter((d) => (d.kind as string) === "videoinput"));

      setAudioList(devices.filter((d) => (d.kind as string) === "audioinput"));

      s.getTracks().forEach((track) => track.stop());
    } catch (e: any) {
      if (e.name === "NotAllowedError") {
        // console.error("User deniend permission");
        setError({
          type: "PermissionDenied",
          message: "User deniend permission",
        });
        return;
        // throw new Error("User deniend permission");
      } else if (e.name === "NotReadableError") {
        console.log("Device already in use ");

        const devices = await navigator.mediaDevices.enumerateDevices();

        setCameraList(
          devices.filter((d) => (d.kind as string) === "videoinput")
        );

        setAudioList(
          devices.filter((d) => (d.kind as string) === "audioinput")
        );

        // setError({
        //   type: "NotReadableError",
        //   message: "Device already in use",
        // });
      } else {
        console.error("Error accessing media devices: ", e);
      }
    }
  }

  useEffect(() => {
    const settings = localStorage.getItem("settings");
    if (error) {
      return;
    }

    if (!settings && !error) {
      localStorage.setItem(
        "settings",
        JSON.stringify({ constrains: isConstrains })
      );
    } else if (settings && !error) {
      setConstrains(JSON.parse(settings!).constrains);
    }

    getConnectedDevices();
  }, [error]);

  useEffect(() => {
    if (!audioID && !cameraID) {
      return;
    }

    setConstrains((prev) => {
      let newConstrain = {
        audio: { ...prev.audio },
        video: { ...prev.video },
      };

      if (audioID) {
        // @ts-ignore
        newConstrain.audio.deviceId = audioID;
      }
      if (cameraID) {
        // @ts-ignore
        newConstrain.video.deviceId = cameraID;
      }

      localStorage.setItem(
        "settings",
        JSON.stringify({ audioID, cameraID, constrains: newConstrain })
      );

      return newConstrain;
    });
  }, [audioID, cameraID]);

  useEffect(() => {
    if (localStream) {
      getStream();
    }
  }, [isConstrains]);

  useEffect(() => {}, [localStream]);

  async function getStream(updatedCons?: typeof isConstrains) {
    if (!updatedCons) {
      // const settings = localStorage.getItem("settings")

      updatedCons = isConstrains;
    }

    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(updatedCons);

      setLocalStream(stream!);
    } catch (e: any) {
      if (e.name === "NotAllowedError") {
        console.log("User deniend permission");
        setError({
          type: "PermissionDenied",
          message: "User deniend permission",
        });
        // throw new Error("User deniend permission");
      } else if (e.name === "NotReadableError") {
        console.log("Device already in use ");
        setError({
          type: "NotReadableError",
          message: "Device already in use",
        });
      } else {
        console.error("Error accessing media devices: ", e, e.type);
      }
    }
  }

  function hangup() {
    ///add shit about peerCon

    localStream?.getTracks().forEach((track) => track.stop());
    setLocalStream(null);
  }

  return {
    cameraList,
    audioList,
    getStream,
    localStream,
    hangup,
    setAudioID,
    cameraID,
    setCameraID,
    error,
    setError,
  };
}

export default useSettingsWebRTC;
