export const colors = {
  // Oficjalne kolory z brandbooka SONAMED
  primary: {
    darkTeal: '#3C8C7D', // główny kolor marki - ciemny turkusowy/zielony (RGB: 60, 140, 125)
    lightTeal: '#B1E4E3', // pomocniczy - jasny turkusowy (RGB: 177, 228, 227)
  },

  // Kolory pomocnicze z gradientu (z materiałów wizualnych)
  secondary: {
    // Pełna paleta odcieni turkusu od ciemnego do jasnego
    tealIntense: '#4DB5AE', // intensywny turkus - dolna część gradientu
    seaGreen: '#5FB8B3', // morski zielony - ciemniejszy odcień gradientu
    tealMedium: '#72C7C2', // średni turkus - środek gradientu
    mediumTeal: '#7FCCC9', // jasny średni turkus - przejście w gradiencie
    aquaMedium: '#8ED3D1', // akwamaryna średnia - dla akcentów
    tealSoft: '#9DD9D5', // miękki turkus - górna część gradientu
    mintLight: '#D4F1F0', // miętowy jasny - najjaśniejszy odcień gradientu
  },

  neutral: {
    white: '#FFFFFF', // biały
    black: '#000000', // czarny
    almostWhiteGreenish: '#FDFFFE', // prawie biały (minimalnie zielonkawy)
    almostWhiteCreamy: '#FFFFFD', // prawie biały (lekko kremowy)
  },

  // Jeden ciemny akcent
  dark: '#111827', // rgb(17 24 39) - ciemny akcent dla tekstu

  // Aliasy dla łatwiejszego użycia (wygodny dostęp do najczęściej używanych kolorów)
  brand: {
    primary: '#3C8C7D', // główny kolor marki (ciemny turkusowy)
    secondary: '#B1E4E3', // drugorzędny kolor marki (jasny turkusowy)
    accent: '#7FCCC9', // kolor akcentujący (średni turkus)
    dark: '#111827', // ciemny akcent
  },

  // Gradienty
  gradients: {
    // Podstawowy gradient z pełnymi przejściami
    primary:
      'linear-gradient(135deg, #3C8C7D 0%, #4DB5AE 25%, #72C7C2 50%, #9DD9D5 75%, #B1E4E3 100%)',
    // Uproszczone wersje
    simple: 'linear-gradient(135deg, #3C8C7D 0%, #B1E4E3 100%)', // prosty gradient bez przejść
    soft: 'linear-gradient(135deg, #5FB8B3 0%, #8ED3D1 50%, #D4F1F0 100%)', // miękki gradient
    reverse:
      'linear-gradient(135deg, #B1E4E3 0%, #9DD9D5 25%, #72C7C2 50%, #4DB5AE 75%, #3C8C7D 100%)', // odwrócony gradient z przejściami
    // Dodatkowe warianty
    vertical:
      'linear-gradient(180deg, #3C8C7D 0%, #4DB5AE 25%, #72C7C2 50%, #9DD9D5 75%, #B1E4E3 100%)', // pionowy gradient
    radial:
      'radial-gradient(circle, #B1E4E3 0%, #9DD9D5 30%, #72C7C2 60%, #3C8C7D 100%)', // gradient radialny
  },
} as const;

// Eksport typów dla TypeScript
export type ColorPalette = typeof colors;
export type PrimaryColors = keyof typeof colors.primary;
export type SecondaryColors = keyof typeof colors.secondary;
export type NeutralColors = keyof typeof colors.neutral;
export type BrandColors = keyof typeof colors.brand;
export type GradientColors = keyof typeof colors.gradients;
