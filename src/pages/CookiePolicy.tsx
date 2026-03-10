import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Torna alla home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8 text-sm">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

        <div className="space-y-6 text-foreground/90 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">Titolare del Trattamento</h2>
            <p>
              Eugenio Carlo Fontana<br />
              Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI)<br />
              P.IVA 07097370485 — C.F. FNTGCR88B12A564Z<br />
              Email: <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse e possono essere utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Tipologie di Cookie utilizzati</h2>

            <h3 className="font-medium mt-4 mb-1">Cookie tecnici (necessari)</h3>
            <p>
              Sono cookie indispensabili per il corretto funzionamento del sito. Includono cookie di sessione e cookie funzionali che consentono all'utente di navigare in modo efficiente. Non richiedono il consenso dell'utente.
            </p>

            <h3 className="font-medium mt-4 mb-1">Cookie analitici</h3>
            <p>
              Utilizziamo cookie analitici per raccogliere informazioni in forma aggregata sul numero degli utenti e su come visitano il sito. Questi cookie ci aiutano a migliorare le prestazioni e l'esperienza di navigazione.
            </p>

            <h3 className="font-medium mt-4 mb-1">Cookie di profilazione / marketing</h3>
            <p>
              Questi cookie vengono utilizzati per tracciare la navigazione dell'utente e creare profili sui suoi gusti, abitudini, scelte, ecc. Con questi cookie possono essere trasmessi al terminale dell'utente messaggi pubblicitari in linea con le preferenze già manifestate nella navigazione online. Richiedono il consenso esplicito dell'utente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Cookie di terze parti</h2>
            <p>Il sito potrebbe utilizzare servizi di terze parti che installano cookie propri, tra cui:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Google Analytics — per l'analisi statistica delle visite</li>
              <li>YouTube — per l'incorporamento di video</li>
              <li>Social network (Facebook, Instagram) — per pulsanti di condivisione</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Gestione dei Cookie</h2>
            <p>
              L'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser, impedendone l'installazione. Attenzione: disabilitare i cookie tecnici potrebbe compromettere la fruizione ottimale del sito.
            </p>
            <p className="mt-2">
              Per maggiori informazioni sulla gestione dei cookie nei diversi browser:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/help/17442" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Diritti dell'utente</h2>
            <p>
              Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR), l'utente può esercitare i propri diritti (accesso, rettifica, cancellazione, portabilità, opposizione) scrivendo a{" "}
              <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Riferimenti normativi</h2>
            <p>
              Regolamento UE 2016/679 (GDPR), D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018, Provvedimento del Garante Privacy n. 229/2014, Linee Guida cookie e altri strumenti di tracciamento del 10 giugno 2021.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
