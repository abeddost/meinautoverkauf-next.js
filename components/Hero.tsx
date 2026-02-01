import React, { useEffect, useMemo, useState } from 'react';
import ValuationForm from './ValuationForm';
import { CarDetails, ValuationResult } from '../types';

interface HeroProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
  headline?: string;
  subheadline?: string;
  accent?: 'home' | 'bewerten' | 'verkaufen' | 'vorteile' | 'ratgeber';
  headlineTag?: 'h1' | 'h2';
}

const PARTICLES = [
  { top: '12%', left: '8%', size: 4, opacity: 0.6, delay: '0s', duration: '16s' },
  { top: '22%', left: '28%', size: 3, opacity: 0.5, delay: '2s', duration: '18s' },
  { top: '8%', left: '52%', size: 2, opacity: 0.5, delay: '1s', duration: '14s' },
  { top: '18%', left: '78%', size: 4, opacity: 0.55, delay: '3s', duration: '20s' },
  { top: '38%', left: '6%', size: 2, opacity: 0.45, delay: '4s', duration: '12s' },
  { top: '44%', left: '18%', size: 3, opacity: 0.5, delay: '5s', duration: '17s' },
  { top: '50%', left: '58%', size: 4, opacity: 0.6, delay: '1.5s', duration: '19s' },
  { top: '62%', left: '82%', size: 3, opacity: 0.5, delay: '0.5s', duration: '15s' },
  { top: '72%', left: '34%', size: 2, opacity: 0.4, delay: '2.5s', duration: '13s' },
  { top: '80%', left: '64%', size: 3, opacity: 0.45, delay: '3.5s', duration: '18s' }
];

const BENEFITS = [
  {
    title: 'Schnelle Abwicklung',
    icon: (
      <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Fairer Marktpreis',
    icon: (
      <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12l8-8 8 8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16v7H4z" />
      </svg>
    )
  },
  {
    title: 'Geprüfte Händler',
    icon: (
      <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
      </svg>
    )
  }
];


const ACCENTS = {
  home: {
    gradientClass: 'from-[#dbe9ff] via-white to-[#ffe1c6]',
    blobTopClass: 'bg-[#c9ddff]',
    blobBottomClass: 'bg-[#ffd6b3]',
    radial:
      'radial-gradient(circle at 85% 35%, rgba(255,204,163,0.75), rgba(255,255,255,0) 50%)'
  },
  bewerten: {
    gradientClass: 'from-[#cfe6ff] via-white to-[#e7f2ff]',
    blobTopClass: 'bg-[#b9d9ff]',
    blobBottomClass: 'bg-[#cfe4ff]',
    radial:
      'radial-gradient(circle at 85% 35%, rgba(148,200,255,0.7), rgba(255,255,255,0) 50%)'
  },
  verkaufen: {
    gradientClass: 'from-[#ffd9bf] via-white to-[#ffd6e4]',
    blobTopClass: 'bg-[#ffc9a8]',
    blobBottomClass: 'bg-[#ffc6de]',
    radial:
      'radial-gradient(circle at 85% 35%, rgba(255,179,128,0.7), rgba(255,255,255,0) 50%)'
  },
  vorteile: {
    gradientClass: 'from-[#cfeee0] via-white to-[#daf7ea]',
    blobTopClass: 'bg-[#bfe6d6]',
    blobBottomClass: 'bg-[#c6efdd]',
    radial:
      'radial-gradient(circle at 85% 35%, rgba(120,220,190,0.7), rgba(255,255,255,0) 50%)'
  },
  ratgeber: {
    gradientClass: 'from-[#f2e6c9] via-white to-[#ffe7c5]',
    blobTopClass: 'bg-[#e6d6b2]',
    blobBottomClass: 'bg-[#f4d9b5]',
    radial:
      'radial-gradient(circle at 85% 35%, rgba(230,186,120,0.7), rgba(255,255,255,0) 50%)'
  }
} as const;

const Hero: React.FC<HeroProps> = ({ onValuationComplete, headline, subheadline, accent, headlineTag }) => {
  const [carTransform, setCarTransform] = useState({ tiltX: 0, tiltY: 0, offsetY: 0 });
  const heroHeadline = headline ?? 'Auto verkaufen online – Einfach, schnell & stressfrei';
  const heroSubheadline = subheadline ?? 'Autoankauf – Wir kaufen Ihr Auto zum fairen Preis';
  const heroAccent = ACCENTS[accent ?? 'home'];
  const DesktopHeadlineTag = headlineTag ?? 'h1';

  useEffect(() => {
    let raf: number | null = null;

    const handleScroll = () => {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(() => {
        const offsetY = Math.min(14, window.scrollY * 0.04);
        setCarTransform(prev => ({ ...prev, offsetY }));
        raf = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (raf !== null) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const tiltX = ((y - rect.height / 2) / rect.height) * -6;
    const tiltY = ((x - rect.width / 2) / rect.width) * 8;
    setCarTransform(prev => ({ ...prev, tiltX, tiltY }));
  };

  const handleMouseLeave = () => {
    setCarTransform(prev => ({ ...prev, tiltX: 0, tiltY: 0 }));
  };

  const carStyle = useMemo(
    () => ({
      transform: `translateY(${carTransform.offsetY}px) rotateX(${carTransform.tiltX}deg) rotateY(${carTransform.tiltY}deg)`
    }),
    [carTransform]
  );

  const reflectionStyle = useMemo(
    () => ({
      transform: `translateY(${carTransform.offsetY + 18}px) scaleY(-1)`
    }),
    [carTransform.offsetY]
  );

  return (
    <section
      id="bewerten"
      className={`relative bg-gradient-to-br ${heroAccent.gradientClass} overflow-hidden min-h-[100vh] -mt-16 lg:-mt-20 pt-16 lg:pt-20 flex flex-col`}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/hero%20section.png')" }}
        ></div>
        <div className={`absolute -top-32 right-[-80px] h-[420px] w-[420px] rounded-full ${heroAccent.blobTopClass} blur-3xl opacity-85 animate-float-slow`}></div>
        <div className={`absolute -bottom-40 left-[-120px] h-[520px] w-[520px] rounded-full ${heroAccent.blobBottomClass} blur-3xl opacity-85 animate-float-slower`}></div>
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: heroAccent.radial
          }}
        ></div>
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 280 C 220 250 360 310 520 280 C 740 240 920 290 1100 260 C 1220 240 1340 270 1400 290" stroke="#b2c5e4" strokeWidth="2" strokeLinecap="round" />
          <path d="M0 340 C 220 310 360 370 520 340 C 740 300 920 350 1100 320 C 1220 300 1340 330 1400 350" stroke="#c6d5ec" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 640 C 420 600 720 610 1020 640" stroke="#97aed2" strokeWidth="2" strokeDasharray="8 14" strokeLinecap="round" />
          <path d="M220 700 C 500 680 900 680 1180 700" stroke="#97aed2" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#cdd8ef]/60 via-transparent to-transparent"></div>
        <svg className="absolute bottom-0 right-0 w-[60%] h-[220px] opacity-35" viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 160 L60 130 L120 150 L180 120 L240 140 L300 110 L360 130 L420 100 L480 120 L540 90 L600 110 L700 80 V220 H0 Z" fill="url(#skyline)" />
          <defs>
            <linearGradient id="skyline" x1="0" y1="80" x2="0" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b9c7e1" stopOpacity="0.8" />
              <stop offset="1" stopColor="#b9c7e1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 pointer-events-none">
          {PARTICLES.map((particle, index) => (
            <span
              key={index}
              className="absolute rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-particle-float"
              style={{
                top: particle.top,
                left: particle.left,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:flex flex-grow items-center relative py-6">
        <div className="container mx-auto px-8 lg:px-16 z-10 max-w-7xl">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-7 animate-in fade-in slide-in-from-left-8 duration-1000 overflow-visible">
              <div className="max-w-2xl mt-1">
                <DesktopHeadlineTag className="text-[38px] lg:text-[46px] font-black leading-[1.12] tracking-tight text-[#1e293b]">
                  {heroHeadline}
                </DesktopHeadlineTag>
                <p className="mt-3 text-base lg:text-lg text-slate-600 font-medium max-w-lg">
                  {heroSubheadline}
                </p>
              </div>

              <div className="relative mt-0 overflow-visible">
                <div className="absolute -bottom-12 left-28 right-0 h-32 rounded-full bg-orange-100/70 blur-3xl"></div>
                <div
                  className="relative overflow-visible"
                  style={{ perspective: '900px' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src="/bmw.png"
                    alt="BMW Car"
                    className="relative z-10 w-[190%] -ml-[22%] h-auto max-h-[230px] object-contain transform-gpu transition-transform duration-200 drop-shadow-[0_50px_80px_rgba(15,23,42,0.32)]"
                    style={carStyle}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <img
                    src="/bmw.png"
                    alt="BMW Car Reflection"
                    className="absolute left-0 right-0 top-[64%] w-[190%] -ml-[22%] h-auto max-h-[230px] object-contain opacity-25 blur-sm"
                    style={{
                      ...reflectionStyle,
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(15,23,42,0.4), transparent)',
                      maskImage: 'linear-gradient(to bottom, rgba(15,23,42,0.4), transparent)'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="mt-0 grid grid-cols-3 gap-2">
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/70 bg-white/70 px-2.5 py-2.5 shadow-[0_14px_24px_-18px_rgba(15,23,42,0.45)] backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-white ring-1 ring-orange-200/70">
                        {benefit.icon}
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 leading-tight">{benefit.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-5 flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="w-full max-w-[420px] scale-[0.95] origin-top">
                <ValuationForm onValuationComplete={onValuationComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col pt-4 pb-6 min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4 z-10 flex-grow flex flex-col">
          <div className="text-left mb-4">
            <h2 className="text-[24px] sm:text-[26px] font-black leading-[1.15] tracking-tight text-[#1e293b]">
              {heroHeadline}
            </h2>
            <p className="mt-3 text-base text-slate-600 font-medium">
              {heroSubheadline}
            </p>
          </div>

          <div className="relative mb-4 flex justify-center">
            <div className="relative w-[95%] max-w-[380px]">
              <div className="absolute -bottom-2 left-10 right-10 h-12 bg-orange-100/70 blur-2xl rounded-full"></div>
              <img
                src="/bmw.png"
                alt="BMW Car"
                className="relative w-full h-auto max-h-[200px] object-contain drop-shadow-[0_26px_40px_rgba(15,23,42,0.28)]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ValuationForm onValuationComplete={onValuationComplete} />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/80 bg-white/85 px-2 py-3 shadow-[0_8px_16px_-8px_rgba(15,23,42,0.25)] backdrop-blur"
              >
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-white ring-1 ring-orange-200/70 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="text-[10px] font-bold text-slate-800 leading-tight">{benefit.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(18px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatSlower {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-22px); }
          100% { transform: translateY(0px); }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-14px) translateX(10px); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
        }
        .animate-float-slow { animation: floatSlow 16s ease-in-out infinite; }
        .animate-float-slower { animation: floatSlower 20s ease-in-out infinite; }
        .animate-particle-float { animation: particleFloat 14s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
