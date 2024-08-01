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
