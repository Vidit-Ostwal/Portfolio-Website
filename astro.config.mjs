// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vidit-ostwal.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
