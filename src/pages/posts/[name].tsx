import { useRouter } from "next/router";
import { fetchPosts, type Post } from "@/utils/fetchPosts";
import Head from "next/head";
import { config } from "@/config";
import MarkdownRender from "@/components/MarkdownRender";
import { chalk_filter } from "@/components/ChalkEffect";
import Link from "next/link";

export async function getStaticPaths() {
  const posts = await fetchPosts();
  const paths = posts
    .map((post) => post.filename)
    .map((filename) => ({ params: { name: filename } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const posts = await fetchPosts();

  return {
    props: { posts },
  };
}

interface PostPageProps {
  posts: Post[];
}

export default function PostPage({ posts }: PostPageProps) {
  const router = useRouter();
  if (!router.query.hasOwnProperty("name")) {
    return <></>;
  }

  const name = router.query.name as string;
  const post = posts.find((post) => post.filename === name)!;

  return (
    <>
      <Head>
        <title>{post.title + " | " + config.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <main className="bg-chalkboard flex min-h-screen flex-col items-center justify-center overflow-y-hidden">
        <div
          className={
            "mt-10 md:mt-16 mb-5 flex min-h-[50rem] w-[24rem] md:w-[45rem] flex-col rounded-2xl p-3 text-sm text-white lg:min-h-[52rem] lg:w-[64rem] xl:w-[68rem] lg:p-5 lg:text-2xl"
          }
        >
          <div className={"text-xl text-gray-400 " + chalk_filter}> Date: {post.date} </div>
          <div className={"text-xl text-gray-400 " + chalk_filter}> Key Words: {post.tags.map(
            (tag) => <Link href={"/timeline/" + tag} key={tag} className="text-blue-400 hover:underline">{tag} </Link>
          )} </div>
          <MarkdownRender content={post.content} />
        </div>
      </main>
    </>
  );
}
