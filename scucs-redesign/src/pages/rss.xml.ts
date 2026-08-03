import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("news");
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  return rss({
    title: "SCUCS News",
    description:
      "Announcements and updates from Senior Citizens United Community Services.",
    site: context.site ?? "https://scucs.org",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.publishDate,
      link: `${base}news/${post.id}/`,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
