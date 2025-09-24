// Dane dla centrum stomatologicznego Sonamed
// Dostosowane na podstawie struktury DentalSand

export interface OfferService {
  id: string;
  title: string;
  description: string;
  category: string;
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
      id: 'medycyna-estetyczna',
      title: 'Medycyna estetyczna',
      description:
        'zabiegi wygładzające, ujędrniające i poprawiające jakość oraz wygląd skóry.',
      category: 'estetyka',
    },
    {
      id: 'diagnostyka-obrazowa',
      title: 'Diagnostyka obrazowa',
      description:
        'W centrum stomatologicznym Sonamed oferujemy wykonanie zdjęć pantomograficznych oraz innych badań obrazowych',
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
      id: 'stomatologia-dziecieca',
      title: 'Stomatologia dziecięca',
      description:
        'Nasi doświadczeni lekarze wiedzą, że oprócz wiedzy i umiejętności równie ważny jest czas, cierpliwość i bezpieczeństwo.',
      category: 'specjalistyczne',
    },
    {
      id: 'chirurgia-stomatologiczna',
      title: 'Chirurgia stomatologiczna',
      description:
        'Nowoczesna i sprawdzona metoda wypełniania braków uzębienia - implantologia pozwala nam odbudowywać braki w uzębieniu.',
      category: 'chirurgia',
    },
    {
      id: 'ortodoncja',
      title: 'Ortodoncja',
      description:
        'Jest dziedziną stomatologii, która zajmuje się leczeniem wad zgryzu.',
      category: 'ortodoncja',
    },
    {
      id: 'stomatologia-estetyczna',
      title: 'Stomatologia estetyczna',
      description:
        'Grupa zabiegów mających na celu polepszenie wyglądu uzębienia.',
      category: 'estetyka',
    },
    {
      id: 'implantologia',
      title: 'Implantologia',
      description:
        'Nowoczesna i sprawdzona metoda wypełniania braków uzębienia',
      category: 'chirurgia',
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
        'Nasz zespół składa się z doświadczonych lekarzy stomatologów, którzy stale podnoszą swoje kwalifikacje i uczestniczą w szkoleniach',
    },
    team: {
      title: 'Nasz zespół',
      owner: 'lek. dent. Sonia Sugier-Karpińska',
      management: 'lek. Nina Karpińska',
      description:
        'Doświadczony zespół lekarzy stomatologów zapewnia najwyższą jakość świadczonych usług',
    },
  },

  // Lokalizacje i dane kontaktowe
  locations: [
    {
      name: 'Centrum Stomatologiczne Sonamed',
      address: 'ul. Kalinowa 28',
      city: 'Kościerzyna',
      hours: {
        weekdays: 'Pn–Pt: 8:00 – 18:00',
        saturday: 'Sb: 9:00 – 14:00',
      },
    },
  ] as ContactLocation[],

  // Informacje kontaktowe
  contact: {
    phone: '+48501054824',
    email: 'sonamed.biuro@gmail.com',
    website: 'Sonamed.pl',
  },

  // Media społecznościowe
  socialMedia: {
    instagram: {
      url: 'https://www.instagram.com/stomatolog.kaszuby/',
      handle: '@stomatolog.kaszuby',
    },
    facebook: {
      url: 'https://www.facebook.com/sonia.gabinet',
      name: 'sonia.gabinet',
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
    ortodoncja: 'Ortodoncja',
    specjalistyczne: 'Specjalistyczne',
    diagnostyka: 'Diagnostyka',
  },
} as const;

// Typy eksportowane dla użycia w komponentach
export type ServiceCategory = keyof typeof PAGE_OFFERT_DATA.serviceCategories;
export type NavigationItem = string;
