"use client";
import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { useTheme } from "next-themes";
export const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={styles.header}>
      <Image
        src={theme === "dark" ? "/logo.png" : "/logo_black.png"}
        alt="logo"
        width={48}
        height={48}
      />
      <ThemeToggler />
    </header>
  );
};
