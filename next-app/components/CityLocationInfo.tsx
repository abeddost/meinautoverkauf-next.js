import Link from 'next/link';

interface NearbyCityLink {
  cityName: string;
  path: string;
}

interface CityLocationInfoProps {
  state: string;
  nearbyCities: NearbyCityLink[];
}

const CityLocationInfo: React.FC<CityLocationInfoProps> = ({ state, nearbyCities }) => (
  <div className="container mx-auto px-4 py-8">
    <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
      <span className="font-semibold text-slate-700">{state}</span>
      {nearbyCities.length > 0 && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            Auch in der Nähe:{' '}
            {nearbyCities.map((city, index) => (
              <span key={city.path}>
                <Link href={city.path} className="font-semibold text-brand-orange hover:underline">
                  {city.cityName}
                </Link>
                {index < nearbyCities.length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        </>
      )}
    </div>
  </div>
);

export default CityLocationInfo;
