import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: {
        markup({ content }) {
          // Transformation ou vérification du contenu ici
          return { code: content };
        },
      },
      compilerOptions: {
        runes: true, // Forcer le mode runes
      },
    }),
  ],
});
