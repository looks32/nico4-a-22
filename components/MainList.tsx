import React from "react";
import { API_URL } from "../app/api";
import Link from "next/link";
import styles from "../styles/mainList.module.css";

export default async function MainList() {
    const response = await fetch(`${API_URL}/lists`);
    const list = await response.json();
    return (
        <div className={styles.mainList}>
            <h2>The New York Times Best Seller Explorer</h2>
            <ul>
                {list.results.map((l,i)=>
                    <li key={i}>
                        <Link href={`/list/${l.list_name_encoded}`}>
                            <span>{l.display_name}</span>{` / ${l.updated}`}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
