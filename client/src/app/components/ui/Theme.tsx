"use client";

import { useThemeContext } from "@/store";
import { useEffect } from "react";

interface ThemeProps {
  children: React.ReactNode;
}
type Theme = "light" | "dark";
export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <div className="theme" data-theme={theme}>
      {children}
    </div>
  );
};
