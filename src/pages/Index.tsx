import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CSRDashboard from "@/components/CSRDashboard";
import ImpactMetrics from "@/components/ImpactMetrics";
import JoinUs from "@/components/JoinUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <CSRDashboard />
      <ImpactMetrics />
      <JoinUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
