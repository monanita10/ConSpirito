import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Globe, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:contactconspirito@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nume: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`
    )}`;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = mailtoLink;
      toast({
        title: "Mesaj pregătit!",
        description: "Se va deschide clientul de email pentru a trimite mesajul către contactconspirito@gmail.com",
      });
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ia <span className="text-primary">legătura</span> cu noi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ai întrebări sau vrei să colaborezi? Scrie-ne și îți vom răspunde cât mai curând.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            {[
              { icon: Phone, label: "Ken Tucker", value: "0741 794 746", href: "tel:0741794746" },
              { icon: Phone, label: "Emma Pușcaș", value: "0746 026 011", href: "tel:0746026011" },
              { icon: Mail, label: "Email", value: "contactconspirito@gmail.com", href: "mailto:contactconspirito@gmail.com" },
              { icon: Globe, label: "Website", value: "www.conspirito.org", href: "https://www.conspirito.org" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-foreground font-medium text-lg leading-none">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Input name="name" placeholder="Nume complet" required maxLength={100} className="bg-card border-border" />
              <Input name="email" type="email" placeholder="Email" required maxLength={255} className="bg-card border-border" />
            </div>
            <Input name="subject" placeholder="Subiect" required maxLength={200} className="bg-card border-border" />
            <Textarea name="message" placeholder="Mesajul tău..." required maxLength={1000} rows={5} className="bg-card border-border resize-none" />
            <Button type="submit" disabled={loading} className="self-start gap-2">
              {loading ? "Se trimite..." : "Trimite mesajul"}
              <Send size={16} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
