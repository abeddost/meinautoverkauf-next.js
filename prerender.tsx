import React from 'react';
import { renderToReadableStream } from 'react-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { AppContent, preloadRouteModules } from './App';

type HeadEntry = {
  type: string;
  props: Record<string, unknown>;
};

const collectHeadEntries = (helmet: any): Set<HeadEntry> => {
  const groups = [
    helmet?.meta?.toComponent?.(),
    helmet?.link?.toComponent?.(),
    helmet?.base?.toComponent?.(),
  ];

  const entries = groups
    .flatMap((items) => (Array.isArray(items) ? items : []))
    .map((element: any) => {
      const rawProps = (element?.props ?? {}) as Record<string, unknown>;
      const safeProps: Record<string, unknown> = {};

      for (const [key, value] of Object.entries(rawProps)) {
        if (key === 'children' || value === undefined || value === null || typeof value === 'boolean') {
          continue;
        }

        if (Array.isArray(value)) {
          safeProps[key] = value.join(' ');
        } else {
          safeProps[key] = String(value);
        }
      }

      return {
        type: typeof element.type === 'string' ? element.type : 'meta',
        props: safeProps,
      };
    });

  return new Set(entries);
};

const extractTitle = (helmet: any): string | undefined => {
  const titleComponent = helmet?.title?.toComponent?.()?.[0] as { props?: { children?: unknown } } | undefined;
  const children = titleComponent?.props?.children;

  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.join('');
  }

  return undefined;
};

const renderAppToHtml = (app: React.ReactElement): Promise<string> => {
  return Promise.race([
    (async () => {
      const stream = await renderToReadableStream(app);
      await stream.allReady;
      return await new Response(stream).text();
    })(),
    new Promise<string>((_, reject) => {
      setTimeout(() => reject(new Error('SSR render timed out.')), 15000);
    }),
  ]);
};

export async function prerender(data: { url: string }) {
  await preloadRouteModules();

  const helmetContext: { helmet?: HelmetServerState } = {};
  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );
  const html = await renderAppToHtml(app);

  const helmet = helmetContext.helmet;

  return {
    html,
    head: {
      lang: 'de',
      title: extractTitle(helmet),
      elements: collectHeadEntries(helmet),
    },
  };
}
