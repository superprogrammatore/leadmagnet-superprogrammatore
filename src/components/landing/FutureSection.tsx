import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, TrendingUp, Brain, Shield, Target } from "lucide-react";

const FutureSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Attenzione: Il Mondo Sta Cambiando</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Il Programmatore "Vecchia Scuola" è a{" "}
            <span className="text-destructive">Rischio Estinzione</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            L'intelligenza artificiale sta rivoluzionando il mondo dello sviluppo software.
            Chi non si adatta, resterà indietro. Non è una questione di "se", ma di "quando".
          </p>
        </motion.div>

        {/* Timeline / Confronto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {/* Chi resta indietro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-card border border-destructive/20 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-6 h-6 text-destructive" />
              <h3 className="text-xl sm:text-2xl font-bold text-destructive">Chi NON si adatta</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Scrive codice manualmente per ore, quando l'AI lo fa in secondi",
                "Perde clienti perché è troppo lento rispetto a chi usa l'AI",
                "Competenze obsolete in un mercato che cambia ogni mese",
                "Stipendi in calo perché il lavoro \"meccanico\" viene automatizzato",
                "Rischia di essere sostituito completamente entro pochi anni",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Chi si evolve */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-card border border-primary/30 p-6 sm:p-8 glow-yellow"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Chi programma con l'AI</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Crea applicazioni complete in minuti, non in settimane",
                "Diventa 10x più produttivo e richiesto dal mercato",
                "Competenze all'avanguardia che le aziende cercano disperatamente",
                "Stipendi in crescita perché sa dirigere l'AI come un super potere",
                "È il futuro: chi guida l'AI, guida il mercato",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats impatto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              icon: Brain,
              stat: "85%",
              label: "dei lavori di sviluppo cambierà radicalmente entro il 2027",
            },
            {
              icon: TrendingUp,
              stat: "10x",
              label: "più veloce: chi usa l'AI vs chi programma \"alla vecchia\"",
            },
            {
              icon: Shield,
              stat: "€0",
              label: "il costo per iniziare a programmare con l'AI oggi",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-card border border-border/50 p-5 sm:p-6 text-center"
            >
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-primary text-glow mb-2">{item.stat}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Call to action testuale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
            La domanda non è <span className="text-destructive">"posso permettermi di imparare?"</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mt-2">
            La domanda è: <span className="text-primary text-glow">"posso permettermi di NON farlo?"</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
