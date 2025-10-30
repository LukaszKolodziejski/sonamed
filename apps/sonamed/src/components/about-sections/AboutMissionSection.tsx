'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  HiOutlineBadgeCheck,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineHeart,
} from 'react-icons/hi';
import { FaTooth } from 'react-icons/fa';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';

export default function AboutMissionSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-teal-50 overflow-hidden"
    >
      {/* Floating dental icons background - jak w TechnologySection */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <FaTooth
              className="text-6xl"
              style={{ color: colors.brand.primary }}
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
            className="flex flex-col gap-10 order-2 lg:order-1"
          >
            <motion.div
              className="relative p-4 md:p-8 rounded-3xl backdrop-blur-sm border order-2 lg:order-1"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.9), ${colors.secondary.mintLight}40)`,
                borderColor: `${colors.secondary.tealMedium}40`,
                boxShadow: `0 20px 40px ${colors.brand.primary}20`,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 25px 50px ${colors.brand.primary}30`,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-8 relative"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span
                  className="bg-clip-text text-transparent relative z-10"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${colors.brand.primary} 0%, ${colors.secondary.tealMedium} 50%, ${colors.secondary.tealSoft} 100%)`,
                    textShadow: `0 2px 10px ${colors.secondary.tealMedium}30`,
                  }}
                >
                  {PAGE_ONAS_DATA.doctorsSection.title}
                </span>
              </motion.h2>

              <motion.p
                className="text-sm md:text-base lg:text-lg leading-relaxed font-medium text-gray-700"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {PAGE_ONAS_DATA.doctorsSection.content}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-1 lg:order-2">
              {[
                {
                  icon: <HiOutlineBadgeCheck className="text-3xl" />,
                  title: 'Indywidualne podejście',
                  description:
                    'Każdy pacjent otrzymuje spersonalizowaną opiekę',
                },
                {
                  icon: <HiOutlineLocationMarker className="text-3xl" />,
                  title: 'Dogodna lokalizacja',
                  description: 'Nowoczesna klinika w centrum Kościerzyny',
                },
                {
                  icon: <HiOutlineClock className="text-3xl" />,
                  title: 'Punktualność',
                  description: 'Szacunek do Twojego czasu i dokładność',
                },
                {
                  icon: <HiOutlineHeart className="text-3xl" />,
                  title: 'Empatyczna atmosfera',
                  description: 'Przyjazne i profesjonalne środowisko',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50"
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  style={{
                    background:
                      'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    boxShadow: '0 10px 40px -10px rgba(60, 140, 125, 0.2)',
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${colors.brand.primary}05 0%, ${colors.secondary.tealSoft}10 100%)`,
                    }}
                  />

                  {/* Floating tooth icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                  >
                    <FaTooth
                      className="text-8xl"
                      style={{ color: colors.brand.primary }}
                    />
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="p-4 rounded-2xl shadow-lg"
                        style={{
                          background: colors.gradients.simple,
                        }}
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="text-white">{item.icon}</div>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800"
                      whileHover={{ x: 4 }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Premium glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                                 0 0 60px -10px ${colors.brand.primary}30`,
                    }}
                  />
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
              boxShadow: `0 30px 60px ${colors.brand.primary}30`,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            className="relative w-full group cursor-pointer order-1 lg:order-2"
            style={{ perspective: '1000px' }}
          >
            {/* Premium Glass Container */}
            <div
              className="relative overflow-hidden rounded-3xl border backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.95), ${colors.secondary.mintLight}40)`,
                borderColor: `${colors.secondary.tealMedium}40`,
                boxShadow: `0 20px 40px ${colors.brand.primary}20`,
              }}
            >
              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(45deg, ${colors.secondary.tealSoft}15, transparent, ${colors.secondary.mintLight}20)`,
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
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${15 + (i % 2) * 20}%`,
                    backgroundColor: colors.secondary.tealMedium,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}

              <div className="relative z-10 p-2 md:p-8">
                <Image
                  src="/images/office/photo-2.jpeg"
                  alt="Centrum Stomatologiczne Sonamed"
                  width={800}
                  height={800}
                  className="w-full h-auto md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating Light Effect */}
            <motion.div
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{
                background: `conic-gradient(from 0deg, ${colors.secondary.tealMedium}30, transparent, ${colors.secondary.tealSoft}30, transparent)`,
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
