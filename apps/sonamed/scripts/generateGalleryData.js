const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_FILE = path.join(__dirname, '../src/data/galleryImages.ts');

// Konfiguracja kategorii i ich opisów
const CATEGORIES = {
  office: {
    title: 'lek. dent. Sonia Sugier-Karpińska - Właściciel sonamed',
    descriptions: [
      'Doświadczony lekarz dentysta z wieloletnią praktyką. Specjalizuje się w kompleksowym leczeniu stomatologicznym, łącząc najnowoczesne metody z indywidualnym podejściem do każdego pacjenta.',
    ],
  },
};

async function getImageMetadata(filePath) {
  const metadata = await sharp(filePath).metadata();
  const isVertical = metadata.height > metadata.width;

  return {
    width: metadata.width,
    height: metadata.height,
    orientation: isVertical ? 'vertical' : 'horizontal',
  };
}

async function generateGalleryData() {
  const imagesData = [];

  // Przejdź przez wszystkie kategorie
  for (const [category, categoryInfo] of Object.entries(CATEGORIES)) {
    const categoryPath = path.join(IMAGES_DIR, category);

    // Sprawdź czy folder istnieje
    if (!fs.existsSync(categoryPath)) {
      console.log(`Tworzę folder dla kategorii: ${category}`);
      fs.mkdirSync(categoryPath, { recursive: true });
      continue;
    }

    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => /^photo-\d+\.(jpg|jpeg|png|webp)$/i.test(file));

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const metadata = await getImageMetadata(filePath);

      // Losowy opis z dostępnych dla danej kategorii
      const description =
        categoryInfo.descriptions[
          Math.floor(Math.random() * categoryInfo.descriptions.length)
        ];

      imagesData.push({
        src: `/images/${category}/${file}`,
        alt: `${categoryInfo.title}`,
        category,
        width: metadata.width,
        height: metadata.height,
        orientation: metadata.orientation,
        description,
      });
    }
  }

  const tsContent = `
// Ten plik jest generowany automatycznie. Nie edytuj go ręcznie.
import { GalleryImage } from '../types/gallery';

export const galleryImages: GalleryImage[] = ${JSON.stringify(
    imagesData,
    null,
    2
  )};
`;

  fs.writeFileSync(OUTPUT_FILE, tsContent);
  console.log(
    `Wygenerowano dane dla ${imagesData.length} zdjęć w ${OUTPUT_FILE}`
  );
}

generateGalleryData().catch(console.error);
