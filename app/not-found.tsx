import React from "react";
import styles from "../styles/notFound.module.css";

export const metadata = {
  title: "Not Found",
}


export default function notFound() {
  return (
    <div className={styles.not}>
      Not found X_X
      <p>please back to home</p>
      <a href="/">go to home</a>
    </div>
  );
}
