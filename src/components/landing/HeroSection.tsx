import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import superProgrammatoreLogo from "@/assets/super-programmatore-logo.png";

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
          <div className="glow-yellow-strong rounded-2xl bg-primary/10 border border-primary/30 px-5 sm:px-8 py-4 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary text-glow">10</div>
              <div className="text-xs text-primary/80 uppercase tracking-widest mt-1">Minuti</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-primary/30" />
            <div className="w-12 h-px sm:hidden bg-primary/30" />
            <div className="text-center sm:text-left">
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
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
          className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed px-2"
        >
          Registrazione utenti, login/logout, database, accessibile da internet.
          <br className="hidden sm:block" />
          <span className="text-foreground font-medium">Tutto questo senza scrivere una singola riga di codice "tradizionale".</span>
        </motion.p>

        {/* CTA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center max-w-md mx-auto"
        >
          <a
            href="https://studenti.accademiadelcloud.it/p/web-app-in-10-minuti"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 text-center flex flex-col items-center hover:border-primary/40 transition-colors duration-300 group w-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">🎯 Accetta la Sfida</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
              Guarda come creo una web app completa in meno di 10 minuti.
            </p>
            <Button
              size="lg"
              className="w-full h-12 text-sm sm:text-base font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 items-center"
            >
              <span className="leading-none">Guarda la Lezione Gratuita</span>
              <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground mt-2">🎓 100% Gratuito</p>
          </a>
        </motion.div>

        {/* Corso title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Dal corso</p>
          <img src={superProgrammatoreLogo} alt="Super Programmatore" className="w-52 h-auto mx-auto mb-3" />
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
