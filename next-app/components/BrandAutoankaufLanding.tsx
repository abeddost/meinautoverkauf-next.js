import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { getBrandSeoContent } from '@/lib/brandSeoContent';

interface Props {
  brandSlug: string;
}

export default function BrandAutoankaufLanding({ brandSlug }: Props) {
  const brand = getBrandSeoContent(brandSlug);

  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-black text-brand-dark mb-3">Markenseite nicht gefunden</h1>
          <p className="text-slate-600 font-medium">
            Für diese Marke liegt aktuell noch keine Autoankauf-Seite vor.
          </p>
        </div>
      </div>
    );
  }

  const { displayName, landing } = brand;

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-28 -right-24 w-[480px] h-[480px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[22%] -left-32 w-[460px] h-[460px] bg-gradient-to-tr from-blue-200/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[12%] right-[10%] w-72 h-72 bg-orange-300/25 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl relative z-10">
        <section className="max-w-5xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
            {landing.h1}
          </h1>
          <div className="space-y-4 mb-8">
            {landing.intro.map((paragraph) => (
              <p key={paragraph} className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
            <h2 className="text-lg lg:text-xl font-black text-brand-dark mb-3">{landing.ctas[0]?.heading}</h2>
            <p className="text-slate-700 font-medium mb-5">{landing.ctas[0]?.text}</p>
            <Link
              href={landing.ctas[0]?.href ?? '/auto-bewerten'}
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange text-white px-6 py-3 font-bold hover:bg-orange-600 transition-colors"
            >
              {landing.ctas[0]?.label ?? `${displayName} bewerten`}
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">{landing.benefitHeading}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {landing.benefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-slate-700 font-medium leading-relaxed">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-5xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">{landing.processHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {landing.processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-sm font-black text-brand-orange uppercase tracking-wider mb-2">Schritt {index + 1}</p>
                <h3 className="text-base font-black text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">{landing.buyTypesHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {landing.buyTypes.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-black text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm overflow-x-auto">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">{landing.comparisonHeading}</h2>
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-700">
                <th className="text-left p-3 font-black">Kriterium</th>
                <th className="text-left p-3 font-black text-brand-orange">Meinautoverkauf.de</th>
                <th className="text-left p-3 font-black">Privatverkauf</th>
                <th className="text-left p-3 font-black">Klassischer Händler</th>
              </tr>
            </thead>
            <tbody>
              {landing.comparisonRows.map((row) => (
                <tr key={row.criterion} className="border-t border-slate-100 align-top">
                  <td className="p-3 font-bold text-brand-dark">{row.criterion}</td>
                  <td className="p-3 text-slate-700">{row.us}</td>
                  <td className="p-3 text-slate-600">{row.privateSale}</td>
                  <td className="p-3 text-slate-600">{row.traditionalDealer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="max-w-5xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">{landing.trustHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {landing.trustPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 font-medium">
                {point}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-6">
            <h3 className="text-lg font-black text-brand-dark mb-2">{landing.ctas[1]?.heading}</h3>
            <p className="text-slate-700 font-medium mb-4">{landing.ctas[1]?.text}</p>
            <Link
              href={landing.ctas[1]?.href ?? '/auto-verkaufen'}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors"
            >
              {landing.ctas[1]?.label ?? `${displayName} verkaufen`}
            </Link>
          </div>
        </section>

        <FAQSection
          title={landing.faqHeading}
          faqs={landing.faqs}
          sectionId={`faq-${brand.slug}`}
          className="max-w-5xl mx-auto bg-transparent py-0"
        />

        <section className="max-w-5xl mx-auto mt-14 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">{landing.internalLinksHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {landing.internalLinks.map((link) => (
              <article key={link.href} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <Link href={link.href} className="text-brand-orange font-black hover:underline">
                  {link.label}
                </Link>
                <p className="text-sm text-slate-600 font-medium mt-2">{link.context}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-6">
            <h3 className="text-lg font-black text-brand-dark mb-2">{landing.ctas[2]?.heading}</h3>
            <p className="text-slate-700 font-medium mb-4">{landing.ctas[2]?.text}</p>
            <Link
              href={landing.ctas[2]?.href ?? '/ratgeber'}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors"
            >
              {landing.ctas[2]?.label ?? 'Mehr erfahren'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
