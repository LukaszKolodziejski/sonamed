'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTooth, FaMicroscope } from 'react-icons/fa';
import { HiOutlineHeart, HiOutlineLightningBolt } from 'react-icons/hi';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';

export default function ServicesSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(225deg, ${colors.brand.dark} 0%, ${colors.brand.primary} 50%, ${colors.secondary.seaGreen} 100%)`,
      }}
    >
      {/* Premium gradient overlays - zamieniona tylko góra z dołem (bez zmiany lewo-prawo) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at 20% 80%, ${colors.brand.primary}40 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${colors.secondary.tealMedium}20 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at 60% 90%, ${colors.secondary.tealMedium}20 0%, transparent 40%), radial-gradient(circle at 40% 10%, ${colors.brand.primary}30 0%, transparent 50%)`,
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
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring', bounce: 0.5 }}
            className="mb-6"
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full border-2 backdrop-blur-md"
              style={{
                color: 'white',
                background: `linear-gradient(135deg, ${colors.secondary.tealMedium}50, ${colors.secondary.aquaMedium}40)`,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`,
              }}
              animate={{
                boxShadow: [
                  '0 8px 32px rgba(0, 0, 0, 0.3)',
                  '0 12px 40px rgba(255, 255, 255, 0.25)',
                  '0 8px 32px rgba(0, 0, 0, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <HiOutlineLightningBolt className="text-lg" />
              NASZE USŁUGI
            </motion.span>
          </motion.div>

          <Link
            href="/oferta"
            className="group inline-block hover:opacity-90 transition-opacity duration-300"
          >
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
                Kompleksowa opieka
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent mt-2 group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary.mintLight}, white, ${colors.secondary.tealSoft})`,
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                {sonamedClinicData.services.title}
              </motion.span>
            </h2>
          </Link>

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
            Kompleksowe usługi stomatologiczne wykonywane z{' '}
            <span className="font-bold">najwyższą precyzją</span> i
            wykorzystaniem{' '}
            <span className="font-bold">nowoczesnych technologii</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTooth className="w-8 h-8" />,
              title: 'Stomatologia estetyczna',
              description:
                'Licówki, bonding, wybielanie - kompleksowe zabiegi poprawiające wygląd zębów',
              color: colors.brand.primary,
            },
            {
              icon: <FaMicroscope className="w-8 h-8" />,
              title: 'Leczenie pod mikroskopem',
              description:
                'Precyzyjne endodoncja i leczenie kanałowe z użyciem najnowocześniejszego sprzętu',
              color: colors.brand.secondary,
            },
            {
              icon: <HiOutlineHeart className="w-8 h-8" />,
              title: 'Protetyka stomatologiczna',
              description:
                'Kompleksowe odbudowy i protezy - przywróć piękny i funkcjonalny uśmiech',
              color: colors.brand.accent,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Premium glass card */}
              <motion.div
                className="relative p-8 rounded-3xl backdrop-blur-md border-2 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient blob */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${feature.color}, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                  }}
                />

                {/* Icon with premium gradient */}
                <motion.div
                  className="relative inline-flex p-4 rounded-2xl mb-6 text-white shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  }}
                  whileHover={{
                    rotate: [0, -15, 15, -15, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Glow effect behind icon */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}, transparent)`,
                    }}
                  />
                  <div className="relative z-10">{feature.icon}</div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  {feature.description}
                </p>

                {/* Animated accent line */}
                <motion.div
                  className="h-1 rounded-full overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${feature.color}, ${colors.secondary.mintLight})`,
                    }}
                    initial={{ width: '30%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${feature.color}15 50%, transparent 100%)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/oferta"
              className="group relative inline-flex items-center px-10 py-5 rounded-full text-white font-bold text-lg shadow-2xl overflow-hidden backdrop-blur-md border-2 border-white/30"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary.tealSoft}30, ${colors.secondary.aquaMedium}20)`,
              }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${colors.secondary.tealMedium}, ${colors.secondary.aquaMedium})`,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Sparkle effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <span className="relative z-10">Zobacz pełną ofertę</span>
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
