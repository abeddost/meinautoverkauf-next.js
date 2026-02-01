import React from 'react';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[12%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[10%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-blue-200/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl relative z-10">
        <div className="bg-white/90 backdrop-blur rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-slate-100">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8">Datenschutzerklärung</h1>

          <div className="space-y-10 text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">1. Allgemeine Hinweise</h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
                meinautoverkauf.de besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">2. Verantwortliche Stelle</h2>
              <p>Meinautoverkauf.de</p>
              <p>Autohaus HF – Idris Sarwari</p>
              <p>Am Kuemmerling 41a</p>
              <p>55294 Bodenheim</p>
              <p>Deutschland</p>
              <p>Telefon: <a className="text-brand-orange font-bold hover:underline" href="tel:+4917662878366">0176 62878366</a></p>
              <p>E-Mail: <a className="text-brand-orange font-bold hover:underline" href="mailto:info@meinautoverkauf.de">info@meinautoverkauf.de</a></p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">3. Rechtsgrundlagen der Verarbeitung</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. technische Stabilität und Sicherheit)</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, sofern erteilt)</li>
                <li>§ 25 TTDSG (Einsatz technisch notwendiger Cookies, sofern erforderlich)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">4. Hosting</h2>
              <p>
                Unsere Website wird bei Vercel gehostet. Der Hoster verarbeitet personenbezogene Daten (z. B. Server-Log-Dateien) in unserem Auftrag.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Datenschutzerklärung des Hosters:{' '}
                <a className="text-brand-orange font-bold hover:underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
              <p>
                Es kann nicht ausgeschlossen werden, dass Daten in Drittländer (z. B. USA) übermittelt werden. Soweit erforderlich, erfolgt die Übermittlung
                auf Grundlage geeigneter Garantien (z. B. Standardvertragsklauseln gemäß Art. 46 DSGVO), sofern diese vom Anbieter bereitgestellt werden.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">5. Server-Log-Dateien</h2>
              <p>
                Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                Dies sind z. B. Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage
                sowie IP-Adresse.
              </p>
              <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">6. Kontakt- und Bewertungsformulare</h2>
              <p>
                Wenn Sie uns über ein Formular kontaktieren oder Ihr Fahrzeug bewerten, verarbeiten wir die von Ihnen eingegebenen Daten (z. B. Name,
                E-Mail-Adresse, Telefonnummer, Fahrzeugdaten, Zustand, Laufleistung, Standort). Zweck ist die Bearbeitung Ihrer Anfrage und ggf. die Erstellung
                eines Angebots.
              </p>
              <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">7. Dateiuploads</h2>
              <p>
                Sofern Sie Dateien (z. B. Fahrzeugfotos) hochladen, werden diese ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">8. E-Mail- und Telefonkontakt</h2>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. b DSGVO.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">9. Cookies</h2>
              <p>
                Wir verwenden keine Tracking- oder Marketing-Cookies. Soweit technisch notwendige Cookies eingesetzt werden, erfolgt dies auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO i. V. m. § 25 Abs. 2 TTDSG.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">10. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
                gegen die Verarbeitung Ihrer personenbezogenen Daten. Außerdem haben Sie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen.
              </p>
              <p>
                Ihnen steht zudem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">11. SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">Stand der Datenschutzerklärung</h2>
              <p>01.02.2026</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
