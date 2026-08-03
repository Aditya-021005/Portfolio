// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// DEPLOYMENT
// ---------------------------------------------------------------------------
// Vercel / Netlify / custom domain  -> site: 'https://your-domain.com', base: '/'
// GitHub Pages (user site)          -> site: 'https://<user>.github.io',  base: '/'
// GitHub Pages (project repo)       -> site: 'https://<user>.github.io',  base: '/<repo>'
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://achyuthanraghavan.com',
  base: '/',
  integrations: [mdx(), sitemap()],
  vite: {
    // Cast: @tailwindcss/vite and Astro resolve slightly different Vite
    // versions, so their Plugin types don't structurally match. Runtime is fine.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
