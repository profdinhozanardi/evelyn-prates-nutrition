import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    text: "Eu já tinha tentado de tudo. Com a Evelyn, finalmente entendi o que meu corpo precisava. Perdi 12kg em 4 meses de forma saudável e sustentável!",
    result: "−12kg em 4 meses",
  },
  {
    name: "Juliana M.",
    text: "O diagnóstico nutricional mudou minha relação com a comida. Hoje como sem culpa e com muito mais energia. Recomendo demais!",
    result: "Mais energia e disposição",
  },
  {
    name: "Fernanda S.",
    text: "A Evelyn é incrível! Super atenciosa e profissional. Meu plano foi feito sob medida e os resultados vieram rápido. Melhor decisão que tomei.",
    result: "−8kg em 2 meses",
  },
];

const TestimonialsSection = () => {
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
            Resultados reais
          </span>
          <h2 className="text-2xl lg:text-4xl font-display font-bold text-foreground">
            O que dizem as pacientes
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-3xl p-7 lg:p-8 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <span className="text-sm font-body font-semibold text-foreground">{t.name}</span>
                <span className="text-xs font-body font-medium text-accent">{t.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
