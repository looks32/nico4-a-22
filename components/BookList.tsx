import React from "react";
import { API_URL } from "../app/api";
import Link from "next/link";
import styles from "../styles/bookList.module.css";

async function getBook(book: string) {
    const response = await fetch(`${API_URL}/list?name=${book}`);
    return response.json();
}

export default async function BookList({book}) {
    const list = await getBook(book.id);
    return (
        <>
            <div className={styles.bookList}>
                <h2>{list.results.list_name}</h2>
                <div className={styles.listArea}>
                    <ul>
                        {
                            list.results.books.map((b)=>
                                <li>
                                    <span className={styles.rank}>{b.rank}</span>
                                    <div className={styles.tit}>
                                        {b.title}
                                        <div className={styles.imgArea}>
                                            <img src={b.book_image} alt={b.title}/>
                                        </div>
                                    </div>
                                    <div className={styles.author}>{`- ${b.author}`}</div>
                                    <a href={b.amazon_product_url} title={b.title}target="_blank">[Buy Link]</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}