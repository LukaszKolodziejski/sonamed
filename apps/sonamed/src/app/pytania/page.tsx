'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import {
  HiOutlineCurrencyDollar,
  HiOutlineChevronDown,
  HiOutlineClipboardCheck,
  HiOutlinePhone,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineStar,
} from 'react-icons/hi';
import { FaTooth, FaStethoscope, FaUserMd } from 'react-icons/fa';
import Link from 'next/link';
import { FAQ_CATEGORIES, getQuestionsByCategory } from '@/constants/questions';
import { colors } from '@/constants/colors';
import { businessConstants } from '@/constants/constants';

export default function PytaniaPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  // Mapowanie kategorii na ikony i kolory
  const categoryIcons = {
    usługi: {
      icon: <FaTooth style={{ color: colors.secondary.tealMedium }} />,
      color: colors.secondary.tealMedium,
    },
    leczenie: {
      icon: <FaStethoscope style={{ color: colors.secondary.seaGreen }} />,
      color: colors.secondary.seaGreen,
    },
    organizacja: {
      icon: (
        <HiOutlineClipboardCheck
          style={{ color: colors.secondary.aquaMedium }}
        />
      ),
      color: colors.secondary.aquaMedium,
    },
    profilaktyka: {
      icon: (
        <HiOutlineShieldCheck style={{ color: colors.secondary.tealSoft }} />
      ),
      color: colors.secondary.tealSoft,
    },
    finanse: {
      icon: (
        <HiOutlineCurrencyDollar
          style={{ color: colors.secondary.tealIntense }}
        />
      ),
      color: colors.secondary.tealIntense,
    },
  } as const;

  // Tworzenie sekcji na podstawie danych z questions.ts
  const sections = Object.entries(FAQ_CATEGORIES).map(
    ([categoryKey, categoryTitle]) => {
      const category = categoryKey as keyof typeof FAQ_CATEGORIES;
      const questions = getQuestionsByCategory(category);
      const iconConfig = categoryIcons[category];

      return {
        id: category,
        title: categoryTitle,
        icon: iconConfig.icon,
        color: iconConfig.color,
        questions: questions.map((q) => ({
          id: q.id,
          question: q.question,
          answer: q.answer,
        })),
      };
    }
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section - Inspirowana stroną oferty */}
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
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 opacity-8"
              style={{
                left: `${5 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 5 + i * 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            >
              <Image
                src={`/icons/Offer-icons-${9 + (i % 10)}.png`}
                alt="Dental Icon"
                width={64}
                height={64}
                className="w-full h-full filter invert opacity-20"
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
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="absolute inset-0 z-10"
          />
        </motion.div>

        {/* Premium Main Content with Glass Effect */}
        <div className="relative z-30 container mx-auto px-4 py-8 md:px-6 md:py-16">
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
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl relative z-20 text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 md:mb-8"
            >
              <motion.span
                className="text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-2 md:px-6 md:py-3 rounded-full border backdrop-blur-sm"
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
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🦷 FAQ STOMATOLOGICZNE 🦷
              </motion.span>
            </motion.div>

            {/* Spektakularny Tytuł */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                bounce: 0.4,
              }}
              className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight relative mb-4 md:mb-8"
              style={{
                textShadow: `0 4px 20px ${colors.primary.darkTeal}60, 0 0 40px ${colors.secondary.tealMedium}40`,
                lineHeight: '1.1',
              }}
            >
              <motion.span
                className="bg-clip-text text-transparent block relative"
                style={{
                  backgroundImage: `linear-gradient(145deg, #ffffff 0%, ${colors.secondary.mintLight} 50%, white 100%)`,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Często zadawane pytania
              </motion.span>

              {/* Sparkle Effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${8 + (i % 3) * 15}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </motion.h1>

            {/* Premium Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 md:mt-8 p-4 md:p-8 rounded-2xl backdrop-blur-sm border max-w-4xl mx-auto"
              style={{
                background: `linear-gradient(135deg, ${colors.primary.darkTeal}20, rgba(0,0,0,0.3))`,
                borderColor: `${colors.secondary.tealMedium}30`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
              }}
            >
              <motion.p
                className="text-base md:text-xl lg:text-2xl leading-6 md:leading-8 font-medium"
                style={{
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące
                leczenia stomatologicznego, usług medycyny estetycznej oraz
                organizacji wizyt w naszej klinice{' '}
                <span className="font-bold">SONAMED</span>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section
        className="relative py-12 md:py-24 lg:py-32 overflow-hidden"
        style={{
          // background: `linear-gradient(135deg, ${colors.secondary.mintLight} 0%, ${colors.neutral.almostWhiteGreenish} 30%, ${colors.secondary.tealSoft}20 70%, ${colors.secondary.mintLight} 100%)`,
          background: '#fff',
        }}
      >
        {/* Floating dental icons background */}
        <div className="absolute inset-0 opacity-6 hidden md:block">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
            >
              <FaTooth className="text-6xl" style={{ color: '#F9FAFB' }} />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-3 md:px-6 relative z-10">
          {/* Sekcje pytań */}
          <div className="max-w-5xl mx-auto space-y-4 md:space-y-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="group relative rounded-3xl shadow-2xl border overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${colors.secondary.tealSoft}15 0%, ${colors.secondary.aquaMedium}10 50%, ${colors.secondary.mintLight}20 100%)`,
                  borderColor: `${section.color}30`,
                  boxShadow: `0 20px 60px -10px ${section.color}25`,
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 25px 70px -10px ${section.color}35`,
                }}
              >
                {/* Enhanced Gradient accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{
                    background: `linear-gradient(90deg, ${section.color}00, ${section.color}80, ${section.color}ff, ${section.color}80, ${section.color}00)`,
                  }}
                />

                {/* Fixed Header - nie przesunie się po kliknięciu */}
                <div
                  className="sticky top-0 z-20"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary.tealSoft}25, ${colors.secondary.aquaMedium}15)`,
                    backdropFilter: 'blur(15px)',
                  }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-4 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 flex items-center justify-between text-left transition-all duration-300"
                    style={{
                      background:
                        openSection === section.id
                          ? `linear-gradient(135deg, ${section.color}25, ${section.color}15)`
                          : 'transparent',
                    }}
                  >
                    <div className="flex items-center">
                      <motion.div
                        className="p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl mr-3 md:mr-4 lg:mr-6 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${section.color}40, ${section.color}25)`,
                          border: `2px solid ${section.color}50`,
                          boxShadow: `0 8px 25px -5px ${section.color}40`,
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: 10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-xl md:text-2xl lg:text-3xl filter drop-shadow-sm">
                          {section.icon}
                        </div>
                      </motion.div>
                      <h2
                        className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold group-hover:scale-105 transition-transform duration-300"
                        style={{
                          color: colors.primary.darkTeal,
                          textShadow: `0 2px 4px ${section.color}20`,
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <motion.div
                      animate={{ rotate: openSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.4, type: 'spring' }}
                      className="p-2 md:p-3 rounded-full shadow-lg"
                      style={{
                        background:
                          openSection === section.id
                            ? `linear-gradient(135deg, ${section.color}50, ${section.color}30)`
                            : `linear-gradient(135deg, ${colors.secondary.tealSoft}40, ${colors.secondary.aquaMedium}20)`,
                        border: `2px solid ${
                          openSection === section.id
                            ? section.color
                            : colors.brand.primary
                        }40`,
                      }}
                    >
                      <HiOutlineChevronDown
                        className="text-2xl md:text-3xl filter drop-shadow-sm"
                        style={{
                          color:
                            openSection === section.id
                              ? section.color
                              : colors.brand.primary,
                        }}
                      />
                    </motion.div>
                  </button>
                </div>

                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="px-2 pb-4 md:px-6 md:pb-6 lg:px-10 lg:pb-8"
                      style={{
                        background: `linear-gradient(135deg, ${section.color}05, transparent)`,
                      }}
                    >
                      <div className="space-y-3 md:space-y-4 lg:space-y-6">
                        {section.questions.map((q) => (
                          <motion.div
                            key={q.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-2xl shadow-lg border overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${colors.secondary.tealSoft}25 0%, ${colors.secondary.aquaMedium}15 50%, ${colors.secondary.mintLight}30 100%)`,
                              borderColor: `${section.color}40`,
                            }}
                            whileHover={{
                              boxShadow: `0 10px 30px -5px ${section.color}20`,
                            }}
                          >
                            <button
                              onClick={() => toggleQuestion(q.id)}
                              className="w-full px-3 py-3 md:px-6 md:py-5 lg:px-8 lg:py-6 flex items-center justify-between text-left transition-all duration-300"
                              style={{
                                background:
                                  openQuestion === q.id
                                    ? `linear-gradient(135deg, ${section.color}30, ${section.color}20)`
                                    : 'transparent',
                              }}
                            >
                              <h3
                                className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold pr-2 md:pr-4 leading-snug md:leading-relaxed"
                                style={{
                                  color: colors.primary.darkTeal,
                                  textShadow: `0 1px 2px ${section.color}20`,
                                }}
                              >
                                {q.question}
                              </h3>
                              <motion.div
                                animate={{
                                  rotate: openQuestion === q.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 p-2 rounded-full shadow-md"
                                style={{
                                  background:
                                    openQuestion === q.id
                                      ? `linear-gradient(135deg, ${section.color}50, ${section.color}30)`
                                      : `linear-gradient(135deg, ${colors.secondary.tealSoft}30, ${colors.secondary.aquaMedium}20)`,
                                  border: `2px solid ${
                                    openQuestion === q.id
                                      ? section.color
                                      : colors.brand.primary
                                  }30`,
                                }}
                              >
                                <HiOutlineChevronDown
                                  className="text-2xl filter drop-shadow-sm"
                                  style={{
                                    color:
                                      openQuestion === q.id
                                        ? section.color
                                        : colors.brand.primary,
                                  }}
                                />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {openQuestion === q.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.4 }}
                                  className="px-3 pb-3 md:px-6 md:pb-5 lg:px-8 lg:pb-6"
                                  style={{
                                    background: `linear-gradient(135deg, ${section.color}05, transparent)`,
                                    borderTop: `2px solid ${section.color}20`,
                                  }}
                                >
                                  <p
                                    className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 pt-2 md:pt-3 lg:pt-4 font-medium"
                                    style={{
                                      color: colors.primary.darkTeal,
                                      textShadow: `0 1px 2px ${colors.secondary.tealSoft}30`,
                                    }}
                                  >
                                    {q.answer}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Premium glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                               0 0 60px -10px ${section.color}30`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section
        className="relative py-12 md:py-24 lg:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 50%, ${colors.secondary.tealMedium} 100%)`,
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: colors.secondary.mintLight,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>

        {/* Floating dental icons */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            >
              <FaTooth className="text-6xl" style={{ color: '#F3F4F6' }} />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Premium Glass Card */}
            <div
              className="relative rounded-3xl p-6 md:p-10 lg:p-12 backdrop-blur-sm border"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
                borderColor: `${colors.secondary.tealMedium}40`,
                boxShadow: `0 20px 60px -10px rgba(0,0,0,0.3)`,
              }}
            >
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: 'spring' }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary.tealMedium}, ${colors.secondary.aquaMedium})`,
                    boxShadow: `0 0 50px ${colors.secondary.tealMedium}40`,
                  }}
                >
                  <FaTooth className="text-4xl text-white" />
                </motion.div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
                  Nie znalazłeś odpowiedzi na swoje pytanie?
                </h2>

                {/* Subtitle */}
                <p
                  className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-10 lg:mb-12 leading-relaxed"
                  style={{ color: colors.secondary.mintLight }}
                >
                  Skontaktuj się z nami - chętnie odpowiemy na wszystkie Twoje
                  pytania i pomożemy w wyborze najlepszego planu leczenia
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/umow-wizyte"
                      className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-white font-bold text-base md:text-lg lg:text-xl shadow-2xl relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${colors.secondary.tealMedium}, ${colors.secondary.aquaMedium})`,
                        boxShadow: `0 10px 40px -10px ${colors.secondary.tealMedium}60`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <HiOutlinePhone className="mr-2 md:mr-3 lg:mr-4 text-lg md:text-xl lg:text-2xl relative z-10" />
                      <span className="relative z-10">Umów wizytę online</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`tel:${businessConstants.contact.phone}`}
                      className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full border-2 md:border-4 font-bold text-base md:text-lg lg:text-xl transition-all duration-300 relative overflow-hidden text-white"
                      style={{
                        borderColor: 'white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = colors.brand.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      <HiOutlinePhone className="mr-2 md:mr-3 lg:mr-4 text-lg md:text-xl lg:text-2xl" />
                      Zadzwoń: {businessConstants.contact.phone}
                    </a>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-center">
                  {[
                    {
                      icon: <FaUserMd className="text-2xl md:text-3xl" />,
                      title: 'Doświadczony zespół',
                      description: 'Lekarze z wieloletnią praktyką',
                    },
                    {
                      icon: <HiOutlineHeart className="text-2xl md:text-3xl" />,
                      title: 'Indywidualne podejście',
                      description: 'Każdy pacjent to priorytet',
                    },
                    {
                      icon: <HiOutlineStar className="text-2xl md:text-3xl" />,
                      title: 'Najwyższa jakość',
                      description: 'Nowoczesne technologie',
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group"
                    >
                      <motion.div
                        className="inline-flex p-3 md:p-4 rounded-2xl mb-3 md:mb-4 text-white"
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-gray-100">
                        {feature.title}
                      </h4>
                      <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: colors.secondary.mintLight }}
                      >
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
