import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import BookingStep from '../components/BookingStep';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';
import { CarDetails, ValuationResult } from '../types';

const BookingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { carDetails?: CarDetails; valuation?: ValuationResult } | null;
  const carDetails = state?.carDetails;
  const valuation = state?.valuation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!carDetails || !valuation) {
      navigate('/', { replace: true });
    }
  }, [carDetails, valuation, navigate]);

  if (!carDetails || !valuation) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MetaTags
        title="Termin zur Übergabe buchen | Meinautoverkauf.de"
        description="Wählen Sie Ihren Wunschtermin für die Fahrzeugübergabe – Filial-Abgabe oder Haus-Abholung."
        canonicalUrl="/termin-buchen"
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

      <main className="flex-grow py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-0 sm:px-4 py-6 sm:py-10 lg:py-16">
          <BookingStep
            onComplete={() => navigate('/vielen-dank')}
            onBack={() => navigate('/bewertung-ergebnis', { state: { carDetails, valuation } })}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
