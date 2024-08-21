import Head from "next/head";
import { config } from "@/config";
import TimeLine, { type TimeLineContent } from "@/components/TimeLine";
import { ApplyChalkEffect } from "@/components/ChalkEffect";
import { useRouter } from "next/router";
import { ClockIcon, fakeContents } from "@/pages/timeline/index";

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

export function getStaticPaths() {
  const tags = new Set<string>();
  fakeContents()
    .map((content) => content.tags)
    .every((item_tags) => item_tags.every((t) => tags.add(t)));

  return {
    paths: Array
      .from(tags)
      .map((tag) => ({ params: { tag } })),
    fallback: false,
  };
}

export default function TimeLinePage({ contents }: TimeLinePageProps) {
  const router = useRouter();
  if(router.query.hasOwnProperty("tag")){
    const tag = router.query.tag as string;
    console.log(`Tag ${tag} is clicked`);
    contents = contents.filter((content) => content.tags.includes(tag));
  }

  return contents ? (
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
  ) : <></>;
}
