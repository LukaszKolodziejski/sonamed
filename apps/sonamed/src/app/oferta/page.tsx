'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import { FaTooth, FaUserMd, FaPhoneAlt, FaStethoscope } from 'react-icons/fa';
import { PAGE_OFFERT_DATA } from '@/constants/page_offert';
import { colors } from '@/constants/colors';
import { businessConstants } from '@/constants/constants';

export default function OfertaPage() {
  // Animacje
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Premium Style from O nas */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 30%, ${colors.secondary.tealMedium} 70%, ${colors.secondary.mintLight} 100%)`,
        }}
      >
        {/* Premium Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Floating Dental Icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 opacity-10"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              <Image
                src={`/icons/Offer-icons-${9 + (i % 10)}.png`}
                alt="Dental Icon"
                width={64}
                height={64}
                className="w-full h-full filter invert"
              />
            </motion.div>
          ))}

          {/* Premium Gradient Overlays */}
          <motion.div
            animate={{
              background: [
                `radial-gradient(circle at 0% 0%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 50% 50%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 100% 100%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 0% 100%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 0% 0%, ${colors.primary.darkTeal}60, transparent 50%)`,
              ],
            }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="absolute inset-0 z-10"
          />
        </motion.div>

        {/* Premium Main Content with Glass Effect */}
        <div className="relative z-30 container mx-auto px-6 py-16">
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary.darkTeal}15, ${colors.secondary.tealMedium}10)`,
              backdropFilter: 'blur(20px)',
              border: `2px solid ${colors.secondary.tealMedium}30`,
            }}
            animate={{
              boxShadow: [
                `0 0 50px ${colors.secondary.tealMedium}30`,
                `0 0 80px ${colors.secondary.tealMedium}50`,
                `0 0 50px ${colors.secondary.tealMedium}30`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-20 overflow-visible"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.span
                className="text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full border backdrop-blur-sm"
                style={{
                  color: 'white',
                  background: `linear-gradient(135deg, ${colors.primary.darkTeal}80, ${colors.secondary.tealMedium}60)`,
                  borderColor: `${colors.secondary.tealMedium}50`,
                  boxShadow: `0 8px 32px ${colors.primary.darkTeal}40`,
                }}
                animate={{
                  boxShadow: [
                    `0 8px 32px ${colors.primary.darkTeal}40`,
                    `0 12px 40px ${colors.secondary.tealMedium}60`,
                    `0 8px 32px ${colors.primary.darkTeal}40`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ⭐ POZNAJ NASZĄ OFERTĘ ⭐
              </motion.span>
            </motion.div>

            {/* SPEKTAKULARNY TYTUŁ */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                bounce: 0.4,
              }}
              className="text-6xl md:text-8xl font-black tracking-tight relative overflow-visible mb-8 pb-4"
              style={{
                textShadow: `0 4px 20px ${colors.primary.darkTeal}60, 0 0 40px ${colors.secondary.tealMedium}40`,
                zIndex: 30,
                lineHeight: '1.1',
                minHeight: 'auto',
              }}
            >
              <motion.span
                className="bg-clip-text text-transparent block relative z-30"
                style={{
                  backgroundImage: `linear-gradient(145deg, #ffffff 0%, ${colors.secondary.mintLight} 50%, white 100%)`,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  lineHeight: '1.15',
                  paddingBottom: '8px',
                  display: 'inline-block',
                  width: '100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {PAGE_OFFERT_DATA.mainHeading}
              </motion.span>

              {/* Sparkle Effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full z-40"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.h1>

            {/* Premium Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl backdrop-blur-sm border max-w-3xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary.darkTeal}20, rgba(0,0,0,0.3))`,
                borderColor: `${colors.secondary.tealMedium}30`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
              }}
            >
              <motion.p
                className="text-xl leading-8 font-medium"
                style={{
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                {PAGE_OFFERT_DATA.mainDescription}
              </motion.p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/umow-wizyte"
                className="group inline-flex items-center px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary.darkTeal}, ${colors.secondary.tealMedium})`,
                  boxShadow: `0 10px 40px -10px ${colors.primary.darkTeal}50`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <HiOutlineCalendar className="mr-3 text-xl relative z-10" />
                <span className="relative z-10">Umów wizytę już dziś</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nasze usługi - główna sekcja */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating dental icons background */}
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

        <div className="container mx-auto px-6 relative z-10">
          {/* Nagłówek sekcji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
              style={{
                background: colors.gradients.primary,
              }}
            >
              <FaTooth className="text-4xl text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Pełna gama usług
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                stomatologicznych
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Oferujemy{' '}
              <span className="font-semibold text-gray-900">
                kompleksową opiekę stomatologiczną
              </span>{' '}
              w
              <span
                className="font-semibold"
                style={{ color: colors.brand.primary }}
              >
                {' '}
                nowoczesnych warunkach
              </span>
              z wykorzystaniem najnowszych technologii
            </p>
          </motion.div>

          {/* Siatka usług */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {PAGE_OFFERT_DATA.services.map((service, index) => {
              const isAvailable = service.available !== false;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className={`group relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 overflow-hidden border border-gray-200/50 ${
                    !isAvailable ? 'opacity-60' : 'hover:shadow-2xl'
                  }`}
                  whileHover={
                    isAvailable
                      ? {
                          y: -12,
                          rotateY: 5,
                          scale: 1.02,
                        }
                      : {}
                  }
                  style={{
                    background: !isAvailable
                      ? 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)'
                      : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    boxShadow: !isAvailable
                      ? '0 10px 40px -10px rgba(100, 100, 100, 0.2)'
                      : '0 10px 40px -10px rgba(60, 140, 125, 0.2)',
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
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className="p-4 rounded-2xl shadow-lg"
                        style={{
                          background: !isAvailable
                            ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
                            : colors.gradients.simple,
                        }}
                        whileHover={
                          isAvailable
                            ? {
                                rotate: 360,
                                scale: 1.1,
                              }
                            : {}
                        }
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={`/icons/Offer-icons-${(index % 10) + 9}.png`}
                          alt={service.title}
                          width={40}
                          height={40}
                          className={`w-10 h-10 filter brightness-0 invert ${
                            !isAvailable ? 'opacity-50' : ''
                          }`}
                        />
                      </motion.div>

                      {!isAvailable ? (
                        <span
                          className="text-xs font-bold px-3 py-2 rounded-full border-2 uppercase tracking-wider"
                          style={{
                            backgroundColor: '#fbbf2420',
                            color: '#f59e0b',
                            borderColor: '#f59e0b30',
                          }}
                        >
                          Wkrótce
                        </span>
                      ) : (
                        <span
                          className="text-xs font-bold px-3 py-2 rounded-full border-2 uppercase tracking-wider"
                          style={{
                            backgroundColor: `${colors.secondary.tealSoft}20`,
                            color: colors.brand.primary,
                            borderColor: `${colors.brand.primary}30`,
                          }}
                        >
                          {
                            PAGE_OFFERT_DATA.serviceCategories[
                              service.category as keyof typeof PAGE_OFFERT_DATA.serviceCategories
                            ]
                          }
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <motion.h3
                      className={`text-xl font-bold mb-4 ${
                        !isAvailable
                          ? 'text-gray-500'
                          : 'text-gray-900 group-hover:text-gray-800'
                      }`}
                      whileHover={isAvailable ? { x: 4 } : {}}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                        !isAvailable ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* CTA */}
                    {isAvailable ? (
                      <motion.div
                        className="pt-4 border-t-2 border-gray-100 group-hover:border-opacity-50"
                        whileHover={{ y: -2 }}
                      >
                        <Link
                          href="/pytania"
                          className="inline-flex items-center font-semibold text-sm group-hover:translate-x-2 transition-all duration-300"
                          style={{ color: colors.brand.primary }}
                        >
                          Dowiedz się więcej
                          <motion.svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </motion.svg>
                        </Link>
                      </motion.div>
                    ) : (
                      <div className="pt-4 border-t-2 border-gray-200">
                        <span className="inline-flex items-center font-semibold text-sm text-gray-400">
                          Dostępne wkrótce
                        </span>
                      </div>
                    )}
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Co nas wyróżnia */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #1f2937 0%, #374151 50%, #111827 100%)`,
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: colors.secondary.tealSoft,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ rotateY: -90 }}
              whileInView={{ rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="inline-block mb-8"
            >
              <div
                className="inline-flex items-center justify-center w-32 h-32 rounded-full shadow-2xl"
                style={{
                  background: colors.gradients.primary,
                  boxShadow: `0 0 60px ${colors.brand.primary}40`,
                }}
              >
                <FaUserMd className="text-5xl text-white" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Dlaczego warto wybrać{' '}
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${colors.secondary.tealSoft}, ${colors.secondary.tealMedium})`,
                }}
              >
                Sonamed?
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {PAGE_OFFERT_DATA.additionalSections.membership.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaUserMd className="text-4xl text-white" />,
                title: 'Doświadczony zespół',
                description:
                  'Wykwalifikowani lekarze stomatologowie z wieloletnim doświadczeniem',
                color: 'from-blue-500 to-blue-700',
                bgColor: 'rgba(59, 130, 246, 0.1)',
                glowColor: '#3b82f6',
              },
              {
                icon: <HiOutlineShieldCheck className="text-4xl text-white" />,
                title: 'Nowoczesny sprzęt',
                description:
                  'Najnowocześniejsze technologie i sprzęt diagnostyczny',
                color: 'from-emerald-500 to-emerald-700',
                bgColor: 'rgba(16, 185, 129, 0.1)',
                glowColor: '#10b981',
              },
              {
                icon: <HiOutlineHeart className="text-4xl text-white" />,
                title: 'Indywidualne podejście',
                description:
                  'Każdy pacjent otrzymuje spersonalizowaną opiekę i plan leczenia',
                color: 'from-pink-500 to-pink-700',
                bgColor: 'rgba(236, 72, 153, 0.1)',
                glowColor: '#ec4899',
              },
              {
                icon: <FaStethoscope className="text-4xl text-white" />,
                title: 'Kompleksowa opieka',
                description:
                  'Pełen zakres usług stomatologicznych w jednym miejscu',
                color: 'from-purple-500 to-purple-700',
                bgColor: 'rgba(168, 85, 247, 0.1)',
                glowColor: '#a855f7',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group relative rounded-3xl p-8 text-center transition-all duration-500 cursor-pointer"
                style={{
                  background: `linear-gradient(145deg, ${feature.bgColor}, rgba(255, 255, 255, 0.05))`,
                  backdropFilter: 'blur(20px)',
                  border: `2px solid rgba(255, 255, 255, 0.1)`,
                  boxShadow: `0 20px 40px -10px rgba(0, 0, 0, 0.3), 
                             0 0 0 1px rgba(255, 255, 255, 0.05),
                             inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 30px 60px -10px rgba(0, 0, 0, 0.4),
                    0 0 100px -20px ${feature.glowColor}50,
                    0 0 0 1px rgba(255, 255, 255, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 20px 40px -10px rgba(0, 0, 0, 0.3), 
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                }}
              >
                {/* Floating background element */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.glowColor}10 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-2xl`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    boxShadow: `0 10px 30px -5px ${feature.glowColor}40`,
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${feature.glowColor}00, ${feature.glowColor}, ${feature.glowColor}00)`,
                    width: '60%',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            >
              <FaTooth
                className="text-4xl opacity-5"
                style={{ color: colors.brand.primary }}
              />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Main CTA */}
            <div className="mb-16">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: 'spring' }}
                className="inline-flex items-center justify-center w-40 h-40 rounded-full mb-8 shadow-2xl"
                style={{
                  background: colors.gradients.primary,
                  boxShadow: `0 0 100px ${colors.brand.primary}30`,
                }}
              >
                <FaTooth className="text-6xl text-white" />
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Zadbaj o swój{' '}
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  uśmiech
                </span>{' '}
                już dziś!
              </motion.h2>

              <motion.p
                className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Umów się na wizytę i poznaj nasze{' '}
                <span className="font-bold text-gray-900">
                  nowoczesne podejście do stomatologii
                </span>
                . Nasz zespół zapewni Ci{' '}
                <span
                  className="font-bold"
                  style={{ color: colors.brand.primary }}
                >
                  profesjonalną opiekę w przyjaznej atmosferze
                </span>
                .
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/umow-wizyte"
                  className="group inline-flex items-center px-12 py-6 rounded-full text-white font-bold text-xl shadow-2xl relative overflow-hidden"
                  style={{
                    background: colors.gradients.primary,
                    boxShadow: `0 10px 40px -10px ${colors.brand.primary}50`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <HiOutlineCalendar className="mr-4 text-2xl relative z-10" />
                  <span className="relative z-10">Umów wizytę online</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`tel:${businessConstants.contact.phone}`}
                  className="group inline-flex items-center px-12 py-6 rounded-full border-4 font-bold text-xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderColor: colors.brand.primary,
                    color: colors.brand.primary,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.brand.primary;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.boxShadow = `0 10px 40px -10px ${colors.brand.primary}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.color = colors.brand.primary;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FaPhoneAlt className="mr-4 text-xl" />
                  {businessConstants.contact.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <HiOutlineClock className="text-5xl" />,
                  title: 'Szybkie terminy',
                  description:
                    'Dostępność już w najbliższych dniach - nie czekaj miesiącami',
                  gradient: 'from-blue-500 to-blue-700',
                },
                {
                  icon: <HiOutlineStar className="text-5xl" />,
                  title: 'Profesjonalizm',
                  description:
                    'Doświadczeni lekarze i najnowocześniejszy sprzęt medyczny',
                  gradient: 'from-yellow-500 to-orange-600',
                },
                {
                  icon: <HiOutlineHeart className="text-5xl" />,
                  title: 'Komfort',
                  description:
                    'Przyjazna atmosfera i całkowicie bezbolesne leczenie',
                  gradient: 'from-pink-500 to-red-600',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50"
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{
                    background:
                      'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))',
                  }}
                >
                  <div
                    className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
