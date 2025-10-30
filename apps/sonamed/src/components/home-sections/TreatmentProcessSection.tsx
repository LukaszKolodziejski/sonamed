'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineSparkles } from 'react-icons/hi';
import { colors } from '@/constants/colors';

export default function TreatmentProcessSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.brand.dark} 0%, ${colors.brand.primary} 50%, ${colors.secondary.seaGreen} 100%)`,
      }}
    >
      {/* Premium gradient overlays - jak w HeroSection */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${colors.brand.primary}40 0%, transparent 60%), radial-gradient(circle at 80% 80%, ${colors.secondary.tealMedium}20 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at 60% 10%, ${colors.secondary.tealMedium}20 0%, transparent 40%), radial-gradient(circle at 40% 90%, ${colors.brand.primary}30 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: colors.secondary.mintLight,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Premium header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="mb-6"
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full border-2 backdrop-blur-md"
              style={{
                color: 'white',
                background: `linear-gradient(135deg, ${colors.primary.darkTeal}60, ${colors.secondary.tealMedium}40)`,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`,
              }}
              animate={{
                boxShadow: [
                  '0 8px 32px rgba(0, 0, 0, 0.3)',
                  '0 12px 40px rgba(255, 255, 255, 0.2)',
                  '0 8px 32px rgba(0, 0, 0, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <HiOutlineSparkles className="text-lg" />
              PROCES LECZENIA
            </motion.span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <motion.span
              className="block"
              style={{
                color: 'white',
                textShadow: `0 4px 20px rgba(0,0,0,0.3)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Jak przebiega
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent mt-2"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary.mintLight}, white, ${colors.secondary.aquaMedium})`,
                textShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              leczenie w SONAMED
            </motion.span>
          </h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Przeprowadzimy Cię przez cały proces -{' '}
            <span className="font-bold">od pierwszej konsultacji</span> po
            osiągnięcie <span className="font-bold">wymarzonego uśmiechu</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                step: '01',
                title: 'Konsultacja i diagnostyka',
                description:
                  'Szczegółowe badanie, RTG, dokumentacja fotograficzna i cyfrowy projekt uśmiechu DSD',
              },
              {
                step: '02',
                title: 'Plan leczenia',
                description:
                  'Opracowanie indywidualnego planu leczenia dopasowanego do Twoich potrzeb',
              },
              {
                step: '03',
                title: 'Realizacja zabiegu',
                description:
                  'Profesjonalne wykonanie zabiegu z wykorzystaniem najnowocześniejszego sprzętu',
              },
              {
                step: '04',
                title: 'Opieka po zabiegu',
                description:
                  'Kontrolne wizyty i kompleksowa opieka zapewniająca trwałość efektów',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12">
                    <motion.div
                      className="absolute inset-0 rounded-full blur-md opacity-70"
                      style={{
                        background: `linear-gradient(135deg, ${colors.secondary.tealMedium}, ${colors.secondary.mintLight})`,
                      }}
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 0.9, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className="relative flex items-center justify-center h-12 w-12 rounded-full border-2 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.secondary.tealMedium})`,
                        borderColor: colors.secondary.aquaMedium,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-lg font-bold text-white">
                        {step.step}
                      </span>
                    </motion.div>
                  </div>
                  {index < 3 && (
                    <div
                      className="w-0.5 h-16 ml-6 mt-2"
                      style={{
                        background: `linear-gradient(180deg, ${colors.secondary.tealMedium}, ${colors.secondary.aquaMedium})`,
                      }}
                    />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative w-full group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Image container with premium effects */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/team/photo-2.jpeg"
                alt="Wnętrze kliniki SONAMED"
                width={800}
                height={600}
                className="w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}90, ${colors.secondary.tealMedium}60, transparent)`,
                }}
              />

              {/* Floating badge - responsive positioning */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-6 md:right-6 md:left-auto z-10">
                <motion.div
                  className="text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl flex items-center space-x-2 sm:space-x-3 backdrop-blur-md border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, ${colors.brand.primary}dd, ${colors.secondary.tealMedium}dd)`,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    scale: { duration: 0.2 },
                  }}
                >
                  <HiOutlineHeart className="text-xl sm:text-2xl" />
                  <span className="font-bold text-sm sm:text-base md:text-lg">
                    100% indywidualne podejście
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Glow effect behind image */}
            <div
              className="absolute inset-0 rounded-3xl -z-10 blur-3xl opacity-40"
              style={{
                background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.secondary.tealMedium})`,
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-16 sm:mt-20 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center px-10 py-5 rounded-full text-white font-bold text-lg shadow-2xl overflow-hidden backdrop-blur-sm border-2 border-white/30"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary.mintLight}40, ${colors.secondary.tealMedium}30)`,
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.secondary.tealMedium})`,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10">Umów konsultację</span>
              <motion.svg
                className="relative z-10 ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
