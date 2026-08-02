// @ts-check
import { defineConfig } from 'astro/config';
import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';

export default defineConfig({
  site: 'https://vidit-ostwal.github.io',
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssGlobalData({
            files: ['./src/lib/breakpoints.css'],
          }),
          postcssCustomMedia(),
        ],
      },
    },
  },
});
