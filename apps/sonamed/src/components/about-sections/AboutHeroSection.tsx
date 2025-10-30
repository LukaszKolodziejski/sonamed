'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTooth, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';
import { businessConstants } from '@/constants/constants';

export default function AboutHeroSection() {
  return (
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
  );
}
