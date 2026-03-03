import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Să asculți ConSpirito este o experiență care te apropie de cer. Armonia lor nu este doar despre voci, ci despre inimi care bat la unison.",
    name: "Maria Ionescu",
    role: "Ascultător fidel",
  },
  {
    text: "Am găsit în acest cor mai mult decât o activitate muzicală; am găsit prieteni pe viață și un loc unde să slujesc cu adevărat.",
    name: "Andrei Popa",
    role: "Membru Tenor",
  },
  {
    text: "Fiecare concert este o rugăciune. Recomand oricui dorește să simtă prezența lui Dumnezeu prin arta corală.",
    name: "Elena Vasilescu",
    role: "Dirijor de cor",
  },
];

const MarturiiSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="marturii" className="py-24 bg-card relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Mărturii</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ce spun cei care <span className="text-primary">ne-au ascultat</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-background border border-border rounded-xl p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={32} />
              <p className="text-muted-foreground leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarturiiSection;
