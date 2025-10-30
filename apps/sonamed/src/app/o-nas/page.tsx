'use client';

import AboutHeroSection from '@/components/about-sections/AboutHeroSection';
import AboutMissionSection from '@/components/about-sections/AboutMissionSection';
import AboutTeamSection from '@/components/about-sections/AboutTeamSection';
import AboutFeaturesSection from '@/components/about-sections/AboutFeaturesSection';

export default function AboutPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-900">
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutTeamSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      <AboutFeaturesSection />
    </div>
  );
}
