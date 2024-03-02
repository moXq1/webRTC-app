"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./Higlight.module.css";

interface HighlightProps {
  children: React.ReactNode;
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const Highlight: React.FC<HighlightProps> = ({ children }) => {
  const ref = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    let i = 0;
    let tm = 1000;

    const container = ref.current;

    const emj = [...ref.current.querySelectorAll(".emj")];

    function animate(item: HTMLElement) {
      item.style.setProperty("--left", `${rand(-10, 100)}%`);
      item.style.setProperty("--top", `${rand(-40, 40)}%`);

      item.style.animation = "none";
      item.offsetHeight;
      item.style.animation = "";
    }

    function anDel(index: number) {
      index = index % emj.length;

      setTimeout(() => {
        animate(emj[index] as HTMLElement);
        requestAnimationFrame(() => anDel(index + 1));
      }, index * (tm / emj.length));
    }

    anDel(0);
  }, []);

  return (
    <span ref={ref} className={styles.container}>
      <span className={styles.highlight}>{children}</span>

      <span className={`${styles.emj} emj`}>
        <span>𖥔</span>
      </span>
      <span className={`${styles.emj} emj`}>
        <span>˖✧</span>
      </span>
      <span className={`${styles.emj} emj`}>
        <span>🌷͙֒</span>
      </span>
      <span className={`${styles.emj} emj`}>
        <span> ｡ﾟ☁︎｡</span>
      </span>
    </span>
  );
};
