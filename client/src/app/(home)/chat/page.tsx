"use client";

import useSocRTC from "@/hooks/useSocConRTC";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./chat.module.css";
import { Modal } from "@/app/components/Modal";

interface pageProps {}

const ChatPage: React.FC<pageProps> = ({}) => {
  const local = useRef<HTMLVideoElement>(null);
  const remote = useRef<HTMLVideoElement>(null);
  const {
    localStream,
    remoteStream,
    pc,
    hangup,
    error,
    setError,
    nextConnection,
    setLocalStream,
    screenShare,
  } = useSocRTC(remote);
  useEffect(() => {
    if (!localStream || error !== null) {
      return;
    }

    local.current!.srcObject = localStream;

    return () => {
      localStream!.getTracks().forEach((track) => track.stop());
      setLocalStream(null);
      hangup();
    };
  }, [localStream, error]);
  useEffect(() => {
    if (!remoteStream) {
      return;
    }
    remote.current!.srcObject = remoteStream;
  }, [remoteStream]);

  return (
    <>
      {error && (
        <Modal
          handleShit={() => {
            if (error.type === "PermissionDenied") {
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
        <section className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.localVideo}>
              <Link href="/settings" className={styles.settingsLink}>
                <SettingsIcon />
              </Link>
              {!localStream && (
                <span className={styles.videoPlaceholder}>Your Camera</span>
              )}
              {localStream && (
                <video
                  width={200}
                  ref={local}
                  autoPlay
                  playsInline
                  muted></video>
              )}
            </div>
            <div className={styles.remoteVideo}>
              {!remoteStream && (
                <span className={styles.videoPlaceholder}>Guest Camera</span>
              )}
              {remoteStream && (
                <video ref={remote} width={300} autoPlay playsInline></video>
              )}
            </div>

            <div className={styles.btns} onClick={() => {}}>
              <button
                className={styles.btn}
                onClick={(e) => {
                  // e.stopPropagation();
                  nextConnection();
                }}>
                Next
              </button>
              <button
                className={styles.btnRound}
                onClick={() => {
                  screenShare(local);
                }}>
                <ScreenShareIcon />
              </button>
              <button className={styles.btnRound} onClick={() => hangup()}>
                <PhoneCallIcon />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ChatPage;

function PhoneCallIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}

function ScreenShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m17 8 5-5" />
      <path d="M17 3h5v5" />
    </svg>
  );
}

export function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
