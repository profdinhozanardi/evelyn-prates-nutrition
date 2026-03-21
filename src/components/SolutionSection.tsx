import { motion } from "framer-motion";
import { ClipboardCheck, User, Target, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Quero agendar meu diagnóstico nutricional";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Avaliação completa",
    text: "Analisamos seu histórico, hábitos, exames e rotina para entender seu corpo de verdade.",
  },
  {
    icon: User,
    title: "100% personalizado",
    text: "Nada de cardápio copiado. Seu plano é feito exclusivamente para suas necessidades.",
  },
  {
    icon: Target,
    title: "Estratégia individual",
    text: "Definimos metas realistas e um caminho claro para você alcançar seus resultados.",
  },
  {
    icon: Sparkles,
    title: "Acompanhamento contínuo",
    text: "Ajustes ao longo do processo garantem que você evolua de forma sustentável.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-3 block">
            A solução
          </span>
          <h2 className="text-2xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Diagnóstico Nutricional Personalizado
          </h2>
          <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Um processo exclusivo para descobrir exatamente o que seu corpo precisa — sem achismos, sem dietas genéricas.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 mb-10 lg:mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start bg-card rounded-3xl p-6 lg:p-8 shadow-sm"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent/15 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-btn inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-body font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Quero meu diagnóstico agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
