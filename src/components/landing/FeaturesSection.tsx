import { motion } from "framer-motion";
import { Lock, Database, Globe, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Autenticazione Completa",
    description: "Sistema di login e registrazione sicuro, pronto all'uso in pochi click.",
  },
  {
    icon: Database,
    title: "Database Funzionante",
    description: "Un database reale che salva e gestisce tutti i dati della tua applicazione.",
  },
  {
    icon: Globe,
    title: "Online e Accessibile",
    description: "La tua app sarà raggiungibile da chiunque, ovunque nel mondo, con un link.",
  },
  {
    icon: Users,
    title: "Gestione Utenti",
    description: "Registrazione, login, logout e profili utente completamente funzionanti.",
  },
  {
    icon: Zap,
    title: "In Meno di 10 Minuti",
    description: "Nessun trucco. Vedrai tutto il processo dall'inizio alla fine, in tempo reale.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Cosa Costruirai in <span className="text-primary text-glow">10 Minuti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una web application completa con tutte queste funzionalità. Sembra impossibile? Guarda la lezione.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border/50 p-8 hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:glow-yellow transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
