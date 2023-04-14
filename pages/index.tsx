import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { BuildTimeIntegration } from '@donofkarma/mf-test-build-time';

const Remote1Content = dynamic(() => import("remote1/Content"), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Micro frontend host app</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Micro frontend host app</h1>

        <BuildTimeIntegration />
        
        <h2>Module Federation (React remote)</h2>
        <React.Suspense fallback={<p>Loading....</p>}>
          <Remote1Content />
        </React.Suspense>
      </div>
    </>
  );
}
