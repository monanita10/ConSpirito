import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Heart, CreditCard, PieChart, Landmark, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DonateSection = () => {
  const ref = useRef(null);
  const bankDetailsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const scrollToBankDetails = (amount: string) => {
    bankDetailsRef.current?.scrollIntoView({ behavior: "smooth" });
    toast({
      title: `Susținere: ${amount}`,
      description: "Vă mulțumim pentru dorința de a fi alături de noi! Pentru a finaliza transferul, vă rugăm să utilizați datele bancare de mai jos. Pentru o evidență corectă, avem rugămintea să specificați în secțiunea „Detalii plată/Info” tipul contribuției dumneavoastră: Abonament, Plată unică sau Donație. Generozitatea dumneavoastră face misiunea noastră posibilă!",
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    toast({ title: `${label} copiat!`, description: text });
  };

  const subscriptionAmounts = ["100 lei", "200 lei", "500 lei", "700 lei", "1000 lei", "Altă sumă"];
  const oneTimeAmounts = ["20 lei", "50 lei", "75 lei", "100 lei", "200 lei", "Altă sumă"];

  return (
    <section id="sustine" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Susține Lucrarea</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Investește în <span className="text-primary">veșnicie</span> prin muzică
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed italic border-x border-primary/20 px-8">
            „Misiunea <span className="text-white">Con</span><span className="text-primary">Spirito</span> este posibilă datorită inimilor deschise care aleg să fie alături de noi. Sprijinul vostru ne oferă resursele necesare pentru transport, partituri și organizarea momentelor noastre evanghelistice. Ne bazăm pe bunătatea voastră pentru a duce mesajul mai departe, iar rugăciunea noastră este ca Dumnezeu să răsplătească din belșug generozitatea fiecăruia dintre voi.”
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Subscription Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background/40 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2 text-white">Abonament</h3>
            <p className="text-muted-foreground text-sm mb-8 italic">Devino un pilon de susținere constantă</p>
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {subscriptionAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => scrollToBankDetails(amt)}
                  className="px-4 py-2 text-xs font-semibold border border-white/10 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {amt}
                </button>
              ))}
            </div>
          </motion.div>

          {/* One-time Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/40 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2 text-white">Donație One-time</h3>
            <p className="text-muted-foreground text-sm mb-8 italic">Oferă un impuls proiectului acum</p>
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {oneTimeAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => scrollToBankDetails(amt)}
                  className="px-4 py-2 text-xs font-semibold border border-white/10 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {amt}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tax Redirect Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background/40 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PieChart className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2 text-white">Direcționează 3.5%</h3>
            <p className="text-muted-foreground text-sm mb-6">Redirecționează impozitul pe venit către lucrarea noastră.</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Entitate</p>
                <p className="text-sm font-medium">Con Spirito, Fundația Jubilate</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Cod Fiscal</p>
                  <p className="text-sm font-medium">14991221</p>
                </div>
                <button 
                  onClick={() => copyToClipboard("14991221", "Cod Fiscal")}
                  className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                >
                  <Copy size={14} className="text-primary" />
                </button>
              </div>
            </div>

            <a 
              href="https://formular230.ro/fundatia-jubilate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 bg-primary/10 border border-primary/30 text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Completează Formularul 230
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        {/* Bank Details */}
        <motion.div
          ref={bankDetailsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20">
              <Landmark className="text-primary" size={40} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold mb-2">Detalii Bancare</h3>
              <p className="text-muted-foreground font-medium mb-6">Fundația Jubilate</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">IBAN LEI (Transfer Direct)</p>
                    <div className="flex items-center gap-3 bg-background/50 p-3 rounded-xl border border-white/5 group">
                      <code className="text-sm flex-1 font-mono tracking-tighter">RO35 BTRL RONC RT0T 0482 D003</code>
                      <button 
                        onClick={() => copyToClipboard("RO35BTRLRONCRT0T0482D003", "IBAN LEI")}
                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">IBAN EURO</p>
                    <div className="flex items-center gap-3 bg-background/50 p-3 rounded-xl border border-white/5 group">
                      <code className="text-sm flex-1 font-mono tracking-tighter">RO79 BTRL EURC RT0T 0482 D003</code>
                      <button 
                        onClick={() => copyToClipboard("RO79BTRLEURCRT0T0482D003", "IBAN EURO")}
                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Banca</p>
                    <p className="text-lg font-bold text-white">BANCA TRANSILVANIA</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Informații Fiscale</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      CUI: 14991221<br />
                      Str. Roman Ciorogariu nr. 38, Oradea<br />
                      Cod poștal 410009
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
