// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://viditostwal.github.io',
  // Project repo (not username.github.io) — assets and URLs need this prefix on GitHub Pages
  base: '/Portfolio-Website/',
  vite: {
    plugins: [tailwindcss()]
  }
});