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
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#09090b", minHeight: "100vh" }}>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <ScrollReveal><ConnectSection /></ScrollReveal>
        <ScrollReveal delay={80}><FeaturesSection /></ScrollReveal>
        <ScrollReveal delay={80}><SecuritySection /></ScrollReveal>
        <ScrollReveal delay={80}><PressSection /></ScrollReveal>
        <ScrollReveal delay={80}><PricingSection /></ScrollReveal>
        <ScrollReveal delay={80}><FaqSection /></ScrollReveal>
        <ScrollReveal delay={80}><CtaSection /></ScrollReveal>
      </main>
      <ScrollReveal delay={80}><Footer /></ScrollReveal>
    </div>
  );
}
