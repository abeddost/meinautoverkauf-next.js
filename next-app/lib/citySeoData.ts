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
  /** Hero headline (the page's H1) */
  heroHeadline: string;
  /** Hero subheadline */
  heroSubheadline: string;
  /** Import key matching pages/Autoankauf*.tsx filename stem */
  pageComponentName: string;
}

export const CITY_SEO_DATA: CitySeoData[] = [
  {
    slug: 'frankfurt',
    path: '/autoankauf-frankfurt',
    cityName: 'Frankfurt am Main',
    state: 'Hessen',
    title: 'Autoankauf Frankfurt: Auto online bewerten & fair verkaufen',
    description:
      'Auto verkaufen in Frankfurt: kostenlos online bewerten, Termin in unserer Filiale in Rüsselsheim buchen, ca. 25 Minuten entfernt. Auszahlung bei Übergabe.',
    heroHeadline: 'Autoankauf Frankfurt: Auto ohne Inserat verkaufen',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 25 Minuten von Frankfurt',
    pageComponentName: 'AutoankaufFrankfurt',
  },
  {
    slug: 'wiesbaden',
    path: '/autoankauf-wiesbaden',
    cityName: 'Wiesbaden',
    state: 'Hessen',
    title: 'Autoankauf Wiesbaden: Auto online bewerten & fair verkaufen',
    description:
      'Auto verkaufen in Wiesbaden: online bewerten, Termin in Rüsselsheim buchen, ca. 18 Minuten Fahrt. Transparent, ohne Inserat, Auszahlung bei Übergabe.',
    heroHeadline: 'Autoankauf Wiesbaden: Auto fair und ohne Inserat verkaufen',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 18 Minuten von Wiesbaden',
    pageComponentName: 'AutoankaufWiesbaden',
  },
  {
    slug: 'mainz',
    path: '/autoankauf-mainz',
    cityName: 'Mainz',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Mainz: Auto fair verkaufen, Filiale in Bodenheim',
    description:
      'Auto verkaufen in Mainz: online bewerten und in unserer Filiale in Bodenheim übergeben, nur ca. 17 Minuten entfernt. Auszahlung bei Übergabe.',
    heroHeadline: 'Autoankauf Mainz: Unsere Filiale direkt vor der Stadt',
    heroSubheadline: 'Online bewerten und in Bodenheim übergeben, ca. 17 Minuten von der Mainzer Innenstadt',
    pageComponentName: 'AutoankaufMainz',
  },
  {
    slug: 'ruesselsheim',
    path: '/autoankauf-ruesselsheim',
    cityName: 'Rüsselsheim am Main',
    state: 'Hessen',
    title: 'Autoankauf Rüsselsheim: Unsere Filiale in der Wormser Straße',
    description:
      'Auto verkaufen in Rüsselsheim: online bewerten, Termin in unserer Filiale in der Wormser Str. 8b buchen und bei der Übergabe ausgezahlt werden.',
    heroHeadline: 'Autoankauf Rüsselsheim: Direkt in unserer Filiale verkaufen',
    heroSubheadline: 'Wormser Str. 8b, 65428 Rüsselsheim am Main – online bewerten und Termin buchen',
    pageComponentName: 'AutoankaufRuesselsheim',
  },
  {
    slug: 'darmstadt',
    path: '/autoankauf-darmstadt',
    cityName: 'Darmstadt',
    state: 'Hessen',
    title: 'Autoankauf Darmstadt | Fairer Preis & schnelle Auszahlung',
    description:
      'Auto verkaufen in Darmstadt: schnelle Online-Bewertung, Termin in Rüsselsheim (ca. 22 Minuten) und Auszahlung am Tag der Übergabe. Ohne Inserat.',
    heroHeadline: 'Autoankauf Darmstadt: Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 22 Minuten von Darmstadt',
    pageComponentName: 'AutoankaufDarmstadt',
  },
  {
    slug: 'koblenz',
    path: '/autoankauf-koblenz',
    cityName: 'Koblenz',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Koblenz | Auto bewerten und fair verkaufen',
    description:
      'Auto verkaufen in Koblenz: online bewerten, Angebot prüfen und in unserer Filiale in Rüsselsheim übergeben, ca. 73 Minuten Fahrt. Auszahlung am Übergabetag.',
    heroHeadline: 'Autoankauf Koblenz: Auto fair verkaufen zwischen Rhein und Mosel',
    heroSubheadline: 'Online bewerten und in Rüsselsheim übergeben, ca. 73 Minuten von Koblenz',
    pageComponentName: 'AutoankaufKoblenz',
  },
  {
    slug: 'offenbach',
    path: '/autoankauf-offenbach',
    cityName: 'Offenbach am Main',
    state: 'Hessen',
    title: 'Autoankauf Offenbach | Auszahlung bei Übergabe, ohne Inserat',
    description:
      'Auto verkaufen in Offenbach: schnelle Online-Bewertung, transparentes Angebot, Termin in Rüsselsheim (ca. 28 Minuten) und Auszahlung bei Übergabe.',
    heroHeadline: 'Autoankauf Offenbach: Fairer Preis, schnelle Auszahlung',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 28 Minuten von Offenbach',
    pageComponentName: 'AutoankaufOffenbach',
  },
  {
    slug: 'koeln',
    path: '/autoankauf-koeln',
    cityName: 'Köln',
    state: 'Nordrhein-Westfalen',
    title: 'Autoankauf Köln | Online bewerten, sicher verkaufen',
    description:
      'Auto aus Köln verkaufen: online bewerten, Angebot prüfen und in unserer Filiale in Rüsselsheim übergeben, rund 2 Stunden Fahrt. Vorher kurz anrufen.',
    heroHeadline: 'Autoankauf für Köln: Online bewerten, in Rüsselsheim verkaufen',
    heroSubheadline: 'Die Bewertung funktioniert von überall, die Übergabe findet in Rüsselsheim statt, rund 2 Stunden von Köln',
    pageComponentName: 'AutoankaufKoeln',
  },
  {
    slug: 'hamburg',
    path: '/autoankauf-hamburg',
    cityName: 'Hamburg',
    state: 'Hamburg',
    title: 'Autoankauf Hamburg | Online-Bewertung und Ablauf erklärt',
    description:
      'Auto aus Hamburg verkaufen: online bewerten und in unserer Filiale in Rüsselsheim übergeben. Wichtig: Das sind rund 500 km. Vorher kurz anrufen.',
    heroHeadline: 'Autoankauf für Hamburg: Online bewerten und Weg klären',
    heroSubheadline: 'Die Bewertung funktioniert von überall, die Übergabe findet in Rüsselsheim statt, rund 500 km von Hamburg',
    pageComponentName: 'AutoankaufHamburg',
  },
  {
    slug: 'mannheim',
    path: '/autoankauf-mannheim',
    cityName: 'Mannheim',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Mannheim | Fair verkaufen im Rhein-Neckar-Raum',
    description:
      'Auto verkaufen in Mannheim: schnelle Online-Bewertung, fairer Preis und Termin in unserer Filiale in Rüsselsheim, ca. 48 Minuten Fahrt. Ohne Inserat.',
    heroHeadline: 'Autoankauf Mannheim: Fair verkaufen im Rhein-Neckar-Raum',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 48 Minuten von Mannheim',
    pageComponentName: 'AutoankaufMannheim',
  },
  {
    slug: 'heidelberg',
    path: '/autoankauf-heidelberg',
    cityName: 'Heidelberg',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Heidelberg | Fairer Preis & schnelle Auszahlung',
    description:
      'Auto verkaufen in Heidelberg: online bewerten und in Rüsselsheim übergeben, ca. 49 Minuten Fahrt. Auszahlung am Übergabetag, auch für Studierende und Pendler.',
    heroHeadline: 'Autoankauf Heidelberg: Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 49 Minuten von Heidelberg',
    pageComponentName: 'AutoankaufHeidelberg',
  },
  {
    slug: 'worms',
    path: '/autoankauf-worms',
    cityName: 'Worms',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Worms | Fairer Preis & schnelle Auszahlung',
    description:
      'Auto verkaufen in Worms: faire Bewertung, Termin in unserer Filiale in Bodenheim, ca. 40 Minuten Fahrt, und Auszahlung bei Übergabe. Jetzt Preis prüfen.',
    heroHeadline: 'Autoankauf Worms: Fairer Preis für Ihr Fahrzeug',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Bodenheim übergeben, ca. 40 Minuten von Worms',
    pageComponentName: 'AutoankaufWorms',
  },
  {
    slug: 'kaiserslautern',
    path: '/autoankauf-kaiserslautern',
    cityName: 'Kaiserslautern',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Kaiserslautern | Schnell & fair in der Pfalz',
    description:
      'Auto verkaufen in Kaiserslautern: faire Bewertung, Termin in unserer Filiale in Bodenheim, ca. 61 Minuten Fahrt, und Auszahlung bei Übergabe.',
    heroHeadline: 'Autoankauf Kaiserslautern: Schnell und fair in der Pfalz',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Bodenheim übergeben, ca. 61 Minuten von Kaiserslautern',
    pageComponentName: 'AutoankaufKaiserslautern',
  },
  {
    slug: 'ludwigshafen',
    path: '/autoankauf-ludwigshafen',
    cityName: 'Ludwigshafen am Rhein',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Ludwigshafen | Schnelle Auszahlung, fairer Preis',
    description:
      'Autoankauf Ludwigshafen: Fahrzeug online bewerten, transparentes Angebot erhalten und in Rüsselsheim übergeben, ca. 54 Minuten Fahrt. Schnelle Auszahlung.',
    heroHeadline: 'Autoankauf Ludwigshafen: Fair verkaufen im Rhein-Neckar-Raum',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 54 Minuten von Ludwigshafen',
    pageComponentName: 'AutoankaufLudwigshafen',
  },
  {
    slug: 'hanau',
    path: '/autoankauf-hanau',
    cityName: 'Hanau am Main',
    state: 'Hessen',
    title: 'Autoankauf Hanau | Klarer Ablauf, direkte Auszahlung',
    description:
      'Autoankauf Hanau: Fahrzeug online bewerten, faires Angebot erhalten und in Rüsselsheim übergeben, ca. 34 Minuten Fahrt. Klare Abwicklung, schnelle Auszahlung.',
    heroHeadline: 'Autoankauf Hanau: Klarer Ablauf für Pendler und Familien',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 34 Minuten von Hanau',
    pageComponentName: 'AutoankaufHanau',
  },
  {
    slug: 'giessen',
    path: '/autoankauf-giessen',
    cityName: 'Gießen',
    state: 'Hessen',
    title: 'Autoankauf Gießen | Auto fair verkaufen in Mittelhessen',
    description:
      'Auto verkaufen in Gießen: kostenlose Online-Bewertung, faire Preisschätzung, Termin in Rüsselsheim (ca. 56 Minuten) und Auszahlung am Übergabetag.',
    heroHeadline: 'Autoankauf Gießen: Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 56 Minuten von Gießen',
    pageComponentName: 'AutoankaufGiessen',
  },
  {
    slug: 'aschaffenburg',
    path: '/autoankauf-aschaffenburg',
    cityName: 'Aschaffenburg',
    state: 'Bayern',
    title: 'Autoankauf Aschaffenburg | Auto fair und schnell verkaufen',
    description:
      'Auto verkaufen in Aschaffenburg: online bewerten, faires Angebot prüfen, Termin in Rüsselsheim (ca. 42 Minuten über die A3) und Auszahlung am Übergabetag.',
    heroHeadline: 'Autoankauf Aschaffenburg: Auto fair und schnell verkaufen',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 42 Minuten von Aschaffenburg',
    pageComponentName: 'AutoankaufAschaffenburg',
  },
  {
    slug: 'neuwied',
    path: '/autoankauf-neuwied',
    cityName: 'Neuwied',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Neuwied | Planbar verkaufen am Mittelrhein',
    description:
      'Autoankauf Neuwied: kostenlose Online-Bewertung, faire Preisschätzung und fester Termin in unserer Filiale in Rüsselsheim, ca. 76 Minuten Fahrt.',
    heroHeadline: 'Autoankauf Neuwied: Planbar verkaufen am Mittelrhein',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 76 Minuten von Neuwied',
    pageComponentName: 'AutoankaufNeuwied',
  },
  {
    slug: 'wetzlar',
    path: '/autoankauf-wetzlar',
    cityName: 'Wetzlar',
    state: 'Hessen',
    title: 'Autoankauf Wetzlar | Auto fair verkaufen im Lahn-Dill-Kreis',
    description:
      'Autoankauf Wetzlar: transparente Bewertung, fester Termin in unserer Filiale in Rüsselsheim, ca. 57 Minuten Fahrt, und schnelle Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Wetzlar: Fair verkaufen im Lahn-Dill-Kreis',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 57 Minuten von Wetzlar',
    pageComponentName: 'AutoankaufWetzlar',
  },
  {
    slug: 'speyer',
    path: '/autoankauf-speyer',
    cityName: 'Speyer',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Speyer | Auto fair verkaufen in der Domstadt',
    description:
      'Auto verkaufen in Speyer: kostenlose Online-Bewertung, faire Preisschätzung, Termin in Rüsselsheim (ca. 60 Minuten) und Auszahlung am Übergabetag.',
    heroHeadline: 'Autoankauf Speyer: Fairer Preis, schnelle Abwicklung',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 60 Minuten von Speyer',
    pageComponentName: 'AutoankaufSpeyer',
  },
  {
    slug: 'neustadt-weinstrasse',
    path: '/autoankauf-neustadt-weinstrasse',
    cityName: 'Neustadt an der Weinstraße',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Neustadt an der Weinstraße | Auto fair verkaufen',
    description:
      'Auto verkaufen in Neustadt an der Weinstraße: online bewerten, Termin in Rüsselsheim (ca. 65 Minuten) und Auszahlung am Übergabetag. Abmeldung inklusive.',
    heroHeadline: 'Autoankauf Neustadt an der Weinstraße: Auto fair verkaufen',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 65 Minuten von Neustadt',
    pageComponentName: 'AutoankaufNeustadtWeinstrasse',
  },
  {
    slug: 'bad-homburg-vor-der-hoehe',
    path: '/autoankauf-bad-homburg-vor-der-hoehe',
    cityName: 'Bad Homburg vor der Höhe',
    state: 'Hessen',
    title: 'Autoankauf Bad Homburg | Auto fair verkaufen im Hochtaunus',
    description:
      'Autoankauf Bad Homburg vor der Höhe: faire Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 30 Minuten Fahrt, und schnelle Auszahlung.',
    heroHeadline: 'Autoankauf Bad Homburg: Fair verkaufen im Hochtaunuskreis',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 30 Minuten von Bad Homburg',
    pageComponentName: 'AutoankaufBadHomburg',
  },
  {
    slug: 'oberursel',
    path: '/autoankauf-oberursel',
    cityName: 'Oberursel (Taunus)',
    state: 'Hessen',
    title: 'Autoankauf Oberursel | Auto fair verkaufen im Taunus',
    description:
      'Autoankauf Oberursel: transparente Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 32 Minuten Fahrt, und schnelle Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Oberursel: Fair verkaufen im Taunus',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 32 Minuten von Oberursel',
    pageComponentName: 'AutoankaufOberursel',
  },
  {
    slug: 'bad-kreuznach',
    path: '/autoankauf-bad-kreuznach',
    cityName: 'Bad Kreuznach',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Bad Kreuznach | Auto fair verkaufen im Naheland',
    description:
      'Autoankauf Bad Kreuznach: transparente Online-Bewertung, Termin in unserer Filiale in Bodenheim, ca. 40 Minuten Fahrt, und zügige Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Bad Kreuznach: Fair verkaufen im Naheland',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Bodenheim übergeben, ca. 40 Minuten von Bad Kreuznach',
    pageComponentName: 'AutoankaufBadKreuznach',
  },
  {
    slug: 'dreieich',
    path: '/autoankauf-dreieich',
    cityName: 'Dreieich',
    state: 'Hessen',
    title: 'Autoankauf Dreieich | Auto fair verkaufen im Kreis Offenbach',
    description:
      'Autoankauf Dreieich: transparente Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 28 Minuten Fahrt, und zügige Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Dreieich: Fair verkaufen im Kreis Offenbach',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 28 Minuten von Dreieich',
    pageComponentName: 'AutoankaufDreieich',
  },
  {
    slug: 'bensheim',
    path: '/autoankauf-bensheim',
    cityName: 'Bensheim',
    state: 'Hessen',
    title: 'Autoankauf Bensheim | Auto fair verkaufen an der Bergstraße',
    description:
      'Autoankauf Bensheim: transparente Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 31 Minuten über die A67, und zügige Auszahlung.',
    heroHeadline: 'Autoankauf Bensheim: Fair verkaufen an der Bergstraße',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 31 Minuten von Bensheim',
    pageComponentName: 'AutoankaufBensheim',
  },
  {
    slug: 'maintal',
    path: '/autoankauf-maintal',
    cityName: 'Maintal',
    state: 'Hessen',
    title: 'Autoankauf Maintal | Zwischen Frankfurt und Hanau verkaufen',
    description:
      'Autoankauf Maintal: faire Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 36 Minuten Fahrt, und schnelle Auszahlung ohne Umwege über Inserate.',
    heroHeadline: 'Autoankauf Maintal: Fair verkaufen zwischen Frankfurt und Hanau',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 36 Minuten von Maintal',
    pageComponentName: 'AutoankaufMaintal',
  },
  {
    slug: 'hofheim-am-taunus',
    path: '/autoankauf-hofheim-am-taunus',
    cityName: 'Hofheim am Taunus',
    state: 'Hessen',
    title: 'Autoankauf Hofheim am Taunus | Auto fair verkaufen',
    description:
      'Autoankauf Hofheim am Taunus: transparente Bewertung, Termin in unserer Filiale in Rüsselsheim, nur ca. 23 Minuten Fahrt, und schnelle Auszahlung.',
    heroHeadline: 'Autoankauf Hofheim am Taunus: Fair verkaufen im Main-Taunus-Kreis',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 23 Minuten von Hofheim',
    pageComponentName: 'AutoankaufHofheimAmTaunus',
  },
  {
    slug: 'weinheim',
    path: '/autoankauf-weinheim',
    cityName: 'Weinheim',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Weinheim | Auto fair verkaufen an der Bergstraße',
    description:
      'Autoankauf Weinheim: faire Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 40 Minuten über die A5, und zügige Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Weinheim: Fair verkaufen im Rhein-Neckar-Raum',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 40 Minuten von Weinheim',
    pageComponentName: 'AutoankaufWeinheim',
  },
  {
    slug: 'kassel',
    path: '/autoankauf-kassel',
    cityName: 'Kassel',
    state: 'Hessen',
    title: 'Autoankauf Kassel | Bewertung und Ablauf in Nordhessen',
    description:
      'Auto aus Kassel verkaufen: online bewerten und in unserer Filiale in Rüsselsheim übergeben, rund 2 Stunden Fahrt. Rufen Sie vor der Anreise kurz an.',
    heroHeadline: 'Autoankauf für Kassel: Online bewerten, in Rüsselsheim verkaufen',
    heroSubheadline: 'Die Bewertung funktioniert von überall, die Übergabe findet in Rüsselsheim statt, rund 2 Stunden von Kassel',
    pageComponentName: 'AutoankaufKassel',
  },
  {
    slug: 'stuttgart',
    path: '/autoankauf-stuttgart',
    cityName: 'Stuttgart',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Stuttgart | Online-Bewertung und Ablauf erklärt',
    description:
      'Auto aus Stuttgart verkaufen: online bewerten und in unserer Filiale in Rüsselsheim übergeben, rund 2 Stunden Fahrt. Rufen Sie vor der Anreise kurz an.',
    heroHeadline: 'Autoankauf für Stuttgart: Online bewerten, in Rüsselsheim verkaufen',
    heroSubheadline: 'Die Bewertung funktioniert von überall, die Übergabe findet in Rüsselsheim statt, rund 2 Stunden von Stuttgart',
    pageComponentName: 'AutoankaufStuttgart',
  },
  {
    slug: 'bonn',
    path: '/autoankauf-bonn',
    cityName: 'Bonn',
    state: 'Nordrhein-Westfalen',
    title: 'Autoankauf Bonn | Online-Bewertung und Ablauf erklärt',
    description:
      'Auto aus Bonn verkaufen: online bewerten und in unserer Filiale in Rüsselsheim übergeben, rund 1 Stunde 45 Minuten Fahrt. Vor der Anreise kurz anrufen.',
    heroHeadline: 'Autoankauf für Bonn: Online bewerten, in Rüsselsheim verkaufen',
    heroSubheadline: 'Die Bewertung funktioniert von überall, die Übergabe findet in Rüsselsheim statt, rund 1:45 Stunden von Bonn',
    pageComponentName: 'AutoankaufBonn',
  },
  {
    slug: 'karlsruhe',
    path: '/autoankauf-karlsruhe',
    cityName: 'Karlsruhe',
    state: 'Baden-Württemberg',
    title: 'Autoankauf Karlsruhe | Auto bewerten und fair verkaufen',
    description:
      'Autoankauf Karlsruhe: faire Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 78 Minuten über die A5, und zügige Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Karlsruhe: Fair verkaufen in der Technologieregion',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 78 Minuten von Karlsruhe',
    pageComponentName: 'AutoankaufKarlsruhe',
  },
  {
    slug: 'frankenthal',
    path: '/autoankauf-frankenthal',
    cityName: 'Frankenthal (Pfalz)',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Frankenthal | Auto fair verkaufen in der Pfalz',
    description:
      'Autoankauf Frankenthal (Pfalz): faire Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 48 Minuten Fahrt, und schnelle Auszahlung.',
    heroHeadline: 'Autoankauf Frankenthal: Fair verkaufen in der Pfalz',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 48 Minuten von Frankenthal',
    pageComponentName: 'AutoankaufFrankenthal',
  },
  {
    slug: 'bodenheim',
    path: '/autoankauf-bodenheim',
    cityName: 'Bodenheim',
    state: 'Rheinland-Pfalz',
    title: 'Autoankauf Bodenheim | Direkt an unserem Firmensitz',
    description:
      'Meinautoverkauf.de hat hier seinen Firmensitz. Auto online bewerten, faires Angebot erhalten und Am Kuemmerling 41a übergeben – schnell und transparent.',
    heroHeadline: 'Autoankauf Bodenheim: Direkt an unserem Firmensitz',
    heroSubheadline: 'Am Kuemmerling 41a, 55294 Bodenheim – online bewerten und Termin buchen',
    pageComponentName: 'AutoankaufBodenheim',
  },
  {
    slug: 'rodgau',
    path: '/autoankauf-rodgau',
    cityName: 'Rodgau',
    state: 'Hessen',
    title: 'Autoankauf Rodgau | Auto fair verkaufen im Kreis Offenbach',
    description:
      'Autoankauf Rodgau: transparente Online-Bewertung, Termin in unserer Filiale in Rüsselsheim, ca. 37 Minuten Fahrt, und schnelle Auszahlung ohne Inserat.',
    heroHeadline: 'Autoankauf Rodgau: Fair verkaufen im Landkreis Offenbach',
    heroSubheadline: 'Online bewerten und in unserer Filiale in Rüsselsheim übergeben, ca. 37 Minuten von Rodgau',
    pageComponentName: 'AutoankaufRodgau',
  },
];

export const CITY_SEO_BY_SLUG = Object.fromEntries(
  CITY_SEO_DATA.map((c) => [c.slug, c]),
) as Record<string, CitySeoData>;
