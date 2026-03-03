import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Heart, Users } from "lucide-react";

const cards = [
  {
    icon: Star,
    title: "Excelență Muzicală",
    desc: "Îmbogățire spirituală prin tezaurul muzicii sacre corale clasice, explorând perspectivele pe care ni le oferă și puterea ei de zidire sufletească.",
  },
  {
    icon: Heart,
    title: "Unitate în Duh",
    desc: "Creșterea spirituală și muzicală a participanților, într-o comunitate unită prin credință și dragoste.",
  },
  {
    icon: Users,
    title: "Impact Comunitar",
    desc: "Ieșim din zidurile bisericii pentru a aduce lumină și alinare celor în nevoie prin mesajul evangheliei.",
  },
];

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="viziune" className="py-24 bg-card relative" ref={ref}>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Viziunea Noastră</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Misiunea care ne <span className="text-primary">definește</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ducerea la îndeplinire a dezideratului biblic: „Voi cânta cu duhul, dar voi cânta și cu mintea"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <card.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
