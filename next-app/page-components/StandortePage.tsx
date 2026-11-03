import Link from 'next/link';
import { BRANCH_LIST, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164, formatBranchAddress, getBranchDirectionsUrl } from '@/lib/branches';
import { CITY_PAGES, type CityPage } from '@/lib/cityPages';
import { DISTANT_CITY_MINUTES } from '@/lib/cityGeo';

const WITHIN_HOUR = CITY_PAGES.filter((city) => city.minutes <= 60);
const WITHIN_90 = CITY_PAGES.filter((city) => city.minutes > 60 && city.minutes <= DISTANT_CITY_MINUTES);
const DISTANT = CITY_PAGES.filter((city) => city.minutes > DISTANT_CITY_MINUTES);

function CityList({ cities }: { cities: CityPage[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
      {cities.map((city) => (
        <li key={city.path}>
          <Link href={city.path} className="flex items-baseline gap-2 py-2 text-sm font-bold text-slate-700 hover:text-brand-orange transition-colors">
            <span className="text-brand-orange">→</span>
            <span>{city.label}</span>
            <span className="text-xs font-medium text-slate-500">ca. {city.minutes} Min.</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function StandortePage() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Zwei Filialen für den Autoankauf
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Die Online-Bewertung funktioniert von überall. Die Übergabe, die Fahrzeugprüfung und der Kaufvertrag finden in einer unserer beiden Filialen statt. Bei der Terminbuchung wählen Sie den Standort selbst.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {BRANCH_LIST.map((branch) => (
            <article key={branch.id} className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h3 className="text-xl font-black text-brand-dark mb-2">Filiale {branch.name}</h3>
              <p className="text-slate-700 font-medium mb-1">{formatBranchAddress(branch)}</p>
              <p className="text-slate-700 font-medium mb-5">
                Telefon:{' '}
                <a href={`tel:${BUSINESS_PHONE_E164}`} className="text-brand-orange font-bold hover:underline">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={getBranchDirectionsUrl(branch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Route öffnen
                </a>
                <Link href={branch.path} className="rounded-xl border border-orange-300 bg-white px-5 py-2.5 text-sm font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Mehr zur Filiale
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-14 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">So funktioniert der Verkauf aus Ihrer Stadt</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-3">
            Sie bewerten Ihr Auto online und buchen danach einen Termin. Die Uhrzeiten liegen zwischen 10 und 18 Uhr. Zur Übergabe bringen Sie Fahrzeugschein, Fahrzeugbrief, Ausweis und alle Schlüssel mit.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Ist Ihr Auto nicht fahrbereit oder wohnen Sie weiter entfernt, rufen Sie uns vor dem Termin an. Dann klären wir, wie die Übergabe ablaufen kann und ob sich der Weg für Ihr Fahrzeug lohnt. Die Fahrzeiten unten sind Richtwerte ohne Stau zur jeweils näheren Filiale.
          </p>
        </section>

        <nav aria-label="Alle Standorte" className="space-y-10">
          <section>
            <h2 className="text-lg font-black text-brand-dark mb-3">Bis etwa eine Stunde Fahrzeit</h2>
            <CityList cities={WITHIN_HOUR} />
          </section>
          <section>
            <h2 className="text-lg font-black text-brand-dark mb-3">Etwa 60 bis 90 Minuten Fahrzeit</h2>
            <CityList cities={WITHIN_90} />
          </section>
          <section>
            <h2 className="text-lg font-black text-brand-dark mb-3">Mehr als 90 Minuten Fahrzeit</h2>
            <p className="text-sm text-slate-600 font-medium mb-3">Hier lohnt sich ein kurzer Anruf vor der Anreise.</p>
            <CityList cities={DISTANT} />
          </section>
        </nav>
      </div>
    </div>
  );
}
