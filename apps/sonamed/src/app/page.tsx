'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import HeroSection from '@/components/home-sections/HeroSection';
import TechnologySection from '@/components/home-sections/TechnologySection';
import StatsSection from '@/components/home-sections/StatsSection';
import TreatmentProcessSection from '@/components/home-sections/TreatmentProcessSection';
import ServicesSection from '@/components/home-sections/ServicesSection';
// import TestimonialsSection from '@/components/home-sections/TestimonialsSection'; // UKRYTE - brak prawdziwych opinii
import FAQSection from '@/components/home-sections/FAQSection';
import CTASection from '@/components/home-sections/CTASection';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 30 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Script id="schema-org" type="application/ld+json" />

      <HeroSection
        isMobile={isMobile}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      <TechnologySection />
      <StatsSection
        isMobile={isMobile}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      <TreatmentProcessSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */} {/* UKRYTE - brak prawdziwych opinii od klientów */}
      <FAQSection />
      <CTASection />
    </>
  );
}
