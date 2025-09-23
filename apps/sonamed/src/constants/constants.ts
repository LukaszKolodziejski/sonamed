export const businessConstants = {
  // Dane kontaktowe
  contact: {
    phone: '+48501054824',
    email: 'sonamed.biuro@gmail.com',
    address: {
      full: 'Kalinowa 28, 83-400 Kościerzyna',
      street: 'Kalinowa 28',
      postalCode: '83-400',
      city: 'Kościerzyna',
    },
  },

  // Dane firmy
  company: {
    name: 'SONAMED',
    fullName: 'SONAMED SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
    registrationData: {
      krs: '0001194341',
      nip: '5911727761',
      regon: '542733830',
    },
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

  // Kadra zarządzająca
  staff: {
    owner: 'lek. dent. Sonia Sugier-Karpińska',
    management: 'lek. Nina Karpińska',
  },

  // Google Maps
  location: {
    googleMapsUrl:
      'https://www.google.pl/maps/place/PRYWATNY+GABINET+STOMATOLOGICZNY+Sonia+Sugier-Karpi%C5%84ska/@54.116372,17.9544402,19z/data=!4m15!1m8!3m7!1s0x4702764b8846a631:0xf0e98b1339958389!2sKalinowa+28,+83-400+Ko%C5%9Bcierzyna!3b1!8m2!3d54.1164711!4d17.9548345!16s%2Fg%2F11gdstlrfp!3m5!1s0x4702764c8621e901:0xaa74ed50e878dae9!8m2!3d54.1164407!4d17.9549671!16s%2Fg%2F11hyxnbvy9!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D',
    coordinates: {
      lat: 54.1164407,
      lng: 17.9549671,
    },
  },
} as const;

// Eksport typów dla TypeScript
export type BusinessConstants = typeof businessConstants;
export type ContactInfo = typeof businessConstants.contact;
export type CompanyInfo = typeof businessConstants.company;
export type SocialMediaInfo = typeof businessConstants.socialMedia;
export type StaffInfo = typeof businessConstants.staff;
export type LocationInfo = typeof businessConstants.location;

// Eksport poszczególnych sekcji dla łatwiejszego importu
export const { contact, company, socialMedia, staff, location } =
  businessConstants;
