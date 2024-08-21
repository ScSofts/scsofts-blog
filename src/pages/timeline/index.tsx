import Head from "next/head";
import { config } from "@/config";
import TimeLine, { type TimeLineContent } from "@/components/TimeLine";
import { ApplyChalkEffect } from "@/components/ChalkEffect";

interface TimeLinePageProps {
  contents: Array<TimeLineContent>;
}

export function getStaticProps() {
  return {
    props: {
      contents: fakeContents(),
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

export function fakeContents(): Array<TimeLineContent> {
  const contents = [
    {
      date: "2021-01-01",
      title: "First Post",
      description: "This is the first post",
      tags: ["React", "JavaScript"],
      link: "/posts/first-post",
    },
    {
      date: "2021-01-02",
      title: "Second Post",
      description: "This is the second post",
      tags: ["Next.js", "React", "TypeScript"],
      link: "/posts/second-post",
    },
    {
      date: "2021-01-03",
      title: "Third Post",
      description:
        "This is the third post, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long",
      tags: ["Node.js", "TailwindCSS"],
      link: "/posts/third-post",
    },
    {
      date: "2021-01-04",
      title: "Fourth Post",
      description: "This is the fourth post",
      tags: ["Next.js", "Post"],
      link: "/posts/fourth-post",
    },
    {
      date: "2021-01-05",
      title: "Fifth Post",
      description: "This is the fifth post",
      tags: ["Fifth", "Post"],
      link: "/posts/fifth-post",
    },
    {
      date: "2021-01-06",
      title: "Sixth Post",
      description: "This is the sixth post",
      tags: ["Sixth", "Post"],
      link: "/posts/sixth-post",
    },
    {
      date: "2021-01-07",
      title: "Seventh Post",
      description: "This is the seventh post",
      tags: ["Seventh", "Post"],
      link: "/posts/seventh-post",
    },
    {
      date: "2021-01-08",
      title: "Eighth Post",
      description: "This is the eighth post",
      tags: ["Eighth", "Post"],
      link: "/posts/eighth-post",
    },
    {
      date: "2021-01-09",
      title: "Ninth Post",
      description: "This is the ninth post",
      tags: ["Ninth", "Post"],
      link: "/posts/ninth-post",
    },
    {
      date: "2022-01-10",
      title: "Tenth Post",
      description: "This is the tenth post",
      tags: ["Tenth", "Post"],
      link: "/posts/tenth-post",
    },
    {
      date: "2021-01-11",
      title: "Eleventh Post",
      description: "This is the eleventh post",
      tags: ["Eleventh", "Post"],
      link: "/posts/eleventh-post",
    },
    {
      date: "2021-01-12",
      title: "Twelfth Post",
      description: "This is the twelfth post",
      tags: ["Twelfth", "Post"],
      link: "/posts/twelfth-post",
    },
    {
      date: "2021-01-13",
      title: "Thirteenth Post",
      description: "This is the thirteenth post",
      tags: ["Thirteenth", "Post"],
      link: "/posts/thirteenth-post",
    },
  ];

  contents.sort((a, b) => (Date.parse(a.date) < Date.parse(b.date) ? 1 : -1));

  return contents;
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
