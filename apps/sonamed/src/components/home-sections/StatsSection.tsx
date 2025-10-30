'use client';

import { motion, useInView } from 'framer-motion';
import { FaHeart, FaUserMd, FaStar } from 'react-icons/fa';
import { HiOutlineClock } from 'react-icons/hi';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';
import { useEffect, useRef, useState } from 'react';

interface StatsSectionProps {
  isMobile: boolean;
  fadeInUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
  staggerContainer: {
    hidden: { opacity: number };
    visible: { opacity: number; transition: { staggerChildren: number } };
  };
}

// Custom hook for animated counter
function useCounter(end: number, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

// Component for animated stat number
function AnimatedStat({
  value,
  suffix = '',
  inView,
}: {
  value: number;
  suffix?: string;
  inView: boolean;
}) {
  const count = useCounter(value, 3500, inView); // Wydłużony czas animacji do 3.5 sekundy
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection({
  isMobile,
  fadeInUp,
  staggerContainer,
}: StatsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 30%, ${colors.secondary.tealMedium} 70%, ${colors.secondary.mintLight} 100%)`,
      }}
    >
      {/* Animated particles background - inne niż w poprzednich sekcjach */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: colors.secondary.mintLight,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${colors.secondary.tealSoft}, transparent)`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${colors.secondary.aquaMedium}, transparent)`,
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Nagłówek - inny styl niż w TechnologySection */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
            className="mb-6"
          >
            <motion.span
              className="text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full border-2 backdrop-blur-md inline-block"
              style={{
                color: 'white',
                background: `linear-gradient(135deg, ${colors.primary.darkTeal}90, ${colors.secondary.tealMedium}70)`,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2)`,
              }}
              animate={{
                boxShadow: [
                  '0 8px 32px rgba(0, 0, 0, 0.2)',
                  '0 12px 40px rgba(255, 255, 255, 0.3)',
                  '0 8px 32px rgba(0, 0, 0, 0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              📊 NASZA KLINIKA W LICZBACH
            </motion.span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <motion.span
              className="block"
              style={{
                color: 'white',
                textShadow: `0 4px 20px rgba(0,0,0,0.3)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Zaufało nam już
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent mt-2"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.secondary.mintLight}, white, ${colors.secondary.mintLight})`,
                textShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              tysiące pacjentów
            </motion.span>
          </h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Liczby, które najlepiej pokazują naszą{' '}
            <span className="font-bold">pasję i zaangażowanie</span> w pracę
          </motion.p>
        </motion.div>

        {/* Stats Grid - BIAŁE KARTY na kolorowym tle dla kontrastu */}
        <motion.div
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: FaHeart,
                value: 35000,
                suffix: '+',
                label: 'Wszystkich wizyt w klinice',
                color: colors.brand.primary,
              },
              {
                icon: HiOutlineClock,
                value: 25,
                suffix: '+',
                label: 'Lat doświadczenia',
                color: colors.secondary.tealMedium,
              },
              {
                icon: FaUserMd,
                value: sonamedClinicData.team.members.length + 1,
                suffix: '',
                label: 'Specjalistów',
                color: colors.secondary.seaGreen,
              },
              {
                icon: FaStar,
                value: 100,
                suffix: '%',
                label: 'Profesjonalizmu',
                color: colors.secondary.aquaMedium,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-2xl backdrop-blur-sm border-2"
                variants={fadeInUp}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                }}
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  boxShadow: `0 20px 60px -10px rgba(0, 0, 0, 0.3)`,
                }}
              >
                {/* Glass effect overlay */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}10, transparent)`,
                  }}
                />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex p-5 rounded-2xl mb-6 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="text-4xl text-white" />
                  </motion.div>

                  {/* Animated Number */}
                  <motion.dt
                    className="text-4xl md:text-5xl font-black mb-3"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      duration: 0.5,
                      type: 'spring',
                    }}
                  >
                    <AnimatedStat
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </motion.dt>

                  {/* Label */}
                  <dd className="text-sm md:text-base font-semibold text-gray-700 leading-relaxed">
                    {stat.label}
                  </dd>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${stat.color}20 50%, transparent 100%)`,
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
