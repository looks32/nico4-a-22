import React, { Suspense } from "react";
import MainList from "../../components/MainList";
import Loading from "../../components/Loading";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <MainList/>
      </Suspense>
    </div>
  );
}

// reset css
// loading componets
// error components
// interface 작성
// https://books-api.nomadcoders.workers.dev/lists
// https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction

