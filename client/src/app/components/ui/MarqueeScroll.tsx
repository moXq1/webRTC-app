"use client";

import { useEffect, useRef } from "react";
import styles from "./Marquee.module.css";

interface MarqueeScrollProps {
  text: string;
  typeBy?: "character" | "word";
  SpaceReplaceble?: any;
  direction?: PlaybackDirection;
  seconds?: string;
}

export const MarqueeScroll: React.FC<MarqueeScrollProps> = ({
  text,
  typeBy = "word",
  SpaceReplaceble,
  direction = "normal",
  seconds = "30s",
}) => {
  const scrollerRef = useRef<null | HTMLDivElement>(null);
  const innerRef = useRef<null | HTMLDivElement>(null);

  let arr: string[] = [];

  if (typeBy === "word") {
    arr = text.split(" ");
  }

  if (typeBy === "character") {
    arr = text.split("");
    arr = arr.map((el) => {
      if (el === " ") {
        return SpaceReplaceble;
      }
      return el;
    });
  }

  useEffect(() => {
    if (!scrollerRef.current || !innerRef.current) {
      return;
    }

    const innerContent = [...innerRef.current.querySelectorAll("div")];

    function anim() {
      if (scrollerRef.current?.getAttribute("data-animated")) {
        return;
      }
      scrollerRef.current?.setAttribute("data-animated", "true");

      innerContent.forEach((item) => {
        const dup = item.cloneNode(true);
        //@ts-ignore
        dup.setAttribute("aria-hidden", true);
        //@ts-ignore
        innerRef.current!.insertAdjacentElement("beforeend", dup);
      });
    }

    anim();

    return () => {};
  }, []);

  return (
    <section className={styles.marqueeScroll}>
      <div
        ref={scrollerRef}
        className={styles.scroller}
        style={
          {
            "--direction": direction,
            "--speed": seconds,
          } as React.CSSProperties
        }>
        <div ref={innerRef} className={styles.inner}>
          {arr.map((item, i) => {
            return (
              <div
                className={`${typeBy === "character" ? styles.char : ""}`}
                key={`${item}-${i}`}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
