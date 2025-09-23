export const colors = {
  primary: {
    greenGray: '#7aa59d', // zielono-szary
    seaBlueGreen: '#3e8392', // morski niebiesko-zielony
    lightSea: '#a4c7c9', // jasny morski
  },

  neutral: {
    almostWhiteGreenish: '#fdfffe', // prawie biały (minimalnie zielonkawy)
    almostWhiteCreamy: '#fffffd', // prawie biały (lekko kremowy)
    white: '#ffffff', // biały
  },

  // Aliasy dla łatwiejszego użycia
  brand: {
    primary: '#7aa59d', // główny kolor marki
    secondary: '#3e8392', // drugorzędny kolor marki
    accent: '#a4c7c9', // kolor akcentujący
  },

  background: {
    primary: '#fdfffe', // główne tło
    secondary: '#fffffd', // drugorzędne tło
    white: '#ffffff', // białe tło
  },
} as const;

// Eksport typów dla TypeScript
export type ColorPalette = typeof colors;
export type PrimaryColors = keyof typeof colors.primary;
export type NeutralColors = keyof typeof colors.neutral;
export type BrandColors = keyof typeof colors.brand;
export type BackgroundColors = keyof typeof colors.background;
