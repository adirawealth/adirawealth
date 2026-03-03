import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DhanBanner from "@/components/DhanBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DematCTA from "@/components/DematCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DhanBanner />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <DematCTA />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
