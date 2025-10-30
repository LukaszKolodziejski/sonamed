'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaTooth,
  FaAward,
  FaShieldAlt,
  FaHeartbeat,
  FaUserMd,
} from 'react-icons/fa';
import {
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';

export default function AboutFeaturesSection() {
  return (
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
  );
}
