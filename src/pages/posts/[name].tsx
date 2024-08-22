import { useRouter } from "next/router";
import { fetchPosts, type Post } from "@/utils/fetchPosts";
import Head from "next/head";
import { config } from "@/config";

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
        <title>
          {post.title + " | " +config.title}
        </title>
        <meta name="description" content={post.description} />
      </Head>
      <main className="bg-chalkboard flex min-h-screen flex-col items-center justify-center overflow-y-hidden">
        {post.content}
      </main>
    </>
  );
}
