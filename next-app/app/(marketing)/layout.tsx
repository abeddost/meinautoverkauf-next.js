import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsentManager from '@/components/ConsentManager';
import ScrollToContent from '@/components/ScrollToContent';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="bg-gray-50 flex flex-col min-h-screen selection:bg-brand-orange selection:text-white">
      <ScrollToContent />
      {/* dot-grid background matching Vite App.tsx */}
      <div
        className="hidden md:block fixed inset-0 opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <Header />
      <main className="flex-1 relative z-10 pb-20 md:pb-0">{children}</main>
      <Footer />
      <ConsentManager />
    </div>
    </>
  );
}
