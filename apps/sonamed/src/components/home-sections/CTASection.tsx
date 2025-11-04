'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTooth } from 'react-icons/fa';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';

export default function CTASection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.primary}20, ${colors.brand.secondary}30)`,
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
            boxShadow: `0 25px 50px -12px ${colors.brand.primary}20`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  Zacznij swoją przygodę z pięknym uśmiechem już dziś
                </h2>
                <p
                  className="text-lg mb-8"
                  style={{ color: colors.neutral.almostWhiteGreenish }}
                >
                  {sonamedClinicData.appointmentForm.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Elastyczne terminy wizyt',
                    'Doświadczeni specjaliści',
                    'Nowoczesny sprzęt medyczny',
                    'Indywidualne podejście do pacjenta',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                      style={{ color: colors.neutral.almostWhiteGreenish }}
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        style={{ color: colors.brand.accent }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="/umow-wizyte"
                  className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  style={{
                    background: `linear-gradient(90deg, ${colors.brand.accent}, ${colors.brand.primary})`,
                  }}
                >
                  <span>{sonamedClinicData.appointmentForm.title}</span>
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
            <div className="relative hidden lg:block">
              <Image
                src="/images/wizualizacja/photo-3.jpg"
                alt="Klinika Stomatologiczna SONAMED"
                width={1280}
                height={720}
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, ${colors.brand.primary}, transparent)`,
                }}
              ></div>

              <motion.div
                className="absolute top-16 right-16 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl w-64"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: `${colors.brand.primary}20` }}
                  >
                    <FaTooth
                      className="text-2xl"
                      style={{ color: colors.brand.accent }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Precyzja wykonania
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: colors.neutral.almostWhiteGreenish }}
                    >
                      Najwyższa jakość
                    </p>
                  </div>
                </div>
                <div
                  className="h-1 w-full rounded-full mb-4"
                  style={{
                    background: `linear-gradient(90deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                  }}
                ></div>
                <p
                  className="text-sm"
                  style={{ color: colors.neutral.almostWhiteGreenish }}
                >
                  Każdy zabieg wykonujemy z najwyższą precyzją, wykorzystując
                  nowoczesne technologie i wieloletnie doświadczenie.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
