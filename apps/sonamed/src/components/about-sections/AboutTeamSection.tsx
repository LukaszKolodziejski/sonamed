'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTooth, FaUserMd, FaHeartbeat } from 'react-icons/fa';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';

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

interface AboutTeamSectionProps {
  fadeInUp: any;
  staggerContainer: any;
}

export default function AboutTeamSection({
  fadeInUp,
  staggerContainer,
}: AboutTeamSectionProps) {
  return (
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
  );
}
