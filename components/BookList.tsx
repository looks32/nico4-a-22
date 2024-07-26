import React from "react";
import { API_URL } from "../app/api";
import Link from "next/link";
import styles from "../styles/bookList.module.css";

export default async function BookList({book}) {
    const response = await fetch(`${API_URL}/list?name=${book}`);
    const list = await response.json();
    return (
        <>
            <div className={styles.bookList}>
                {list.results.list_name}
            </div>
        </>
    )
}