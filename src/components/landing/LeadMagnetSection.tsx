import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadMagnetSection = () => {
  return (
    <section id="lead-magnet" className="py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pronto ad <span className="text-primary text-glow">Accettare la Sfida?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Clicca il bottone e accedi subito alla lezione gratuita.
            <br />
            Vedrai con i tuoi occhi come si crea una web app completa in 10 minuti.
          </p>

          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-7 rounded-xl glow-yellow hover:glow-yellow-strong transition-all duration-300 font-bold group"
          >
            <a href="https://example.com/lezione" target="_blank" rel="noopener noreferrer">
              <Zap className="mr-2 w-5 h-5" />
              Voglio Vedere la Lezione Gratuita!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            🎓 100% Gratuito • Nessuna registrazione richiesta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
