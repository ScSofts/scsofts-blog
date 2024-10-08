import Head from "next/head";
import { config } from "@/config";
import { ApplyChalkEffect } from "@/components/ChalkEffect";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta
          name="description"
          content="ScSofts's blog site. You can find abundant programming experience sharing here"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-chalkboard flex min-h-screen flex-col items-center justify-center">
        <ApplyChalkEffect>
          <h1 className="font-chalk select-none text-center text-7xl font-bold">
            <span className={"text-[#494656]"}>{"Welcome "}</span>
            <span className={"text-[#4F4557]"}>{"to "}</span>
            <span className={"text-[#6D5D6E]"}>{config.username + "'s "}</span>
            <span className={"text-[#F4EEE0]"}>{"blog"}</span>
          </h1>
        </ApplyChalkEffect>
      </main>
    </>
  );
}
