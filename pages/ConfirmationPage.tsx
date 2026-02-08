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
      <header className="hidden sm:block flex-shrink-0 border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Meinautoverkauf Startseite"
          >
            <img
              src="/logo.png"
              alt="MeinAutoVerkauf.de"
              className="h-20 lg:h-24 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow py-4 sm:py-8 lg:py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-0 sm:px-4 py-6 sm:py-10 lg:py-6">
          <ConfirmationStep onReset={() => navigate('/')} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConfirmationPage;
