import { useEffect, useRef } from "react";
import AboutSection from "../components/AboutSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowIWorkSection from "../components/HowIWorkSection";
import Navigation from "../components/Navigation";
import SkillsSection from "../components/SkillsSection";

function MedStripeBar() {
  return <div className="med-stripe-bar" />;
}

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const setupObserver = () => {
      observerRef.current?.disconnect();
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      const targets = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right",
      );
      for (const el of targets) {
        observerRef.current?.observe(el);
      }
    };

    const timer = setTimeout(setupObserver, 150);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
        color: "var(--text-primary)",
      }}
    >
      <Navigation isCaseStudy={false} />
      <main>
        <HeroSection />
        <MedStripeBar />
        <AboutSection />
        <HowIWorkSection />
        <MedStripeBar />
        <ExperienceSection />
        <CaseStudiesSection />
        <SkillsSection />
        <MedStripeBar />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
