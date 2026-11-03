import Link from 'next/link';
import { BRAND_PAGE_LINKS, SELLING_GUIDE_LINKS, pickLinks } from '@/lib/contextualLinks';

interface NearbyCityLink {
  cityName: string;
  path: string;
}

interface CityLocationInfoProps {
  slug: string;
  state: string;
  nearbyCities: NearbyCityLink[];
}

const LINK_CLASS = 'font-semibold text-brand-orange hover:underline';

const CityLocationInfo: React.FC<CityLocationInfoProps> = ({ slug, state, nearbyCities }) => {
  const guides = pickLinks(SELLING_GUIDE_LINKS, slug, 3);
  const brands = pickLinks(BRAND_PAGE_LINKS, slug, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-700">{state}</span>
          {nearbyCities.length > 0 && (
            <>
              <span aria-hidden="true"> · </span>
              Auch in der Nähe:{' '}
              {nearbyCities.map((city, index) => (
                <span key={city.path}>
                  <Link href={city.path} className={LINK_CLASS}>
                    {city.cityName}
                  </Link>
                  {index < nearbyCities.length - 1 ? ', ' : ''}
                </span>
              ))}
            </>
          )}
        </p>
        <p>
          Passende Ratgeber:{' '}
          {guides.map((link, index) => (
            <span key={link.href}>
              <Link href={link.href} className={LINK_CLASS}>
                {link.label}
              </Link>
              {index < guides.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <p>
          Nach Marke:{' '}
          {brands.map((link, index) => (
            <span key={link.href}>
              <Link href={link.href} className={LINK_CLASS}>
                {link.label}
              </Link>
              {index < brands.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CityLocationInfo;
