import React from "react";
import { API_URL } from "../app/api";
import Link from "next/link";

export default async function BookList({book}) {
    const response = await fetch(`${API_URL}/list?name=${book}`);
    const list = await response.json();
    return (
        <>
            {list.results.list_name}
        </>
    )
}
