import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width={48} height={48} />
      <button>themes</button>
    </header>
  );
};
