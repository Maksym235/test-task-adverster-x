"use client";
import React from "react";
import styles from "./ThemeToggler.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = function () {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button className={styles.btn} onClick={handleChangeTheme}>
      <Image
        src={theme === "light" ? "/moon.svg" : "/sun.svg"}
        alt="theme"
        width={32}
        height={32}
      />
    </button>
  );
};
