import Link from "next/link";
import React from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <ul className={styles.header}>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
    </ul>
  );
}
