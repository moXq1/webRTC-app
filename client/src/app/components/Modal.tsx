"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  message?: string;
  title?: string;
  handleShit?: () => void;
  hasCloseBtn: boolean;
  children: React.ReactNode;
  type?: "error" | "default";
}

export const Modal: React.FC<ModalProps> = ({
  handleShit,
  hasCloseBtn = true,
  isOpen,
  message,
  title,
  children,
  type = "default",
}) => {
  const [isModelOpen, setModalOpen] = useState(isOpen);
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  function handleClose() {
    if (handleShit) {
      handleShit();
    }

    setModalOpen(false);
  }

  const handleEscape = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    setModalOpen(isModelOpen);
  }, [isModelOpen, isOpen]);

  useEffect(() => {
    const dialogElem = dialogRef.current;

    if (dialogElem) {
      if (isModelOpen) {
        dialogElem.showModal();
        return;
      }
      dialogElem.close();
    }
  }, [isModelOpen]);

  return (
    <dialog
      className={styles.dialog}
      style={{
        //@ts-ignore
        "--modal-color": type === "error" ? "#ffadad" : "rgb( 157, 236, 250)",
        "--modal-bar": type === "error" ? "#ff9191" : "rgb( 127, 227, 247)",
      }}
      onKeyDown={handleEscape}
      ref={dialogRef}>
      <div className={styles.bar}>
        <span>{title || "Title"}</span>
      </div>
      <h2>{children}</h2>

      {hasCloseBtn && (
        <button className={styles.btn} onClick={handleClose}>
          Close
          <div>✱</div>
        </button>
      )}
    </dialog>
  );
};
