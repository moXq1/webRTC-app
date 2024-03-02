import React from "react";

import styles from "./Star.module.css";
interface StarProps {
  classS?: string;
}

export const Star: React.FC<StarProps> = ({ classS = "" }) => {
  return (
    <svg
      role="img"
      className={classS}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 40"
      preserveAspectRatio="xMidYMin meet">
      <path
        fill="currentColor"
        d="M37.4485 22.2106c-7.3231 3.1644-12.6878 8.4671-15.8384 16.1644-.8515 2.1382-3.7467 2.1382-4.6834 0-3.2358-7.3552-8.345-12.7434-15.41269-15.9934-2.128816-1.0263-1.958511-3.8487.17031-4.7039C9.00747 14.9408 14.0315 9.80924 16.9267 2.71056c.8515-2.13816 3.8319-2.394739 4.6834-.34211 2.81 6.92764 8.0044 12.05925 15.6681 15.05265 2.214.8553 2.2991 3.7631.0852 4.7039l.0851.0856Z"></path>

      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="my-cool-gradient"
          className={styles.grad}>
          <stop offset="0%" stopColor="#ee58d2">
            <animate
              dur="10s"
              attributeName="stop-color"
              values="#ee58d2;#f1749c;#e81c90;#f1749c;#ee58d2;"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#ad2ae9;">
            <animate
              dur="10s"
              attributeName="stop-color"
              values="#ad2ae9;#ee95f4;#e81c90;#ee95f4;#ad2ae9;"
              repeatCount="indefinite"
            />
          </stop>
          {/* <stop offset="0%" stopColor="var(--color-stop-1)" />
          <stop offset="25%" stopColor="var(--color-stop-2)" />
          <stop offset="50%" stopColor="var(--color-stop-3)" />
          <stop offset="75%" stopColor="var(--color-stop-4)" />
          <stop offset="100%" stopColor="var(--color-stop-5)" /> */}
        </linearGradient>
      </defs>
    </svg>
  );
};
