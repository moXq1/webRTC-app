"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import { MarqueeScroll } from "../components/ui/MarqueeScroll";
import { Star } from "../components/ui/Star";
import { Highlight } from "../components/ui/Highlight";
import Link from "next/link";
import { Circle } from "../components/ui/Circle";
import useMouse from "@/hooks/useMouse";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMob, setMob] = useState(false);

  const { x, y, height, width } = useMouse();
  const size = isHovered ? 400 : 40;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: isMob ? ["-0.5 end", "end start"] : ["start end", "end center"],
  });

  const move = useTransform(scrollYProgress, [0, 1], [0, -850]);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      setMob(true);
    }
    let settings = localStorage.getItem("settings");
    if (!settings) {
      return;
    }

    settings = JSON.parse(settings);
  }, []);

  return (
    <main className={styles.main}>
      {!isMob && (
        <section className={styles.mask}>
          <motion.div
            style={{
              backgroundColor: isHovered ? "rgba(255, 0, 255, 0.05)" : "",
            }}
            animate={{
              WebkitMaskPosition: `clamp(0%,${x - size / 2}px,100%) clamp(0%,${
                y - size / 2
              }px,100%)`,

              WebkitMaskSize: `${size}px ${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            className={styles.cursor}></motion.div>
          <div className={styles.filt}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="svgNoise"
              className="u-svg-none">
              <defs>
                <filter
                  id="noiseEffect2"
                  filterUnits="objectBoundingBox"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                  <feOffset dx="-10" dy="-5" result="r"></feOffset>
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    result="g"></feColorMatrix>
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                  <feOffset dx="5" dy="5" result="b"></feOffset>
                  <feBlend in="r" in2="g" result="rg" mode="screen"></feBlend>
                  <feBlend
                    in="rg"
                    in2="b"
                    mode="screen"
                    result="blend"></feBlend>

                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.015"
                    numOctaves="2"
                    seed="3"
                    stitchTiles="stitch"
                    result="particle"></feTurbulence>
                  <feDisplacementMap
                    scale="110.1"
                    in="blend"
                    in2="particle"
                    xChannelSelector="R"
                    yChannelSelector="G"></feDisplacementMap>
                </filter>
              </defs>
            </svg>
          </div>
        </section>
      )}
      <section className={styles.landing}>
        <h1
          className={styles.headline}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <p>
            <span>TALLK</span>
            <span>FFUSE</span>
          </p>
        </h1>

        <h3 className={styles.bio}>
          <p>
            Fuse your conversations seamlessly{" "}
            <Highlight>with TalkFuse.</Highlight>
            Real-time communication made simple, fast, and reliable
          </p>
        </h3>

        <div className={styles.two}>
          <Link href="/settings" className={styles.btnSet}>
            Start
            <Arrow />
          </Link>

          <div className={styles.circle}>
            <Circle />
          </div>
        </div>
      </section>

      <MarqueeScroll text="State of the art Groundbreaking solutions Innovation Cutting edge technology Revolutionary communication Futuristic conferencing"></MarqueeScroll>
      <MarqueeScroll
        seconds="60s"
        direction="reverse"
        SpaceReplaceble={<Star />}
        typeBy="character"
        text="State of the art Groundbreaking solutions Innovation Cutting edge technology Revolutionary communication Futuristic conferencing"></MarqueeScroll>

      <motion.section className={styles.pricing} style={{ y: move }}>
        <h2>Plans & Pricing </h2>
        <div className={styles.plans}>
          <PlanElem
            price="Free"
            title="Basic"
            list={[
              "Basic features",
              "Limited usage",
              "No premium support",
              "Ads may be displayed",
            ]}
          />
          <PlanElem
            price="$0.00"
            title="Pro"
            type="prem"
            list={[
              "Advanced features",
              "Higher usage limits",
              "Priority support",
              "No ads",
            ]}
          />
          <PlanElem
            price="-Infinity"
            title="Enterprise"
            list={[
              "Customizable features",
              "Unlimited usage",
              "Dedicated account manager",
              "24/7 premium support",
              "SLA (Service Level Agreement)",
            ]}
          />
        </div>
      </motion.section>

      <footer ref={container} className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.contact}>
            <h3>Get in Toouch 🤙</h3>
            <form className={styles.form} action="">
              <input
                placeholder="email"
                className={styles.input}
                type="email"
                required
                name="Email"
                id=""
              />
              <input className={styles.submit} type="submit" value="contact" />
            </form>
          </div>

          <div className={styles.socials}>
            <Link href={"#"} className={styles.social}>
              <div>Twitter / X</div>
            </Link>
            <Link href={"#"} className={styles.social}>
              <div> Intagram</div>
            </Link>
            <Link href={"#"} className={styles.social}>
              <div>LinkedIn </div>
            </Link>
          </div>
        </div>
        {/* <div className={styles.spacer}></div> */}
      </footer>
    </main>
  );
}

function Arrow() {
  return (
    <>
      <svg
        className={styles.navArrowRect}
        width="60"
        height="24"
        fill="none"
        // style={{ right: "0px", width: "21%" }}
        xmlns="http://www.w3.org/2000/svg">
        <rect
          className=""
          y="5"
          width="99%"
          height="4"
          rx="0.5"
          fill="#D13D25"></rect>
      </svg>
      <svg
        className={styles.navArrowPath}
        width="60"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // style={{ height: "12px", top: "30%", right: "0px" }}
      >
        <path
          d="M37.8544 0.285239L36.4784 1.31334C36.0014 1.65603 35.873 2.27289 36.1298 2.76981L40.5515 11.5258C40.7166 11.8513 40.7166 12.2283 40.5515 12.5539L36.1298 21.2755C35.873 21.7896 36.0197 22.4064 36.5151 22.7491L37.8911 23.743C38.3682 24.0857 39.0103 24.0857 39.4873 23.743C42.0376 21.8753 50.4772 16.0494 58.9536 14.0275C59.5223 13.8904 59.926 13.4449 59.9443 12.8966L59.9993 11.4058C60.0177 10.669 59.6507 10.1892 59.1003 10.0179C50.5139 7.48191 42.0009 1.9816 39.4139 0.233834C38.9369 -0.0917297 38.2948 -0.0745948 37.8544 0.268104V0.285239Z"
          fill="#D13D25"></path>
      </svg>
    </>
  );
}

function PlanElem({
  title,
  list,
  type = "",
  price,
  sale,
}: {
  title: string;
  list: string[];
  type?: string;
  price: string;
  sale?: string;
}) {
  return (
    <div className={`${styles.plan} ${type ? styles.prem : ""}`}>
      <div className={styles.planContent}>
        <h4 className={styles.planTitle}>{title}</h4>
        <div className={styles.pin}>
          {sale ? (
            <span className={styles.badge}>{sale}</span>
          ) : (
            <span className={styles.line}></span>
          )}
        </div>
        <p className={styles.planPrice}>
          {price} <span>/ mo</span>{" "}
        </p>
        <div className={styles.list}>
          {list.map((item, i) => {
            return (
              <div className={styles.planItem} key={`${title}${i}`}>
                <span className={styles.checkmark}>
                  <Star classS={styles.svgStar} />
                </span>
                <p className={styles.text}>{item}</p>
              </div>
            );
          })}
        </div>
      </div>

      <button className={styles.btn}>Get Started</button>
    </div>
  );
}
