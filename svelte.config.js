// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: {
      configFilePath: './postcss.config.cjs', // Explicitly specify the config file path
    },
  }),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true,
    }),
    prerender: {
      entries: ['*'],
    },
  },
};

export default config;
