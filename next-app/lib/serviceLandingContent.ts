import type { BrandLandingContent } from './brandSeoContent';
import { altesAuto } from './serviceLandings/altesAuto';
import { youngtimer } from './serviceLandings/youngtimer';
import { inZahlungGeben } from './serviceLandings/inZahlungGeben';
import { jahreswagenNeuwagen } from './serviceLandings/jahreswagenNeuwagen';
import { transporterNutzfahrzeug } from './serviceLandings/transporterNutzfahrzeug';
import { defektesAuto } from './serviceLandings/defektesAuto';

/**
 * Service landing pages (vehicle type or situation, e.g. Youngtimer, altes Auto).
 * Rendered with the same layout as /oldtimer-verkaufen and listed on /marken.
 */
export interface ServiceLandingContent {
  slug: string;
  /** Breadcrumb name */
  displayName: string;
  /** Link label on the /marken hub */
  hubLabel: string;
  landing: BrandLandingContent;
}

export const SERVICE_LANDINGS: ServiceLandingContent[] = [
  youngtimer,
  altesAuto,
  defektesAuto,
  inZahlungGeben,
  jahreswagenNeuwagen,
  transporterNutzfahrzeug,
];

export const SERVICE_LANDING_BY_PATH: Record<string, ServiceLandingContent> = Object.fromEntries(
  SERVICE_LANDINGS.map((item) => [item.landing.canonicalPath, item]),
);
