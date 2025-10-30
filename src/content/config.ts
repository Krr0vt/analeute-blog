import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.string(), // "2025-03-01"
    description: z.string().max(200),
    category: z.string().optional(), // ✅ nouveau champ
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
