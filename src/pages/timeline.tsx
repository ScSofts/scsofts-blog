import Head from "next/head";
import { config } from "@/config";
import TimeLine, { TimeLineContent } from "@/components/TimeLine";

export default function TimeLinePage() {
  return (
    <>
      <Head>
        <title>{config.title + " | Timeline"}</title>
        <meta
          name="description"
          content="ScSofts's blog site. You can find abundant programming experience sharing here"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-chalkboard flex min-h-screen overflow-y-hidden flex-col items-center justify-center">
        <div className={"flex flex-col justify-center items-center place-content-evenly pt-24"}>
          <h1 className="text-6xl text-gray-200 font-bold bold italic "> <ClockIcon/> Time Line</h1>
          <hr className="w-[45rem] m-8"/>
          <TimeLine contents={fakeContents()}/>
        </div>
      </main>
    </>
  );
}


function fakeContents() : Array<TimeLineContent>{
  return [
    {
      date: "2021-01-01",
      title: "First Post",
      description: "This is the first post",
      tags: ["First", "Post"],
      link: "/posts/first-post"
    },
    {
      date: "2021-01-02",
      title: "Second Post",
      description: "This is the second post",
      tags: ["Second", "Post"],
      link: "/posts/second-post"
    },
    {
      date: "2021-01-03",
      title: "Third Post",
      description: "This is the third post, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long",
      tags: ["Third", "Post"],
      link: "/posts/third-post"
    },
    {
      date: "2021-01-04",
      title: "Fourth Post",
      description: "This is the fourth post",
      tags: ["Fourth", "Post"],
      link: "/posts/fourth-post"
    },
    {
      date: "2021-01-05",
      title: "Fifth Post",
      description: "This is the fifth post",
      tags: ["Fifth", "Post"],
      link: "/posts/fifth-post"
    },
    {
      date: "2021-01-06",
      title: "Sixth Post",
      description: "This is the sixth post",
      tags: ["Sixth", "Post"],
      link: "/posts/sixth-post"
    },
    {
      date: "2021-01-07",
      title: "Seventh Post",
      description: "This is the seventh post",
      tags: ["Seventh", "Post"],
      link: "/posts/seventh-post"
    },
    {
      date: "2021-01-08",
      title: "Eighth Post",
      description: "This is the eighth post",
      tags: ["Eighth", "Post"],
      link: "/posts/eighth-post"
    },
    {
      date: "2021-01-09",
      title: "Ninth Post",
      description: "This is the ninth post",
      tags: ["Ninth", "Post"],
      link: "/posts/ninth-post"
    },
    {
      date: "2021-01-10",
      title: "Tenth Post",
      description: "This is the tenth post",
      tags: ["Tenth", "Post"],
      link: "/posts/tenth-post"
    },
    {
      date: "2021-01-11",
      title: "Eleventh Post",
      description: "This is the eleventh post",
      tags: ["Eleventh", "Post"],
      link: "/posts/eleventh-post"
    },
    {
      date: "2021-01-12",
      title: "Twelfth Post",
      description: "This is the twelfth post",
      tags: ["Twelfth", "Post"],
      link: "/posts/twelfth-post"
    },
    {
      date: "2021-01-13",
      title: "Thirteenth Post",
      description: "This is the thirteenth post",
      tags: ["Thirteenth", "Post"],
      link: "/posts/thirteenth-post"
    },
  ]
}


const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5}
                             stroke="currentColor" className="inline size-16 text-sky-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
;