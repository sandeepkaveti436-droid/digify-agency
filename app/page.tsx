import Hero from "@/src/components/Hero";
import ServicesSection from "@/src/components/ServiceData";
import AboutSection from "@/src/components/AboutSection";
import PortfolioSection from "@/src/components/Portfolio";
import TestimonialSection from "@/src/components/TestimonialSection";
import ProcessSection from "@/src/components/ProcessSection";
import FAQSection from "@/src/components/FAQSection";
import Footer from "@/src/components/Footer"; 

export default function Home() {
  return (
    <main>
      <Hero/>
      <ServicesSection/>
      <AboutSection/>
      <PortfolioSection/>
      <TestimonialSection/>
      <ProcessSection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
