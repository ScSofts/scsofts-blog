import { type AppType } from "next/app";

import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar";
import { chalk_filter, ChalkEffectFilter } from "@/components/ChalkEffect";
import GoTop from "@/components/GoTop";
import { useRef } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const scrollbar = " scrollbar scrollbar-thin [scroll-behavior:smooth] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-blue-600 scrollbar-track-gray-800 ";
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ChalkEffectFilter />
      <NavBar />
      <GoTop xref={viewRef}/>
      <div ref={viewRef} className={chalk_filter + "font-default overflow-y-auto h-[100vh]" + scrollbar}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
