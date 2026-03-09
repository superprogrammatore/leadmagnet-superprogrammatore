import { motion } from "framer-motion";
import { ArrowRight, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadMagnetSection = () => {
  return (
    <section id="lead-magnet" className="py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pronto ad <span className="text-primary text-glow">Accettare la Sfida?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Scegli il tuo percorso: inizia con la lezione gratuita oppure
            <br />
            diventa subito un Super Programmatore!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lezione Gratuita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border/50 bg-card p-8 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lezione Gratuita</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Guarda come creo una web app completa in meno di 10 minuti. Zero costi, zero impegno.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full h-14 text-base font-bold rounded-xl border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <a href="https://example.com/lezione" target="_blank" rel="noopener noreferrer">
                Guarda la Lezione Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">🎓 100% Gratuito</p>
          </motion.div>

          {/* Super Programmatore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-primary/30 bg-card p-8 text-center flex flex-col justify-between glow-yellow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              CONSIGLIATO
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sono Pronto!</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Voglio diventare un Super Programmatore con il Super Potere dell'AI. Accedi al percorso completo.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-base font-bold rounded-xl glow-yellow hover:glow-yellow-strong transition-all duration-300 group"
            >
              <a href="https://example.com/super-programmatore" target="_blank" rel="noopener noreferrer">
                Diventa Super Programmatore!
                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">🚀 Il percorso completo</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
