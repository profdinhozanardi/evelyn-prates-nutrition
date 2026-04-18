import { motion } from "framer-motion";
import evelynHero from "@/assets/evelyn-hero-new.jpg";

const WHATSAPP_LINK = "https://wa.me/5511953352247?text=Olá! Quero agendar meu diagnóstico nutricional";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Mobile: image on top */}
      <div className="relative w-full h-[45vh] lg:hidden">
        <img
          src={evelynHero}
          alt="Nutricionista Evelyn Prates"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Desktop: left image half */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={evelynHero}
          alt="Nutricionista Evelyn Prates"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-6 lg:py-20 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl"
        >
          <span className="inline-block text-sm font-body font-medium tracking-widest uppercase text-accent mb-4">
            Nutricionista Evelyn Prates
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold leading-tight text-foreground mb-4 lg:mb-6">
            Descubra o que está{" "}
            <span className="text-gradient-gold">travando seus resultados</span>{" "}
            com um diagnóstico nutricional personalizado
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-6 lg:mb-10">
            Pare de tentar dietas genéricas. Entenda exatamente o que seu corpo precisa para emagrecer e ter mais saúde.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-btn inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 lg:px-8 lg:py-4 text-sm lg:text-base font-body font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Quero meu diagnóstico agora
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-btn-gold inline-flex items-center justify-center rounded-2xl border-2 border-accent bg-transparent px-6 py-3.5 lg:px-8 lg:py-4 text-sm lg:text-base font-body font-semibold text-accent transition-transform hover:scale-105"
            >
              Agendar consulta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
