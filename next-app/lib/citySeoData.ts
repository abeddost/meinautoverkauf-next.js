/**
 * City SEO data — single source of truth for all autoankauf city pages.
 * Consumed by app/autoankauf/[slug]/page.tsx via generateStaticParams + generateMetadata.
 */

export interface CitySeoData {
  /** URL slug after /autoankauf- e.g. "frankfurt" */
  slug: string;
  /** Canonical path e.g. "/autoankauf-frankfurt" */
  path: string;
  /** City display name for schema.org */
  cityName: string;
  /** German state */
  state: string;
  /** <title> tag */
  title: string;
  /** <meta description> */
  description: string;
  /** Hero headline (h2) */
  heroHeadline: string;
  /** Hero subheadline */
  heroSubheadline: string;
  /** Schema description for buildCitySchemas */
  schemaDescription: string;
  /** Import key matching pages/Autoankauf*.tsx filename stem */
  pageComponentName: string;
  /** FAQ export name from lib/faqContent.ts */
  faqKey: string;
}

export const CITY_SEO_DATA: CitySeoData[] = [
  {
    slug: 'frankfurt',
    path: '/autoankauf-frankfurt',
    cityName: 'Frankfurt am Main',
    state: 'Hessen',
    title: 'Autoankauf Frankfurt | Online bewerten, fair verkaufen',
    description:
      'Verkaufen Sie Ihr Auto in Frankfurt schnell und unkompliziert. Nach der Online-Bewertung erhalten Sie ein Angebot sowie auf Wunsch Abholung und Auszahlung.',
    heroHeadline: 'Autoankauf Frankfurt – Ihr lokaler Partner',
    heroSubheadline: 'Faire Preise, schnelle Abwicklung in Frankfurt am Main',
    schemaDescription: 'Autoankauf in Frankfurt am Main mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufFrankfurt',
    faqKey: 'FRANKFURT_FAQS',
  },
  {
    slug: 'wiesbaden',
    path: '/autoankauf-wiesbaden',
    cityName: 'Wiesbaden',
    state: 'Hessen',
    title: 'Autoankauf Wiesbaden | Online bewerten, fair verkaufen',
    description:
      'Verkaufen Sie Ihr Auto in Wiesbaden mit klarem Ablauf: online bewerten, Angebot erhalten und Fahrzeug auf Wunsch abholen lassen. Transparent und ohne Inserat.',
    heroHeadline: 'Autoankauf Wiesbaden – Seriös & transparent',
    heroSubheadline: 'Auto verkaufen in der Landeshauptstadt Hessen',
    schemaDescription: 'Autoankauf in Wiesbaden mit transparenter Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufWiesbaden',
    faqKey: 'WIESBADEN_FAQS',
  },
  {
    slug: 'mainz',
    path: '/autoankauf-mainz',
    cityName: 'Mainz',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Mainz | Online bewerten, fair verkaufen',
    description:
      'Verkaufen Sie Ihr Auto in Mainz schnell und nachvollziehbar. Nach der Online-Bewertung erhalten Sie ein Angebot sowie auf Wunsch Abholung und Auszahlung.',
    heroHeadline: 'Autoankauf Mainz – Zuverlässiger Service',
    heroSubheadline: 'Ihr Auto-Partner in der Gutenberg-Stadt',
    schemaDescription: 'Autoankauf in Mainz mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufMainz',
    faqKey: 'MAINZ_FAQS',
  },
  {
    slug: 'ruesselsheim',
    path: '/autoankauf-ruesselsheim',
    cityName: 'Rüsselsheim am Main',
    state: 'Hessen',
    title: 'Autoankauf Rüsselsheim | Sofort Geld, kostenlose Abholung',
    description:
      'Auto verkaufen in Rüsselsheim: Online bewerten, faire Preisermittlung, kostenlose Abholung und Auszahlung noch am selben Tag.',
    heroHeadline: 'Autoankauf Rüsselsheim – Sofort Geld für Ihr Fahrzeug',
    heroSubheadline: 'Kostenlose Abholung im Kreis Groß-Gerau & direkt am Flughafen',
    schemaDescription: 'Autoankauf in Rüsselsheim mit fairer Bewertung und kostenloser Abholung.',
    pageComponentName: 'AutoankaufRuesselsheim',
    faqKey: 'RUESSELSHEIM_FAQS',
  },
  {
    slug: 'darmstadt',
    path: '/autoankauf-darmstadt',
    cityName: 'Darmstadt',
    state: 'Hessen',
    title: 'Autoankauf Darmstadt | Fairer Preis & Express-Auszahlung',
    description:
      'Auto verkaufen in Darmstadt: Schnelle Online-Bewertung, transparentes Angebot und Auszahlung am Tag der Übergabe – ohne Inserat.',
    heroHeadline: 'Autoankauf Darmstadt – Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Ihr Autoankauf-Partner in der Wissenschaftsstadt Darmstadt',
    schemaDescription: 'Autoankauf in Darmstadt mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufDarmstadt',
    faqKey: 'DARMSTADT_FAQS',
  },
  {
    slug: 'koblenz',
    path: '/autoankauf-koblenz',
    cityName: 'Koblenz',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Koblenz | Sofort Geld & kostenlose Abholung',
    description:
      'Auto verkaufen in Koblenz: online bewerten, faires Angebot erhalten, kostenlos abholen lassen und Auszahlung am Übergabetag sichern.',
    heroHeadline: 'Autoankauf Koblenz – Sofort Geld für Ihr Fahrzeug',
    heroSubheadline: 'Kostenlose Abholung in Koblenz & im Rhein-Mosel-Umland',
    schemaDescription: 'Autoankauf in Koblenz mit fairer Bewertung und kostenloser Abholung.',
    pageComponentName: 'AutoankaufKoblenz',
    faqKey: 'KOBLENZ_FAQS',
  },
  {
    slug: 'offenbach',
    path: '/autoankauf-offenbach',
    cityName: 'Offenbach am Main',
    state: 'Hessen',
    title: 'Autoankauf Offenbach | Express-Auszahlung ohne Inserat',
    description:
      'Auto verkaufen in Offenbach: schnelle Online-Bewertung, transparentes Angebot, kostenlose Abholung und Auszahlung am selben Tag.',
    heroHeadline: 'Autoankauf Offenbach – Fairer Preis, schnelle Auszahlung',
    heroSubheadline: 'Direkt in Offenbach und im gesamten OF-Umland',
    schemaDescription: 'Autoankauf in Offenbach am Main mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufOffenbach',
    faqKey: 'OFFENBACH_FAQS',
  },
  {
    slug: 'koeln',
    path: '/autoankauf-koeln',
    cityName: 'Köln',
    state: 'Nordrhein-Westfalen',
    title: 'Autoankauf Köln | Sicher verkaufen mit kostenloser Abholung',
    description:
      'Auto verkaufen in Köln: online bewerten, transparentes Angebot erhalten, kostenlos abholen lassen und schnell ausgezahlt werden.',
    heroHeadline: 'Autoankauf Köln – Sofort Geld für Ihr Fahrzeug',
    heroSubheadline: 'Direkt in Köln und im gesamten Rheinland schnell verkaufen',
    schemaDescription: 'Autoankauf in Köln mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufKoeln',
    faqKey: 'KOELN_FAQS',
  },
  {
    slug: 'hamburg',
    path: '/autoankauf-hamburg',
    cityName: 'Hamburg',
    state: 'Hamburg',
    title: 'Autoankauf Hamburg | Express-Auszahlung mit Abholung',
    description:
      'Auto verkaufen in Hamburg: schnelle Online-Bewertung, faires Angebot, kostenlose Abholung und Auszahlung am Übergabetag.',
    heroHeadline: 'Autoankauf Hamburg – Fairer Preis, schnelle Auszahlung',
    heroSubheadline: 'Ihr Autoankauf-Partner in der Hansestadt Hamburg',
    schemaDescription: 'Autoankauf in Hamburg mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufHamburg',
    faqKey: 'HAMBURG_FAQS',
  },
  {
    slug: 'mannheim',
    path: '/autoankauf-mannheim',
    cityName: 'Mannheim',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Mannheim | Sofort Geld & kostenlose Abholung',
    description:
      'Auto verkaufen in Mannheim: Schnelle Online-Bewertung, fairer Preis, kostenlose Abholung im gesamten Rhein-Neckar-Raum – ohne Inserat und mit klarer Abwicklung.',
    heroHeadline: 'Autoankauf Mannheim – Sofort Geld für Ihr Fahrzeug',
    heroSubheadline: 'Kostenlose Abholung im gesamten Rhein-Neckar-Raum',
    schemaDescription: 'Autoankauf in Mannheim mit fairer Bewertung und schneller Auszahlung im Rhein-Neckar-Raum.',
    pageComponentName: 'AutoankaufMannheim',
    faqKey: 'MANNHEIM_FAQS',
  },
  {
    slug: 'heidelberg',
    path: '/autoankauf-heidelberg',
    cityName: 'Heidelberg',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Heidelberg | Fairer Preis & Express-Auszahlung',
    description:
      'Auto verkaufen in Heidelberg: Online bewerten, transparentes Angebot und Auszahlung am Tag der Übergabe – ideal für Studierende und Berufspendler.',
    heroHeadline: 'Autoankauf Heidelberg – Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Ihr Autoankauf-Partner in der Universitätsstadt Heidelberg',
    schemaDescription: 'Autoankauf in Heidelberg mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufHeidelberg',
    faqKey: 'HEIDELBERG_FAQS',
  },
  {
    slug: 'worms',
    path: '/autoankauf-worms',
    cityName: 'Worms',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Worms – Fairer Preis & Sofortige Auszahlung',
    description:
      'Auto verkaufen in Worms: faire Bewertung, kostenlose Abholung in der Nibelungenstadt und schnelle Auszahlung. Jetzt Preis berechnen.',
    heroHeadline: 'Autoankauf Worms – Sofort Geld für Ihr Fahrzeug',
    heroSubheadline: 'Kostenlose Abholung in der Nibelungenstadt & dem Landkreis Alzey-Worms',
    schemaDescription: 'Autoankauf in Worms mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufWorms',
    faqKey: 'WORMS_FAQS',
  },
  {
    slug: 'kaiserslautern',
    path: '/autoankauf-kaiserslautern',
    cityName: 'Kaiserslautern',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Kaiserslautern – Schnell & Fair in der Pfalz',
    description:
      'Auto verkaufen in Kaiserslautern: faire Bewertung, kostenlose Abholung in der Westpfalz und sofortige Auszahlung. Jetzt Preis berechnen.',
    heroHeadline: 'Autoankauf Kaiserslautern – Schnell & Fair in der Pfalz',
    heroSubheadline: 'Kostenlose Abholung im gesamten Stadtgebiet & Landkreis Kaiserslautern',
    schemaDescription: 'Autoankauf in Kaiserslautern mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufKaiserslautern',
    faqKey: 'KAISERSLAUTERN_FAQS',
  },
  {
    slug: 'ludwigshafen',
    path: '/autoankauf-ludwigshafen',
    cityName: 'Ludwigshafen am Rhein',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Ludwigshafen am Rhein – Schnelle Auszahlung & fairer Ankaufpreis',
    description:
      'Autoankauf Ludwigshafen: Jetzt Fahrzeug online bewerten, transparentes Angebot erhalten und auf Wunsch kostenlos abholen lassen – mit schneller Auszahlung.',
    heroHeadline: 'Autoankauf Ludwigshafen – Schnell verkaufen im Rhein-Neckar-Raum',
    heroSubheadline: 'Faire Bewertung, feste Termine und zügige Auszahlung in Ludwigshafen am Rhein',
    schemaDescription: 'Autoankauf in Ludwigshafen mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufLudwigshafen',
    faqKey: 'LUDWIGSHAFEN_FAQS',
  },
  {
    slug: 'hanau',
    path: '/autoankauf-hanau',
    cityName: 'Hanau am Main',
    state: 'Hessen',
    title: 'Autoankauf Hanau am Main – Direkte Auszahlung & transparenter Verkauf',
    description:
      'Autoankauf Hanau: Fahrzeug online bewerten, faires Angebot erhalten und verkaufen – mit optionaler Abholung, schneller Auszahlung und klarer Abwicklung.',
    heroHeadline: 'Autoankauf Hanau – Klarer Ablauf für Pendler und Familien',
    heroSubheadline: 'Online bewerten, vor Ort verkaufen und in Hanau am Main zügig auszahlen lassen',
    schemaDescription: 'Autoankauf in Hanau mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufHanau',
    faqKey: 'HANAU_FAQS',
  },
  {
    slug: 'giessen',
    path: '/autoankauf-giessen',
    cityName: 'Gießen',
    state: 'Hessen',
    title: 'Autoankauf Gießen – Auto schnell verkaufen',
    description:
      'Auto verkaufen in Gießen: Kostenlose Online-Bewertung, faire Preisermittlung, Abholung in Mittelhessen und Auszahlung am Tag der Übergabe – JLU & THM.',
    heroHeadline: 'Autoankauf Gießen – Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Ihr Autoankauf-Partner in der Universitätsstadt Gießen & Mittelhessen',
    schemaDescription: 'Autoankauf in Gießen mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufGiessen',
    faqKey: 'GIESSEN_FAQS',
  },
  {
    slug: 'aschaffenburg',
    path: '/autoankauf-aschaffenburg',
    cityName: 'Aschaffenburg',
    state: 'Bayern',
    title: 'Autoankauf Aschaffenburg – Auto schnell verkaufen',
    description:
      'Auto verkaufen in Aschaffenburg: Online bewerten, faires Angebot, kostenlose Abholung und Auszahlung am Tag der Übergabe – A3/A45, Straßenverkehrsamt inklusive.',
    heroHeadline: 'Autoankauf Aschaffenburg – Schnell verkaufen, sofort auszahlen',
    heroSubheadline: 'Ihr Autoankauf-Partner in Aschaffenburg & Landkreis – direkt an A3 und A45',
    schemaDescription: 'Autoankauf in Aschaffenburg mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufAschaffenburg',
    faqKey: 'ASCHAFFENBURG_FAQS',
  },
  {
    slug: 'neuwied',
    path: '/autoankauf-neuwied',
    cityName: 'Neuwied',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Neuwied – Auto schnell verkaufen',
    description:
      'Autoankauf Neuwied: Auto schnell verkaufen mit kostenloser Online-Bewertung, fairer Preisermittlung, optionaler Abholung und zügiger Auszahlung vor Ort.',
    heroHeadline: 'Autoankauf Neuwied – Planbar verkaufen im Mittelrhein-Raum',
    heroSubheadline: 'Online bewerten, Termin sichern und Fahrzeug in Neuwied transparent verkaufen',
    schemaDescription: 'Autoankauf in Neuwied mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufNeuwied',
    faqKey: 'NEUWIED_FAQS',
  },
  {
    slug: 'wetzlar',
    path: '/autoankauf-wetzlar',
    cityName: 'Wetzlar',
    state: 'Hessen',
    title: 'Autoankauf Wetzlar – Auto schnell verkaufen',
    description:
      'Autoankauf Wetzlar: Auto schnell verkaufen mit transparenter Bewertung, flexiblen Terminen im Lahn-Dill-Kreis und schneller Auszahlung ohne Inseratstress.',
    heroHeadline: 'Autoankauf Wetzlar – Schnell verkaufen im Lahn-Dill-Korridor',
    heroSubheadline: 'Faire Bewertung und klare Abwicklung für Fahrzeuge in Wetzlar',
    schemaDescription: 'Autoankauf in Wetzlar mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufWetzlar',
    faqKey: 'WETZLAR_FAQS',
  },
  {
    slug: 'speyer',
    path: '/autoankauf-speyer',
    cityName: 'Speyer',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Speyer – Auto schnell verkaufen',
    description:
      'Auto verkaufen in Speyer: Kostenlose Online-Bewertung, faire Preisermittlung, Abholung in der Domstadt und Rhein-Pfalz-Kreis, Auszahlung am Tag der Übergabe.',
    heroHeadline: 'Autoankauf Speyer – Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Ihr Autoankauf-Partner in der Domstadt am Rhein & Rhein-Pfalz-Kreis',
    schemaDescription: 'Autoankauf in Speyer mit fairer Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufSpeyer',
    faqKey: 'SPEYER_FAQS',
  },
  {
    slug: 'neustadt-weinstrasse',
    path: '/autoankauf-neustadt-weinstrasse',
    cityName: 'Neustadt an der Weinstraße',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Neustadt an der Weinstraße – Auto schnell verkaufen',
    description:
      'Auto verkaufen in Neustadt an der Weinstraße: Online bewerten, faires Angebot, Abholung in allen Ortsbezirken und Auszahlung am Tag der Übergabe – Deutsche Weinstraße.',
    heroHeadline: 'Autoankauf Neustadt an der Weinstraße – Schnell verkaufen, sofort auszahlen',
    heroSubheadline: 'Ihr Autoankauf-Partner an der Deutschen Weinstraße & in der Pfalz',
    schemaDescription:
      'Autoankauf in Neustadt an der Weinstraße für Pendler und Weinstraßen-Region – faire Bewertung, Abholung, Abmeldung inklusive.',
    pageComponentName: 'AutoankaufNeustadtWeinstrasse',
    faqKey: 'NEUSTADT_WEINSTRASSE_FAQS',
  },
  {
    slug: 'bad-homburg-vor-der-hoehe',
    path: '/autoankauf-bad-homburg-vor-der-hoehe',
    cityName: 'Bad Homburg vor der Höhe',
    state: 'Hessen',
    title: 'Autoankauf Bad Homburg vor der Höhe – Auto schnell verkaufen',
    description:
      'Autoankauf Bad Homburg vor der Höhe: Auto schnell verkaufen mit fairer Online-Bewertung, Abholung im Hochtaunuskreis und schneller Auszahlung vor Ort.',
    heroHeadline: 'Autoankauf Bad Homburg – Schnell verkaufen im Hochtaunuskreis',
    heroSubheadline: 'Faire Bewertung, planbare Termine und zügige Auszahlung in Bad Homburg vor der Höhe',
    schemaDescription:
      'Autoankauf in Bad Homburg vor der Höhe für Pendler-, Familien- und Dienstwagen mit transparenter Bewertung und zügiger Auszahlung.',
    pageComponentName: 'AutoankaufBadHomburg',
    faqKey: 'BAD_HOMBURG_FAQS',
  },
  {
    slug: 'oberursel',
    path: '/autoankauf-oberursel',
    cityName: 'Oberursel (Taunus)',
    state: 'Hessen',
    title: 'Autoankauf Oberursel – Auto schnell verkaufen',
    description:
      'Autoankauf Oberursel: Auto schnell verkaufen mit transparenter Online-Bewertung, Abholung im Hochtaunuskreis und schneller Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Oberursel – Schnell verkaufen im Taunus',
    heroSubheadline: 'Online bewerten, Termin sichern und Fahrzeug in Oberursel transparent verkaufen',
    schemaDescription: 'Autoankauf in Oberursel für Pendler und Familien im Taunus mit transparenter Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufOberursel',
    faqKey: 'OBERURSEL_FAQS',
  },
  {
    slug: 'bad-kreuznach',
    path: '/autoankauf-bad-kreuznach',
    cityName: 'Bad Kreuznach',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Bad Kreuznach – Auto schnell verkaufen',
    description:
      'Autoankauf Bad Kreuznach: Auto schnell verkaufen mit transparenter Online-Bewertung, Abholung im Kreis Bad Kreuznach und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Bad Kreuznach – Schnell verkaufen im Naheland',
    heroSubheadline: 'Faire Bewertung, planbare Termine und zügige Auszahlung in Bad Kreuznach',
    schemaDescription: 'Autoankauf in Bad Kreuznach für Pendler und Familien mit transparenter Bewertung und zügiger Auszahlung im Naheland.',
    pageComponentName: 'AutoankaufBadKreuznach',
    faqKey: 'BAD_KREUZNACH_FAQS',
  },
  {
    slug: 'dreieich',
    path: '/autoankauf-dreieich',
    cityName: 'Dreieich',
    state: 'Hessen',
    title: 'Autoankauf Dreieich – Auto schnell verkaufen',
    description:
      'Autoankauf Dreieich: Auto schnell verkaufen mit transparenter Bewertung, flexiblen Terminen im Kreis Offenbach und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Dreieich – Schnell verkaufen im Kreis Offenbach',
    heroSubheadline: 'Online bewerten, Termin sichern und Fahrzeug in Dreieich transparent verkaufen',
    schemaDescription: 'Autoankauf in Dreieich für Pendler und Familien mit transparenter Bewertung und schneller Auszahlung im Kreis Offenbach.',
    pageComponentName: 'AutoankaufDreieich',
    faqKey: 'DREIEICH_FAQS',
  },
  {
    slug: 'bensheim',
    path: '/autoankauf-bensheim',
    cityName: 'Bensheim',
    state: 'Hessen',
    title: 'Autoankauf Bensheim – Auto schnell verkaufen',
    description:
      'Autoankauf Bensheim: Auto schnell verkaufen mit transparenter Online-Bewertung, flexibler Abholung an der Bergstraße und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Bensheim – Schnell verkaufen an der Bergstraße',
    heroSubheadline: 'Online bewerten, Termin abstimmen und Fahrzeug in Bensheim transparent verkaufen',
    schemaDescription: 'Autoankauf in Bensheim mit transparenter Bewertung und zügiger Auszahlung für Pendler und Familien an der Bergstraße.',
    pageComponentName: 'AutoankaufBensheim',
    faqKey: 'BENSHEIM_FAQS',
  },
  {
    slug: 'maintal',
    path: '/autoankauf-maintal',
    cityName: 'Maintal',
    state: 'Hessen',
    title: 'Autoankauf Maintal – Auto schnell verkaufen',
    description:
      'Autoankauf Maintal: Auto schnell verkaufen mit fairer Bewertung, flexiblen Terminen zwischen Frankfurt und Hanau und schneller Auszahlung ohne Umwege.',
    heroHeadline: 'Autoankauf Maintal – Schnell verkaufen zwischen Frankfurt und Hanau',
    heroSubheadline: 'Faire Bewertung, flexible Termine und zügige Auszahlung in Maintal',
    schemaDescription: 'Autoankauf in Maintal mit transparenter Bewertung und schneller Auszahlung für Pendler im Main-Kinzig-Korridor.',
    pageComponentName: 'AutoankaufMaintal',
    faqKey: 'MAINTAL_FAQS',
  },
  {
    slug: 'hofheim-am-taunus',
    path: '/autoankauf-hofheim-am-taunus',
    cityName: 'Hofheim am Taunus',
    state: 'Hessen',
    title: 'Autoankauf Hofheim am Taunus – Auto schnell verkaufen',
    description:
      'Autoankauf Hofheim am Taunus: Auto schnell verkaufen mit transparenter Bewertung, Terminen im Main-Taunus-Kreis und schneller Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Hofheim am Taunus – Schnell verkaufen im Main-Taunus-Kreis',
    heroSubheadline: 'Online bewerten, Termin abstimmen und Fahrzeug in Hofheim transparent verkaufen',
    schemaDescription: 'Autoankauf in Hofheim am Taunus mit transparenter Bewertung und schneller Auszahlung für Pendler im Main-Taunus-Kreis.',
    pageComponentName: 'AutoankaufHofheimAmTaunus',
    faqKey: 'HOFHEIM_AM_TAUNUS_FAQS',
  },
  {
    slug: 'weinheim',
    path: '/autoankauf-weinheim',
    cityName: 'Weinheim',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Weinheim – Auto schnell verkaufen',
    description:
      'Autoankauf Weinheim: Auto schnell verkaufen mit fairer Online-Bewertung, flexibler Abholung im Rhein-Neckar-Raum und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Weinheim – Schnell verkaufen im Rhein-Neckar-Raum',
    heroSubheadline: 'Faire Bewertung, planbare Termine und zügige Auszahlung in Weinheim',
    schemaDescription: 'Autoankauf in Weinheim mit fairer Bewertung und zügiger Auszahlung für Pendler und Familien im Rhein-Neckar-Raum.',
    pageComponentName: 'AutoankaufWeinheim',
    faqKey: 'WEINHEIM_FAQS',
  },
  {
    slug: 'kassel',
    path: '/autoankauf-kassel',
    cityName: 'Kassel',
    state: 'Hessen',
    title: 'Autoankauf Kassel – Auto schnell verkaufen',
    description:
      'Autoankauf Kassel: Auto schnell verkaufen mit transparenter Online-Bewertung, flexiblen Terminen zwischen A7 und A44 und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Kassel – Schnell verkaufen in Nordhessen',
    heroSubheadline: 'Faire Bewertung, planbare Termine und zügige Auszahlung in Kassel',
    schemaDescription: 'Autoankauf in Kassel mit transparenter Bewertung und zügiger Auszahlung für Pendler und Familien in Nordhessen.',
    pageComponentName: 'AutoankaufKassel',
    faqKey: 'KASSEL_FAQS',
  },
  {
    slug: 'stuttgart',
    path: '/autoankauf-stuttgart',
    cityName: 'Stuttgart',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Stuttgart – Auto schnell verkaufen',
    description:
      'Autoankauf Stuttgart: Auto schnell verkaufen mit fairer Online-Bewertung, flexibler Abholung im Großraum Stuttgart und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Stuttgart – Schnell verkaufen im Großraum',
    heroSubheadline: 'Online bewerten, Termin sichern und Fahrzeug in Stuttgart transparent verkaufen',
    schemaDescription: 'Autoankauf in Stuttgart mit transparenter Bewertung und zügiger Auszahlung für Pendler und Familien im Großraum.',
    pageComponentName: 'AutoankaufStuttgart',
    faqKey: 'STUTTGART_FAQS',
  },
  {
    slug: 'bonn',
    path: '/autoankauf-bonn',
    cityName: 'Bonn',
    state: 'Nordrhein-Westfalen',
    title: 'Autoankauf Bonn – Auto schnell verkaufen',
    description:
      'Autoankauf Bonn: Auto schnell verkaufen mit transparenter Online-Bewertung, flexiblen Terminen in der Bundesstadt und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Bonn – Schnell verkaufen in der Bundesstadt',
    heroSubheadline: 'Online bewerten, Termin abstimmen und Fahrzeug in Bonn transparent verkaufen',
    schemaDescription: 'Autoankauf in Bonn mit transparenter Bewertung und zügiger Auszahlung für Pendler und Familien in der Bundesstadt.',
    pageComponentName: 'AutoankaufBonn',
    faqKey: 'BONN_FAQS',
  },
  {
    slug: 'karlsruhe',
    path: '/autoankauf-karlsruhe',
    cityName: 'Karlsruhe',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Karlsruhe – Auto schnell verkaufen',
    description:
      'Autoankauf Karlsruhe: Auto schnell verkaufen mit fairer Online-Bewertung, flexibler Abholung im Raum Karlsruhe und zügiger Auszahlung ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Karlsruhe – Schnell verkaufen in der Technologieregion',
    heroSubheadline: 'Faire Bewertung, planbare Termine und zügige Auszahlung in Karlsruhe',
    schemaDescription: 'Autoankauf in Karlsruhe mit transparenter Bewertung und zügiger Auszahlung für Pendler und Familien in der Technologieregion.',
    pageComponentName: 'AutoankaufKarlsruhe',
    faqKey: 'KARLSRUHE_FAQS',
  },
  {
    slug: 'frankenthal',
    path: '/autoankauf-frankenthal',
    cityName: 'Frankenthal (Pfalz)',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Frankenthal – Auto schnell verkaufen',
    description:
      'Autoankauf Frankenthal (Pfalz): Auto schnell verkaufen mit fairer Online-Bewertung, Abholung im Rhein-Pfalz-Kreis und schneller Auszahlung – ohne Inserat.',
    heroHeadline: 'Autoankauf Frankenthal – Schnell verkaufen in der Pfalz',
    heroSubheadline: 'Online bewerten, Termin sichern und Fahrzeug in Frankenthal transparent verkaufen',
    schemaDescription:
      'Autoankauf in Frankenthal für Pendler, Familien und Gewerbefahrzeuge mit transparenter Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufFrankenthal',
    faqKey: 'FRANKENTHAL_FAQS',
  },
  {
    slug: 'rodgau',
    path: '/autoankauf-rodgau',
    cityName: 'Rodgau',
    state: 'Hessen',
    title: 'Autoankauf Rodgau – Auto schnell verkaufen',
    description:
      'Autoankauf Rodgau: Auto schnell verkaufen mit transparenter Online-Bewertung, Abholung im Landkreis Offenbach und schneller Auszahlung – ohne Inseratsstress.',
    heroHeadline: 'Autoankauf Rodgau – Schnell verkaufen im Landkreis Offenbach',
    heroSubheadline: 'Online bewerten, Termin sichern und Fahrzeug in Rodgau transparent verkaufen',
    schemaDescription:
      'Autoankauf in Rodgau für Pendler und Familien im Landkreis Offenbach mit transparenter Bewertung und schneller Auszahlung.',
    pageComponentName: 'AutoankaufRodgau',
    faqKey: 'RODGAU_FAQS',
  },
];

export const CITY_SEO_BY_SLUG = Object.fromEntries(
  CITY_SEO_DATA.map((c) => [c.slug, c]),
) as Record<string, CitySeoData>;
