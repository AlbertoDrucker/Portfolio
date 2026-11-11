// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Update to the custom domain once it is connected.
  site: 'https://adrucker.vercel.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
