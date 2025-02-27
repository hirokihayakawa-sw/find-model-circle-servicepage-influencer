import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import StepsSection from "../components/sections/StepsSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StepsSection />
      <CTASection />
    </div>
  );
}
