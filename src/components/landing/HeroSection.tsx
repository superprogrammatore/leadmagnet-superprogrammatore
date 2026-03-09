import { motion } from "framer-motion";
import { ArrowRight, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-magnet")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Lezione Gratuita Disponibile</span>
        </motion.div>

        {/* Timer badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="glow-yellow-strong rounded-2xl bg-primary/10 border border-primary/30 px-8 py-4 inline-flex items-center gap-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary text-glow">10</div>
              <div className="text-xs text-primary/80 uppercase tracking-widest mt-1">Minuti</div>
            </div>
            <div className="w-px h-12 bg-primary/30" />
            <div className="text-left">
              <div className="text-sm text-foreground/80">È tutto ciò che serve per creare</div>
              <div className="text-sm font-semibold text-foreground">una Web App completa al 100%</div>
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-primary text-glow">LA SFIDA:</span>
          <br />
          <span className="text-foreground">In meno di 10 minuti ti insegno a creare una </span>
          <span className="text-primary">Web App 100% funzionante!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Registrazione utenti, login/logout, database, accessibile da internet.
          <br className="hidden sm:block" />
          <span className="text-foreground font-medium">Tutto questo senza scrivere una singola riga di codice "tradizionale".</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-7 rounded-xl glow-yellow hover:glow-yellow-strong transition-all duration-300 font-bold group"
          >
            <a href="https://example.com/lezione" target="_blank" rel="noopener noreferrer">
              <Zap className="mr-2 w-5 h-5" />
              Guarda la Lezione Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-7 rounded-xl glow-yellow hover:glow-yellow-strong transition-all duration-300 font-bold group"
          >
            <a href="https://example.com/super-programmatore" target="_blank" rel="noopener noreferrer">
              <Rocket className="mr-2 w-5 h-5" />
              Diventa Super Programmatore!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Corso title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Dal corso</p>
          <p className="text-lg md:text-xl font-semibold text-foreground/90">
            "Diventa un Super Programmatore con il{" "}
            <span className="text-primary">Super Potere dell'AI!</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
