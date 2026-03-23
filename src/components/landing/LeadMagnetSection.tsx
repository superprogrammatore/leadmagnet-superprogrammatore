import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadMagnetSection = () => {
  return (
    <section id="lead-magnet" className="py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Pronto ad <span className="text-primary text-glow">Accettare la Sfida?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Inizia con la lezione gratuita e scopri
            <br />
            come creare una Web App in 10 minuti!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 sm:p-8 text-center flex flex-col items-center hover:border-primary/40 transition-colors duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">🎯 Accetta la Sfida</h3>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Guarda come creo una web app completa in meno di 10 minuti. 
            Zero costi, zero impegno — solo pura dimostrazione.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full h-14 text-base font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
          >
            <a href="https://studenti.accademiadelcloud.it/p/web-app-in-10-minuti" target="_blank" rel="noopener noreferrer">
              <span className="leading-none">Guarda la Lezione Gratuita</span>
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">🎓 100% Gratuito • Nessun impegno</p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
