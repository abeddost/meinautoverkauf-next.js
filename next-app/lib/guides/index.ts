import type { GuidePageContent } from '../guideContent';
import { oldtimerVerkaufenPrivatHaendlerAuktion } from './oldtimerVerkaufenPrivatHaendlerAuktion';
import { woAutoVerkaufenVergleich } from './woAutoVerkaufenVergleich';
import { autoVerkaufenTippsCheckliste } from './autoVerkaufenTippsCheckliste';

/** Ratgeber pages created from the GSC content-gap analysis (Nov 2026). */
export const CONTENT_GAP_GUIDES: GuidePageContent[] = [
  oldtimerVerkaufenPrivatHaendlerAuktion,
  woAutoVerkaufenVergleich,
  autoVerkaufenTippsCheckliste,
];
