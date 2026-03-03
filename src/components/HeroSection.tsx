import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/choir-hero.webp"
          alt="ConSpirito Choir performing"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Red glow effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          MĂRTURIE. VESTIRE. EXCELENȚĂ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-10"
        >
          Lăudați pe Dumnezeu
          <br />
          <span className="text-gold">prin cântare</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-white max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Suntem o comunitate unită prin credință și pasiune pentru muzica corală sacră,
          dedicată aducerii de slavă lui Dumnezeu în fiecare notă.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#alatura-te"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Vino în corul nostru
          </a>
          <a
            href="#despre-noi"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            Află povestea noastră
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-muted-foreground" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
