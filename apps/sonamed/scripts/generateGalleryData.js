const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_FILE = path.join(__dirname, '../src/data/galleryImages.ts');

// Konfiguracja kategorii i ich opisów
const CATEGORIES = {
  sonia: {
    title: 'lek. dent. Sonia Sugier-Karpińska - Właścicielka kliniki SONAMED',
    descriptions: [
      'Doświadczony lekarz dentysta z wieloletnią praktyką. Specjalizuje się w kompleksowym leczeniu stomatologicznym, łącząc najnowoczesne metody z indywidualnym podejściem do każdego pacjenta.',
      'Właścicielka kliniki SONAMED, specjalistka w dziedzinie stomatologii estetycznej i protetyki. Jej pasją jest tworzenie pięknych i zdrowych uśmiechów, wykorzystując najnowocześniejsze technologie dostępne w stomatologii.',
      'Lekarz dentysta z ponad 25-letnim doświadczeniem, absolwentka Akademii Medycznej. Stale podnosi swoje kwalifikacje, uczestnicząc w szkoleniach i konferencjach krajowych oraz międzynarodowych.',
      'Specjalizuje się w leczeniu zachowawczym, endodoncji oraz protetyce. Z pasją podchodzi do każdego pacjenta, dbając o komfort i bezpieczeństwo podczas zabiegów.',
      'Prowadzi klinikę SONAMED zgodnie z najwyższymi standardami jakości. Jej priorytetem jest indywidualne podejście do pacjenta oraz kompleksowa diagnostyka i leczenie.',
    ],
  },
  nina: {
    title: 'lek. Nina Karpińska - Członek zespołu SONAMED',
    descriptions: [
      'Młoda, energiczna lekarz, która swoją pracę traktuje jako misję pomagania pacjentom. Specjalizuje się w medycynie estetycznej oraz leczeniu zachowawczym.',
      'Absolwentka prestiżowej uczelni medycznej, z zamiłowaniem do nowoczesnych technologii w stomatologii. Charakteryzuje ją empatyczne podejście do pacjentów i cierpliwość.',
      'Lekarz dentysta z pasją do estetycznej stomatologii. Pomaga pacjentom odzyskać pewność siebie poprzez piękny uśmiech. Stale rozwija swoje umiejętności poprzez udział w szkoleniach.',
      'Specjalizuje się w leczeniu kanałowym oraz odbudowach protetycznych. Znana jest z profesjonalizmu i perfekcyjnego podejścia do każdego zabiegu.',
      'Członek zespołu SONAMED, ceniąca sobie bezpośredni kontakt z pacjentem i budowanie długotrwałych relacji opartych na zaufaniu i wzajemnym szacunku.',
    ],
  },
  team: {
    title: 'Zespół SONAMED - Profesjonaliści w służbie Twojego uśmiechu',
    descriptions: [
      'Nasz zespół to grupa wykwalifikowanych specjalistów z wieloletnim doświadczeniem w różnych dziedzinach stomatologii. Wspólnie tworzymy przyjazną i profesjonalną atmosferę.',
      'Zespół składa się z lekarzy dentystów, higienistek oraz asystentek, którzy współpracują ze sobą, aby zapewnić najwyższą jakość opieki stomatologicznej.',
      'Wszyscy członkowie naszego zespołu regularnie uczestniczą w szkoleniach i konferencjach, aby być na bieżąco z najnowszymi osiągnięciami w dziedzinie stomatologii.',
      'W SONAMED stawiamy na pracę zespołową i wymianę doświadczeń. Każdy pacjent może liczyć na kompleksową opiekę i wsparcie całego zespołu.',
      'Nasz zespół charakteryzuje się wysokim poziomem kompetencji, empatią oraz dbałością o komfort pacjenta. To ludzie z pasją, którzy kochają swoją pracę.',
      'Razem tworzymy zgraną ekipę profesjonalistów, której celem jest zapewnienie pacjentom najwyższej jakości usług stomatologicznych w przyjaznej atmosferze.',
    ],
  },
  office: {
    title: 'Nowoczesny gabinet stomatologiczny SONAMED',
    descriptions: [
      'Nasza klinika została wyposażona w najnowocześniejszy sprzęt diagnostyczny i terapeutyczny, zapewniający najwyższą jakość leczenia w komfortowych warunkach.',
      'Gabinety stomatologiczne zaprojektowane z myślą o komforcie pacjentów. Przestronne pomieszczenia, naturalne światło i przyjazna atmosfera pomagają w relaksie podczas wizyty.',
      'Wykorzystujemy najnowsze technologie w stomatologii, w tym mikroskopy operacyjne, tomografy 3D i systemy CAD/CAM dla precyzyjnych odbudów protetycznych.',
      'Klinika wyposażona jest w nowoczesne fotele dentystyczne z systemami antywibracyjnymi oraz monitory, na których pacjenci mogą oglądać filmy lub słuchać muzyki podczas zabiegów.',
      'Dbamy o najwyższe standardy higieny i sterylizacji. Posiadamy nowoczesne autoklawy oraz sterylizatory ultradźwiękowe, które gwarantują bezpieczeństwo pacjentów.',
      'Przestronne i jasne gabinety wyposażone w ergonomiczny sprzęt medyczny, który pozwala lekarzom pracować precyzyjnie i komfortowo.',
      'W naszej klinice znajdziesz wszystko, czego potrzebujesz - od nowoczesnego sprzętu diagnostycznego po wygodne strefy oczekiwania.',
    ],
  },
  wizualizacja: {
    title: 'Wizualizacja przestrzeni kliniki SONAMED',
    descriptions: [
      'Profesjonalna wizualizacja naszej kliniki pokazująca nowoczesne wnętrza i przestronne gabinety zaprojektowane z myślą o komforcie pacjentów.',
      'Przestrzeń kliniki została zaprojektowana w sposób przemyślany, łącząc funkcjonalność z estetyką. Jasne kolory i naturalne materiały tworzą przyjazną atmosferę.',
      'Zobacz, jak wygląda nasza klinika - nowoczesne wyposażenie, przestronne wnętrza i designerskie wykończenia tworzą miejsce, w którym chce się przebywać.',
      'Wizualizacja pokazuje dbałość o detale i komfort pacjentów. Każdy element został starannie dobrany, aby tworzyć harmonijną i relaksującą przestrzeń.',
      'Nasza klinika to połączenie nowoczesnej technologii z przytulnym, domowym klimatem. Wizualizacje oddają charakter miejsca, w którym pacjenci czują się bezpiecznie.',
      'Przestronne sale zabiegowe, nowoczesna recepcja i komfortowe strefy oczekiwania - wszystko zaprojektowane z myślą o najwyższej jakości obsługi pacjentów.',
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

    let descriptionIndex = 0;

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const metadata = await getImageMetadata(filePath);

      // Przypisz opis sekwencyjnie z rotacją (jeśli zdjęć jest więcej niż opisów)
      const description =
        categoryInfo.descriptions[
          descriptionIndex % categoryInfo.descriptions.length
        ];

      descriptionIndex++;

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
