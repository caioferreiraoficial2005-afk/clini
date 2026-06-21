import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { ConnectSection } from "@/components/ConnectSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SecuritySection } from "@/components/SecuritySection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { PressSection } from "@/components/PressSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#09090b", minHeight: "100vh" }}>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <ConnectSection />
        <FeaturesSection />
        <SecuritySection />
        <PressSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
