"use client";

import Link from "next/link";
import React from "react";
import styles from "../styles/header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <ul className={styles.header}>
        <li>
            <Link href="/">Home {path === "/" ? " *" : ""}</Link>
        </li>
        <li>
          <h1>@ Library @</h1>
        </li>
        <li>
            <Link href="/about">About {path === "/about" ? " *" : ""}</Link>
        </li>
    </ul>
  );
}
