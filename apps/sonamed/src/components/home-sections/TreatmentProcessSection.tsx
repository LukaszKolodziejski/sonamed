'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineHeart } from 'react-icons/hi';
import { colors } from '@/constants/colors';

export default function TreatmentProcessSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.primary}40, ${colors.brand.secondary}50)`,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.brand.accent}26, transparent 70%)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Jak przebiega leczenie w SONAMED
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: colors.neutral.almostWhiteGreenish }}
          >
            Przeprowadzimy Cię przez cały proces - od pierwszej konsultacji po
            osiągnięcie wymarzonego uśmiechu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                step: '01',
                title: 'Konsultacja i diagnostyka',
                description:
                  'Szczegółowe badanie, RTG, dokumentacja fotograficzna i cyfrowy projekt uśmiechu DSD',
              },
              {
                step: '02',
                title: 'Plan leczenia',
                description:
                  'Opracowanie indywidualnego planu leczenia dopasowanego do Twoich potrzeb',
              },
              {
                step: '03',
                title: 'Realizacja zabiegu',
                description:
                  'Profesjonalne wykonanie zabiegu z wykorzystaniem najnowocześniejszego sprzętu',
              },
              {
                step: '04',
                title: 'Opieka po zabiegu',
                description:
                  'Kontrolne wizyty i kompleksowa opieka zapewniająca trwałość efektów',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12">
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-80"
                      style={{
                        background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                      }}
                    ></div>
                    <div
                      className="relative flex items-center justify-center h-12 w-12 rounded-full border-2"
                      style={{
                        backgroundColor: colors.brand.primary,
                        borderColor: colors.brand.accent,
                      }}
                    >
                      <span className="text-lg font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  {index < 3 && (
                    <div
                      className="w-0.5 h-16 ml-6 mt-2"
                      style={{
                        background: `linear-gradient(180deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                      }}
                    ></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p style={{ color: colors.neutral.almostWhiteGreenish }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/office/photo-2.jpeg"
              alt="Wnętrze kliniki SONAMED"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(to right, ${colors.brand.primary}80, transparent)`,
              }}
            ></div>

            <div className="absolute bottom-6 right-6 z-10">
              <motion.div
                className="text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2"
                style={{
                  background: `linear-gradient(90deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                }}
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-medium">100% indywidualne podejście</span>
                <HiOutlineHeart style={{ color: colors.brand.accent }} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/kontakt"
            className="group inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
            }}
          >
            <span>Umów konsultację</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
