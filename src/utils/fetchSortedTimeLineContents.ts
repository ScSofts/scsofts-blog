import type { TimeLineContent } from "@/components/TimeLine";
import { fetchPosts } from "@/utils/fetchPosts";

export async function fetchSortedTimeLineContents(): Promise<
  TimeLineContent[]
> {
  const posts = await fetchPosts();
  return posts
    .map((post) => ({
      date: post.date,
      title: post.title,
      description: post.description,
      tags: post.tags,
      link: `/posts/${post.filename}`,
    }))
    .sort((a, b) => (Date.parse(a.date) < Date.parse(b.date) ? 1 : -1));
}