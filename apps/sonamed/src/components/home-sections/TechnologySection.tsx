'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTooth, FaMicroscope, FaShieldAlt } from 'react-icons/fa';
import { colors } from '@/constants/colors';

export default function TechnologySection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Floating dental icons background - jak w OfertaPage */}
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Nagłówek sekcji - premium style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-2xl"
            style={{
              background: colors.gradients.primary,
            }}
          >
            <FaMicroscope className="text-3xl text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Nowoczesne technologie
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              medyczne
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Wykorzystujemy{' '}
            <span className="font-semibold text-gray-900">
              najnowocześniejsze urządzenia
            </span>{' '}
            i technologie zapewniające{' '}
            <span
              className="font-semibold"
              style={{ color: colors.brand.primary }}
            >
              najwyższą jakość leczenia
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Zdjęcie z premium efektami */}
          <motion.div
            className="relative w-full group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/sonia/photo-1.jpeg"
                alt="Nowoczesna klinika"
                width={1280}
                height={720}
                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}80, ${colors.secondary.tealMedium}50)`,
                }}
              />
            </div>
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl -z-10 blur-3xl opacity-30"
              style={{
                background: colors.gradients.primary,
              }}
            />
          </motion.div>

          {/* Karty z funkcjami - white premium cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                {
                  title: 'Leczenie pod mikroskopem',
                  description:
                    'Precyzyjne zabiegi wykonywane z wykorzystaniem nowoczesnej mikroskopii dentystycznej',
                  icon: FaMicroscope,
                  gradient: 'from-blue-500 to-blue-700',
                  bgColor: 'rgba(59, 130, 246, 0.1)',
                },
                {
                  title: 'Diagnostyka RTG',
                  description:
                    'Precyzyjne zdjęcia pantomograficzne RTG do dokładnej diagnostyki uzębienia',
                  icon: FaTooth,
                  gradient: 'from-emerald-500 to-emerald-700',
                  bgColor: 'rgba(16, 185, 129, 0.1)',
                },
                {
                  title: 'Bezpieczeństwo pacjenta',
                  description:
                    'Najwyższe standardy sterylizacji i bezpieczeństwa w każdym zabiegu',
                  icon: FaShieldAlt,
                  gradient: 'from-teal-500 to-teal-700',
                  bgColor: 'rgba(20, 184, 166, 0.1)',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  style={{
                    background:
                      'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    boxShadow: `0 10px 40px -10px ${colors.brand.primary}20`,
                  }}
                >
                  {/* Animated background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${feature.bgColor}, rgba(255, 255, 255, 0.05))`,
                    }}
                  />

                  <div className="relative z-10 flex items-start">
                    {/* Icon with gradient */}
                    <motion.div
                      className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg mr-4`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="text-2xl text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-800"
                        whileHover={{ x: 4 }}
                      >
                        {feature.title}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Premium glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                                 0 0 60px -10px ${colors.brand.primary}30`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
