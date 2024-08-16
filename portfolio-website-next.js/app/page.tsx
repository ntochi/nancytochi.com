import HeroSection from "../components/homepage/HeroSection";
import PortfolioSection from "../components/homepage/PortfolioSection";
import AboutSection from "../components/homepage/AboutSection";
import ContactSection from "../components/homepage/ContactSection";
import ThanksSection from "../components/homepage/ThanksSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <ThanksSection />
    </div>
  );
}
