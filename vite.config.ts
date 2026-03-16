
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import { visualizer } from 'rollup-plugin-visualizer';
import evaluateHandler from './api/evaluate';

const prerenderRoutes = [
  '/',
  '/auto-bewerten',
  '/auto-verkaufen',
  '/vorteile',
  '/ratgeber',
  '/autoankauf-frankfurt',
  '/autoankauf-wiesbaden',
  '/autoankauf-mainz',
  '/autoankauf-ruesselsheim',
  '/autoankauf-darmstadt',
  '/autoankauf-koblenz',
  '/autoankauf-offenbach',
  '/autoankauf-koeln',
  '/autoankauf-hamburg',
  '/autoankauf-mannheim',
  '/autoankauf-heidelberg',
  '/autoankauf-worms',
  '/autoankauf-kaiserslautern',
  '/autoankauf-ludwigshafen',
  '/autoankauf-hanau',
  '/ratgeber/autoankauf-trotz-finanzierung',
  '/ratgeber/auto-mit-motorschaden-verkaufen',
  '/ratgeber/autoankauf-ohne-tuev',
  '/ratgeber/unfallwagen-verkaufen',
  '/ratgeber/unfallwagen-ankauf',
  '/ratgeber/unterlagen-autoverkauf-checkliste',
  '/ratgeber/auto-online-verkaufen-sofort-auszahlung',
  '/ratgeber/autoankauf-mit-motorschaden',
  '/ratgeber/online-autoankauf-ablauf-7-schritte',
  '/ratgeber/autoexport-ankauf',
  '/ratgeber/autoankauf-firmenwagen-gewerbe',
  '/ratgeber/autoverkauf-an-exporthaendler',
  '/ratgeber/kilometerstand-scheckheft-vorbesitzer-preis',
  '/ratgeber/rechtssicherer-kaufvertrag-auto',
  '/ratgeber/autoverkauf-betrug-kleinanzeigen-erkennen',
  '/ratgeber/auto-online-inserieren-tipps-bilder',
  '/ratgeber/autoabmeldung-nach-verkauf',
  '/impressum',
  '/datenschutz',
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);
  const shouldAnalyze = process.env.ANALYZE === 'true' || process.env.ANALYZE === '1';

  return {
    plugins: [
      react(),
      {
        name: 'local-evaluate-api',
        apply: 'serve',
        configureServer(server) {
          server.middlewares.use('/api/evaluate', async (req, res, next) => {
            try {
              if (!req.method) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing method' }));
                return;
              }

              const chunks: Buffer[] = [];
              for await (const chunk of req) {
                chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
              }
              const bodyBuffer = Buffer.concat(chunks);

              const headers = new Headers();
              for (const [key, value] of Object.entries(req.headers)) {
                if (Array.isArray(value)) {
                  headers.set(key, value.join(', '));
                } else if (typeof value === 'string') {
                  headers.set(key, value);
                }
              }

              const request = new Request(`http://localhost${req.url ?? '/api/evaluate'}`, {
                method: req.method,
                headers,
                body: req.method === 'GET' || req.method === 'HEAD' || bodyBuffer.length === 0 ? undefined : bodyBuffer,
              });

              const response = await evaluateHandler(request);
              res.statusCode = response.status;
              response.headers.forEach((value, key) => {
                res.setHeader(key, value);
              });
              const responseBuffer = Buffer.from(await response.arrayBuffer());
              res.end(responseBuffer);
            } catch (error) {
              next(error);
            }
          });
        },
      },
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
      modulePreload: false,
    },
  };
});
