'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import {
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { FaTooth, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import { colors } from '@/constants/colors';
import { businessConstants } from '@/constants/constants';
import FloatingDentalIcons from '@/components/ux/FloatingDentalIcons';

export default function UmowWizytePage() {
  // Stan kalendarza
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  // Dane formularza
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Dostępne godziny wizyt
  const timeSlots = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
  ];

  // Generowanie dni kalendarza
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];

    // Puste dni z poprzedniego miesiąca
    for (let i = 0; i < (firstDayWeek === 0 ? 6 : firstDayWeek - 1); i++) {
      days.push(null);
    }

    // Dni obecnego miesiąca
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Sprawdzamy czy dzień jest dostępny (nie weekend, nie przeszłość)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isPast = date < today;
      const isAvailable = !isWeekend && !isPast;

      days.push({
        date,
        day,
        isAvailable,
        isSelected: selectedDate?.toDateString() === date.toDateString(),
      });
    }

    return days;
  };

  const monthNames = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];

  const dayNames = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

  // Obsługa wyboru daty
  const handleDateSelect = (
    dayData: {
      date: Date;
      day: number;
      isAvailable: boolean;
      isSelected: boolean;
    } | null
  ) => {
    if (!dayData || !dayData.isAvailable) return;
    setSelectedDate(dayData.date);
    setSelectedTime('');
  };

  // Obsługa wyboru godziny z prostym scrollem
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);

    // Prosty scroll o 200px w dół po krótkiej chwili
    setTimeout(() => {
      window.scrollBy({
        top: 300,
        behavior: 'smooth',
      });
    }, 300);
  };

  // Obsługa procesu rezerwacji
  const handleBookingAttempt = () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.phone) {
      toast.error('Wypełnij wszystkie wymagane pola');
      return;
    }
    setShowBookingConfirm(true);
  };

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Toaster position="top-center" />

      {/* Hero Section - Premium Style */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darkTeal} 0%, ${colors.secondary.seaGreen} 30%, ${colors.secondary.tealMedium} 70%, ${colors.secondary.mintLight} 100%)`,
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
                🦷 UMÓW WIZYTĘ ONLINE 🦷
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
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight relative overflow-visible mb-8 pb-4"
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
                Rezerwacja wizyty
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
                Wybierz dogodny termin i umów się na wizytę w naszym nowoczesnym
                gabinecie stomatologicznym SONAMED w Kościerzynie
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kalendarz i Rezerwacja */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating dental icons background */}
        <FloatingDentalIcons count={12} opacity={3} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
              <HiOutlineCalendar className="text-4xl text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Wybierz termin
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                wizyty
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Skorzystaj z naszego{' '}
              <span className="font-semibold text-gray-900">
                interaktywnego kalendarza
              </span>{' '}
              aby wybrać{' '}
              <span
                className="font-semibold"
                style={{ color: colors.brand.primary }}
              >
                dogodny termin wizyty
              </span>
            </p>
          </motion.div>

          {/* Grid z kalendarzem i formularzem */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Kalendarz */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50"
              style={{
                boxShadow: `0 20px 60px -10px ${colors.brand.primary}20`,
              }}
            >
              {/* Nawigacja miesiąca */}
              <div className="flex items-center justify-between mb-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() - 1
                      )
                    )
                  }
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <h3 className="text-2xl font-bold text-gray-800">
                  {monthNames[currentMonth.getMonth()]}{' '}
                  {currentMonth.getFullYear()}
                </h3>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1
                      )
                    )
                  }
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Nagłówki dni tygodnia */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center py-3 font-semibold text-gray-600 text-sm"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Dni kalendarza */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-7 gap-2"
              >
                {generateCalendarDays().map((dayData, index) => (
                  <motion.button
                    key={index}
                    variants={fadeInUp}
                    onClick={() => handleDateSelect(dayData)}
                    disabled={!dayData?.isAvailable}
                    className={`
                      aspect-square rounded-lg font-semibold text-sm transition-all duration-300 relative overflow-hidden
                      ${!dayData ? 'invisible' : ''}
                      ${
                        dayData?.isAvailable
                          ? 'hover:scale-110 cursor-pointer text-gray-700'
                          : 'text-gray-300 cursor-not-allowed'
                      }
                      ${
                        dayData?.isSelected
                          ? 'text-white scale-110 shadow-lg'
                          : dayData?.isAvailable
                          ? 'hover:bg-gray-100'
                          : ''
                      }
                    `}
                    style={
                      dayData?.isSelected
                        ? {
                            background: colors.gradients.primary,
                            boxShadow: `0 8px 25px -5px ${colors.brand.primary}40`,
                          }
                        : {}
                    }
                    whileHover={dayData?.isAvailable ? { scale: 1.1 } : {}}
                    whileTap={dayData?.isAvailable ? { scale: 0.95 } : {}}
                  >
                    {dayData?.isSelected && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-lg"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    {dayData?.day}
                  </motion.button>
                ))}
              </motion.div>

              {/* Legenda */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-200"></div>
                  <span className="text-gray-600">Niedostępny</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded hover:bg-gray-100 border-2 border-gray-300"></div>
                  <span className="text-gray-600">Dostępny</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ background: colors.gradients.simple }}
                  ></div>
                  <span className="text-gray-600">Wybrany</span>
                </div>
              </div>
            </motion.div>

            {/* Formularz i godziny */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Wybór godziny */}
              <AnimatePresence>
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50"
                    style={{
                      boxShadow: `0 20px 60px -10px ${colors.brand.primary}20`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="p-3 rounded-xl"
                        style={{ background: colors.gradients.simple }}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <HiOutlineClock className="text-2xl text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          Wybierz godzinę
                        </h3>
                        <p className="text-gray-600">
                          {selectedDate.toLocaleDateString('pl-PL', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-3 sm:grid-cols-4 gap-3"
                    >
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          variants={fadeInUp}
                          onClick={() => handleTimeSelect(time)}
                          className={`
                            py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 border-2
                            ${
                              selectedTime === time
                                ? 'text-white shadow-lg scale-105'
                                : 'text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }
                          `}
                          style={
                            selectedTime === time
                              ? {
                                  background: colors.gradients.primary,
                                  borderColor: colors.brand.primary,
                                  boxShadow: `0 8px 25px -5px ${colors.brand.primary}40`,
                                }
                              : {}
                          }
                          whileHover={{
                            scale: selectedTime === time ? 1.05 : 1.02,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Formularz danych */}
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50"
                style={{
                  boxShadow: `0 20px 60px -10px ${colors.brand.primary}20`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 rounded-xl"
                    style={{ background: colors.gradients.simple }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <HiOutlineUser className="text-2xl text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Twoje dane
                    </h3>
                    <p className="text-gray-600">
                      Wypełnij podstawowe informacje
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Imię i nazwisko */}
                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <HiOutlineUser className="mr-2" />
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all duration-300"
                      onFocus={(e) =>
                        (e.target.style.borderColor = colors.brand.primary)
                      }
                      onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                      placeholder="Wprowadź imię i nazwisko"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <HiOutlinePhone className="mr-2" />
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all duration-300"
                      onFocus={(e) =>
                        (e.target.style.borderColor = colors.brand.primary)
                      }
                      onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                      placeholder="Wprowadź numer telefonu"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <HiOutlineMail className="mr-2" />
                      Email (opcjonalnie)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all duration-300"
                      onFocus={(e) =>
                        (e.target.style.borderColor = colors.brand.primary)
                      }
                      onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                      placeholder="Wprowadź adres email"
                    />
                  </div>

                  {/* Wiadomość */}
                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <HiOutlineInformationCircle className="mr-2" />
                      Dodatkowe informacje (opcjonalnie)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all duration-300 resize-none"
                      onFocus={(e) =>
                        (e.target.style.borderColor = colors.brand.primary)
                      }
                      onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                      rows={3}
                      placeholder="Opisz swoją sytuację, preferencje lub pytania..."
                    />
                  </div>
                </div>

                {/* Przycisk rezerwacji */}
                <motion.button
                  onClick={handleBookingAttempt}
                  className="w-full mt-6 px-6 py-4 rounded-full text-white font-bold text-lg shadow-2xl relative overflow-hidden"
                  style={{
                    background: colors.gradients.primary,
                    boxShadow: `0 10px 40px -10px ${colors.brand.primary}50`,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={
                    !selectedDate ||
                    !selectedTime ||
                    !formData.name ||
                    !formData.phone
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <HiOutlineCheckCircle className="text-xl" />
                    Zarezerwuj wizytę
                  </span>
                </motion.button>

                {/* Podsumowanie wyboru */}
                <AnimatePresence>
                  {(selectedDate || selectedTime) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 p-4 rounded-xl border-2"
                      style={{
                        borderColor: `${colors.brand.primary}30`,
                        background: `${colors.secondary.mintLight}20`,
                      }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Podsumowanie:
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        {selectedDate && (
                          <p>
                            📅 Data:{' '}
                            {selectedDate.toLocaleDateString('pl-PL', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        )}
                        {selectedTime && <p>🕐 Godzina: {selectedTime}</p>}
                        {formData.name && <p>👤 Pacjent: {formData.name}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal potwierdzenia rezerwacji */}
      <AnimatePresence>
        {showBookingConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowBookingConfirm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ikona informacyjna */}
              <div className="text-center mb-6">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                  style={{ background: `${colors.secondary.tealSoft}30` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiOutlineInformationCircle
                    className="text-4xl"
                    style={{ color: colors.brand.primary }}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  System w budowie 🔧
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Przepraszamy! Nasz system rezerwacji online jest obecnie w
                  fazie rozwoju. Aby umówić wizytę, prosimy o kontakt
                  telefoniczny.
                </p>
              </div>

              {/* Dane kontaktowe */}
              <div className="space-y-4 mb-6">
                <div
                  className="p-4 rounded-xl border-2"
                  style={{
                    borderColor: `${colors.brand.primary}30`,
                    background: `${colors.secondary.mintLight}20`,
                  }}
                >
                  <div className="text-center">
                    <p className="text-gray-700 font-medium mb-2">
                      Zadzwoń do nas:
                    </p>
                    <a
                      href={`tel:${businessConstants.contact.phone}`}
                      className="text-2xl font-bold hover:underline"
                      style={{ color: colors.brand.primary }}
                    >
                      {businessConstants.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>Godziny pracy: Pon-Pt 8:00-16:00</p>
                </div>
              </div>

              {/* Przyciski */}
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setShowBookingConfirm(false)}
                  className="flex-1 px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300"
                  style={{
                    borderColor: colors.brand.primary,
                    color: colors.brand.primary,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Zamknij
                </motion.button>

                <motion.a
                  href={`tel:${businessConstants.contact.phone}`}
                  className="flex-1 px-6 py-3 rounded-full text-white font-semibold text-center"
                  style={{
                    background: colors.gradients.primary,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhoneAlt className="inline mr-2" />
                  Zadzwoń
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section - kontakt */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50">
        {/* Animated background elements */}
        <FloatingDentalIcons count={8} opacity={5} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
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

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent">
              Potrzebujesz pomocy?
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Nasz zespół chętnie odpowie na wszystkie pytania i pomoże umówić
              wizytę w dogodnym terminie
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href={`tel:${businessConstants.contact.phone}`}
                className="group inline-flex items-center px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl relative overflow-hidden"
                style={{
                  background: colors.gradients.primary,
                  boxShadow: `0 10px 40px -10px ${colors.brand.primary}50`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaPhoneAlt className="mr-3 text-xl relative z-10" />
                <span className="relative z-10">
                  {businessConstants.contact.phone}
                </span>
              </motion.a>

              <motion.a
                href={`mailto:${businessConstants.contact.emailPrimary}`}
                className="group inline-flex items-center px-8 py-4 rounded-full border-4 font-bold text-lg transition-all duration-300 relative overflow-hidden"
                style={{
                  borderColor: colors.brand.primary,
                  color: colors.brand.primary,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.brand.primary;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = colors.brand.primary;
                }}
              >
                <HiOutlineMail className="mr-3 text-xl" />
                Napisz do nas
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
