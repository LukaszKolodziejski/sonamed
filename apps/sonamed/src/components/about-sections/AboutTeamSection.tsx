'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTooth, FaUserMd, FaHeartbeat } from 'react-icons/fa';
import { PAGE_ONAS_DATA } from '@/constants/page_onas';
import { colors } from '@/constants/colors';

const zespolStomatologiczny = [
  {
    name: PAGE_ONAS_DATA.additionalSections.team.owner,
    role: 'Właścicielka / Lekarz Dentysta',
    experience: '15+ lat doświadczenia',
    specialization: 'Stomatologia Ogólna, Medycyna Estetyczna',
    image: '/images/sonia/photo-10.jpeg',
  },
  {
    name: PAGE_ONAS_DATA.additionalSections.team.management,
    role: 'Lekarz / Menadżer',
    experience: 'Menadżer gabinetu',
    specialization: 'Medycyna stylu życia',
    image: '/images/nina/photo-7.jpeg',
  },
  {
    name: 'Centrum Sonamed',
    role: 'Nowoczesna placówka',
    experience: 'Tysiące zadowolonych pacjentów',
    specialization: 'Kompleksowa opieka stomatologiczna',
    image: '/images/office/photo-8.jpeg',
  },
];

interface AboutTeamSectionProps {
  fadeInUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
  staggerContainer: {
    hidden: { opacity: number };
    visible: { opacity: number; transition: { staggerChildren: number } };
  };
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
        background: `linear-gradient(135deg, ${colors.brand.dark} 0%, ${colors.brand.primary} 50%, ${colors.secondary.seaGreen} 100%)`,
      }}
    >
      {/* Premium gradient overlays - jak w TreatmentProcessSection */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${colors.brand.primary}40 0%, transparent 60%), radial-gradient(circle at 80% 80%, ${colors.secondary.tealMedium}20 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at 60% 10%, ${colors.secondary.tealMedium}20 0%, transparent 40%), radial-gradient(circle at 40% 90%, ${colors.brand.primary}30 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated Medical Cross Pattern - zachowana siatka */}
      <div className="absolute inset-0 overflow-hidden">
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

        {/* Animated particles */}
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
              className="text-5xl md:text-6xl font-black relative z-10 text-white"
              style={{
                textShadow: `0 4px 20px ${colors.primary.darkTeal}80, 0 0 40px ${colors.secondary.tealMedium}60`,
              }}
            >
              {PAGE_ONAS_DATA.additionalSections.team.title}
            </motion.h2>

            {/* Medical Cross Icon */}
            <motion.div
              className="absolute -top-8 -right-12 w-16 h-16 opacity-30"
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
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
            <div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.secondary.tealMedium}, transparent)`,
                width: '60%',
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
                background: `linear-gradient(135deg, rgba(255,255,255,0.15), ${colors.secondary.mintLight}25)`,
                borderColor: `${colors.secondary.tealMedium}40`,
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
              className="group rounded-3xl relative overflow-hidden cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Premium Card Container */}
              <div
                className="relative rounded-3xl backdrop-blur-sm border-2 overflow-hidden h-full flex flex-col"
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.15) 0%, ${colors.secondary.mintLight}20 50%, rgba(255,255,255,0.12) 100%)`,
                  borderColor: `${colors.secondary.tealMedium}50`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 ${colors.secondary.tealMedium}30`,
                }}
              >
                {/* Premium Image Section */}
                <div className="relative z-10 p-6 pb-0">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={czlonek.image}
                      alt={czlonek.name}
                      width={600}
                      height={600}
                      className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105"
                    />

                    {/* Premium Gradient Overlay */}
                    <div
                      className="absolute inset-0 rounded-2xl group-hover:rounded-3xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 40%, ${colors.secondary.tealMedium}10 100%)`,
                      }}
                    />

                    {/* Medical Badge */}
                    <div
                      className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{
                        background: `linear-gradient(45deg, ${colors.secondary.tealMedium}, ${colors.primary.darkTeal})`,
                        boxShadow: `0 4px 15px ${colors.secondary.tealMedium}40`,
                      }}
                    >
                      +
                    </div>
                  </motion.div>
                </div>
                {/* Premium Content Section */}
                <div className="relative z-10 p-8 pt-4 flex-grow flex items-center">
                  <div className="space-y-4 w-full">
                    {czlonek.name === 'Centrum Sonamed' ? (
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white mb-2 text-left">
                          {czlonek.name}
                        </h3>
                        <p
                          style={{ color: colors.secondary.aquaMedium }}
                          className="mb-2 text-lg text-left"
                        >
                          {czlonek.role}
                        </p>
                        <div
                          className="flex items-center text-base"
                          style={{ color: colors.secondary.mintLight }}
                        >
                          <FaTooth
                            className="mr-2 flex-shrink-0"
                            style={{ color: colors.secondary.tealMedium }}
                          />
                          <span>{czlonek.experience}</span>
                        </div>
                        <div
                          className="flex items-center text-base mt-1"
                          style={{ color: colors.secondary.mintLight }}
                        >
                          <FaHeartbeat
                            className="mr-2 flex-shrink-0"
                            style={{ color: colors.secondary.tealMedium }}
                          />
                          <span>{czlonek.specialization}</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-white mb-1 text-left">
                          {czlonek.name}
                        </h3>
                        <p
                          className="mb-2 text-lg text-left"
                          style={{ color: colors.secondary.aquaMedium }}
                        >
                          {czlonek.role}
                        </p>
                        <div
                          className="flex items-center text-base"
                          style={{ color: colors.secondary.mintLight }}
                        >
                          <FaUserMd
                            className="mr-2 flex-shrink-0"
                            style={{ color: colors.secondary.tealMedium }}
                          />
                          <span>{czlonek.experience}</span>
                        </div>
                        <div
                          className="flex items-center text-base mt-1"
                          style={{ color: colors.secondary.mintLight }}
                        >
                          {czlonek.name ===
                          PAGE_ONAS_DATA.additionalSections.team.management ? (
                            <FaHeartbeat
                              className="mr-2 flex-shrink-0"
                              style={{ color: colors.secondary.tealMedium }}
                            />
                          ) : (
                            <FaTooth
                              className="mr-2 flex-shrink-0"
                              style={{ color: colors.secondary.tealMedium }}
                            />
                          )}
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
