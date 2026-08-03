// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// GitHub Actions sets GITHUB_PAGES=true for the preview deploy.
// Local/dev and eventual scucs.org production keep the root site URL.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://xample83.github.io' : 'https://scucs.org',
  base: isGitHubPages ? '/scucs-website/' : '/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
