import React, { Suspense } from "react";
import MainList from "../../components/MainList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading movie info</div>}>
        <MainList/>
      </Suspense>
    </div>
  );
}

// loading componets
// error components
// interface 작성
