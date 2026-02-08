
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import { visualizer } from 'rollup-plugin-visualizer';

const shouldAnalyze = process.env.ANALYZE === 'true' || process.env.ANALYZE === '1';
const prerenderRoutes = [
  '/',
  '/auto-bewerten',
  '/auto-verkaufen',
  '/vorteile',
  '/ratgeber',
  '/autoankauf-frankfurt',
  '/autoankauf-wiesbaden',
  '/autoankauf-mainz',
  '/impressum',
  '/datenschutz',
];

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.join(process.cwd(), 'prerender.tsx'),
      additionalPrerenderRoutes: prerenderRoutes,
    }),
    ...(shouldAnalyze
      ? [
          visualizer({
            filename: 'bundle-stats.html',
            emitFile: true,
            template: 'treemap',
            gzipSize: true,
            brotliSize: true,
            open: false,
          }),
        ]
      : []),
  ],
  build: {
    outDir: 'dist',
  },
});
