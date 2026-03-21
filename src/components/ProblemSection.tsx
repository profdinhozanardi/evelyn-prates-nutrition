import { motion } from "framer-motion";
import { HelpCircle, Frown, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Já tentou várias dietas e não teve resultado?",
    text: "Dietas genéricas ignoram suas particularidades. O problema não é falta de esforço — é falta de direcionamento.",
  },
  {
    icon: HelpCircle,
    title: "Se sente perdida sobre o que comer?",
    text: "A quantidade de informação contraditória gera confusão. Você merece clareza e um plano feito para você.",
  },
  {
    icon: Frown,
    title: "Não entende por que não emagrece?",
    text: "Seu corpo tem necessidades únicas. Sem entender seu metabolismo, qualquer tentativa vira frustração.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-3 block">
            Você se identifica?
          </span>
          <h2 className="text-2xl lg:text-4xl font-display font-bold text-foreground">
            Talvez o problema não seja você
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-3xl p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
