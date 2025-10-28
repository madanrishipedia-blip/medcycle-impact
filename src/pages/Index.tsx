import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import ImpactMetrics from "@/components/ImpactMetrics";
import JoinUs from "@/components/JoinUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <ImpactMetrics />
      <JoinUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
