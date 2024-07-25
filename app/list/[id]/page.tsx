"use client";

import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import BookList from "../../../components/BookList";

export default function Booklist() {
    const {id} = useParams();
    return (
        <>
            <Suspense fallback={<div>Loading movie info</div>}>
                <BookList book={id}/>
            </Suspense>
        </>
    );
}
