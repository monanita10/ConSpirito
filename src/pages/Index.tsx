import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import EventsSection from "@/components/EventsSection";
import MarturiiSection from "@/components/MarturiiSection";
import PrezentaScenicaSection from "@/components/PrezentaScenicaSection";
import JoinSection from "@/components/JoinSection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <EventsSection />
      <MarturiiSection />
      <PrezentaScenicaSection />
      <JoinSection />
      <DonateSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
