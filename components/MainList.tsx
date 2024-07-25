import React from "react";
import { API_URL } from "../app/api";
import Link from "next/link";

export default async function MainList() {
    const response = await fetch(`${API_URL}/lists`);
    const list = await response.json();
    return (
        <ul>
            {list.results.map((l,i)=>
                <li key={i}>
                    <Link href={`/list/${l.list_name_encoded}`} >{l.display_name}</Link>
                </li>
            )}
        </ul>
    )
}
