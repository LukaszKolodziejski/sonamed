'use client';

import { motion } from 'framer-motion';
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
      className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50"
    >
      {/* Floating dental icons background - więcej zębów */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-30">
        {/* Sekcja tytułowa */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
          className="text-center mb-24 relative"
        >
          {/* Tytuł z efektami */}
          <motion.div className="relative inline-block mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 relative z-10 mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent">
                {PAGE_ONAS_DATA.distinguishingFeatures.title}
              </span>
            </h2>

            {/* Krzyż medyczny */}
            <motion.div
              className="absolute -top-8 -right-20 w-20 h-20"
              animate={{
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center text-4xl font-black shadow-2xl"
                style={{
                  background: colors.gradients.primary,
                  color: 'white',
                  boxShadow: `0 8px 32px ${colors.secondary.tealMedium}40`,
                }}
              >
                +
              </div>
            </motion.div>

            {/* Podkreślenie */}
            <div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.secondary.tealMedium}, transparent)`,
                width: '60%',
              }}
            />
          </motion.div>

          {/* Karta z opisem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative max-w-4xl mx-auto"
          >
            <div
              className="p-8 rounded-3xl backdrop-blur-sm border-2 relative overflow-hidden shadow-xl"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.98), ${colors.secondary.mintLight}50)`,
                borderColor: `${colors.secondary.tealMedium}60`,
                boxShadow: `0 20px 60px ${colors.brand.primary}25, inset 0 1px 0 rgba(255,255,255,0.5)`,
              }}
            >
              <p className="text-xl leading-relaxed font-semibold text-gray-800">
                Poznaj to, co czyni nas wyjątkowymi w opiece stomatologicznej
                dla najbardziej wymagających pacjentów
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Siatka cech wyróżniających - 8 elementów */}
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
                    y: -12,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  {/* Kontener karty */}
                  <div
                    className="relative rounded-2xl overflow-hidden h-full min-h-[280px] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.98) 0%, ${colors.secondary.mintLight}40 100%)`,
                      borderColor: `${colors.secondary.tealMedium}50`,
                      boxShadow: `0 10px 40px -10px ${colors.brand.primary}20, inset 0 1px 0 rgba(255,255,255,0.5)`,
                    }}
                  >
                    {/* Animowane tło przy hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${colors.brand.primary}05 0%, ${colors.secondary.tealSoft}10 100%)`,
                      }}
                    />

                    {/* Latający ząb w tle */}
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

                    {/* Zawartość karty */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Sekcja ikony */}
                      <div className="mb-6">
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
                          <div className="text-white">{icons[index]}</div>
                        </motion.div>
                      </div>

                      {/* Sekcja zawartości */}
                      <div className="space-y-3">
                        <motion.h3
                          className="text-xl font-bold text-gray-900 group-hover:text-gray-800"
                          whileHover={{ x: 4 }}
                        >
                          {feature.title}
                        </motion.h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Efekt świecenia */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                                   0 0 60px -10px ${colors.brand.primary}30`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>

        {/* Sekcja podsumowująca */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
          className="text-center"
        >
          <div
            className="relative max-w-4xl mx-auto p-12 rounded-3xl backdrop-blur-sm border-2 overflow-hidden shadow-2xl"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.98), ${colors.secondary.mintLight}50)`,
              borderColor: `${colors.secondary.tealMedium}60`,
              boxShadow: `0 25px 50px ${colors.brand.primary}25, inset 0 1px 0 rgba(255,255,255,0.5)`,
            }}
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent">
                Profesjonalna opieka stomatologiczna
              </h3>

              <p className="text-xl leading-relaxed font-medium mb-8 text-gray-700">
                Zaufaj ekspertom, którzy łączą najnowsze technologie z
                indywidualnym podejściem do każdego pacjenta
              </p>

              {/* Przyciski akcji */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.div
                  className="flex items-center space-x-3 px-8 py-4 rounded-full shadow-xl"
                  style={{
                    background: colors.gradients.primary,
                    boxShadow: `0 10px 40px -10px ${colors.brand.primary}50`,
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <FaTooth className="text-2xl text-white" />
                  <span className="font-bold text-lg text-white">
                    UMÓW WIZYTĘ
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 px-8 py-4 rounded-full border-4"
                  style={{
                    borderColor: colors.brand.primary,
                    color: colors.brand.primary,
                    background: 'rgba(255, 255, 255, 0.9)',
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <span className="font-bold text-lg">
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
