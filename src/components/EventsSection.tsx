import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    date: "23 Mai 2025",
    day: "23",
    month: "MAI",
    title: "BUCUREȘTI (SALA RADIO)",
    location: "Sala Radio, București",
    time: "19:00",
    desc: "Concert vocal-simfonic de excepție în inima capitalei.",
  },
  {
    date: "Iulie 2025",
    day: "-",
    month: "IULIE",
    title: "VIENA (STEPHANSDOM)",
    location: "St. Stephen's Cathedral, Viena",
    time: "TBA",
    desc: "Apogeul stagiunii - un moment de referință în arhitectura sacră a Vienei.",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evenimente" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Agenda</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Evenimente <span className="text-primary">Viitoare</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descoperă unde ne poți asculta și vino să te bucuri de muzica sacră live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group flex gap-6 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Date block */}
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg bg-primary/10 border border-primary/20 flex flex-col items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary">{ev.day}</span>
                <span className="text-xs font-semibold text-primary/70 tracking-wider">{ev.month}</span>
              </div>

              {/* Content */}
              <div className="relative flex-1 min-w-0">
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {ev.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{ev.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary/60" />
                    {ev.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary/60" />
                    {ev.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
