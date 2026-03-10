import { motion } from "framer-motion";
import { ArrowRight, Clock, Code2, Globe, Users, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Sparkles, time: "0:00", label: "Descrivi la tua idea all'AI", desc: "Nessun codice. Solo parole." },
  { icon: Code2, time: "2:00", label: "L'AI genera l'intera app", desc: "Frontend, backend, tutto." },
  { icon: Users, time: "4:00", label: "Login e registrazione utenti", desc: "Funzionante al 100%." },
  { icon: Database, time: "6:00", label: "Database collegato e attivo", desc: "Dati reali, persistenti." },
  { icon: Globe, time: "8:00", label: "Online e accessibile a tutti", desc: "Pubblicata su internet." },
];

const ChallengeSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">10 Minuti che Cambiano Tutto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Ecco cosa succede in{" "}
            <span className="text-primary text-glow">10 minuti</span>
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              (spoiler: resterai a bocca aperta)
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto mb-16">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex items-start gap-4 sm:gap-6 mb-8 last:mb-0 group"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-card border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:glow-yellow transition-all duration-300">
                <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>

              {/* Content */}
              <div className="pt-1 sm:pt-3">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                    {step.time}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-foreground">{step.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impactful CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glow-yellow-strong rounded-3xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/30 p-8 sm:p-12 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
              "Non ci credo finché non lo vedo"
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg mx-auto">
              È esattamente quello che dicono tutti.
              <br />
              Poi guardano la lezione e restano{" "}
              <span className="text-primary font-semibold">senza parole.</span>
            </p>

            <Button
              asChild
              size="lg"
              className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-bold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group glow-yellow"
            >
              <a href="https://studenti.accademiadelcloud.it/p/web-app-in-10-minuti" target="_blank" rel="noopener noreferrer">
                <span className="leading-none">Voglio Vedere con i Miei Occhi</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              ⚡ Gratuita • Senza registrazione • 10 minuti che valgono oro
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeSection;
