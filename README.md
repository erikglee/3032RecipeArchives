# 3032 Recipe Archives

An Astro-powered recipe archive designed for GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Add a recipe

Recipes live in their primary section so the archive remains easy to browse in the file system:

```text
src/content/recipes/
  soups/
  dinner-entrees/
  desserts/
  fermented-foods/
```

Create a new Markdown file in the appropriate folder with front matter like:

```yaml
---
title: Recipe Title
description: Short summary.
date: 2026-10-10
meal: dinner
prepTime: 15 minutes
cookTime: 30 minutes
servings: 4
tags:
  - weeknight
ingredients:
  - 1 ingredient
---
```

Then write the instructions below the front matter.

Use tags for secondary groupings, such as `weeknight`, `make-ahead`, or `vegetarian`. A recipe can have many tags but should have one clear primary folder.

## Deploy to GitHub Pages

1. Create a GitHub repository named `3032RecipeArchives`.
2. Push this project to the `main` branch.
3. In the repository settings, set Pages source to GitHub Actions.
4. The included workflow builds and deploys the site after each push to `main`.

If you later use a custom domain, add it in GitHub Pages settings and set the `SITE_URL` environment variable in the workflow or repository variables.
