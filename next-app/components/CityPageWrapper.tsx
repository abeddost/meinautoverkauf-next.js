'use client';

import dynamic from 'next/dynamic';

interface Props {
  slug: string;
}

// Dynamic imports for all city pages with client-side rendering
const components = {
  AutoankaufFrankfurt: dynamic(() => import('@/page-components/AutoankaufFrankfurt')),
  AutoankaufWiesbaden: dynamic(() => import('@/page-components/AutoankaufWiesbaden')),
  AutoankaufMainz: dynamic(() => import('@/page-components/AutoankaufMainz')),
  AutoankaufRuesselsheim: dynamic(() => import('@/page-components/AutoankaufRuesselsheim')),
  AutoankaufDarmstadt: dynamic(() => import('@/page-components/AutoankaufDarmstadt')),
  AutoankaufKoblenz: dynamic(() => import('@/page-components/AutoankaufKoblenz')),
  AutoankaufOffenbach: dynamic(() => import('@/page-components/AutoankaufOffenbach')),
  AutoankaufKoeln: dynamic(() => import('@/page-components/AutoankaufKoeln')),
  AutoankaufHamburg: dynamic(() => import('@/page-components/AutoankaufHamburg')),
  AutoankaufMannheim: dynamic(() => import('@/page-components/AutoankaufMannheim')),
  AutoankaufHeidelberg: dynamic(() => import('@/page-components/AutoankaufHeidelberg')),
  AutoankaufWorms: dynamic(() => import('@/page-components/AutoankaufWorms')),
  AutoankaufKaiserslautern: dynamic(() => import('@/page-components/AutoankaufKaiserslautern')),
  AutoankaufLudwigshafen: dynamic(() => import('@/page-components/AutoankaufLudwigshafen')),
  AutoankaufHanau: dynamic(() => import('@/page-components/AutoankaufHanau')),
  AutoankaufGiessen: dynamic(() => import('@/page-components/AutoankaufGiessen')),
  AutoankaufAschaffenburg: dynamic(() => import('@/page-components/AutoankaufAschaffenburg')),
  AutoankaufNeuwied: dynamic(() => import('@/page-components/AutoankaufNeuwied')),
  AutoankaufWetzlar: dynamic(() => import('@/page-components/AutoankaufWetzlar')),
  AutoankaufSpeyer: dynamic(() => import('@/page-components/AutoankaufSpeyer')),
  AutoankaufNeustadtWeinstrasse: dynamic(() => import('@/page-components/AutoankaufNeustadtWeinstrasse')),
  AutoankaufBadHomburg: dynamic(() => import('@/page-components/AutoankaufBadHomburg')),
  AutoankaufOberursel: dynamic(() => import('@/page-components/AutoankaufOberursel')),
  AutoankaufBadKreuznach: dynamic(() => import('@/page-components/AutoankaufBadKreuznach')),
  AutoankaufDreieich: dynamic(() => import('@/page-components/AutoankaufDreieich')),
  AutoankaufBensheim: dynamic(() => import('@/page-components/AutoankaufBensheim')),
  AutoankaufMaintal: dynamic(() => import('@/page-components/AutoankaufMaintal')),
  AutoankaufHofheimAmTaunus: dynamic(() => import('@/page-components/AutoankaufHofheimAmTaunus')),
  AutoankaufWeinheim: dynamic(() => import('@/page-components/AutoankaufWeinheim')),
  AutoankaufKassel: dynamic(() => import('@/page-components/AutoankaufKassel')),
  AutoankaufStuttgart: dynamic(() => import('@/page-components/AutoankaufStuttgart')),
  AutoankaufBonn: dynamic(() => import('@/page-components/AutoankaufBonn')),
  AutoankaufKarlsruhe: dynamic(() => import('@/page-components/AutoankaufKarlsruhe')),
  AutoankaufFrankenthal: dynamic(() => import('@/page-components/AutoankaufFrankenthal')),
  AutoankaufRodgau: dynamic(() => import('@/page-components/AutoankaufRodgau')),
} as const;

type ComponentName = keyof typeof components;

export default function CityPageWrapper({ slug }: Props) {
  const componentName = slug as ComponentName;
  const CityPage = components[componentName];
  if (!CityPage) return null;
  return <CityPage onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />;
}
