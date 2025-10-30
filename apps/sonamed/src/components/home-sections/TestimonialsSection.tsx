'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { sonamedClinicData } from '@/constants/page1';
import { colors } from '@/constants/colors';

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.brand.primary}40, ${colors.brand.secondary}30)`,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top right, ${colors.brand.accent}1a, transparent 70%)`,
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
              Co mówią nasi pacjenci
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: colors.neutral.almostWhiteGreenish }}
          >
            Opinie osób, które powierzyły nam troskę o swój uśmiech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Magdalena',
              role: 'Licówki ceramiczne',
              quote:
                'Nigdy nie myślałam, że mój uśmiech może wyglądać tak naturalnie i pięknie. Dr Sonia przeprowadziła mnie przez cały proces z ogromną cierpliwością. Jestem zachwycona efektem!',
              stars: 5,
            },
            {
              name: 'Tomasz',
              role: 'Implanty',
              quote:
                'Po latach problemów z zębami w końcu mogę się swobodnie uśmiechać. Profesjonalizm zespołu SONAMED jest na najwyższym poziomie. Polecam każdemu!',
              stars: 5,
            },
            {
              name: 'Joanna',
              role: 'Ortodoncja Invisalign',
              quote:
                'Niewidoczne nakładki to była najlepsza decyzja. Nikt nie zauważył, że noszę aparat, a efekt przeszedł moje najśmielsze oczekiwania. Dziękuję!',
              stars: 5,
            },
            {
              name: 'Umów wizytę',
              role: 'Konsultacja',
              quote:
                'Zapisz się na bezpłatną konsultację i przekonaj się o naszej jakości usług',
              link: sonamedClinicData.contact.phone,
              stars: 5,
            },
          ].map((testimonial, index) => (
            <Link
              key={index}
              href={index === 3 ? '/kontakt' : '/kontakt'}
              target={index === 3 ? '_self' : '_self'}
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/20 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="absolute -top-6 left-6">
                  <div className="h-12 w-12 relative">
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-80"
                      style={{
                        background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                      }}
                    ></div>
                    <div
                      className="relative flex items-center justify-center h-12 w-12 rounded-full text-white border-2"
                      style={{
                        backgroundColor: colors.brand.primary,
                        borderColor: colors.brand.accent,
                      }}
                    >
                      <FaQuoteRight />
                    </div>
                  </div>
                </div>

                <div className="pt-8 pb-4">
                  <p
                    className="mb-6 hover:text-white transition-colors"
                    style={{ color: colors.neutral.almostWhiteGreenish }}
                  >
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center">
                  <div>
                    <h4 className="text-white font-medium">
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: colors.secondary.tealMedium }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        style={{
                          color:
                            i < testimonial.stars
                              ? colors.brand.accent
                              : colors.secondary.tealMedium,
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
