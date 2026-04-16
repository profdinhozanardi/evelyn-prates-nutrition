import { motion } from "framer-motion";
import evelynAbout from "@/assets/evelyn-hero.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={evelynAbout}
                alt="Nutricionista Evelyn Prates em seu consultório"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-3 block">
              Sobre a especialista
            </span>
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-foreground mb-6">
              Evelyn Prates
            </h2>
            <div className="space-y-4 text-sm lg:text-base font-body text-muted-foreground leading-relaxed">
              <p>
                Nutricionista apaixonada por transformar vidas através da alimentação consciente e personalizada. Com anos de experiência clínica, Evelyn desenvolveu um método próprio de diagnóstico nutricional que vai além do peso na balança.
              </p>
              <p>
                Sua abordagem humanizada combina ciência de ponta com escuta ativa, entendendo que cada pessoa é única — com sua rotina, seus desafios e seus objetivos. O resultado? Pacientes que finalmente encontram equilíbrio, saúde e confiança.
              </p>
              <p>
                Especialista em reeducação alimentar, emagrecimento saudável e performance, Evelyn acredita que a nutrição certa muda não só o corpo, mas a forma como você se sente e vive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
