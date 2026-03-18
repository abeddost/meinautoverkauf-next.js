import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung von Meinautoverkauf.de – Informationen zu Datenverarbeitung, Analytics, Cookies und Ihren Rechten.',
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[12%] right-[12%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl" />
        <div className="absolute bottom-24 left-[10%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl" />
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full" />
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-blue-200/40 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl relative z-10">
        <div className="bg-white/90 backdrop-blur rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-slate-100">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">1. Allgemeine Hinweise</h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie unsere Website meinautoverkauf.de besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">2. Verantwortliche Stelle</h2>
              <p>Meinautoverkauf.de</p>
              <p>Autohaus HF – Idris Sarwari</p>
              <p>Am Kuemmerling 41a</p>
              <p>55294 Bodenheim</p>
              <p>Deutschland</p>
              <p>
                Telefon:{' '}
                <a className="text-brand-orange font-bold hover:underline" href="tel:+4917662878366">
                  0176 62878366
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a className="text-brand-orange font-bold hover:underline" href="mailto:info@meinautoverkauf.de">
                  info@meinautoverkauf.de
                </a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">3. Rechtsgrundlagen der Verarbeitung</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen, z. B. Angebotsanfragen)</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TTDSG (Einwilligung für optionale Analytics)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO i. V. m. § 25 Abs. 2 TTDSG (technisch notwendige Speicherung)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">4. Hosting</h2>
              <p>
                Unsere Website wird bei Vercel gehostet. Der Hoster verarbeitet personenbezogene Daten (z. B.
                Server-Log-Dateien) in unserem Auftrag. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Datenschutzerklärung des Hosters:{' '}
                <a
                  className="text-brand-orange font-bold hover:underline"
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">5. Server-Log-Dateien</h2>
              <p>
                Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die
                Ihr Browser automatisch an uns übermittelt. Dazu gehören insbesondere Browsertyp, Betriebssystem,
                Referrer-URL, Uhrzeit der Anfrage und IP-Adresse.
              </p>
              <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
            </section>

            <section className="space-y-3" id="cookie-einstellungen">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">
                6. Einwilligungsverwaltung (Cookie-Einstellungen)
              </h2>
              <p>
                Beim ersten Besuch unserer Website können Sie entscheiden, ob optionale Analytics sowie Google Ads
                Conversion- und Ereignis-Tracking aktiviert werden sollen. Ihre Auswahl wird lokal auf Ihrem
                Endgerät gespeichert, damit wir Ihre Präferenz bei zukünftigen Besuchen berücksichtigen können.
              </p>
              <p>
                Sie können Ihre Entscheidung jederzeit über den Link <strong>„Cookie-Einstellungen"</strong> im
                Footer ändern oder widerrufen.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">
                7. Google Analytics 4 und Google Ads Conversion-Tracking (nur mit Einwilligung)
              </h2>
              <p>
                Soweit Sie eingewilligt haben, nutzen wir Google Analytics 4, einen Webanalysedienst der Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Mit derselben Einwilligung aktivieren wir außerdem Google Ads Conversion- und Ereignis-Tracking,
                damit wir die Wirksamkeit unserer Anzeigen messen können.
              </p>
              <p>
                Die Verarbeitung erfolgt nur auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO
                i. V. m. § 25 Abs. 1 TTDSG.
              </p>
              <p>
                Wir setzen Google Consent Mode so ein, dass Google Ads-Daten erst nach Einwilligung übermittelt
                werden (ad_storage und ad_user_data). Werbe-Personalisierung (ad_personalization) bleibt
                deaktiviert.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">8. Drittlandtransfer</h2>
              <p>
                Bei Nutzung von Google Analytics und Google Ads Conversion-Tracking kann eine Übermittlung
                personenbezogener Daten in Drittländer (insbesondere die USA) nicht ausgeschlossen werden. Für
                solche Übermittlungen stützt sich Google auf geeignete Garantien, insbesondere
                Standardvertragsklauseln.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">
                9. Kontakt- und Bewertungsformulare
              </h2>
              <p>
                Wenn Sie unser Formular zur Fahrzeugbewertung oder Kontaktaufnahme nutzen, verarbeiten wir Ihre
                Angaben zur Bearbeitung Ihrer Anfrage und zur Angebotserstellung. Rechtsgrundlage ist Art. 6 Abs.
                1 lit. b DSGVO.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">10. Dateiuploads</h2>
              <p>
                Hochgeladene Dateien (z. B. Fahrzeugfotos) werden ausschließlich zur Bearbeitung Ihrer Anfrage
                verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">11. Speicherdauer</h2>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke
                erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Ihre Analytics-Einwilligung
                können Sie jederzeit widerrufen.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">12. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
                personenbezogenen Daten. Außerdem haben Sie das Recht, eine erteilte Einwilligung jederzeit mit
                Wirkung für die Zukunft zu widerrufen.
              </p>
              <p>Ihnen steht zudem ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">13. SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                eine SSL-/TLS-Verschlüsselung.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">
                Stand der Datenschutzerklärung
              </h2>
              <p>25.02.2026</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
