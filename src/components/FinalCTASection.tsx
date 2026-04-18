import { motion } from "framer-motion";
import evelynProfile from "@/assets/evelyn-profile.jpg";

const WHATSAPP_LINK = "https://wa.me/5511953352247?text=Olá! Quero agendar meu diagnóstico nutricional";

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2 border-accent/30 shadow-lg">
            <img
              src={evelynProfile}
              alt="Evelyn Prates"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Seu corpo precisa de um plano,{" "}
            <span className="italic">não de mais uma tentativa</span>
          </h2>
          <p className="text-base lg:text-lg font-body text-primary-foreground/75 max-w-2xl mx-auto mb-8 lg:mb-10">
            Dê o primeiro passo para entender o que realmente funciona para você. Agende seu diagnóstico nutricional personalizado.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-btn-gold inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 text-base font-body font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Quero meu diagnóstico personalizado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
