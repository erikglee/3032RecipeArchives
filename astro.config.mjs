import { defineConfig } from 'astro/config';

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repo === `${owner}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? (isGitHubPages ? `https://${owner}.github.io` : 'http://localhost:4321'),
  base: isGitHubPages && !isUserSite ? `/${repo}` : '/',
});
