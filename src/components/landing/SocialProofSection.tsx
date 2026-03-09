import { motion } from "framer-motion";
import { Clock, GraduationCap, Rocket, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: "10 min", label: "Per una web app completa" },
  { icon: GraduationCap, value: "0", label: "Esperienza richiesta" },
  { icon: Rocket, value: "100%", label: "Funzionante e online" },
  { icon: Star, value: "∞", label: "Possibilità creative" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            I Numeri Parlano <span className="text-primary text-glow">Chiaro</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
            "Non pensavo fosse possibile creare qualcosa di funzionante così velocemente.
            L'AI ha cambiato completamente il mio approccio alla programmazione."
          </blockquote>
          <p className="mt-4 text-muted-foreground text-sm">— Uno studente del corso</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
