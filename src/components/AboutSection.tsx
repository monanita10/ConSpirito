import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";

const stats = [
  { value: "50+", label: "Membri Activi" },
  { value: "200+", label: "Concerte" },
  { value: "12", label: "Ani de Slujire" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="despre-noi" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Povestea Noastră
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Cine este corul{" "}
              <span className="text-white">Con</span><span className="text-primary">Spirito</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Un cor <span className="text-foreground font-medium">semi-profesionist, tânăr</span>, care, în contrast
              cu înclinațiile contemporane, își propune{" "}
              <span className="text-primary italic">
                să promoveze înaltele valori spirituale și muzicale ca un întreg nedespărțit
              </span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              A luat ființă în anul 2006, la inițiativa lui Kenneth Tucker, ca un ansamblu în care își
              dau întâlnire muzicieni profesioniști cu amatori talentați, în jurul principiilor
              neschimbătoare, atât muzicale, cât și spirituale.
            </p>

            {/* Stats */}
            <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-display font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Images grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/choir-small.webp"
                  alt="Choir Rehearsal"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl bg-primary/10 border border-primary/20 p-6 flex items-center justify-center">
                <p className="text-gold font-display text-xl italic text-center">
                  "Voi cânta cu duhul, dar voi cânta și cu mintea"
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-xl bg-card border border-border p-6">
                <p className="text-gold font-display text-base italic leading-relaxed">
                  "Nu băga prea tare în seamă sunetele în sine... căci făcând așa, s-ar putea să pierzi muzica." – George Ives
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/choir-hero.webp"
                  alt="Concert Stage"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full width founder's quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 p-12 md:p-20 bg-primary/5 border-y border-primary/20 backdrop-blur-sm relative overflow-hidden group rounded-3xl shadow-2xl"
        >
          <div className="absolute right-0 top-0 text-primary/5 group-hover:scale-110 transition-transform duration-1000 opacity-20">
            <Logo className="w-[400px] h-[400px]" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-primary font-display font-bold italic text-2xl mb-8 tracking-tight">
              Gând de la fondatorul nostru
            </p>
            <p className="text-muted-foreground leading-relaxed text-xl md:text-2xl italic font-light">
              "Ce mare bogăție așteaptă să fie descoperită atunci când ne unim inimile și glasurile în curăție de inimă și smerenie, pentru a-L cunoaște pe Hristos și a-L face cunoscut. Acestea sunt lucrurile care fac să nu pot sta liniștit dacă nu mă lupt să le duc mai departe, să le cultiv, să le dăruiesc altora, să le las în urma mea. Mă face să continui conștiința chemării și darului primit de la Domnul pentru a-L glorifica în biserică și în societate, și a-L face cunoscut, prin muzică clasică și corală. Creșterea spirituală și muzicală a celor implicați în cor spre slava lui Dumnezeu.”
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-primary/40" />
              <p className="text-foreground font-display text-xl font-bold tracking-widest uppercase">
                Ken Tucker
              </p>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
