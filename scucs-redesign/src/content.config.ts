import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    summary: z.string(),
    category: z.string().default("Announcement"),
  }),
});

export const collections = { news };
