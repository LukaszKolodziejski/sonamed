// Dane dla centrum stomatologicznego Sonamed
// Dostosowane na podstawie struktury DentalSand

export interface OfferService {
  id: string;
  title: string;
  description: string;
  category: string;
  available?: boolean; // Domyślnie true, jeśli nie podane
}

export interface ContactLocation {
  name: string;
  address: string;
  city: string;
  hours: {
    weekdays: string;
    saturday: string;
  };
}

export const PAGE_OFFERT_DATA = {
  // Główny nagłówek i opis
  mainHeading: 'Nasze zabiegi',
  mainDescription:
    'W centrum stomatologicznym Sonamed znajdziesz wszystko, czego potrzebujesz aby mieć piękny i zdrowy uśmiech.',

  // Nawigacja breadcrumb
  breadcrumb: [
    { label: 'Home', url: '/' },
    { label: 'Oferta', url: '/oferta' },
  ],

  // Główny slogan
  slogan: 'W zasięgu twojej ręki nasza najbardziej profesjonalna',

  // Lista usług oferowanych przez klinikę
  services: [
    {
      id: 'diagnostyka-rtg',
      title: 'Diagnostyka RTG',
      description:
        'W centrum stomatologicznym Sonamed oferujemy wykonanie zdjęć pantomograficznych RTG',
      category: 'diagnostyka',
    },
    {
      id: 'stomatologia-zachowawcza',
      title: 'Stomatologia zachowawcza',
      description:
        'Zazwyczaj pierwszym etapem leczenia stomatologicznego Pacjenta jest wyleczenie wszystkich ognisk próchnicy',
      category: 'leczenie',
    },
    {
      id: 'profilaktyka-stomatologiczna',
      title: 'Profilaktyka stomatologiczna',
      description:
        'Oferujemy szeroki zakres usług związanych z profilaktyką stomatologiczną. Główne zadania profilaktyki to dokładne usuwanie kamienia nazębnego',
      category: 'profilaktyka',
    },
    {
      id: 'periodontologia',
      title: 'Periodontologia',
      description:
        'Periodontologia jest działem stomatologii, który zajmuje się profilaktyką, wykrywaniem i leczeniem chorób przyzębia',
      category: 'leczenie',
    },
    {
      id: 'protetyka',
      title: 'Protetyka',
      description:
        'Protetyka stomatologiczna zajmuje się uzupełnieniem braków zębowych oraz odbudową i poprawą wyglądu zębów.',
      category: 'protetyka',
    },
    {
      id: 'endodoncja',
      title: 'Endodoncja',
      description:
        'Zabiegi mające na celu wyleczenie stanu zapalnego i zlikwidowanie źródła infekcji, a co za tym idzie uratowanie zęba przed usunięciem.',
      category: 'leczenie',
    },
    {
      id: 'chirurgia-stomatologiczna',
      title: 'Chirurgia stomatologiczna',
      description:
        'Podstawowe zabiegi chirurgiczne. W przypadkach bardziej skomplikowanych kierujemy pacjentów do zaufanych specjalistów.',
      category: 'chirurgia',
    },
    {
      id: 'stomatologia-estetyczna',
      title: 'Stomatologia estetyczna',
      description:
        'Grupa zabiegów mających na celu polepszenie wyglądu uzębienia.',
      category: 'estetyka',
    },
    {
      id: 'medycyna-estetyczna',
      title: 'Medycyna estetyczna',
      description:
        'zabiegi wygładzające, ujędrniające i poprawiające jakość oraz wygląd skóry.',
      category: 'estetyka',
      available: false,
    },
    {
      id: 'stomatologia-dziecieca',
      title: 'Stomatologia dziecięca',
      description:
        'Nasi doświadczeni lekarze wiedzą, że oprócz wiedzy i umiejętności równie ważny jest czas, cierpliwość i bezpieczeństwo.',
      category: 'specjalistyczne',
      available: false,
    },
  ] as OfferService[],

  // Sekcje dodatkowe
  additionalSections: {
    opinions: {
      title: 'Wasze opinie',
      subtitle: 'To co jest dla nas bardzo ważne to',
    },
    financing: {
      title: 'Finansowanie',
      description:
        'Prosty i wygodny system spłaty ratalnej naszych usług medycznych.',
    },
    membership: {
      title: 'Profesjonalizm',
      description:
        'Nasz zespół składa się z doświadczonych lekarzy i stomatologów, którzy stale podnoszą swoje kwalifikacje i uczestniczą w szkoleniach',
    },
    team: {
      title: 'Nasz zespół',
      owner: 'lek. dent. Sonia Sugier-Karpińska',
      management: 'lek. Nina Karpińska',
      description:
        'Doświadczony zespół lekarzy i stomatologów zapewnia najwyższą jakość świadczonych usług',
    },
  },

  // Lokalizacje i dane kontaktowe
  locations: [
    {
      name: 'Centrum Stomatologiczne Sonamed',
      address: 'ul. Kalinowa 28',
      city: 'Kościerzyna',
      hours: {
        weekdays: 'Pn–Pt: 8:00 – 16:00',
      },
    },
  ] as ContactLocation[],

  // Informacje kontaktowe
  contact: {
    phone: '+48501054824',
    emailPrimary: 'sonia_sugier_karpinska@wp.pl', // Główny email do rejestracji wizyt
    emailSecondary: 'sonamed.centrum@gmail.com', // Dodatkowy email
    email: 'sonia_sugier_karpinska@wp.pl', // Domyślny (dla kompatybilności)
    website: 'Sonamed.pl',
  },

  // Media społecznościowe
  socialMedia: {
    instagram: {
      url: 'https://www.instagram.com/stomatolog.sonamed/',
      handle: '@stomatolog.sonamed',
    },
    facebook: {
      url: 'https://www.facebook.com/share/17cSdRM6FN/',
      name: 'share/17cSdRM6FN',
    },
  },

  // Menu nawigacyjne
  navigation: {
    main: [
      'Oferta',
      'ALL-ON-4',
      'Cennik',
      'O nas',
      'Zespół',
      'Dla Pacjenta',
      'Kontakt',
      'Umów wizytę',
    ],
    footer: [
      'O nas',
      'Oferta',
      'Zespół',
      'Aktualności',
      'Umów wizytę',
      'Dofinansowanie',
      'Kontakt',
      'Galeria',
      'Cookies',
      'Polityka prywatności',
      'Klauzula RODO',
      'Regulamin',
      'Polityka ochrony małoletnich',
    ],
  },

  // Kategorie usług dla filtrowania
  serviceCategories: {
    leczenie: 'Leczenie',
    profilaktyka: 'Profilaktyka',
    estetyka: 'Estetyka',
    protetyka: 'Protetyka',
    chirurgia: 'Chirurgia',
    specjalistyczne: 'Specjalistyczne',
    diagnostyka: 'Diagnostyka',
  },
} as const;

// Typy eksportowane dla użycia w komponentach
export type ServiceCategory = keyof typeof PAGE_OFFERT_DATA.serviceCategories;
export type NavigationItem = string;
