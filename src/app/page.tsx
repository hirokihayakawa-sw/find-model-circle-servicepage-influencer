'use client';

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import StartSection from "../components/sections/StartSection";
import StepsSection from "../components/sections/StepsSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <InfoCardsSection />
      <FeaturesSection />
      <StartSection />
      <StepsSection />
      <CTASection />
    </div>
  );
}
