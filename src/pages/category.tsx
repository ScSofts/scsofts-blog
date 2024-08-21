import Head from "next/head";
import { config } from "@/config";
import CategoryTagCloud from "@/components/CategoryTagCloud";
import { type Tag } from "react-tagcloud";

export function getStaticProps() {
  const tags: Array<Tag> = [
    { value: "React", count: 10 },
    { value: "TypeScript", count: 7 },
    { value: "JavaScript", count: 5 },
    { value: "TailwindCSS", count: 3 },
    { value: "Next.js", count: 2 },
    { value: "Node.js", count: 1 },
  ];

  return {
    props: {
      tags,
    },
  };
}

interface CategoryPageProps {
  tags: Array<Tag>;
}

export default function CategoryPage({ tags }: CategoryPageProps) {
  return (
    <>
      <Head>
        <title>{config.title + " | Category"}</title>
        <meta
          name="description"
          content={
            config.username +
            "'s blog site. Here are the categories of the blog posts"
          }
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-chalkboard flex min-h-screen flex-col items-center justify-center overflow-y-hidden min-w-full">
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-fuchsia-300">
          <TagIcon />
          Categories
        </h1>
        <hr className="m-8 w-[45rem]" />
        <CategoryTagCloud tags={tags} />
      </main>
    </>
  );
}

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    strokeWidth={2.5}
    stroke="currentColor"
    className="mr-4 inline size-12 lg:size-16 text-cyan-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6Z"
    />
  </svg>
);