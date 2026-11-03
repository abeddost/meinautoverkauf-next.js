import { BRANCHES, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164, formatBranchAddress, getBranchDirectionsUrl } from '@/lib/branches';
import { CITY_DRIVE_TO_BRANCH, DISTANT_CITY_MINUTES } from '@/lib/cityGeo';

interface Props {
  slug: string;
  cityName: string;
}

const formatDriveTime = (minutes: number): string => {
  if (minutes < 90) return `ca. ${minutes} Minuten`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes - hours * 60;
  const roundedRest = Math.round(rest / 15) * 15;
  if (roundedRest === 0) return `ca. ${hours} Stunden`;
  if (roundedRest === 60) return `ca. ${hours + 1} Stunden`;
  return `ca. ${hours} Stunden ${roundedRest} Minuten`;
};

/**
 * States where the handover really happens. This is the part of a city page that only
 * real business data can provide: the branch address and the actual driving distance.
 */
export default function CityHandoverInfo({ slug, cityName }: Props) {
  const drive = CITY_DRIVE_TO_BRANCH[slug];
  if (!drive) return null;

  const branch = BRANCHES[drive.branch];
  const isBranchCity = slug === drive.branch;
  const isDistant = drive.minutes > DISTANT_CITY_MINUTES;

  return (
    <div className="container mx-auto px-4 pt-10">
      <section className="mx-auto max-w-4xl rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
        <h2 className="text-xl font-black text-brand-dark mb-3">
          {isBranchCity ? `Unsere Filiale in ${branch.name}` : `So läuft die Übergabe aus ${cityName}`}
        </h2>
        {isBranchCity ? (
          <p className="text-slate-700 font-medium leading-relaxed mb-3">
            Sie übergeben Ihr Fahrzeug direkt bei uns: <strong>{formatBranchAddress(branch)}</strong>. Den Termin
            buchen Sie nach der Online-Bewertung selbst, Uhrzeiten stehen zwischen 10 und 18 Uhr zur Wahl.
          </p>
        ) : (
          <p className="text-slate-700 font-medium leading-relaxed mb-3">
            Sie übergeben Ihr Fahrzeug in unserer Filiale in {branch.name}: <strong>{formatBranchAddress(branch)}</strong>.
            Von {cityName} sind es rund {drive.km} km, ohne Stau {formatDriveTime(drive.minutes)} Fahrt. Den Termin buchen
            Sie nach der Online-Bewertung selbst, Uhrzeiten stehen zwischen 10 und 18 Uhr zur Wahl.
          </p>
        )}
        {isDistant && (
          <p className="text-slate-700 font-medium leading-relaxed mb-3">
            Das ist eine längere Strecke. Ob sie sich lohnt, hängt vom Wert Ihres Fahrzeugs ab. Die Bewertung ist
            kostenlos und unverbindlich, und vor einer Anreise klären wir gern telefonisch, ob der Weg für Sie sinnvoll ist.
          </p>
        )}
        <p className="text-slate-700 font-medium leading-relaxed mb-4">
          Ihr Auto ist nicht fahrbereit? Rufen Sie uns vorher unter{' '}
          <a href={`tel:${BUSINESS_PHONE_E164}`} className="text-brand-orange font-bold hover:underline">
            {BUSINESS_PHONE_DISPLAY}
          </a>{' '}
          an, dann besprechen wir die Übergabe.
        </p>
        <a
          href={getBranchDirectionsUrl(branch)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 text-sm font-bold text-brand-dark hover:border-brand-orange transition-colors"
        >
          Route zur Filiale {branch.name} öffnen
        </a>
      </section>
    </div>
  );
}
