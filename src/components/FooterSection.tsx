import Logo from "./Logo";

const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <Logo className="w-8 h-8 opacity-80" />
        <p className="font-display text-xl font-bold">
          <span className="text-white">Con</span>
          <span className="text-primary">Spirito</span>
        </p>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Asociația ConSpirito. Toate drepturile rezervate.
      </p>
    </div>
  </footer>
);

export default FooterSection;
