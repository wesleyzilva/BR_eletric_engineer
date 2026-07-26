import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind()],
  base: isProduction ? '/BR_eletric_engineer/' : '/',
  outDir: 'docs'
});
