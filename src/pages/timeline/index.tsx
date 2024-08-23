import Head from "next/head";
import { config } from "@/config";
import TimeLine, { type TimeLineContent } from "@/components/TimeLine";
import { ApplyChalkEffect } from "@/components/ChalkEffect";
import { fetchSortedTimeLineContents } from "@/utils/fetchSortedTimeLineContents";

interface TimeLinePageProps {
  contents: Array<TimeLineContent>;
}

export async function getStaticProps() {
  return {
    props: {
      contents: await fetchSortedTimeLineContents(),
    },
  };
}

export default function TimeLinePage({ contents }: TimeLinePageProps) {
  return (
    <>
      <Head>
        <title>{config.title + " | Timeline"}</title>
        <meta
          name="description"
          content={
            config.username +
            "'s blog site. You can find abundant programming experience sharing here"
          }
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-chalkboard flex min-h-screen flex-col items-center justify-center overflow-y-hidden">
          <div
            className={
              "flex flex-col place-content-evenly items-center justify-center pt-24"
            }
          >
            {/* Apply chalk effect filter to title again, intend to improve its visual experience. */}
            <ApplyChalkEffect>
              <h1 className="bold text-6xl font-bold italic text-gray-200">
                <ClockIcon /> Time Line
              </h1>
            </ApplyChalkEffect>
            <hr className="m-8 w-[45rem]" />
            <TimeLine contents={contents} />
          </div>
      </main>
    </>
  );
}

export const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    strokeWidth={1.5}
    stroke="currentColor"
    className="inline size-16 text-sky-300"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
