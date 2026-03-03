import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Phone } from "lucide-react";

const perks = [
  "Audiții prietenoase și suportive",
  "Repetiții săptămânale axate pe creștere",
  "Oportunități de turnee și concerte",
];

const JoinSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="alatura-te" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Cine poate sluji?</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Chemare pentru inimi <span className="text-primary">dedicate</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Dacă ai un auz muzical bun, o voce pe care vrei să o dăruiești și, mai presus de toate, o inimă de
              slujitor, ușa noastră este deschisă. Nu căutăm doar profesioniști, ci oameni care vor să crească împreună.
            </p>

            <ul className="space-y-4 mb-10">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foreground">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:0741794746"
              className="inline-flex items-center gap-3 px-8 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 group"
            >
              <Phone size={22} className="group-hover:rotate-12 transition-transform" />
              Contactează-l pe Ken Tucker
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-border">
              <img
                src="/images/ken.webp"
                alt="Kenneth Tucker - Dirijor"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
                <p className="font-display text-lg font-semibold">Kenneth Tucker</p>
                <p className="text-muted-foreground text-sm">Fondator & Dirijor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
