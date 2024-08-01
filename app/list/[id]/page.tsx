import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import BookList from "../../../components/BookList";
import Loading from "../../../components/Loading";

export const metadata = {
    title: "List",
    description: '뉴욕 타임즈 베스트셀러 List',
}

export default function BookListPage({params:id}) {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <BookList book={id}/>
            </Suspense>
        </>
    );
}
