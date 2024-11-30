"use client"

import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  const setLight = () => {
    setTheme("light");
  };

  const setDark = () => {
    setTheme("dark");
  };

  const setSystem = () => {
    setTheme("system");
  };

  return {
    theme,
    setTheme,
    setLight,
    setDark,
    setSystem,
  };
};
