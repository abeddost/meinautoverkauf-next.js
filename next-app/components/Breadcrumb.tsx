import Link from 'next/link';

export interface BreadcrumbTrailItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbTrailItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-4 text-sm text-slate-500">
    <ol className="flex flex-wrap items-center gap-1">
      {items.map((item, index) => (
        <li key={item.href} className="flex items-center gap-1">
          {index > 0 && <span aria-hidden="true">/</span>}
          {index === items.length - 1 ? (
            <span aria-current="page" className="font-semibold text-slate-700">
              {item.name}
            </span>
          ) : (
            <Link href={item.href} className="transition-colors hover:text-brand-orange">
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
