'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaUserMd, FaStar } from 'react-icons/fa';
import { HiOutlineClock } from 'react-icons/hi';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';

interface StatsSectionProps {
  isMobile: boolean;
  fadeInUp: any;
  staggerContainer: any;
}

export default function StatsSection({
  isMobile,
  fadeInUp,
  staggerContainer,
}: StatsSectionProps) {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.secondary}30, ${colors.brand.primary}40)`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 to-transparent"></div>

        <div className="absolute inset-0">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `linear-gradient(45deg, ${colors.brand.primary}30, transparent)`,
            }}
          ></div>
          <div
            className="absolute top-40 -left-20 w-72 h-72 rounded-full blur-3xl"
            style={{
              background: `linear-gradient(45deg, ${colors.brand.secondary}20, transparent)`,
            }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{
              background: `linear-gradient(45deg, ${colors.brand.accent}20, transparent)`,
            }}
          ></div>
        </div>

        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <motion.circle
                cx="25"
                cy="25"
                r="1.5"
                fill={colors.neutral.white}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </pattern>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <motion.circle
                cx="50"
                cy="50"
                r="2"
                fill={colors.neutral.white}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, ${colors.neutral.almostWhiteGreenish}, ${colors.neutral.white})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nasza klinika w liczbach
            </span>
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.brand.secondary}, ${colors.brand.primary})`,
            }}
          ></div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            {[
              {
                icon: <FaHeart />,
                value: '35000+',
                label: 'Wszystkich wizyt w klinice',
                color: `${colors.brand.primary}`,
              },
              {
                icon: <HiOutlineClock />,
                value: '25+',
                label: 'Lat doświadczenia',
                color: `${colors.brand.secondary}`,
              },
              {
                icon: <FaUserMd />,
                value: `${sonamedClinicData.team.members.length + 1}`,
                label: 'Specjalistów',
                color: `${colors.brand.accent}`,
              },
              {
                icon: <FaStar />,
                value: '100%',
                label: 'Profesjonalizmu',
                color: `${colors.brand.primary}`,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group flex flex-col items-center p-8 rounded-2xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm"></div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}40, transparent)`,
                  }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="text-4xl rounded-xl p-4 text-white mb-5 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)`,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <motion.dt
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: stat.color }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  >
                    {stat.value}
                  </motion.dt>
                  <dd
                    className="text-base"
                    style={{ color: colors.neutral.almostWhiteGreenish }}
                  >
                    {stat.label}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
