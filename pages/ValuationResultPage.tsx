import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ValuationResults from '../components/ValuationResults';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';
import { CarDetails, ValuationResult } from '../types';

const ValuationResultPage: React.FC = () => {
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
        title="Ihr Ankauf-Angebot | Meinautoverkauf.de"
        description="Ihr persönliches Ankauf-Angebot – fair, transparent und sofort gültig."
        canonicalUrl="/bewertung-ergebnis"
      />
      {/* Minimal top bar: logo link only */}
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
        <div className="max-w-6xl mx-auto">
          <ValuationResults
            valuation={valuation}
            carDetails={carDetails}
            onNext={() => navigate('/termin-buchen', { state: { carDetails, valuation } })}
            onBack={() => navigate('/')}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ValuationResultPage;
