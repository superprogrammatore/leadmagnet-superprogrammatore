import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Torna alla home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Informativa sulla Privacy</h1>
        <p className="text-muted-foreground mb-8 text-sm">Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)</p>

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
            <h2 className="text-lg font-semibold mb-2">Dati raccolti</h2>
            <p>Il Titolare raccoglie le seguenti categorie di dati personali:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orari di accesso. Questi dati vengono raccolti automaticamente durante la navigazione.</li>
              <li><strong>Dati forniti volontariamente:</strong> nome, cognome, indirizzo email e qualsiasi altra informazione fornita dall'utente tramite form di contatto, iscrizione alla newsletter o richiesta di informazioni.</li>
              <li><strong>Cookie:</strong> per maggiori dettagli si rimanda alla <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Finalità del trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Erogazione del servizio e gestione delle richieste dell'utente</li>
              <li>Invio di comunicazioni informative e promozionali (previo consenso)</li>
              <li>Adempimento di obblighi legali e fiscali</li>
              <li>Analisi statistiche aggregate e anonime per migliorare il servizio</li>
              <li>Gestione di eventuali controversie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Base giuridica del trattamento</h2>
            <p>Il trattamento dei dati si fonda sulle seguenti basi giuridiche:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Consenso</strong> dell'interessato (art. 6.1.a GDPR) per comunicazioni marketing e newsletter</li>
              <li><strong>Esecuzione contrattuale</strong> (art. 6.1.b GDPR) per l'erogazione dei servizi richiesti</li>
              <li><strong>Obbligo legale</strong> (art. 6.1.c GDPR) per adempimenti fiscali e normativi</li>
              <li><strong>Legittimo interesse</strong> (art. 6.1.f GDPR) per analisi statistiche e miglioramento del servizio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Modalità di trattamento</h2>
            <p>
              I dati personali sono trattati con strumenti automatizzati e non automatizzati, con logiche strettamente correlate alle finalità sopra indicate e comunque in modo da garantire la sicurezza e la riservatezza dei dati stessi, nel rispetto delle misure organizzative, fisiche e logiche previste dalle disposizioni vigenti.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Conservazione dei dati</h2>
            <p>
              I dati personali saranno conservati per il tempo necessario al conseguimento delle finalità per le quali sono raccolti, e comunque:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Dati di navigazione: 90 giorni</li>
              <li>Dati per finalità di marketing: fino alla revoca del consenso</li>
              <li>Dati contrattuali e fiscali: 10 anni dalla cessazione del rapporto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Comunicazione e diffusione dei dati</h2>
            <p>
              I dati personali potranno essere comunicati a soggetti terzi solo se necessario per le finalità indicate, tra cui:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fornitori di servizi tecnici (hosting, email marketing, analytics)</li>
              <li>Consulenti fiscali e legali</li>
              <li>Autorità competenti, ove richiesto dalla legge</li>
            </ul>
            <p className="mt-2">I dati non saranno in alcun caso diffusi a terzi non autorizzati.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Trasferimento dati extra-UE</h2>
            <p>
              Alcuni servizi di terze parti utilizzati (es. Google, piattaforme di email marketing) potrebbero comportare il trasferimento dei dati verso Paesi extra-UE. In tali casi, il trasferimento avviene nel rispetto delle garanzie previste dal GDPR (decisioni di adeguatezza, clausole contrattuali standard).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Diritti dell'interessato</h2>
            <p>Ai sensi degli artt. 15-22 del GDPR, l'utente ha il diritto di:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accedere ai propri dati personali</li>
              <li>Ottenere la rettifica o la cancellazione dei dati</li>
              <li>Limitare il trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>)</li>
            </ul>
            <p className="mt-2">
              Per esercitare i propri diritti, scrivere a{" "}
              <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Modifiche alla presente informativa</h2>
            <p>
              Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
