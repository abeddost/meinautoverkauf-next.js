import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { RATGEBER_FAQS } from '@/lib/faqContent';
import { getGuidePath } from '@/lib/guideContent';

interface TopicLink {
  href: string;
  label: string;
}

const brandGuides: TopicLink[] = Object.values(BRAND_SEO_CONTENT).map((brand) => ({
  href: getGuidePath(brand.guide.slug),
  label: brand.slug === 'oldtimer' ? 'Oldtimer: Wert und Verkauf' : `${brand.displayName}: Probleme und Verkauf`,
}));

const TOPICS: { id: string; title: string; summary: string; links: TopicLink[] }[] = [
  {
    id: 'verkaufsweg',
    title: 'Verkaufsweg und Preis',
    summary:
      'Privat verkaufen, an einen Händler oder in Zahlung geben? Der höchste Preis ist nicht immer der beste Abschluss. Vergleichen Sie, was nach Aufwand und laufenden Kosten übrig bleibt.',
    links: [
      { href: '/ratgeber/auto-privat-oder-haendler-verkaufen', label: 'Privat oder an den Händler?' },
      { href: '/ratgeber/inzahlungnahme-oder-verkaufen', label: 'Inzahlungnahme oder selbst verkaufen' },
      { href: '/wertverlust-auto-rechner', label: 'Wertverlust-Rechner' },
      { href: '/ratgeber/kilometerstand-scheckheft-vorbesitzer-preis', label: 'Was den Preis bestimmt' },
      { href: '/ratgeber/auto-online-inserieren-tipps-bilder', label: 'Auto online inserieren' },
      { href: '/ratgeber/online-autoankauf-ablauf-7-schritte', label: 'Online-Ankauf in 7 Schritten' },
      { href: '/ratgeber/auto-online-verkaufen-sofort-auszahlung', label: 'Auszahlung und Zahlungswege' },
      { href: '/ratgeber/autoexport-ankauf', label: 'Auto für den Export verkaufen' },
      { href: '/ratgeber/autoankauf-firmenwagen-gewerbe', label: 'Firmenwagen verkaufen' },
    ],
  },
  {
    id: 'schaeden',
    title: 'Defekte, Unfall und HU',
    summary:
      'Auch ein Auto mit Schaden kann noch einen Restwert haben. Entscheidend ist eine ehrliche Rechnung: Was kostet die Reparatur, und was bringt das Auto mit und ohne sie?',
    links: [
      { href: '/defektes-auto-verkaufen', label: 'Defektes Auto verkaufen: die Übersicht' },
      { href: '/ratgeber/auto-mit-motorschaden-verkaufen', label: 'Auto mit Motorschaden verkaufen' },
      { href: '/ratgeber/auto-mit-getriebeschaden-verkaufen', label: 'Auto mit Getriebeschaden verkaufen' },
      { href: '/ratgeber/unfallwagen-verkaufen', label: 'Unfallwagen verkaufen' },
      { href: '/ratgeber/autoankauf-ohne-tuev', label: 'Auto ohne TÜV verkaufen' },
      { href: '/ratgeber/auto-verschrotten-oder-verkaufen', label: 'Verschrotten oder verkaufen?' },
    ],
  },
  {
    id: 'recht',
    title: 'Unterlagen, Vertrag und Sicherheit',
    summary:
      'Vollständige Unterlagen und ein klarer Vertrag sparen Zeit und schützen vor Streit. Das gilt besonders für Mängelangaben, die Abmeldung und die Zahlung.',
    links: [
      { href: '/ratgeber/unterlagen-autoverkauf-checkliste', label: 'Unterlagen-Checkliste' },
      { href: '/ratgeber/rechtssicherer-kaufvertrag-auto', label: 'Kaufvertrag richtig gestalten' },
      { href: '/ratgeber/autoabmeldung-nach-verkauf', label: 'Abmeldung nach dem Verkauf' },
      { href: '/ratgeber/autoankauf-trotz-finanzierung', label: 'Verkauf trotz Finanzierung' },
      { href: '/ratgeber/autoverkauf-betrug-kleinanzeigen-erkennen', label: 'Betrug beim Verkauf erkennen' },
    ],
  },
  {
    id: 'marken',
    title: 'Ratgeber nach Marke',
    summary:
      'Typische Schwachstellen, Reparaturkosten und der richtige Verkaufszeitpunkt hängen stark von Marke, Motor und Baujahr ab.',
    links: brandGuides,
  },
];

const TIPS = [
  {
    title: 'Werterhalt',
    text: 'Regelmäßige Wartung mit lückenlosem Nachweis, ein gepflegter Innenraum und ausgebesserte Steinschläge halten den Preis stabil. Rauchgeruch lässt sich dagegen kaum vollständig entfernen und schreckt viele Käufer ab.',
  },
  {
    title: 'Der richtige Zeitpunkt',
    text: 'Cabrios sind im Frühjahr gefragter, Allradfahrzeuge eher im Herbst. Wichtiger als die Saison ist oft der Zeitpunkt vor einer großen Reparatur oder vor Ablauf der HU, weil dann weniger Abschläge anfallen.',
  },
  {
    title: 'Elektro und Hybrid',
    text: 'Bei E-Autos und Plug-in-Hybriden zählt der Batteriezustand. Ein Batteriezertifikat mit dem State of Health kann beim Verkauf helfen, denn bisher hat nur ein kleiner Teil der gebrauchten E-Autos eins.',
  },
  {
    title: 'Mängel offen angeben',
    text: 'Bekannte Mängel und Unfallschäden müssen Sie angeben. Ein Haftungsausschluss schützt nicht, wenn Sie etwas verschweigen. Offene Angaben vermeiden Streit und Preisdiskussionen beim Termin.',
  },
];

export default function RatgeberPage() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-28 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[18%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
            Alles zum Gebrauchtwagenverkauf, nach Thema sortiert
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Hier finden Sie unsere Leitfäden zu Preis, Unterlagen, Vertrag und Schäden. Wählen Sie das Thema, das gerade zu Ihrer Situation passt.
          </p>
        </div>

        <nav aria-label="Themen im Ratgeber" className="max-w-4xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg md:text-xl font-black text-brand-dark mb-4">Themen</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TOPICS.map((topic) => (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="ratgeber-content" className="max-w-4xl mx-auto space-y-12 mb-16">
          {TOPICS.map((topic) => (
            <section key={topic.id} id={topic.id} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">{topic.title}</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-5">{topic.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">Vier Dinge, die für jeden Verkauf gelten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TIPS.map((tip) => (
              <article key={tip.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="font-black text-brand-dark mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{tip.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="my-16 bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#0f172a] rounded-[3rem] p-10 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-black mb-6">Was ist Ihr Auto wert?</h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto font-semibold text-lg">
              Die Bewertung ist kostenlos und unverbindlich, auch für Autos mit Schäden.
            </p>
            <ScrollToTopButton className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200">
              Jetzt kostenlos Auto bewerten
            </ScrollToTopButton>
          </div>
        </div>

        <FAQSection title="Häufige Fragen rund um den Autoverkauf" faqs={RATGEBER_FAQS} sectionId="faq-ratgeber" />
      </div>
    </div>
  );
}
