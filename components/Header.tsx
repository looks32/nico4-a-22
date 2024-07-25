import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
    </ul>
  );
}
