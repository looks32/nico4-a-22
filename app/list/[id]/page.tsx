// "use client";

import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import BookList from "../../../components/BookList";
import Loading from "../../../components/Loading";

export default function BookListPage({params:id}) {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <BookList book={id}/>
            </Suspense>
        </>
    );
}
