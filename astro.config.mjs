import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  })
});