import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ConfirmationStep from '../components/ConfirmationStep';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MetaTags
        title="Vielen Dank! | Meinautoverkauf.de"
        description="Ihre Buchung war erfolgreich. Wir haben Ihnen eine Bestätigung per E-Mail gesendet."
        canonicalUrl="/vielen-dank"
      />
      <header className="flex-shrink-0 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-orange transition-colors"
            aria-label="Zur Startseite"
          >
            <img src="/logo.png" alt="Meinautoverkauf.de" className="h-8 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span>Meinautoverkauf.de</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-16">
          <ConfirmationStep onReset={() => navigate('/')} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConfirmationPage;
