'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaTooth,
  FaUserMd,
  FaMapMarkerAlt,
  FaClock,
  FaAward,
  FaHeartbeat,
  FaShieldAlt,
} from 'react-icons/fa';
import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineHeart,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';
import { businessConstants } from '@/constants/constants';

const zespolStomatologiczny = [
  {
    name: PAGE_ONAS_DATA.additionalSections.team.owner,
    role: 'Właścicielka / Główny Lekarz Dentysta',
    experience: '15+ lat doświadczenia',
    specialization: 'Stomatologia Ogólna, Medycyna Estetyczna',
    image: '/icons/Offer-icons-9.png',
  },
  {
    name: PAGE_ONAS_DATA.additionalSections.team.management,
    role: 'Lekarz Dentysta',
    experience: '10+ lat doświadczenia',
    specialization: 'Stomatologia Zachowawcza',
    image: '/icons/Offer-icons-10.png',
  },
  {
    name: 'Centrum Sonamed',
    role: 'Nowoczesna placówka',
    experience: 'Tysiące zadowolonych pacjentów',
    specialization: 'Kompleksowa opieka stomatologiczna',
    image: '/icons/Offer-icons-11.png',
  },
];

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
      {/* Hero Section z gradientami */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 30%, ${colors.secondary.tealMedium} 70%, ${colors.secondary.mintLight} 100%)`,
          position: 'relative',
        }}
      >
        {/* Animowane tło z pływającymi zębami */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Floating Teeth Icons */}
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
          ></motion.div>
          <motion.div
            animate={{
              background: [
                `radial-gradient(circle at 100% 100%, ${colors.secondary.tealIntense}40, transparent 60%)`,
                `radial-gradient(circle at 0% 100%, ${colors.secondary.tealIntense}40, transparent 60%)`,
                `radial-gradient(circle at 0% 0%, ${colors.secondary.tealIntense}40, transparent 60%)`,
                `radial-gradient(circle at 100% 0%, ${colors.secondary.tealIntense}40, transparent 60%)`,
                `radial-gradient(circle at 100% 100%, ${colors.secondary.tealIntense}40, transparent 60%)`,
              ],
            }}
            transition={{
              duration: 25,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
              delay: 5,
            }}
            className="absolute inset-0 z-15"
          ></motion.div>
        </motion.div>

        {/* Premium Main Content with Glass Effect */}
        <div className="relative z-30 container mx-auto px-6 py-32">
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
            className="max-w-4xl relative z-10"
          >
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
                ⭐ POZNAJ NAS BLIŻEJ ⭐
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                bounce: 0.4,
              }}
              className="text-6xl md:text-8xl font-black tracking-tight"
              style={{
                textShadow: `0 4px 20px ${colors.primary.darkTeal}60, 0 0 40px ${colors.secondary.tealMedium}40`,
              }}
            >
              <motion.span
                className="bg-clip-text text-transparent block"
                style={{
                  backgroundImage: `linear-gradient(145deg, #ffffff 0%, ${colors.secondary.mintLight} 50%, white 100%)`,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
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
                {PAGE_ONAS_DATA.mainHeading}
              </motion.span>

              {/* Sparkle Effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
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
                {PAGE_ONAS_DATA.mainDescription}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <FaMapMarkerAlt className="text-2xl" />,
                  title: 'LOKALIZACJA',
                  value: businessConstants.contact.address.city,
                  color: colors.secondary.tealMedium,
                },
                {
                  icon: <FaClock className="text-2xl" />,
                  title: 'GODZINY PRACY',
                  value: PAGE_ONAS_DATA.locations[0].hours.weekdays,
                  color: colors.secondary.aquaMedium,
                },
                {
                  icon: <FaTooth className="text-2xl" />,
                  title: 'SPECJALIZACJA',
                  value: 'Kompleksowa opieka',
                  color: colors.secondary.tealSoft,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 20px 40px ${item.color}40`,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    type: 'spring',
                    bounce: 0.3,
                  }}
                  className="p-6 rounded-2xl backdrop-blur-sm border text-center cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.4), ${item.color}20)`,
                    borderColor: `${item.color}40`,
                    boxShadow: `0 8px 25px rgba(0,0,0,0.3)`,
                  }}
                >
                  <motion.div
                    className="mb-3 flex justify-center"
                    style={{ color: item.color }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: colors.secondary.mintLight }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-semibold text-sm"
                    style={{
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`,
            }}
            animate={{
              y: [0, -30 - (i % 3) * 10, 0],
              x: [0, i % 2 ? 20 : -20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${colors.secondary.tealMedium}60, transparent)`,
                boxShadow: `0 0 20px ${colors.secondary.tealMedium}40`,
              }}
            />
          </motion.div>
        ))}
      </section>

      {/* Sekcja Misji - Premium Design */}
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

      {/* Sekcja Zespołu - Premium Medical Team */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        className="py-32 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.primary.darkTeal} 0%, rgba(0,0,0,0.9) 40%, ${colors.secondary.seaGreen} 100%)`,
        }}
      >
        {/* Ultra Premium Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Medical Cross Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, ${colors.secondary.tealMedium} 0px, transparent 2px, transparent 20px, ${colors.secondary.tealMedium} 22px),
                repeating-linear-gradient(-45deg, ${colors.primary.darkTeal} 0px, transparent 2px, transparent 20px, ${colors.primary.darkTeal} 22px)
              `,
            }}
            animate={{
              backgroundPosition: ['0px 0px, 0px 0px', '40px 40px, -40px 40px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating Medical Icons */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`medical-${i}`}
              className="absolute opacity-5"
              style={{
                left: `${5 + i * 4.5}%`,
                top: `${10 + (i % 4) * 20}%`,
                width: '30px',
                height: '30px',
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={`/icons/Offer-icons-${9 + (i % 10)}.png`}
                alt="Medical bg"
                width={30}
                height={30}
                className="w-full h-full filter invert"
              />
            </motion.div>
          ))}

          {/* Premium Light Rays */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 0deg at 50% 0%, ${colors.secondary.tealMedium}20, transparent, ${colors.primary.darkTeal}20, transparent)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            className="text-center mb-20 relative z-20"
          >
            {/* Premium Title with Medical Cross */}
            <motion.div className="relative inline-block mb-8">
              <motion.h2
                className="text-5xl md:text-6xl font-black relative z-10"
                style={{
                  textShadow: `0 4px 20px ${colors.primary.darkTeal}80, 0 0 40px ${colors.secondary.tealMedium}60`,
                }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(145deg, white 0%, ${colors.secondary.aquaMedium} 30%, ${colors.secondary.tealSoft} 100%)`,
                  }}
                >
                  {PAGE_ONAS_DATA.additionalSections.team.title}
                </span>
              </motion.h2>

              {/* Medical Cross Icon */}
              <motion.div
                className="absolute -top-8 -right-12 w-16 h-16 opacity-30"
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center text-3xl font-bold"
                  style={{
                    background: `linear-gradient(45deg, ${colors.secondary.tealMedium}, ${colors.primary.darkTeal})`,
                    color: 'white',
                  }}
                >
                  +
                </div>
              </motion.div>

              {/* Glowing Underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.secondary.tealMedium}, transparent)`,
                  width: '60%',
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div
                className="max-w-3xl mx-auto p-6 rounded-2xl backdrop-blur-sm border"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.5), ${colors.primary.darkTeal}20)`,
                  borderColor: `${colors.secondary.tealMedium}30`,
                  boxShadow: `0 15px 35px rgba(0,0,0,0.3)`,
                }}
              >
                <p
                  className="text-xl leading-relaxed font-medium"
                  style={{
                    color: 'white',
                    textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                  }}
                >
                  {PAGE_ONAS_DATA.additionalSections.team.description}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Team Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {zespolStomatologiczny.map((czlonek, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: 5,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.6)`,
                }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Premium Card Container */}
                <div
                  className="relative rounded-3xl backdrop-blur-sm border-2 overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, rgba(0,0,0,0.8) 0%, ${colors.primary.darkTeal}40 50%, rgba(0,0,0,0.9) 100%)`,
                    borderColor: `${colors.secondary.tealMedium}50`,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 ${colors.secondary.tealMedium}30`,
                  }}
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `conic-gradient(from 0deg, ${colors.secondary.tealMedium}60, transparent, ${colors.primary.darkTeal}60, transparent)`,
                      padding: '2px',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div
                      className="w-full h-full rounded-3xl"
                      style={{
                        background: `linear-gradient(145deg, rgba(0,0,0,0.95) 0%, ${colors.primary.darkTeal}20 100%)`,
                      }}
                    />
                  </motion.div>
                  {/* Premium Image Section */}
                  <div className="relative z-10 p-6 pb-0">
                    <motion.div
                      className="relative overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Holographic Effect */}
                      <motion.div
                        className="absolute inset-0 z-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(45deg, ${colors.secondary.tealMedium}40, transparent, ${colors.primary.darkTeal}40, transparent)`,
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      <Image
                        src={czlonek.image}
                        alt={czlonek.name}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transition-all duration-500 group-hover:h-52"
                      />

                      {/* Premium Gradient Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 40%, ${colors.secondary.tealMedium}10 100%)`,
                        }}
                      />

                      {/* Medical Badge */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{
                          background: `linear-gradient(45deg, ${colors.secondary.tealMedium}, ${colors.primary.darkTeal})`,
                          boxShadow: `0 4px 15px ${colors.secondary.tealMedium}40`,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        +
                      </motion.div>
                    </motion.div>
                  </div>
                  {/* Premium Content Section */}
                  <div className="relative z-10 p-8 pt-4">
                    <div className="space-y-6 text-center">
                      {czlonek.name === 'Centrum Sonamed' ? (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {czlonek.name}
                          </h3>
                          <p
                            style={{ color: colors.secondary.aquaMedium }}
                            className="mb-2"
                          >
                            {czlonek.role}
                          </p>
                          <div
                            className="flex items-center text-sm"
                            style={{ color: colors.secondary.mintLight }}
                          >
                            <FaTooth
                              className="mr-2"
                              style={{ color: colors.secondary.tealMedium }}
                            />
                            <span>{czlonek.experience}</span>
                          </div>
                          <div
                            className="flex items-center text-sm mt-1"
                            style={{ color: colors.secondary.mintLight }}
                          >
                            <FaHeartbeat
                              className="mr-2"
                              style={{ color: colors.secondary.tealMedium }}
                            />
                            <span>{czlonek.specialization}</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {czlonek.name}
                          </h3>
                          <p
                            className="mb-2"
                            style={{ color: colors.secondary.aquaMedium }}
                          >
                            {czlonek.role}
                          </p>
                          <div
                            className="flex items-center text-sm"
                            style={{ color: colors.secondary.mintLight }}
                          >
                            <FaUserMd
                              className="mr-2"
                              style={{ color: colors.secondary.tealMedium }}
                            />
                            <span>{czlonek.experience}</span>
                          </div>
                          <div
                            className="flex items-center text-sm mt-1"
                            style={{ color: colors.secondary.mintLight }}
                          >
                            <FaTooth
                              className="mr-2"
                              style={{ color: colors.secondary.tealMedium }}
                            />
                            <span>{czlonek.specialization}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Sekcja Co nas wyróżnia - ULTRA PREMIUM */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="relative py-40 overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.primary.darkTeal} 0%, rgba(0,0,0,0.95) 30%, ${colors.secondary.tealIntense} 60%, rgba(0,0,0,0.9) 100%)`,
        }}
      >
        {/* ULTRA PREMIUM ANIMATED BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Rotating Premium Light Beams */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 0deg at 30% 20%, ${colors.secondary.tealMedium}30, transparent, ${colors.primary.darkTeal}40, transparent, ${colors.secondary.tealSoft}20, transparent)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Secondary Light Layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 180deg at 70% 80%, ${colors.secondary.aquaMedium}25, transparent, ${colors.secondary.tealIntense}35, transparent)`,
            }}
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating Dental Icons Army - 25 icons! */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`dental-float-${i}`}
              className="absolute opacity-8"
              style={{
                left: `${2 + i * 3.8}%`,
                top: `${5 + (i % 5) * 18}%`,
                width: `${20 + (i % 4) * 5}px`,
                height: `${20 + (i % 4) * 5}px`,
              }}
              animate={{
                y: [0, -60 - (i % 4) * 15, 0],
                rotate: [0, i % 2 ? 360 : -360],
                scale: [0.6, 1.3, 0.6],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 8 + (i % 6),
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={`/icons/Offer-icons-${9 + (i % 10)}.png`}
                alt="Dental float"
                width={30}
                height={30}
                className="w-full h-full filter invert"
              />
            </motion.div>
          ))}

          {/* Premium Particle System */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${10 + i * 5.5}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.8, 0],
                y: [0, -100, -200],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-30">
          {/* ULTRA PREMIUM TITLE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
            className="text-center mb-24 relative"
          >
            {/* Spectacular Title with Premium Effects */}
            <motion.div className="relative inline-block mb-12">
              <motion.h2
                className="text-6xl md:text-7xl font-black relative z-10 mb-6"
                style={{
                  textShadow: `0 8px 32px ${colors.primary.darkTeal}80, 0 0 60px ${colors.secondary.tealMedium}60, 0 4px 20px rgba(0,0,0,0.8)`,
                }}
              >
                <span
                  className="bg-clip-text text-transparent block"
                  style={{
                    backgroundImage: `linear-gradient(145deg, white 0%, ${colors.secondary.tealSoft} 25%, ${colors.secondary.mintLight} 50%, white 75%, ${colors.secondary.aquaMedium} 100%)`,
                    backgroundSize: '300% 300%',
                  }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      backgroundImage: `linear-gradient(145deg, white 0%, ${colors.secondary.tealSoft} 25%, ${colors.secondary.mintLight} 50%, white 75%, ${colors.secondary.aquaMedium} 100%)`,
                      backgroundSize: '300% 300%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }}
                  >
                    {PAGE_ONAS_DATA.distinguishingFeatures.title}
                  </motion.span>
                </span>
              </motion.h2>

              {/* Premium Medical Cross with Rotation */}
              <motion.div
                className="absolute -top-8 -right-20 w-20 h-20"
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="w-full h-full rounded-2xl flex items-center justify-center text-4xl font-black shadow-2xl"
                  style={{
                    background: `conic-gradient(from 0deg, ${colors.secondary.tealMedium}, ${colors.primary.darkTeal}, ${colors.secondary.aquaMedium}, ${colors.secondary.tealMedium})`,
                    color: 'white',
                    boxShadow: `0 8px 32px ${colors.secondary.tealMedium}60`,
                  }}
                >
                  +
                </div>
              </motion.div>

              {/* Spectacular Sparkle Effects */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`title-sparkle-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${15 + i * 7}%`,
                    top: `${-10 + (i % 3) * 8}px`,
                  }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Premium Underline Animation */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.secondary.tealMedium}80, ${colors.secondary.aquaMedium}60, ${colors.secondary.tealMedium}80, transparent)`,
                  width: '80%',
                }}
                animate={{
                  scaleX: [0, 1, 0.8, 1],
                  opacity: [0.3, 1, 0.6, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Premium Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative max-w-4xl mx-auto"
            >
              <div
                className="p-8 rounded-3xl backdrop-blur-sm border-2 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.7), ${colors.primary.darkTeal}30, rgba(0,0,0,0.8))`,
                  borderColor: `${colors.secondary.tealMedium}40`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 ${colors.secondary.tealMedium}20`,
                }}
              >
                {/* Holographic Overlay */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(45deg, ${colors.secondary.tealMedium}10, transparent, ${colors.primary.darkTeal}15, transparent)`,
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <p
                  className="text-2xl leading-relaxed font-semibold relative z-10"
                  style={{
                    color: 'white',
                    textShadow: '0 4px 12px rgba(0,0,0,0.8)',
                  }}
                >
                  🌟 To co czyni nas wyjątkowymi w **premium** opiece
                  stomatologicznej dla najbardziej wymagających pacjentów 🌟
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ULTRA PREMIUM FEATURES GRID - All 8 Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {PAGE_ONAS_DATA.distinguishingFeatures.features.map(
              (feature, index) => {
                const icons = [
                  <FaTooth key="tooth" className="text-3xl" />,
                  <HiOutlineHeart key="heart" className="text-3xl" />,
                  <HiOutlineClock key="clock" className="text-3xl" />,
                  <HiOutlineSparkles key="sparkles" className="text-3xl" />,
                  <FaAward key="award" className="text-3xl" />,
                  <FaShieldAlt key="shield" className="text-3xl" />,
                  <FaHeartbeat key="heartbeat" className="text-3xl" />,
                  <FaUserMd key="usermd" className="text-3xl" />,
                ];

                const cardColors = [
                  colors.secondary.tealMedium,
                  colors.secondary.aquaMedium,
                  colors.secondary.tealSoft,
                  colors.secondary.mintLight,
                  colors.primary.darkTeal,
                  colors.secondary.tealIntense,
                  colors.secondary.seaGreen,
                  colors.secondary.tealMedium,
                ];

                return (
                  <motion.div
                    key={feature.id}
                    variants={{
                      hidden: { opacity: 0, y: 60, scale: 0.8, rotateY: 45 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                          duration: 0.8,
                          type: 'spring',
                          bounce: 0.4,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -12,
                      rotateY: -8,
                      boxShadow: `0 25px 50px rgba(0,0,0,0.6)`,
                    }}
                    className="group relative overflow-hidden cursor-pointer"
                    style={{ perspective: '1000px' }}
                  >
                    {/* ULTRA PREMIUM CARD CONTAINER */}
                    <div
                      className="relative rounded-3xl backdrop-blur-sm border-2 overflow-hidden h-full min-h-[300px] p-6"
                      style={{
                        background: `linear-gradient(145deg, rgba(0,0,0,0.85) 0%, ${cardColors[index]}20 50%, rgba(0,0,0,0.9) 100%)`,
                        borderColor: `${cardColors[index]}50`,
                        boxShadow: `0 15px 35px rgba(0,0,0,0.4), inset 0 1px 0 ${cardColors[index]}30`,
                      }}
                    >
                      {/* Animated Holographic Border */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `conic-gradient(from ${index * 45}deg, ${
                            cardColors[index]
                          }60, transparent, ${
                            colors.primary.darkTeal
                          }40, transparent)`,
                          padding: '2px',
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <div
                          className="w-full h-full rounded-3xl"
                          style={{
                            background: `linear-gradient(145deg, rgba(0,0,0,0.95), ${cardColors[index]}15)`,
                          }}
                        />
                      </motion.div>

                      {/* Floating Background Orbs */}
                      <motion.div
                        className="absolute -top-8 -right-8 w-16 h-16 rounded-full opacity-20"
                        style={{ backgroundColor: cardColors[index] }}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.2, 0.4, 0.2],
                          rotate: [0, 180],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />

                      <motion.div
                        className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-15"
                        style={{ backgroundColor: colors.secondary.aquaMedium }}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />

                      {/* PREMIUM CARD CONTENT */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Icon Section */}
                        <motion.div
                          className="mb-6 flex justify-center"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          <div
                            className="p-4 rounded-2xl shadow-2xl"
                            style={{
                              background: `linear-gradient(45deg, ${cardColors[index]}, ${colors.primary.darkTeal})`,
                              color: 'white',
                              boxShadow: `0 8px 25px ${cardColors[index]}40`,
                            }}
                          >
                            {icons[index]}
                          </div>
                        </motion.div>

                        {/* Content Section */}
                        <div className="text-center space-y-4">
                          <motion.h3
                            className="text-lg font-black relative"
                            style={{
                              color: 'white',
                              textShadow: `0 4px 15px ${cardColors[index]}60`,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {feature.id
                              .split('-')
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(' ')}

                            {/* Premium Underline */}
                            <motion.div
                              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${cardColors[index]}, transparent)`,
                                width: '70%',
                              }}
                              animate={{
                                scaleX: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.2,
                              }}
                            />
                          </motion.h3>

                          <motion.p
                            className="text-sm leading-relaxed font-medium px-2"
                            style={{
                              color: 'white',
                              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {feature.description}
                          </motion.p>
                        </div>

                        {/* Premium Bottom Accent */}
                        <motion.div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${cardColors[index]}80, transparent)`,
                          }}
                          animate={{
                            scaleX: [0.5, 1, 0.5],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                        />
                      </div>

                      {/* Sparkle Effects */}
                      {[...Array(3)].map((_, sparkleIndex) => (
                        <motion.div
                          key={sparkleIndex}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + sparkleIndex * 25}%`,
                            top: `${15 + sparkleIndex * 10}%`,
                          }}
                          animate={{
                            scale: [0, 2, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2 + sparkleIndex * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>

          {/* SPECTACULAR CLOSING SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
            className="text-center"
          >
            <div
              className="relative max-w-4xl mx-auto p-12 rounded-3xl backdrop-blur-sm border-2 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.8), ${colors.primary.darkTeal}40, rgba(0,0,0,0.9))`,
                borderColor: `${colors.secondary.tealMedium}50`,
                boxShadow: `0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${colors.secondary.tealMedium}30`,
              }}
            >
              {/* Premium Background Pattern */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.secondary.tealMedium}15, transparent 50%), radial-gradient(circle at 75% 75%, ${colors.primary.darkTeal}20, transparent 50%)`,
                }}
                animate={{
                  backgroundPosition: [
                    '0% 0%, 100% 100%',
                    '100% 0%, 0% 100%',
                    '0% 0%, 100% 100%',
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-4xl font-black mb-8"
                  style={{
                    color: 'white',
                    textShadow: `0 4px 20px ${colors.secondary.tealMedium}60`,
                  }}
                  animate={{
                    textShadow: [
                      `0 4px 20px ${colors.secondary.tealMedium}60`,
                      `0 8px 30px ${colors.secondary.aquaMedium}80`,
                      `0 4px 20px ${colors.secondary.tealMedium}60`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🎆 **PREMIUM DENTAL EXPERIENCE** 🎆
                </motion.h3>

                <motion.p
                  className="text-2xl leading-relaxed font-semibold mb-8"
                  style={{
                    color: 'white',
                    textShadow: '0 4px 12px rgba(0,0,0,0.8)',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  **Zaufaj ekspertom, którzy łączą najnowsze technologie z
                  indywidualnym podejściem do każdego pacjenta**
                </motion.p>

                {/* Premium CTA Section */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="flex items-center space-x-3 px-6 py-3 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${colors.secondary.tealMedium}30, ${colors.primary.darkTeal}40)`,
                      border: `2px solid ${colors.secondary.tealMedium}50`,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <FaTooth
                      className="text-2xl"
                      style={{ color: colors.secondary.tealMedium }}
                    />
                    <span
                      className="font-bold text-lg"
                      style={{ color: 'white' }}
                    >
                      UMÓW WIZYTĘ
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 px-6 py-3 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${colors.secondary.aquaMedium}30, ${colors.secondary.tealSoft}40)`,
                      border: `2px solid ${colors.secondary.aquaMedium}50`,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: 'white' }}
                    >
                      📞 {PAGE_ONAS_DATA.contact.phone}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
