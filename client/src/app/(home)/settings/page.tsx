"use client";

import { useEffect, useRef, useState } from "react";
import useSettingsWebRTC from "../../../hooks/useSettingsWebRTC";
import styles from "./page.module.css";
import Link from "next/link";
import { Modal } from "@/app/components/Modal";
import { Select } from "@/app/components/ui/Select";

interface pageProps {}

const SettingsPage: React.FC<pageProps> = ({}) => {
  const [started, setStart] = useState(false);
  const [isMuted, setMuted] = useState(false);

  function muteHandler() {
    setMuted((prev) => !prev);
  }

  const {
    audioList,
    cameraList,
    setAudioID,
    setCameraID,
    getStream,
    localStream,
    hangup,
    error,

    setError,
  } = useSettingsWebRTC();

  useEffect(() => {
    if (!error) {
      return;
    }

    if (error.type === "NotReadableError") {
      localStorage.removeItem("settings");
    }
    // if (error.type === "PermissionDenied") {
    //   localStorage.removeItem("settings");
    //   ///modal with error

    //   setError(null);
    // }
  }, [error, setError]);

  const onChangeHandler = (
    // e: React.ChangeEvent<HTMLSelectElement>,
    type: "video" | "audio",
    value: string
  ) => {
    if (type === "video") {
      // setCameraID(e.target.value);
      setCameraID(value);
    }
    if (type === "audio") {
      setAudioID(value);
      // setAudioID(e.target.value);
    }
  };

  function handleTest() {
    if (!started) {
      getStream();
      setStart((prev) => !prev);
      return;
    }
    hangup();
    setStart((prev) => !prev);
    // stopStream()
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Setup and test your Camera and Microphone</h1>

        {error && (
          <Modal
            handleShit={() => {
              if (error.type === "PermissionDenied") {
                localStorage.removeItem("settings");
                ///modal with error
                // navigator.mediaDevices.getUserMedia({
                //   audio: true,
                //   video: true,
                // });

                setError(null);
              }
            }}
            hasCloseBtn
            type="error"
            isOpen={!!error}
            title="Something went wrong"
            message={error.type}>
            {error.type === "PermissionDenied" && (
              <p className={styles.message}>
                Allow the necessary permissions to proceed
              </p>
            )}
            {error.type === "NotReadableError" && (
              <p className={styles.message}>
                The current device is already in use. Shut down the conflicting
                application or device and try again.
              </p>
            )}
          </Modal>
        )}

        {!error && (
          <>
            <DeviceSettings
              deviceList={cameraList}
              label={["Camera preview", "Test Video Output"]}
              onChangeHandler={onChangeHandler}
              title="Camera"
              type="video"
              localStream={localStream}
              isMuted={isMuted}></DeviceSettings>

            <DeviceSettings
              deviceList={audioList}
              label={["Audio Input Level", "Test Audio Input"]}
              onChangeHandler={onChangeHandler}
              title="Microphone"
              type="audio"
              localStream={localStream}
              isMuted={isMuted}
              muteHandler={muteHandler}></DeviceSettings>
          </>
        )}

        <div className={styles.btns}>
          <button className={styles.testBtn} onClick={handleTest}>
            {started && !error ? "Stop" : "Test Devices"}
          </button>
          <Link className={styles.link} href="/chat">
            Chat
            <Arrow />
          </Link>
        </div>
      </div>

      {/* <div style={{ height: "50vh" }}>
        <Select list={audioList} type={type} />
      </div> */}
    </section>
  );
};

function Arrow() {
  return (
    <>
      <svg
        className={styles.navArrowRect}
        width="60"
        height="12"
        fill="none"
        // style={{ right: "0px", width: "21%" }}
        xmlns="http://www.w3.org/2000/svg">
        <rect
          className=""
          y="5"
          width="99%"
          height="2"
          rx="0.5"
          fill="#D13D25"></rect>
      </svg>
      <svg
        className={styles.navArrowPath}
        width="30"
        height="12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // style={{ height: "12px", top: "30%", right: "0px" }}
      >
        <path
          d="M18.9272 0.142619L18.2392 0.656668C18.0007 0.828017 17.9365 1.13645 18.0649 1.3849L20.2757 5.76288C20.3583 5.92566 20.3583 6.11415 20.2757 6.27693L18.0649 10.6378C17.9365 10.8948 18.0099 11.2032 18.2576 11.3746L18.9456 11.8715C19.1841 12.0428 19.5052 12.0428 19.7437 11.8715C21.0188 10.9376 25.2386 8.02469 29.4768 7.01373C29.7612 6.94519 29.963 6.72244 29.9722 6.44828L29.9997 5.70291C30.0088 5.33451 29.8254 5.09462 29.5502 5.00894C25.257 3.74096 21.0004 0.990799 19.707 0.116917C19.4685 -0.0458649 19.1474 -0.0372974 18.9272 0.134052V0.142619Z"
          fill="#D13D25"></path>
      </svg>
    </>
  );
}

export default SettingsPage;

interface DeviceSettingsProps {
  deviceList: MediaDeviceInfo[];
  type: "video" | "audio";
  onChangeHandler: (
    // e: React.ChangeEvent<HTMLSelectElement>,
    type: "video" | "audio",
    value: string
  ) => void;
  label: [string, string];
  title: string;
  localStream: null | MediaStream;
  muteHandler?: () => void;
  isMuted: boolean;
}

const DeviceSettings: React.FC<DeviceSettingsProps> = ({
  deviceList,
  label,
  onChangeHandler,
  title,
  type,
  localStream,
  isMuted,
  muteHandler,
}) => {
  const device = useRef<HTMLVideoElement>(null);

  const [currentAudioID, setCurrentAudioID] = useState<string>("");
  const [currentCameraID, setCurrentCameraID] = useState<string>("");

  useEffect(() => {
    if (!localStream) {
      return;
    }
    if (type === "video") {
      device.current!.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    const settings = localStorage.getItem("settings");
    if (!settings) {
      return;
    }

    const o = JSON.parse(settings);
    if (o!.cameraID) {
      setCurrentCameraID(o.cameraID);
    }
    if (o!.audioID) {
      setCurrentAudioID(o.audioID);
    }
    //
  }, []);

  function selectHandler(type: "video" | "audio", value: string) {
    onChangeHandler(type, value);
    if (type === "audio") {
      setCurrentAudioID(value);
    } else {
      setCurrentCameraID(value);
    }
  }

  return (
    <div className={styles.settings} data-type={type}>
      <Select
        list={deviceList}
        label={title}
        playceholder={type === "audio" ? "Select microphone" : "Select camera"}
        type={type}
        selectHandler={selectHandler}
      />

      {/* <h2>{title}</h2>

      <select
        name=""
        id=""
        value={type === "audio" ? currentAudioID : currentCameraID}
        onChange={(e) => {
          onChangeHandler(e, type);

          if (type === "audio") {
            setCurrentAudioID(e.target.value);
          } else {
            setCurrentCameraID(e.target.value);
          }
        }}>
        {deviceList.map((a) => (
          <option
            // selected={
            //   currentAudioID === a.deviceId || currentCameraID === a.deviceId
            // }
            value={a.deviceId}
            key={a.deviceId}>
            {a.label}
          </option>
        ))}
      </select> */}
      <div>
        {type === "audio" && (
          <>
            {!localStream && (
              <span className={styles.audioPlaceholder}>{label[0]}</span>
            )}
            {localStream && (
              <div className={styles.canvasParent}>
                <WaveEleme stream={localStream} />
              </div>
            )}
            <label htmlFor="sound">
              {isMuted ? "Unmute " : "Mute "}
              voice
              <input
                checked={isMuted}
                type="checkbox"
                name="sound"
                id="sound"
                className={styles.cs}
                onChange={muteHandler}
              />
            </label>
          </>
        )}

        {type === "video" && (
          <div>
            {!localStream && (
              <span className={styles.videoPlaceholder}>{label[0]}</span>
            )}
            {localStream && (
              <video
                muted={isMuted}
                className={styles.video}
                ref={device}
                autoPlay
                playsInline></video>
            )}
          </div>
        )}

        {/* depends on type big rect for video or audio */}
      </div>
    </div>
  );
};

class Bar {
  x;
  y;
  w;
  h;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(micInput: number, barHeight: number) {
    this.h = micInput * barHeight * 1.5;
  }
}

function WaveEleme({ stream }: { stream: MediaStream }) {
  const canvas = useRef<null | HTMLCanvasElement>(null);
  let frame;
  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    function getSamples(analyzer: AnalyserNode, dataArray: Uint8Array) {
      analyser.getByteTimeDomainData(dataArray);
      let normalizeSample = [...dataArray].map((val) => {
        return val / 128 - 1;
      });

      return normalizeSample;
    }

    function getVolume(analyzer: AnalyserNode, dataArray: Uint8Array) {
      analyser.getByteTimeDomainData(dataArray);
      let normalizeSample = [...dataArray].map((val) => {
        return val / 128 - 1;
      });
      let sum = 0;
      for (let i = 0; i < normalizeSample.length; i++) {
        sum += normalizeSample[i] ** 2;
      }

      let volume = Math.sqrt(sum / normalizeSample.length);
      return volume;
    }

    function animate() {
      context!.clearRect(0, 0, cvs.width, cvs.height);
      const samples = getSamples(analyser, dataArray);

      bars.forEach((bar: Bar, i: number) => {
        bar.update(samples[i], barHeight);
        bar.draw(context!);
      });
      frame = requestAnimationFrame(animate);
    }

    function createBars() {
      const barWidth = cvs.width / 256;

      for (let i = 0; i < 256; i++) {
        bars.push(new Bar(i, cvs.height / 2, barWidth, 100));
      }
    }

    const audio = stream.getAudioTracks()[0];
    const audioCtx = new AudioContext();

    const audioNode = audioCtx.createMediaStreamSource(stream);

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    audioNode.connect(analyser);

    const cvs = canvas.current;
    const barHeight = cvs.height / 2;
    const context = cvs.getContext("2d");
    const bars: any = [];
    createBars();

    animate();

    return () => {
      cancelAnimationFrame(frame!);
    };
  }, [canvas]);

  return (
    <canvas
      width={"100%"}
      height={"100%"}
      className={styles.canvas}
      ref={canvas}></canvas>
  );
}
