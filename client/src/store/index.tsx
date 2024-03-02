"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("something wrong with context");
  }

  return context;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let th = localStorage.getItem("theme");
    if (th) {
      setTheme(th as Theme);
    }
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
