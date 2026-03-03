import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Music, MapPin, Star } from "lucide-react";

const PrezentaScenicaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      icon: <Music className="text-primary" size={24} />,
      title: "Activitate Concertistică",
      content: "Concerte a cappella și cu acompaniament de orgă/orchestră susținute în toată România.",
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Locații de Referință",
      content: "Filarmonica Arad, Casa Universitarilor Cluj-Napoca, Casa de Cultură Iași, Catedrale și biserici din Cluj, Iași, Timișoara, Alba Iulia, Brașov, Sibiu, scene din București, Cluj, Bistrița.",
    },
    {
      icon: <Star className="text-primary" size={24} />,
      title: "Proiecte Majore Recente",
      content: "Înregistrări profesionale (Dec. 2024); parte a proiectului SingMit Viena.",
    },
  ];

  return (
    <section id="prezenta-scenica" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Activitate</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Prezență <span className="text-primary">Scenică</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-background/40 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrezentaScenicaSection;
