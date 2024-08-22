import { type Post } from "@/utils/fetchPosts";

export async function fetchTags(posts: Post[]) : Promise<string[]> {

  const tags = new Set<string>();
    posts
      .map((post) => post.tags)
      .every((item_tags) => item_tags.every((t) => tags.add(t)));

  return Array.from(tags);
}

