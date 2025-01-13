import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
  compilerOptions: {
    dev: true,
  },
  runtimeOptions: {
    runes: true,
  },
  preprocess: vitePreprocess(),
};

export default config;

