import React from "react";
import styles from "./Glass.module.css";

interface GlassProps {
  children: React.ReactNode;
}

export const Glass: React.FC<GlassProps> = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      {children}

      <svg style={{ display: "none" }}>
        <filter id="R3">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
          <feOffset dx="-10" dy="0" result="r"></feOffset>
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="g"></feColorMatrix>
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          <feOffset dx="10" dy="0" result="b"></feOffset>
          <feBlend in="r" in2="g" result="rg" mode="screen"></feBlend>
          <feBlend in="rg" in2="b" mode="screen" result="blend"></feBlend>
          {/* <feGaussianBlur
            in="blend"
            stdDeviation="9 0"
            edgeMode="none"></feGaussianBlur> */}
        </filter>
      </svg>
    </div>
  );
};
