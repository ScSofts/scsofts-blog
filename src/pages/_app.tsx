import { type AppType } from "next/app";

import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar";
import { chalk_filter, ChalkEffectFilter } from "@/components/ChalkEffect";
import GoTop from "@/components/GoTop";
import React, { useRef } from "react";
import Head from "next/head";
import * as ReactDOM from "react-dom/client";

const MyApp: AppType = ({ Component, pageProps }) => {
  const scrollbar = " scrollbar scrollbar-thin [scroll-behavior:smooth] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-blue-600 scrollbar-track-gray-800 ";
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChalkEffectFilter />
      <NavBar />
      <GoTop xref={viewRef} />
      <div
        ref={viewRef}
        className={
          "font-default h-[100vh] overflow-y-auto" + scrollbar
        }
      >
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;


if( typeof window !== "undefined" ) {
  // export React and ReactDOM to runtime
  window.react = React;
  window.reactDOM = ReactDOM;
}

