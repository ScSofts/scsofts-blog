import { readdir } from "node:fs/promises";
import { readFileSync } from "node:fs";
import * as path from "node:path";

export interface Post {
  date: string;
  title: string;
  description: string;
  tags: string[];
  content: string;
  filename: string
}

export async function fetchPosts(): Promise<Array<Post>> {
  const posts_path = path.join(process.cwd(), "data/posts");
  const files = await readdir(posts_path);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(posts_path, file))
    .map((file) => [ readFileSync(file, "utf-8"), path.basename(file) ] as [string, string])
    .map(([content, file]) => {
      const parts = content.split(/---([\s\S]*)/, 2);
      if (parts.length < 2) {
        return null;
      }
      const meta = parts[0]!;
      const body = parts[1]!;

      const meta_parts = meta
        .split("\n")
        .filter((meta) => meta.startsWith("!")) // Recognize only metadata starting with "!"
        .map((meta) => meta.split(/:(.+)/, 2)) // Parse metadata key and value
        .map((meta) => meta.map((meta) => meta.trim())) // Trim whitespaces
        .filter((meta) => meta.length === 2) // Filter out invalid metadata
        .map((meta) => [meta[0]!.slice(1), meta[1]!]) // Remove "!"
        .map((meta) => ({ [meta[0]!]: meta[1] as unknown })) // Convert to object
        // Convert tags to array
        .map((meta) => {
          if (meta.hasOwnProperty("tags")) {
            const tags = meta.tags as string;
            return {
              tags: tags.split(",").map((tag) => tag.trim()),
            };
          } else return meta;
        });

      const post = {
        date: "",
        title: "",
        description: "",
        tags: [],
        content: body,
        filename: file.replace(/\.md$/, "")
      } as Post;

      for (const obj of meta_parts) {
        if (obj.hasOwnProperty("date")) {
          post.date = obj.date as string;
        } else if (obj.hasOwnProperty("title")) {
          post.title = obj.title as string;
        } else if (obj.hasOwnProperty("description")) {
          post.description = obj.description as string;
        } else if (obj.hasOwnProperty("tags")) {
          post.tags = obj.tags as string[];
        }
      }

      return post;
    })
    .filter((post) => post !== null);
}
