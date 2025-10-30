'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTooth, FaMicroscope, FaShieldAlt } from 'react-icons/fa';
import { colors } from '@/constants/colors';

export default function TechnologySection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.primary}20, ${colors.brand.secondary}30)`,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${colors.brand.primary}33, transparent 60%)`,
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Nowoczesne technologie medyczne
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: colors.neutral.almostWhiteGreenish }}
          >
            Wykorzystujemy najnowocześniejsze urządzenia i technologie
            zapewniające najwyższą jakość leczenia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/office/photo-1.jpeg"
              alt="Nowoczesna klinika"
              width={1280}
              height={720}
              className="w-full h-auto rounded-2xl"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent rounded-2xl"
              style={{
                background: `linear-gradient(to right, ${colors.brand.primary}80, transparent)`,
              }}
            ></div>
          </motion.div>

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
                  icon: (
                    <FaMicroscope style={{ color: colors.brand.primary }} />
                  ),
                },
                {
                  title: 'Diagnostyka cyfrowa',
                  description:
                    'Zaawansowane skanowanie wewnątrzustne i projektowanie cyfrowe uśmiechu DSD',
                  icon: <FaTooth style={{ color: colors.brand.secondary }} />,
                },
                {
                  title: 'Bezpieczeństwo pacjenta',
                  description:
                    'Najwyższe standardy sterylizacji i bezpieczeństwa w każdym zabiegu',
                  icon: <FaShieldAlt style={{ color: colors.brand.accent }} />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: `${colors.neutral.white}1a`,
                  }}
                >
                  <div className="text-2xl mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                    <p style={{ color: colors.brand.secondary }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
