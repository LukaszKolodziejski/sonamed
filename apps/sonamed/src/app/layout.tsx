import './globals.css';
import { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  themeColor: '#7aa59d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sonamed.pl'),
  title: {
    template: '%s | SONAMED - Centrum Stomatologiczne Kościerzyna',
    default:
      'SONAMED - Profesjonalna Stomatologia w Kościerzynie | Dentysta Kaszuby',
  },
  description:
    'Profesjonalne centrum stomatologiczne SONAMED w Kościerzynie ➤ Doświadczeni stomatolodzy ➤ Nowoczesne technologie ✓ Licówki, implanty, ortodoncja ✓ Umów wizytę już dziś!',
  keywords:
    'stomatolog kościerzyna, dentysta kościerzyna, centrum stomatologiczne kościerzyna, licówki kościerzyna, implanty kościerzyna, ortodoncja kościerzyna, wybielanie zębów kościerzyna, stomatolog kaszuby, dentysta kaszuby, sonamed, gabinet stomatologiczny kościerzyna, leczenie zębów kościerzyna, protetyka kościerzyna',
  alternates: {
    canonical: 'https://www.sonamed.pl',
    languages: {
      'x-default': 'https://www.sonamed.pl',
      pl: 'https://www.sonamed.pl',
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SONAMED Stomatologia',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.sonamed.pl',
    siteName: 'SONAMED - Centrum Stomatologiczne Kościerzyna',
    title:
      'SONAMED - Profesjonalna Stomatologia w Kościerzynie | Dentysta Kaszuby',
    description:
      'Profesjonalne centrum stomatologiczne SONAMED w Kościerzynie ➤ Doświadczeni stomatolodzy ➤ Licówki, implanty, ortodoncja ➤ Nowoczesne technologie ✓ Umów wizytę już dziś!',
    images: [
      {
        url: 'https://www.sonamed.pl/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SONAMED - Centrum Stomatologiczne Kościerzyna',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3MjVR8wLcqMo3Ft46oL8xIPPT7ZG9O7H9l78xO2gtgs',
  },
  authors: [{ name: 'sonamed' }],
  creator: 'sonamed',
  publisher: 'sonamed',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  category: 'dental clinic',
  other: {
    'geo.position': '54.1164407;17.9549671',
    'geo.placename': 'Kościerzyna',
    'geo.region': 'PL-PM',
    ICBM: '54.1164407, 17.9549671',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'SONAMED - Centrum Stomatologiczne',
              image: 'https://www.sonamed.pl/logo/logo.png',
              '@id': 'https://www.sonamed.pl',
              url: 'https://www.sonamed.pl',
              telephone: '+48501054824',
              email: 'sonia_sugier_karpinska@wp.pl',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Kalinowa 28',
                addressLocality: 'Kościerzyna',
                postalCode: '83-400',
                addressCountry: 'PL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 54.1164407,
                longitude: 17.9549671,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '85',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '08:00',
                  closes: '16:00',
                },
              ],
              medicalSpecialty: 'Dentistry',
              priceRange: '$$$',
              sameAs: [
                'https://www.facebook.com/share/17cSdRM6FN/',
                'https://www.instagram.com/stomatolog.sonamed/',
                'https://www.google.pl/maps/place/PRYWATNY+GABINET+STOMATOLOGICZNY+Sonia+Sugier-Karpi%C5%84ska/@54.116372,17.9544402,19z',
              ],
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="3MjVR8wLcqMo3Ft46oL8xIPPT7ZG9O7H9l78xO2gtgs"
        />
      </head>
      <body
        className={`${poppins.className} ${poppins.variable} bg-white dark:bg-gray-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main
          className={`flex-grow [&:not(:has(>:first-child[data-homepage]))]:pt-14 [&:not(:has(>:first-child[data-homepage]))]:sm:pt-14`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
