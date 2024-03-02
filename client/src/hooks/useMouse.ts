import { useEffect, useState } from "react";

const useMouse = () => {
  const [mouse, setMouse] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const update = (e: MouseEvent) => {
    setMouse((prev) => {
      return { ...prev, x: e.clientX, y: e.clientY };
    });
  };

  useEffect(() => {
    setMouse((prev) => {
      return { ...prev, width: window.innerWidth, height: window.innerHeight };
    });
    document.addEventListener("mousemove", update);

    return () => document.removeEventListener("mousemove", update);
  }, []);

  return mouse;
};

export default useMouse;
