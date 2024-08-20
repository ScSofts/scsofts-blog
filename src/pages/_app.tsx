import { type AppType } from "next/app";

import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar";
import { ChalkEffectFilter } from "@/components/ChalkEffect";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={"font-default"}>
      <ChalkEffectFilter />
      <NavBar/>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
