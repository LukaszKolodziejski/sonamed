// Dane dla strony "O nas" centrum stomatologicznego Sonamed
// Dostosowane na podstawie struktury DentalSand.pl/o-nas

export interface DistinguishingFeature {
  id: string;
  description: string;
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

export const PAGE_ONAS_DATA = {
  // Główny nagłówek i opis
  mainHeading: 'O nas',
  mainDescription:
    'Rozmawiamy o potrzebach naszych pacjentów i proponujemy najlepsze rozwiązania.',

  // Nawigacja breadcrumb
  breadcrumb: [
    { label: 'Home', url: '/' },
    { label: 'O Nas', url: '/o-nas' },
  ],

  // Sekcja główna
  doctorsSection: {
    title: 'Dowiedz się więcej o lekarzach którzy dbają o Twój uśmiech',
    content:
      'Dobrze wiemy, że piękny uśmiech to klucz do sukcesu, zarówno w życiu zawodowym, jak i osobistym. Dodaje nam pewności siebie i ułatwia nawiązywanie relacji, ale także oznacza zdrowie. Chcemy pomóc Ci odzyskać radość uśmiechu, ponieważ doskonale rozumiemy, że zły stan uzębienia jest częstym powodem zakłopotania i wielu kompleksów.',
  },

  // Co nas wyróżnia
  distinguishingFeatures: {
    title: 'Co nas wyróżnia?',
    features: [
      {
        id: 'individual-approach',
        description:
          'Wsłuchujemy się w indywidualne potrzeby naszych pacjentów i polecamy najlepsze rozwiązanie dla Pacjenta - wszystko w oparciu o Plan Leczenia, dzięki któremu poznasz pełen koszt wszystkich zabiegów',
      },
      {
        id: 'empathetic-atmosphere',
        description:
          'Cechuje nas indywidualne podejście do każdego pacjenta - dbamy o miłą, spokojną, empatyczną atmosferę pozwalającą zapomnieć o nerwach towarzyszących wizycie u dentysty',
      },
      {
        id: 'punctuality',
        description:
          'Szanując czas Naszych Pacjentów wizytę umawiamy na konkretną godzinę i dokładamy wszelkich starań, aby nie było opóźnień w jej realizacji',
      },
      {
        id: 'modern-equipment',
        description:
          'Dzięki dostępowi do najnowszej aparatury oraz materiałów, potrafimy stworzyć piękny uśmiech w każdym przypadku.',
      },
      {
        id: 'one-visit-treatment',
        description:
          'Leczenie kanałowe przeprowadzamy na jednej wizycie przy użyciu nowoczesnego sprzętu.',
      },
      {
        id: 'comprehensive-care',
        description:
          'Specjalizujemy się w kompleksowym i bezbolesnym leczeniu zarówno dzieci jak i dorosłych.',
      },
      {
        id: 'quick-metamorphosis',
        description:
          'Przeprowadzamy metamorfozy w możliwie najkrótszym terminie realizacji.',
      },
      {
        id: 'transparent-billing',
        description:
          'Przed zakończeniem wizyty nasi stomatolodzy sami dokonują rozliczeń, co jest okazją do rozmowy, zaplanowania dalszych kroków, pozwala to zrozumieć za co pacjent płaci...',
      },
    ] as DistinguishingFeature[],
  },

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
        weekdays: 'Pn–Pt: 8:00 – 16:00',
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

  // Dane firmy
  company: {
    name: 'Sonamed',
    fullName: 'SONAMED SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
    registrationData: {
      krs: '0001194341',
      nip: '5911727761',
      regon: '542733830',
    },
  },

  // Lokalizacja Google Maps
  location: {
    googleMapsUrl:
      'https://www.google.pl/maps/place/PRYWATNY+GABINET+STOMATOLOGICZNY+Sonia+Sugier-Karpi%C5%84ska/@54.116372,17.9544402,19z/data=!4m15!1m8!3m7!1s0x4702764b8846a631:0xf0e98b1339958389!2sKalinowa+28,+83-400+Ko%C5%9Bcierzyna!3b1!8m2!3d54.1164711!4d17.9548345!16s%2Fg%2F11gdstlrfp!3m5!1s0x4702764c8621e901:0xaa74ed50e878dae9!8m2!3d54.1164407!4d17.9549671!16s%2Fg%2F11hyxnbvy9!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D',
    coordinates: {
      lat: 54.1164407,
      lng: 17.9549671,
    },
  },
} as const;

// Typy eksportowane dla użycia w komponentach
export type DistinguishingFeatureType =
  (typeof PAGE_ONAS_DATA.distinguishingFeatures.features)[number];
export type ContactLocationType = (typeof PAGE_ONAS_DATA.locations)[number];
export type NavigationItem = string;
