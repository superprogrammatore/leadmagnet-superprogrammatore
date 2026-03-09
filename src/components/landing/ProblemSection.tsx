import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Il Vecchio Modo vs. <span className="text-primary text-glow">Il Super Potere</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Il Problema */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-card border border-destructive/20 p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-destructive">Il Vecchio Modo</h3>
            <ul className="space-y-4">
              {[
                "Mesi di studio prima di creare qualcosa",
                "Decine di linguaggi e framework da imparare",
                "Setup complessi tra server, database e deploy",
                "Costi elevati per hosting e infrastruttura",
                "Frustrazione e abbandono prima di vedere risultati",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* La Soluzione */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl bg-card border border-primary/30 p-8 glow-yellow"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Con il Super Potere dell'AI</h3>
            <ul className="space-y-4">
              {[
                "Crei una web app completa in 10 minuti",
                "Non serve conoscere linguaggi di programmazione",
                "Database, autenticazione e hosting inclusi",
                "Zero costi iniziali per iniziare",
                "Risultati immediati e tangibili dal primo giorno",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
