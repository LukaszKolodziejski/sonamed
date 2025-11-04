'use client';

import { motion } from 'framer-motion';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
} from 'react-icons/hi';
import { FaTooth, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import { businessConstants } from '@/constants/constants';
import dynamic from 'next/dynamic';

// Dynamiczne importowanie mapy, żeby uniknąć problemów z SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-white/5 rounded-2xl animate-pulse"></div>
  ),
});

export default function KontaktPage() {
  // Animacje
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Style */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 30%, ${colors.secondary.tealMedium} 70%, ${colors.secondary.mintLight} 100%)`,
          overflow: 'visible',
        }}
      >
        {/* Premium Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Floating Dental Icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 opacity-10"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              <Image
                src={`/icons/Offer-icons-${9 + (i % 10)}.png`}
                alt="Dental Icon"
                width={64}
                height={64}
                className="w-full h-full filter invert"
              />
            </motion.div>
          ))}

          {/* Premium Gradient Overlays */}
          <motion.div
            animate={{
              background: [
                `radial-gradient(circle at 0% 0%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 50% 50%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 100% 100%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 0% 100%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 0% 0%, ${colors.primary.darkTeal}60, transparent 50%)`,
              ],
            }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="absolute inset-0 z-10"
          />
        </motion.div>

        {/* Premium Main Content with Glass Effect */}
        <div className="relative z-30 container mx-auto px-6 py-16">
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary.darkTeal}15, ${colors.secondary.tealMedium}10)`,
              backdropFilter: 'blur(20px)',
              border: `2px solid ${colors.secondary.tealMedium}30`,
            }}
            animate={{
              boxShadow: [
                `0 0 50px ${colors.secondary.tealMedium}30`,
                `0 0 80px ${colors.secondary.tealMedium}50`,
                `0 0 50px ${colors.secondary.tealMedium}30`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-20 overflow-visible text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.span
                className="text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full border backdrop-blur-sm"
                style={{
                  color: 'white',
                  background: `linear-gradient(135deg, ${colors.primary.darkTeal}80, ${colors.secondary.tealMedium}60)`,
                  borderColor: `${colors.secondary.tealMedium}50`,
                  boxShadow: `0 8px 32px ${colors.primary.darkTeal}40`,
                }}
                animate={{
                  boxShadow: [
                    `0 8px 32px ${colors.primary.darkTeal}40`,
                    `0 12px 40px ${colors.secondary.tealMedium}60`,
                    `0 8px 32px ${colors.primary.darkTeal}40`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🦷 KONTAKT Z NAMI 🦷
              </motion.span>
            </motion.div>

            {/* SPEKTAKULARNY TYTUŁ */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                bounce: 0.4,
              }}
              className="text-6xl md:text-8xl font-black tracking-tight relative overflow-visible mb-8 pb-4"
              style={{
                textShadow: `0 4px 20px ${colors.primary.darkTeal}60, 0 0 40px ${colors.secondary.tealMedium}40`,
                zIndex: 30,
                lineHeight: '1.1',
                minHeight: 'auto',
              }}
            >
              <motion.span
                className="bg-clip-text text-transparent block relative z-30"
                style={{
                  backgroundImage: `linear-gradient(145deg, #ffffff 0%, ${colors.secondary.mintLight} 50%, white 100%)`,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  lineHeight: '1.15',
                  paddingBottom: '8px',
                  display: 'inline-block',
                  width: '100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Gabinet SONAMED
              </motion.span>

              {/* Sparkle Effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full z-40"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.h1>

            {/* Premium Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl backdrop-blur-sm border max-w-3xl mx-auto"
              style={{
                background: `linear-gradient(135deg, ${colors.primary.darkTeal}20, rgba(0,0,0,0.3))`,
                borderColor: `${colors.secondary.tealMedium}30`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
              }}
            >
              <motion.p
                className="text-xl leading-8 font-medium"
                style={{
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Skontaktuj się z nami lub odwiedź nas osobiście. Zapewniamy
                profesjonalną opiekę stomatologiczną w centrum Kościerzyny.
              </motion.p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/umow-wizyte"
                className="group inline-flex items-center px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary.darkTeal}, ${colors.secondary.tealMedium})`,
                  boxShadow: `0 10px 40px -10px ${colors.primary.darkTeal}50`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <HiOutlineCalendar className="mr-3 text-xl relative z-10" />
                <span className="relative z-10">Umów wizytę już dziś</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sekcja kontaktowa */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating dental icons background */}
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

        <div className="container mx-auto px-6 relative z-10">
          {/* Nagłówek sekcji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
              style={{
                background: colors.gradients.primary,
              }}
            >
              <FaTooth className="text-4xl text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Informacje
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                kontaktowe
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Zapraszamy do{' '}
              <span className="font-semibold text-gray-900">
                nowoczesnego gabinetu stomatologicznego SONAMED
              </span>{' '}
              w
              <span
                className="font-semibold"
                style={{ color: colors.brand.primary }}
              >
                {' '}
                sercu Kościerzyny
              </span>
            </p>
          </motion.div>

          {/* Siatka informacji kontaktowych */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Godziny otwarcia */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50"
              whileHover={{
                y: -12,
                rotateY: 5,
                scale: 1.02,
              }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: `0 10px 40px -10px ${colors.brand.primary}20`,
              }}
            >
              {/* Animated background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}05 0%, ${colors.secondary.tealSoft}10 100%)`,
                }}
              />

              {/* Floating tooth icon */}
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

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="p-4 rounded-2xl shadow-lg mb-6"
                  style={{
                    background: colors.gradients.simple,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <HiOutlineClock className="text-3xl text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800"
                  whileHover={{ x: 4 }}
                >
                  Godziny otwarcia
                </motion.h3>

                {/* Content */}
                <div className="space-y-2 text-gray-600 text-lg">
                  <p className="font-medium">Poniedziałek - Piątek:</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    8:00 - 16:00
                  </p>
                  <p className="font-medium">Sobota:</p>

                  <p className="text-sm text-gray-500 mt-4">
                    * Sobota i Niedziela - gabinet nieczynny
                  </p>
                </div>
              </div>

              {/* Premium glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                             0 0 60px -10px ${colors.brand.primary}30`,
                }}
              />
            </motion.div>

            {/* Adres */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 cursor-pointer"
              whileHover={{
                y: -12,
                rotateY: 5,
                scale: 1.02,
              }}
              onClick={() =>
                window.open(businessConstants.location.googleMapsUrl, '_blank')
              }
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: `0 10px 40px -10px ${colors.brand.primary}20`,
              }}
            >
              {/* Animated background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}05 0%, ${colors.secondary.tealSoft}10 100%)`,
                }}
              />

              {/* Floating tooth icon */}
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

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="p-4 rounded-2xl shadow-lg mb-6"
                  style={{
                    background: colors.gradients.simple,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <HiOutlineLocationMarker className="text-3xl text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800"
                  whileHover={{ x: 4 }}
                >
                  Nasz adres
                </motion.h3>

                {/* Content */}
                <div className="space-y-2 text-gray-600 text-lg">
                  <p
                    className="font-semibold text-xl"
                    style={{ color: colors.brand.primary }}
                  >
                    {businessConstants.contact.address.street}
                  </p>
                  <p className="font-medium">
                    {businessConstants.contact.address.postalCode}{' '}
                    {businessConstants.contact.address.city}
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    📍 Kliknij, aby otworzyć mapę
                  </p>
                </div>
              </div>

              {/* Premium glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                             0 0 60px -10px ${colors.brand.primary}30`,
                }}
              />
            </motion.div>

            {/* Kontakt */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50"
              whileHover={{
                y: -12,
                rotateY: 5,
                scale: 1.02,
              }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: `0 10px 40px -10px ${colors.brand.primary}20`,
              }}
            >
              {/* Animated background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}05 0%, ${colors.secondary.tealSoft}10 100%)`,
                }}
              />

              {/* Floating tooth icon */}
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

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="p-4 rounded-2xl shadow-lg mb-6"
                  style={{
                    background: colors.gradients.simple,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <HiOutlinePhone className="text-3xl text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800"
                  whileHover={{ x: 4 }}
                >
                  Kontakt
                </motion.h3>

                {/* Content */}
                <div className="space-y-4">
                  <a
                    href={`tel:${businessConstants.contact.phone}`}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors group/phone"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="mr-3 p-2 rounded-lg"
                      style={{ backgroundColor: `${colors.brand.primary}20` }}
                    >
                      <HiOutlinePhone
                        className="text-xl"
                        style={{ color: colors.brand.primary }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">Telefon</p>
                      <p
                        className="font-bold text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {businessConstants.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${businessConstants.contact.emailPrimary}`}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors group/email"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="mr-3 p-2 rounded-lg"
                      style={{ backgroundColor: `${colors.brand.primary}20` }}
                    >
                      <HiOutlineMail
                        className="text-xl"
                        style={{ color: colors.brand.primary }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Email (Rejestracja wizyt)
                      </p>
                      <p
                        className="font-bold text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {businessConstants.contact.emailPrimary}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${businessConstants.contact.emailSecondary}`}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors group/email"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="mr-3 p-2 rounded-lg"
                      style={{ backgroundColor: `${colors.brand.primary}20` }}
                    >
                      <HiOutlineMail
                        className="text-xl"
                        style={{ color: colors.brand.primary }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-base text-gray-600">
                        {businessConstants.contact.emailSecondary}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Premium glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 
                             0 0 60px -10px ${colors.brand.primary}30`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Mapa - Premium Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: `0 20px 60px -10px ${colors.brand.primary}30`,
              }}
            >
              {/* Premium overlay frame */}
              <div
                className="absolute inset-0 rounded-3xl border-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                style={{
                  borderColor: colors.brand.primary,
                  boxShadow: `inset 0 0 0 1px ${colors.secondary.tealMedium}50`,
                }}
              />

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5 pointer-events-none"
                style={{
                  boxShadow: `0 0 100px -20px ${colors.brand.primary}60`,
                }}
              />

              <MapComponent
                coordinates={businessConstants.location.coordinates}
                isHovered={false}
              />

              {/* Overlay with location info - TYLKO TO KLIKALNE */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 max-w-sm cursor-pointer hover:bg-white transition-all duration-300 z-20"
                onClick={() =>
                  window.open(
                    businessConstants.location.googleMapsUrl,
                    '_blank'
                  )
                }
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  borderColor: `${colors.brand.primary}30`,
                }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${colors.brand.primary}20` }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colors.brand.primary,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineLocationMarker
                      className="text-2xl transition-colors duration-200"
                      style={{ color: colors.brand.primary }}
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900">Gabinet SONAMED</h4>
                    <p className="text-sm text-gray-600">
                      Stomatologia i medycyna estetyczna
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  {businessConstants.contact.address.full}
                </p>
                <motion.div
                  className="flex items-center text-xs font-semibold"
                  style={{ color: colors.brand.primary }}
                  whileHover={{ x: 4 }}
                >
                  <span>📍 Otwórz w Google Maps</span>
                  <motion.svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>

              {/* Floating action button for better map interaction */}
              <div className="absolute top-6 right-6 z-20">
                <motion.button
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 hover:bg-white transition-all duration-200"
                  style={{ borderColor: `${colors.brand.primary}20` }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      businessConstants.location.googleMapsUrl,
                      '_blank'
                    )
                  }
                  title="Otwórz w Google Maps"
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: colors.brand.primary }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Premium Style */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            >
              <FaTooth
                className="text-4xl opacity-5"
                style={{ color: colors.brand.primary }}
              />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Main CTA */}
            <div className="mb-16">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: 'spring' }}
                className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 shadow-2xl"
                style={{
                  background: colors.gradients.primary,
                  boxShadow: `0 0 100px ${colors.brand.primary}30`,
                }}
              >
                <FaTooth className="text-5xl text-white" />
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Umów się już{' '}
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  dziś!
                </span>
              </motion.h2>

              <motion.p
                className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Skontaktuj się z nami telefonicznie lub mailowo, a umówimy
                wizytę w{' '}
                <span className="font-bold text-gray-900">
                  dogodnym dla Ciebie terminie
                </span>
                . Zapewniamy{' '}
                <span
                  className="font-bold"
                  style={{ color: colors.brand.primary }}
                >
                  profesjonalną opiekę stomatologiczną w centrum Kościerzyny
                </span>
                .
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`tel:${businessConstants.contact.phone}`}
                  className="group inline-flex items-center px-12 py-6 rounded-full text-white font-bold text-xl shadow-2xl relative overflow-hidden"
                  style={{
                    background: colors.gradients.primary,
                    boxShadow: `0 10px 40px -10px ${colors.brand.primary}50`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaPhoneAlt className="mr-4 text-2xl relative z-10" />
                  <span className="relative z-10">Zadzwoń teraz</span>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`mailto:${businessConstants.contact.emailPrimary}`}
                  className="group inline-flex items-center px-12 py-6 rounded-full border-4 font-bold text-xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderColor: colors.brand.primary,
                    color: colors.brand.primary,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.brand.primary;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.boxShadow = `0 10px 40px -10px ${colors.brand.primary}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.color = colors.brand.primary;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <HiOutlineMail className="mr-4 text-xl" />
                  Napisz do nas
                </a>
              </motion.div>
            </motion.div>

            {/* Social Media Section */}
            <motion.div
              className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Śledź nas w mediach społecznościowych
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={businessConstants.socialMedia.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="mr-3">📸</div>
                  <span>
                    Instagram: {businessConstants.socialMedia.instagram.handle}
                  </span>
                </a>

                <a
                  href={businessConstants.socialMedia.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="mr-3">📘</div>
                  <span>
                    Facebook: {businessConstants.socialMedia.facebook.name}
                  </span>
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                Obserwuj nas, aby być na bieżąco z najnowszymi informacjami o
                usługach, poradach stomatologicznych i promocjach w naszym
                gabinecie.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
