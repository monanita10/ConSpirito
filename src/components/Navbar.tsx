import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "#despre-noi", label: "Despre Noi" },
  { href: "#viziune", label: "Viziune" },
  { href: "#prezenta-scenica", label: "Prezență Scenică" },
  { href: "#evenimente", label: "Evenimente" },
  { href: "#marturii", label: "Mărturii" },
  { href: "#alatura-te", label: "Alătură-te" },
  { href: "#sustine", label: "Susține" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full group-hover:bg-primary/60 transition-colors" />
            <div className="relative bg-background/50 backdrop-blur-sm p-2 rounded-full border border-white/10 flex items-center justify-center">
              <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-white">Con</span>
            <span className="text-primary">Spirito</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-white/60 hover:text-white transition-all duration-300 uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
