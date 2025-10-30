'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTooth, FaMicroscope } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';

export default function ServicesSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.secondary}50, ${colors.brand.primary}40)`,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,165,157,0.1),transparent_70%)]"></div>
        <div
          className="absolute -right-40 top-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: `${colors.brand.accent}10` }}
        ></div>
        <div
          className="absolute -left-40 bottom-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: `${colors.brand.primary}10` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <Link
              href="/cennik"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                {sonamedClinicData.services.title}
              </span>
            </Link>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: colors.neutral.almostWhiteGreenish }}
          >
            Kompleksowe usługi stomatologiczne wykonywane z najwyższą precyzją i
            wykorzystaniem nowoczesnych technologii
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTooth className="w-8 h-8" />,
              title: 'Stomatologia estetyczna',
              description:
                'Licówki, bonding, wybielanie - kompleksowe zabiegi poprawiające wygląd zębów',
              color: colors.brand.primary,
            },
            {
              icon: <FaMicroscope className="w-8 h-8" />,
              title: 'Leczenie pod mikroskopem',
              description:
                'Precyzyjne endodoncja i leczenie kanałowe z użyciem najnowocześniejszego sprzętu',
              color: colors.brand.secondary,
            },
            {
              icon: <HiOutlineHeart className="w-8 h-8" />,
              title: 'Implantoprotetyka',
              description:
                'Implanty i protezy - przywróć pełny uśmiech nawet w jeden dzień',
              color: colors.brand.accent,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="absolute -top-4 -right-4">
                <div
                  className="w-24 h-24 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`,
                  }}
                ></div>
              </div>

              <div
                className="inline-flex p-3 rounded-lg mb-6 text-white"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                }}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p
                className="mb-6"
                style={{ color: colors.neutral.almostWhiteGreenish }}
              >
                {feature.description}
              </p>

              <motion.div
                className="h-1 w-16 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/cennik"
            className="group relative overflow-hidden rounded-full backdrop-blur-md bg-white/10 border border-white/20 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10">Zobacz pełny cennik</span>
            <motion.span
              className="absolute inset-0 bg-white/20 z-0"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
