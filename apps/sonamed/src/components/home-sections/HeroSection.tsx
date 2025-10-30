'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';
import AnimeSection from '@/components/ux/AnimeSection';

interface HeroSectionProps {
  isMobile: boolean;
  fadeInUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
  staggerContainer: {
    hidden: { opacity: number };
    visible: { opacity: number; transition: { staggerChildren: number } };
  };
}

export default function HeroSection({
  isMobile,
  fadeInUp,
  staggerContainer,
}: HeroSectionProps) {
  const mainRef = useRef(null);

  return (
    <section
      ref={mainRef}
      data-homepage
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      <AnimeSection />

      <div className="relative z-30 w-full max-w-[100vw] overflow-x-hidden">
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center text-white"
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 md:mb-12 mt-9 md:mt-0"
            >
              <motion.div
                className="inline-block px-5 py-2.5 md:px-7 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wide shadow-2xl border border-white/30"
                style={{
                  background: `linear-gradient(135deg, ${colors.neutral.white}f2, ${colors.neutral.white}d9)`,
                  color: `${colors.brand.dark}`,
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 8px 32px ${colors.brand.dark}1a, 0 0 0 1px ${colors.neutral.white}33`,
                }}
                animate={{
                  y: [0, -2, 0],
                  boxShadow: [
                    `0 8px 32px ${colors.brand.dark}1a, 0 0 0 1px ${colors.neutral.white}33`,
                    `0 12px 40px ${colors.brand.dark}26, 0 0 0 1px ${colors.neutral.white}4d`,
                    `0 8px 32px ${colors.brand.dark}1a, 0 0 0 1px ${colors.neutral.white}33`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ✨ Piękny uśmiech bez kompromisów!
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 break-words"
            >
              <span
                className="bg-clip-text bg-gradient-to-r from-white to-white"
                style={{
                  color: `${colors.primary.lightTeal}`,
                }}
              >
                {sonamedClinicData.hero.brandName}
              </span>
              <motion.span
                className="block  bg-clip-text mt-2 md:mt-4 text-2xl sm:text-3xl md:text-5xl"
                style={{
                  color: `${colors.neutral.almostWhiteGreenish}`,
                }}
              >
                {sonamedClinicData.hero.mainTitle}{' '}
                {sonamedClinicData.hero.subtitle}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl leading-8 max-w-2xl mx-auto break-words"
              style={{ color: `${colors.neutral.almostWhiteGreenish}f0` }}
            >
              {sonamedClinicData.whatMakesUsDifferent.description.slice(0, 120)}
              ...
            </motion.p>

            <motion.div
              className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="/kontakt"
                className="w-full sm:w-auto group relative overflow-hidden rounded-2xl px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.dark}, ${colors.brand.dark}f2)`,
                  boxShadow: `0 20px 40px ${colors.brand.dark}4d, 0 0 0 1px ${colors.neutral.white}1a`,
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-lg md:text-xl">💎</span>
                  {sonamedClinicData.hero.ctaButtons[0]}
                </span>
                <span
                  className="block text-xs md:text-sm mt-1 opacity-90 relative z-10"
                  style={{ color: colors.neutral.almostWhiteGreenish }}
                >
                  Skontaktuj się z nami już dziś
                </span>
                <motion.span
                  className="absolute inset-0 z-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.neutral.white}1a, ${colors.neutral.white}0d)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-45 animate-shine rounded-2xl" />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, ${colors.neutral.white}1a 50%, transparent 70%)`,
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                />
              </Link>

              <Link
                href="/cennik"
                className="w-full sm:w-auto group relative overflow-hidden rounded-2xl backdrop-blur-xl px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 border-2 border-white/30"
                style={{
                  background: `linear-gradient(135deg, ${colors.neutral.white}26, ${colors.neutral.white}0d)`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: `0 15px 35px ${colors.brand.dark}1a, inset 0 1px 0 ${colors.neutral.white}4d`,
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-sm md:text-base">📊</span>
                  {sonamedClinicData.hero.ctaButtons[1]}
                </span>
                <span className="block text-xs md:text-sm mt-1 opacity-90 relative z-10">
                  Zobacz nasze usługi i ceny
                </span>
                <motion.span
                  className="absolute inset-0 z-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.neutral.white}33, ${colors.neutral.white}1a)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-50" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-white/80 mb-2">Przewiń w dół</span>
              <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1">
                <motion.div
                  className="w-1 h-2 bg-white rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
