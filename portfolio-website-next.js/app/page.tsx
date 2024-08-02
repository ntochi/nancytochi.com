import Header from "../components/Header";
import HeroSection from "../components/homepage/HeroSection";
import PortfolioSection from "../components/homepage/PortfolioSection";
import AboutSection from "../components/homepage/AboutSection";
import ContactSection from "../components/homepage/ContactSection";
import ThanksSection from "../components/homepage/ThanksSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <ThanksSection />
      <Footer />
    </div>
  );
}
