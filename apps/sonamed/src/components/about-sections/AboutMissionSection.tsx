'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  HiOutlineBadgeCheck,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineHeart,
} from 'react-icons/hi';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';

export default function AboutMissionSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="relative py-32"
      style={{
        background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, rgba(0,0,0,0.8) 50%, ${colors.secondary.seaGreen} 100%)`,
      }}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.primary.darkTeal}30, rgba(0,0,0,0.7) 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated Dental Icons Background */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`bg-tooth-${i}`}
            className="absolute opacity-5"
            style={{
              left: `${i * 7}%`,
              top: `${(i % 3) * 30 + 10}%`,
              width: '40px',
              height: '40px',
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 6 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={`/icons/Offer-icons-${9 + (i % 10)}.png`}
              alt="Dental bg"
              width={40}
              height={40}
              className="w-full h-full filter invert"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            className="space-y-10"
          >
            <motion.div
              className="relative p-8 rounded-3xl backdrop-blur-sm border"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.6), ${colors.primary.darkTeal}30)`,
                borderColor: `${colors.secondary.tealMedium}40`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 25px 50px rgba(0,0,0,0.5)`,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-black mb-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span
                  className="bg-clip-text text-transparent relative z-10"
                  style={{
                    backgroundImage: `linear-gradient(145deg, white 0%, ${colors.secondary.aquaMedium} 30%, ${colors.secondary.tealSoft} 100%)`,
                    textShadow: `0 4px 20px ${colors.secondary.tealMedium}60`,
                  }}
                >
                  {PAGE_ONAS_DATA.doctorsSection.title}
                </span>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background: `linear-gradient(145deg, ${colors.secondary.tealMedium}20, transparent)`,
                    filter: 'blur(20px)',
                  }}
                />
              </motion.h2>

              <motion.p
                className="text-xl leading-relaxed font-medium"
                style={{
                  color: 'white',
                  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {PAGE_ONAS_DATA.doctorsSection.content}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <HiOutlineBadgeCheck className="text-3xl" />,
                  text: 'Indywidualne podejście do każdego pacjenta',
                  color: colors.secondary.tealMedium,
                  bgColor: colors.secondary.tealMedium,
                },
                {
                  icon: <HiOutlineLocationMarker className="text-3xl" />,
                  text: 'Dogodna lokalizacja w Kościerzynie',
                  color: colors.secondary.aquaMedium,
                  bgColor: colors.secondary.aquaMedium,
                },
                {
                  icon: <HiOutlineClock className="text-3xl" />,
                  text: 'Punktualność i szacunek do czasu',
                  color: colors.secondary.tealSoft,
                  bgColor: colors.secondary.tealSoft,
                },
                {
                  icon: <HiOutlineHeart className="text-3xl" />,
                  text: 'Empatyczna atmosfera',
                  color: colors.secondary.mintLight,
                  bgColor: colors.secondary.mintLight,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: `0 20px 40px ${item.bgColor}40`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                  className="group relative overflow-hidden rounded-2xl p-6 cursor-pointer border backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.7), ${item.bgColor}15)`,
                    borderColor: `${item.bgColor}30`,
                    boxShadow: `0 8px 25px rgba(0,0,0,0.3)`,
                  }}
                >
                  {/* Animated Background Orb */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20"
                    style={{ backgroundColor: item.bgColor }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  <div className="relative z-10 flex items-center space-x-4">
                    <motion.div
                      className="flex-shrink-0 p-3 rounded-xl"
                      style={{
                        color: item.color,
                        background: `${item.bgColor}20`,
                        boxShadow: `0 4px 15px ${item.bgColor}30`,
                      }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span
                      className="font-semibold text-base"
                      style={{
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.7)',
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              boxShadow: `0 30px 60px rgba(0,0,0,0.4)`,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            className="relative w-full group cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            {/* Premium Glass Container */}
            <div
              className="relative overflow-hidden rounded-3xl border backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.4), ${colors.secondary.tealMedium}20)`,
                borderColor: `${colors.secondary.tealMedium}40`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
              }}
            >
              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(45deg, ${colors.primary.darkTeal}30, transparent, ${colors.secondary.tealMedium}30)`,
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Sparkle Effects */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${15 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}

              <div className="relative z-10 p-8">
                <Image
                  src="/icons/Offer-icons-12.png"
                  alt="Centrum Stomatologiczne Sonamed"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating Light Effect */}
            <motion.div
              className="absolute -inset-4 rounded-3xl opacity-50"
              style={{
                background: `conic-gradient(from 0deg, ${colors.secondary.tealMedium}40, transparent, ${colors.primary.darkTeal}40, transparent)`,
                filter: 'blur(20px)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
