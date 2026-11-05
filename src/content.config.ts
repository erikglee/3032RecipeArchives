import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    meal: z.enum(['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'drink', 'bread', 'side']),
    cuisine: z.string().optional(),
    image: z.string().optional(),
    sourceName: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    familyRecipe: z.boolean().default(false),
    modifications: z.array(z.string()).default([]),
    developedWith: z.string().optional(),
    developmentUrl: z.string().url().optional(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.string(),
    tags: z.array(z.string()).default([]),
    ingredients: z.array(z.string()).default([]),
  }),
});

export const collections = { recipes };
