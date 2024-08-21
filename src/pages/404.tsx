import Head from "next/head";
import Link from "next/link";

function goBackOrHome() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/';
  }
}

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>{"404 Page Not Found"}</title>
        <meta
          name="description"
          content="Page not found. Please check the URL and try again"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-chalkboard flex min-h-screen flex-col items-center justify-center">

        <span>
          <h1 className="select-none text-7xl text-[wheat] font-bold">
            <span className={"text-red-400"}>404</span>
            {" Page Not Found"}
          </h1>
        </span>

        <span className={'mt-12'}>
          <Link href={'#'} onClick={goBackOrHome} className={"text-blue-600 underline underline-offset-8 text-4xl hover:[filter:grayscale(60%)]"}>Go Back</Link>
        </span>
      </main>
    </>
  );
}
