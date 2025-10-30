'use client';

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useMemo } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaTooth,
  FaCalendarAlt,
  FaCamera,
  FaHeart,
} from 'react-icons/fa';
import { HiOutlineCamera, HiOutlineStar, HiOutlineEye } from 'react-icons/hi';
import { BsPlayFill } from 'react-icons/bs';

import { galleryImages } from '../../data/galleryImages';
import { colors } from '../../constants/colors';
import { businessConstants } from '../../constants/constants';

export default function GaleriaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' lub 'carousel'
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Use gallery images directly from generated data (already have descriptions)
  const enhancedGalleryImages = useMemo(() => {
    return galleryImages;
  }, []);

  // All gallery images for display
  const filteredImages = enhancedGalleryImages;

  // Initialize component
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-slide for carousel mode
  useEffect(() => {
    if (!isLoaded || viewMode !== 'carousel' || filteredImages.length <= 1)
      return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLoaded, viewMode, filteredImages.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 30%, ${colors.secondary.tealMedium} 70%, ${colors.secondary.mintLight} 100%)`,
      }}
    >
      {/* Premium Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale,
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
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 opacity-10"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
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
                `radial-gradient(circle at 20% 20%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 80% 80%, ${colors.secondary.tealMedium}60, transparent 50%)`,
                `radial-gradient(circle at 50% 50%, ${colors.secondary.seaGreen}60, transparent 50%)`,
                `radial-gradient(circle at 20% 80%, ${colors.primary.darkTeal}60, transparent 50%)`,
                `radial-gradient(circle at 20% 20%, ${colors.primary.darkTeal}60, transparent 50%)`,
              ],
            }}
            transition={{
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="absolute inset-0 z-10"
          />
        </motion.div>

        {/* Premium Main Content */}
        <div className="relative z-30 container mx-auto px-6 py-20">
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary.darkTeal}20, ${colors.secondary.tealMedium}15)`,
              backdropFilter: 'blur(30px)',
              border: `2px solid ${colors.secondary.tealMedium}40`,
            }}
            animate={{
              boxShadow: [
                `0 0 60px ${colors.secondary.tealMedium}40`,
                `0 0 100px ${colors.secondary.tealSoft}60`,
                `0 0 60px ${colors.secondary.tealMedium}40`,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl relative z-20 text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <motion.span
                className="text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full border backdrop-blur-sm inline-flex items-center"
                style={{
                  color: 'white',
                  background: `linear-gradient(135deg, ${colors.primary.darkTeal}90, ${colors.secondary.tealMedium}70)`,
                  borderColor: `${colors.secondary.tealMedium}60`,
                  boxShadow: `0 10px 40px ${colors.primary.darkTeal}50`,
                }}
                animate={{
                  boxShadow: [
                    `0 10px 40px ${colors.primary.darkTeal}50`,
                    `0 15px 50px ${colors.secondary.tealMedium}70`,
                    `0 10px 40px ${colors.primary.darkTeal}50`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <HiOutlineCamera className="mr-2 text-lg" />⭐ NASZA GALERIA ⭐
              </motion.span>
            </motion.div>

            {/* Spectacular Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                type: 'spring',
                bounce: 0.3,
              }}
              className="text-7xl md:text-9xl font-black tracking-tight relative mb-8"
              style={{
                textShadow: `0 6px 30px ${colors.primary.darkTeal}80, 0 0 60px ${colors.secondary.tealMedium}60`,
                lineHeight: '1.1',
              }}
            >
              <motion.span
                className="bg-clip-text text-transparent block relative"
                style={{
                  backgroundImage: `linear-gradient(145deg, #ffffff 0%, ${colors.secondary.mintLight} 30%, white 70%, ${colors.secondary.tealSoft} 100%)`,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Odkryj Sonamed
              </motion.span>

              {/* Sparkle Effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${5 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </motion.h1>

            {/* Premium Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-8 rounded-3xl backdrop-blur-sm border max-w-4xl mx-auto"
              style={{
                background: `linear-gradient(135deg, ${colors.primary.darkTeal}25, rgba(0,0,0,0.3))`,
                borderColor: `${colors.secondary.tealMedium}40`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.3)`,
              }}
            >
              <motion.p
                className="text-2xl leading-10 font-medium"
                style={{
                  color: 'white',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                }}
              >
                Zapoznaj się z naszą{' '}
                <span className="font-bold">
                  nowoczesną kliniką stomatologiczną
                </span>
                , profesjonalnym zespołem i{' '}
                <span
                  className="font-bold"
                  style={{ color: colors.secondary.mintLight }}
                >
                  najnowocześniejszym wyposażeniem medycznym
                </span>
              </motion.p>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/umow-wizyte"
                  className="group inline-flex items-center px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl relative overflow-hidden"
                  style={{
                    background: colors.gradients.primary,
                    boxShadow: `0 15px 50px -10px ${colors.primary.darkTeal}60`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaCalendarAlt className="mr-3 text-xl relative z-10" />
                  <span className="relative z-10">Umów wizytę</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => {
                    const gallerySection =
                      document.getElementById('gallery-main');
                    gallerySection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center px-10 py-5 rounded-full border-3 font-bold text-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <HiOutlineEye className="mr-3 text-xl" />
                  Zobacz galerię
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Premium Gallery Toggle Section */}
      <section
        id="gallery-main"
        className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      >
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
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            >
              <FaTooth
                className="text-4xl"
                style={{ color: colors.brand.primary }}
              />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-2xl"
              style={{
                background: colors.gradients.primary,
                boxShadow: `0 0 60px ${colors.brand.primary}30`,
              }}
            >
              <HiOutlineCamera className="text-3xl text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Tryby{' '}
              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                galerii
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wybierz sposób przeglądania naszych zdjęć
            </p>
          </motion.div>

          {/* Premium View Mode Toggle - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200/50">
              {[
                { mode: 'grid', icon: HiOutlineStar, label: 'Siatka zdjęć' },
                { mode: 'carousel', icon: BsPlayFill, label: 'Pokaz slajdów' },
              ].map((option) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.mode}
                    onClick={() => setViewMode(option.mode)}
                    className={`flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      viewMode === option.mode
                        ? 'text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    style={{
                      background:
                        viewMode === option.mode
                          ? colors.gradients.primary
                          : 'transparent',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="mr-3 text-xl" />
                    {option.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Gallery Display */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.neutral.almostWhiteGreenish} 0%, ${colors.secondary.mintLight}20 50%, white 100%)`,
        }}
      >
        <div className="container mx-auto px-6">
          {/* Grid View */}
          {viewMode === 'grid' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  variants={scaleIn}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                  whileHover={{
                    y: -15,
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                  }}
                  style={{
                    boxShadow: `0 20px 60px -10px ${colors.brand.primary}20`,
                  }}
                >
                  {/* Premium Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Category Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border"
                      style={{
                        background: `${colors.primary.darkTeal}90`,
                        color: 'white',
                        borderColor: `${colors.secondary.tealMedium}60`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      Galeria SONAMED
                    </motion.div>

                    {/* Premium Play/View Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => {
                        setLightboxImage(image.src);
                        setLightboxOpen(true);
                      }}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/50 cursor-pointer"
                        style={{ background: `${colors.primary.darkTeal}80` }}
                      >
                        <HiOutlineEye className="text-3xl text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Premium Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 line-clamp-2"
                      whileHover={{ x: 4 }}
                    >
                      {image.alt}
                    </motion.h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {image.description}
                    </p>

                    {/* Premium Bottom Action */}
                    <motion.div
                      className="flex items-center justify-between pt-4 border-t border-gray-100"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center">
                        <div
                          className="w-8 h-8 rounded-full mr-3"
                          style={{ background: colors.gradients.simple }}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          SONAMED
                        </span>
                      </div>
                      <motion.button
                        className="text-sm font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300"
                        style={{ color: colors.brand.primary }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                          setLightboxImage(image.src);
                          setLightboxOpen(true);
                        }}
                      >
                        Powiększ
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
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Premium Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 80px -20px ${colors.brand.primary}60`,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Carousel View */}
          {viewMode === 'carousel' && filteredImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={filteredImages[currentSlide].src}
                      alt={filteredImages[currentSlide].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                    />

                    {/* Premium Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(45deg, ${colors.primary.darkTeal}60 0%, transparent 50%, ${colors.secondary.tealMedium}40 100%)`,
                      }}
                    />

                    {/* Premium Content Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-8 md:p-12 backdrop-blur-sm"
                      style={{ background: `${colors.primary.darkTeal}80` }}
                    >
                      <div className="max-w-4xl">
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight hidden md:block">
                          {filteredImages[currentSlide].alt}
                        </h3>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Premium Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <motion.button
                      onClick={prevSlide}
                      className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border-2 border-white/30 pointer-events-auto"
                      style={{
                        background: `${colors.primary.darkTeal}80`,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `0 12px 48px ${colors.primary.darkTeal}60`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <motion.button
                      onClick={nextSlide}
                      className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border-2 border-white/30 pointer-events-auto"
                      style={{
                        background: `${colors.primary.darkTeal}80`,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `0 12px 48px ${colors.primary.darkTeal}60`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                )}

                {/* Premium Slide Indicators */}
                {filteredImages.length > 1 && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {filteredImages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all duration-500 ${
                          index === currentSlide
                            ? 'w-12 bg-white'
                            : 'w-3 bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        style={{
                          boxShadow:
                            index === currentSlide
                              ? `0 0 20px ${colors.secondary.tealMedium}80`
                              : 'none',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Premium Carousel Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-lg text-gray-600">
                  Zdjęcie {currentSlide + 1} z {filteredImages.length} -
                  <span
                    className="font-semibold ml-2"
                    style={{ color: colors.brand.primary }}
                  >
                    Galeria SONAMED
                  </span>
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* No Images State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div
                className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center"
                style={{ background: colors.gradients.soft }}
              >
                <FaCamera className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Brak zdjęć w tej kategorii
              </h3>
              <p className="text-gray-600 text-lg">
                Wybierz inną kategorię lub przejdź do widoku wszystkich zdjęć
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 50%, ${colors.secondary.tealMedium} 100%)`,
        }}
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: colors.secondary.tealSoft,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Premium CTA Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-40 h-40 rounded-full mb-12 shadow-2xl"
              style={{
                background: colors.gradients.primary,
                boxShadow: `0 0 120px ${colors.secondary.tealMedium}60`,
              }}
            >
              <FaHeart className="text-6xl text-white" />
            </motion.div>

            {/* Spectacular CTA Title */}
            <motion.h2
              className="text-6xl md:text-8xl font-black mb-10 bg-clip-text text-transparent leading-tight"
              style={{
                backgroundImage: `linear-gradient(145deg, #ffffff 0%, ${colors.secondary.mintLight} 30%, white 70%, ${colors.secondary.tealSoft} 100%)`,
                textShadow: `0 8px 40px ${colors.primary.darkTeal}80`,
              }}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Twój piękny uśmiech{' '}
              <span className="block">czeka na Ciebie!</span>
            </motion.h2>

            {/* Premium Description */}
            <motion.p
              className="text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-16 font-medium"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Przekonałeś się już o naszej{' '}
              <span
                className="font-bold"
                style={{ color: colors.secondary.mintLight }}
              >
                profesjonalnej jakości
              </span>{' '}
              i nowoczesnym wyposażeniu. Teraz czas na{' '}
              <span className="font-bold text-white">
                Twój pierwszy krok ku zdrowemu uśmiechowi
              </span>
              !
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/umow-wizyte"
                  className="group inline-flex items-center px-12 py-6 rounded-full text-xl font-bold shadow-2xl relative overflow-hidden"
                  style={{
                    background: 'white',
                    color: colors.primary.darkTeal,
                    boxShadow: `0 20px 60px -10px rgba(255, 255, 255, 0.6)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaCalendarAlt className="mr-4 text-2xl relative z-10" />
                  <span className="relative z-10">Umów wizytę online</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`tel:${businessConstants.contact.phone}`}
                  className="group inline-flex items-center px-12 py-6 rounded-full border-3 font-bold text-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <FaTooth className="mr-4 text-xl" />
                  {businessConstants.contact.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Premium Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: '35 000+', label: 'Zadowolonych pacjentów' },
                { number: '25+', label: 'lat doświadczenia' },
                { number: '12', label: 'kategorii usług' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-8 rounded-3xl backdrop-blur-sm border border-white/20"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    background: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <motion.h3
                    className="text-4xl md:text-5xl font-black text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-lg text-white/90 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Powiększone zdjęcie"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-2xl"
                style={{ maxHeight: '90vh', maxWidth: '90vw' }}
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white backdrop-blur-sm"
                style={{
                  background: `${colors.primary.darkTeal}90`,
                  border: `2px solid ${colors.secondary.tealMedium}60`,
                }}
                whileHover={{
                  scale: 1.1,
                  background: `${colors.primary.darkTeal}`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Premium Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-4 px-6 py-3 rounded-full backdrop-blur-sm border"
                style={{
                  background: `${colors.primary.darkTeal}90`,
                  color: 'white',
                  borderColor: `${colors.secondary.tealMedium}60`,
                }}
              >
                <span className="font-semibold">Galeria SONAMED</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
