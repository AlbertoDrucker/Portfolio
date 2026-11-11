// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Update to the custom domain once it is connected.
  site: 'https://portfolio-coral-six-5fkv8r63l6.vercel.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
