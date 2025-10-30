'use client';

import { motion } from 'framer-motion';
import { colors } from '@/constants/colors';

export default function FAQSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.secondary}30, ${colors.brand.primary}20)`,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top, ${colors.brand.accent}1a, transparent 70%)`,
          }}
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Często zadawane pytania
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: colors.neutral.almostWhiteGreenish }}
          >
            Odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług
            stomatologicznych
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'Czy pierwszy wizyta jest płatna?',
              answer:
                'Pierwsza konsultacja w naszej klinice kosztuje 200 zł i obejmuje szczegółowe badanie jamy ustnej oraz omówienie możliwości leczenia. W przypadku podjęcia decyzji o leczeniu, koszt konsultacji jest zaliczany na poczet wykonywanych zabiegów.',
            },
            {
              question: 'Jak długo trwa proces wykonania licówek ceramicznych?',
              answer:
                'Proces wykonania licówek ceramicznych trwa zwykle 2-3 wizyty w ciągu 2-3 tygodni. Pierwsza wizyta to przygotowanie zębów i pobranie wycisków, druga to próba i ewentualne korekty, a trzecia to ostateczne naklejenie licówek.',
            },
            {
              question: 'Czy zabiegi stomatologiczne są bolesne?',
              answer:
                'W naszej klinice dbamy o maksymalny komfort pacjentów. Wszystkie zabiegi wykonujemy pod znieczuleniem miejscowym, które jest bezpłatne. W przypadku bardziej skomplikowanych zabiegów oferujemy również sedację śróżylną.',
            },
            {
              question: 'Jakie formy płatności akceptujecie?',
              answer:
                'Akceptujemy płatności gotówkowe, kartą płatniczą, przelewem bankowym. Oferujemy również możliwość płatności ratalnych dla kosztowniejszych zabiegów. Szczegóły finansowania omówimy podczas konsultacji.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <div
                    className="h-6 w-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.brand.primary }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p style={{ color: colors.neutral.almostWhiteGreenish }}>
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
