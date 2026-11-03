import Link from 'next/link';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection';
import { AUTO_BEWERTEN_FAQS } from '@/lib/faqContent';

export default function AutoBewertenPage() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[18%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[12%] w-72 h-72 bg-orange-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-[20%] w-64 h-64 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-[55%] left-[8%] w-40 h-40 border-2 border-blue-200/40 rounded-full"></div>
        <div className="absolute top-24 left-24 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[35%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16 lg:py-24 max-w-4xl z-10">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-20 -right-10 w-64 h-64 bg-brand-orange/50 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-16 w-72 h-72 bg-blue-500/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-8 w-56 h-56 bg-slate-200/70 rounded-full blur-3xl"></div>
          <img
            src="/elements/auto-wert-ermitteln.webp"
            alt=""
            width={256}
            height={256}
            className="absolute top-6 right-0 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-[0.12]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight">
            So ermitteln Sie den Wert Ihres Autos
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-brand-orange pl-6">
            Sie fragen sich: "Was ist mein Auto wert?" oder "Wie viel ist mein Auto wert?" Mit unserem kostenlosen KI-gestützten Bewertungstool können Sie Ihr Auto online kostenlos bewerten – schnell, transparent und unverbindlich in ganz Deutschland.
          </p>

          <section id="auto-bewerten-content" className="prose max-w-none text-slate-700 space-y-8 relative">
          <img
            src="/elements/auto-bewerten.webp"
            alt=""
            width={240}
            height={240}
            className="absolute -top-8 right-6 w-36 h-36 sm:w-44 sm:h-44 lg:w-60 lg:h-60 opacity-[0.12] pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Auto bewerten lassen – warum ist das so wichtig?</h2>
          <p className="font-medium leading-relaxed">
            Bevor Sie Ihr <Link href="/auto-verkaufen" className="text-brand-orange font-bold hover:underline">Auto verkaufen</Link>, sollten Sie den aktuellen Marktwert kennen. Ein zu hoher Preis schreckt Käufer ab, ein zu niedriger Preis kostet Sie bares Geld. Wenn Sie Ihr <strong>Auto bewerten</strong> lassen möchten, stehen Ihnen verschiedene Wege offen – von klassischen Gutachtern bis hin zu modernen Online-Tools. Bei Meinautoverkauf.de nutzen wir dafür eine KI-gestützte Online-Bewertung und prüfen das Fahrzeug vor dem Kauf zusätzlich vor Ort.
          </p>
          <p className="font-medium leading-relaxed">
            Die Frage "<strong>Was ist mein Auto wert?</strong>" lässt sich nicht pauschal beantworten. Der Wert eines Fahrzeugs hängt von zahlreichen Faktoren ab – von der Laufleistung über den Zustand bis hin zu regionalen Markttrends. Unsere KI-basierte Bewertung berücksichtigt Ihre Fahrzeugdaten und aktuelle Online-Angebote und nennt Ihnen einen geschätzten Ankaufspreis mit Preisspanne.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Faktoren, die den Autowert beeinflussen</h2>
          <p className="font-medium leading-relaxed">
            Wenn Sie Ihr <strong>Auto schätzen lassen</strong> möchten, sollten Sie wissen, welche Kriterien den Wert bestimmen. Diese Faktoren sind besonders wichtig:
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">1. Laufleistung – Der Kilometerstand als Wertindikator</h3>
          <p className="font-medium leading-relaxed">
            Die Laufleistung ist einer der entscheidendsten Faktoren bei der Fahrzeugbewertung. Je höher der Kilometerstand, desto stärker der Verschleiß an Motor, Getriebe und Fahrwerk. Fahrzeuge mit niedriger Laufleistung erzielen deutlich höhere Preise. Als Faustregel gilt: Ein PKW verliert bei durchschnittlicher Nutzung (ca. 15.000 km pro Jahr) kontinuierlich an Wert, wobei die ersten Jahre den größten Wertverlust bedeuten.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">2. Alter und Erstzulassung</h3>
          <p className="font-medium leading-relaxed">
            Das Fahrzeugalter spielt eine zentrale Rolle. Als Richtwert gelten rund 18 bis 25 Prozent Wertverlust im ersten Jahr und oft 33 bis 50 Prozent nach drei Jahren. Danach verlangsamt sich der Wertverlust. Eine Orientierung gibt unser <Link href="/wertverlust-auto-rechner" className="text-brand-orange font-bold hover:underline">Wertverlust-Rechner</Link>. Manche Modelle und Jahrgänge sind gefragter als andere und halten ihren Wert besser.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">3. Ausstattung und Sonderausstattung</h3>
          <p className="font-medium leading-relaxed">
            Die Ausstattung kann den Wert erheblich steigern. Premium-Features wie Ledersitze, Navigationssysteme, Assistenzsysteme (Spurhalteassistent, Einparkhilfe), Schiebedach oder hochwertige Soundsysteme erhöhen den Wiederverkaufswert deutlich. Fahrzeuge der Basis-Ausstattung sind oft schwerer zu verkaufen und erzielen niedrigere Preise. Auch die Motorisierung spielt eine Rolle: Dieselfahrzeuge haben in den letzten Jahren an Wert verloren, während Hybrid- und Elektrofahrzeuge zunehmend gefragt sind.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">4. Zustand – Optik und Technik</h3>
          <p className="font-medium leading-relaxed">
            Der Gesamtzustand ist entscheidend. Kratzer, Dellen, Steinschläge, Rost oder Innenraumschäden mindern den Wert erheblich. Ebenso wichtig ist der technische Zustand: Funktionieren alle Systeme einwandfrei? Gibt es versteckte Mängel? Ein gepflegtes Fahrzeug mit lückenlosem Scheckheft erzielt deutlich höhere Preise als ein vernachlässigtes Auto. Bei unserer Bewertung können Sie den Zustand detailliert angeben, sodass wir eine faire Einschätzung treffen können.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">5. Wartungshistorie und Scheckheft</h3>
          <p className="font-medium leading-relaxed">
            Ein lückenloses Scheckheft ist Gold wert. Es belegt, dass das Fahrzeug regelmäßig gewartet wurde und alle Inspektionen durchgeführt wurden. Käufer und Händler honorieren dies mit höheren Preisen, da das Risiko für teure Folgeschäden sinkt. Fehlt das Scheckheft oder wurden Wartungsintervalle nicht eingehalten, kann der Wert spürbar sinken.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">6. Regionale Markttrends</h3>
          <p className="font-medium leading-relaxed">
            Der Standort spielt eine Rolle. In städtischen Ballungsräumen sind Kleinwagen und kompakte SUVs gefragter, während auf dem Land größere Fahrzeuge oder Geländewagen beliebter sind. Im Rhein-Main-Gebiet finden Sie unseren <Link href="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">Autoankauf Frankfurt</Link>, <Link href="/autoankauf-wiesbaden" className="text-brand-orange font-bold hover:underline">Autoankauf Wiesbaden</Link> und <Link href="/autoankauf-mainz" className="text-brand-orange font-bold hover:underline">Autoankauf Mainz</Link>.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Traditionelle Bewertung vs. KI-gestützte Autobewertung</h2>
          <p className="font-medium leading-relaxed">
            Es gibt mehrere Wege, den Wert eines Autos einzuschätzen. Jeder hat seine Stärken:
          </p>
          <ul className="list-disc pl-6 space-y-3 font-medium">
            <li><strong>Schwacke und DAT:</strong> Etablierte Marktwerte, die vor allem Handel und Gutachter nutzen.</li>
            <li><strong>Gutachter:</strong> Besonders genau, aber mit Kosten und Terminaufwand verbunden. Sinnvoll bei hochwertigen Fahrzeugen oder Streitfällen.</li>
            <li><strong>Händlerangebote:</strong> Enthalten die Marge des Händlers und liegen deshalb unter dem Privatverkaufspreis.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Was unsere Online-Bewertung leistet</h3>
          <p className="font-medium leading-relaxed">
            Unsere KI recherchiert aktuelle Online-Angebote vergleichbarer Fahrzeuge und gleicht sie mit Ihren Angaben ab. Dadurch erhalten Sie:
          </p>
          <ul className="list-disc pl-6 space-y-3 font-medium">
            <li><strong>Aktuellen Marktbezug:</strong> Die Einschätzung orientiert sich an aktuellen Angeboten vergleichbarer Fahrzeuge.</li>
            <li><strong>Preisspanne:</strong> Sie sehen einen geschätzten Preis mit Spanne statt einer Scheingenauigkeit.</li>
            
            <li><strong>Geschwindigkeit:</strong> In 2 Minuten zur vollständigen Bewertung.</li>
            <li><strong>Kostenlos:</strong> Keine versteckten Gebühren, unverbindlich.</li>
          </ul>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Wie funktioniert unsere Auto-Bewertung?</h2>
          <p className="font-medium leading-relaxed">
            Wenn Sie bei uns den Wert Ihres Autos ermitteln lassen möchten, läuft das so ab:
          </p>
          
          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Schritt 1: Fahrzeugdaten eingeben</h3>
          <p className="font-medium leading-relaxed">
            Sie geben grundlegende Informationen ein: Marke, Modell, Erstzulassung, Kilometerstand, Ausstattung und Zustand. Je detaillierter Ihre Angaben, desto besser kann die Einschätzung ausfallen.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Schritt 2: KI-Analyse</h3>
          <p className="font-medium leading-relaxed">
            Unsere KI recherchiert aktuelle Online-Angebote vergleichbarer Fahrzeuge und berücksichtigt Ihre Angaben sowie einen Abschlag für Händlermarge und Risiko. Das Ergebnis ist eine Einschätzung und noch keine verbindliche Zusage.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Schritt 3: Preis mit Spanne erhalten</h3>
          <p className="font-medium leading-relaxed">
            Sie erhalten einen geschätzten Ankaufspreis mit Preisspanne. Den verbindlichen Preis nennen wir nach der Fahrzeugprüfung in der Filiale.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Transparenz und Genauigkeit – unser Versprechen</h2>
          <p className="font-medium leading-relaxed">
            Wenn Sie sich fragen "<strong>Wie viel ist mein Auto wert?</strong>", verdienen Sie eine ehrliche Antwort. Wir setzen auf vollständige Transparenz:
          </p>
          <ul className="list-disc pl-6 space-y-3 font-medium">
            <li><strong>Keine versteckten Kosten:</strong> Die Bewertung ist kostenlos.</li>
            <li><strong>Unverbindlich:</strong> Sie müssen nicht verkaufen, wenn Ihnen das Angebot nicht zusagt.</li>
            <li><strong>Nachvollziehbar:</strong> Wir erklären, welche Faktoren in den Preis einfließen.</li>
            <li><strong>Offen:</strong> Weicht der Zustand von Ihren Angaben ab, nennen wir den angepassten Preis vor dem Vertrag.</li>
          </ul>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Händler-Ankaufspreis vs. Privatverkauf</h2>
          <p className="font-medium leading-relaxed">
            Viele Autobesitzer sind überrascht, dass Händler-Angebote deutlich niedriger ausfallen als Privatverkaufspreise. Das hat mehrere Gründe:
          </p>
          <ul className="list-disc pl-6 space-y-3 font-medium">
            <li><strong>Aufbereitung:</strong> Händler müssen das Fahrzeug professionell aufbereiten (Reinigung, kleine Reparaturen, TÜV).</li>
            <li><strong>Garantie:</strong> Gewerbliche Verkäufer müssen Gewährleistung bieten.</li>
            <li><strong>Standzeit:</strong> Bis zum Verkauf entstehen Kosten für Stellplatz, Versicherung und Verwaltung.</li>
            <li><strong>Marge:</strong> Der Händler muss einen Gewinn erzielen.</li>
          </ul>
          <p className="font-medium leading-relaxed mt-6">
            Der Händler-Ankaufspreis liegt daher spürbar unter dem privaten Verkaufspreis. Wie groß der Abstand ist, hängt vom Fahrzeug ab. Dafür sparen Sie Zeit, Nerven und das Risiko unseriöser Käufer. Wer genug Zeit hat, kann mit einem Privatverkauf oft mehr erzielen. Unser <Link href="/ratgeber/auto-privat-oder-haendler-verkaufen" className="text-brand-orange font-bold hover:underline">Vergleich Privatverkauf oder Händler</Link> hilft bei der Entscheidung.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Wie lange ist die Bewertung gültig?</h2>
          <p className="font-medium leading-relaxed">
            Der Gebrauchtwagenmarkt ist dynamisch. Preise schwanken aufgrund von Angebot und Nachfrage, saisonalen Trends (Cabrios im Sommer teurer) und wirtschaftlichen Faktoren. Unsere Online-Bewertung zeigt den Stand zum Zeitpunkt Ihrer Anfrage und ist unverbindlich. Liegt sie schon länger zurück, empfehlen wir eine neue Bewertung.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mt-12 mb-6">Kostenloser Service – warum?</h2>
          <p className="font-medium leading-relaxed">
            Sie fragen sich vielleicht: Warum bieten wir die Bewertung kostenlos an? Ganz einfach: Wir möchten Ihr Vertrauen gewinnen. Wenn Sie mit unserer Einschätzung zufrieden sind und sich entscheiden, Ihr Auto über uns zu verkaufen, profitieren beide Seiten. Aber es gibt keine Verpflichtung. Selbst wenn Sie nur wissen möchten, was Ihr Auto wert ist, ohne es sofort zu verkaufen – nutzen Sie unseren Service gerne. Es entstehen keinerlei Kosten oder Verpflichtungen.
          </p>
        </section>
        </div>

        <div className="my-12 bg-brand-dark rounded-[2.5rem] p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-orange-200 font-bold tracking-wide uppercase text-xs mb-2">Kostenlos & unverbindlich</p>
            <h2 className="text-xl lg:text-2xl font-black mb-3">Jetzt Auto bewerten in 2 Minuten</h2>
            <p className="text-slate-200 mb-6 font-semibold text-sm lg:text-base">
              Erhalten Sie eine kostenlose Einschätzung Ihres Fahrzeugwerts, ohne Verkaufsverpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-xs lg:text-sm text-slate-200">
              <span className="bg-white/10 px-3 py-1.5 rounded-full">Dauer: ca. 2 Minuten</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full">100% kostenlos</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full">Sofort-Ergebnis</span>
            </div>
            <ScrollToTopButton className="w-full sm:w-auto bg-brand-orange text-slate-900 px-8 py-3.5 rounded-2xl font-bold text-sm lg:text-base hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] transform duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/40">
              Auto jetzt bewerten
            </ScrollToTopButton>
            <p className="text-slate-300 text-xs mt-3">Keine Verpflichtung. Sie entscheiden, ob Sie verkaufen.</p>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl"></div>
          <div className="absolute -top-28 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <FAQSection
          title="Häufig gestellte Fragen zur Autobewertung"
          sectionId="faq-autobewertung"
          className="mt-12"
          faqs={AUTO_BEWERTEN_FAQS}
        />

        <section className="mt-14 bg-white rounded-3xl border border-slate-100 p-8 max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-black text-brand-dark mb-4">Ratgeber zu Preisfaktoren und Wertermittlung</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/wertverlust-auto-rechner', label: 'Wertverlust-Rechner' },
              { href: '/ratgeber/kilometerstand-scheckheft-vorbesitzer-preis', label: 'Preisfaktoren im Vergleich' },
              { href: '/ratgeber/auto-online-inserieren-tipps-bilder', label: 'Inserat und Bilder optimieren' },
              { href: '/ratgeber/auto-mit-motorschaden-verkaufen', label: 'Motorschaden richtig bewerten' },
              { href: '/ratgeber/unfallwagen-verkaufen', label: 'Unfallwagen fair einordnen' },
              { href: '/ratgeber/autoankauf-ohne-tuev', label: 'Preis ohne TÜV verstehen' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm"
              >
                → {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 relative overflow-hidden">
          <img
            src="/elements/auto-wert-ermitteln.webp"
            alt=""
            width={256}
            height={256}
            className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-[0.08] pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6 text-center">Fazit: Den Wert Ihres Autos einfach ermitteln</h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-4">
            Die Frage "<strong>Was ist mein Auto wert?</strong>" oder "<strong>Wie viel ist mein Auto wert?</strong>" lässt sich online schnell eingrenzen. Mit unserem kostenlosen KI-gestützten Bewertungstool erhalten Sie in wenigen Minuten eine Einschätzung, ganz ohne Verpflichtungen.
          </p>
          <p className="text-slate-700 font-medium leading-relaxed mb-4">
            Egal ob Sie Ihr <strong>Auto bewerten</strong> lassen möchten, um es zu <Link href="/auto-verkaufen" className="text-brand-orange font-bold hover:underline">verkaufen</Link>, oder einfach nur neugierig sind – die Online-Bewertung steht Ihnen jederzeit zur Verfügung.
          </p>
          <p className="text-slate-700 font-medium leading-relaxed mb-6">
            Starten Sie jetzt Ihre kostenlose Bewertung und erfahren Sie, was Ihr Fahrzeug wirklich wert ist. Kostenlos und in etwa 2 Minuten.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-slate-200">
            <Link href="/auto-verkaufen" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Auto verkaufen</Link>
            <Link href="/vorteile" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Ihre Vorteile</Link>
            <Link href="/ratgeber" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Verkaufs-Ratgeber</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
