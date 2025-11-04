export const sonamedClinicData = {
  contact: {
    phone: '+48501054824',
    emailPrimary: 'sonia_sugier_karpinska@wp.pl', // Główny email do rejestracji wizyt
    emailSecondary: 'sonamed.centrum@gmail.com', // Dodatkowy email
    email: 'sonia_sugier_karpinska@wp.pl', // Domyślny (dla kompatybilności)
    address: {
      street: 'Kalinowa 28',
      postalCode: '83-400',
      city: 'Kościerzyna',
    },
  },

  hero: {
    mainTitle: 'Profesjonalna opieka stomatologiczna',
    subtitle: 'w sercu Kaszub od 25+ lat',
    brandName: 'Sonamed',
    ctaButtons: ['Zarezerwuj wizytę', 'Sprawdź usługi'],
  },

  whatMakesUsDifferent: {
    title: 'Co nas wyróżnia?',
    description:
      'Już ponad 35 tys+ wizyt zakończyło się pięknym uśmiechem – Twój może być kolejny!',
    features: [
      {
        title: 'Piękno bez kompromisów',
        description:
          'Specjalizujemy się w tworzeniu uśmiechów, które wyglądają jak nietknięte przez dentystę – naturalnie, harmonijnie i estetycznie.',
      },
      {
        title: 'Kompleksowe podejście',
        description:
          'Oferujemy szeroki zakres usług stomatologicznych. W przypadkach wymagających specjalistycznego leczenia (implanty, chirurgia, ortodoncja) kierujemy naszych pacjentów do zaufanych specjalistów.',
      },
      {
        title: 'Komfort i dyskrecja',
        description:
          'Nasze recovery room i strefy prywatności gwarantują spokój i relaks na każdym etapie leczenia. Kontakt z dedykowanym opiekunem pacjenta oraz dostęp do naszej aplikacji pozwala na kontrolę postępów leczenia i stały kontakt z kliniką.',
      },
    ],
  },

  team: {
    title: 'Kim jesteśmy',
    description:
      'Jesteśmy zespołem pasjonatów stomatologii, który łączy precyzję nauki z sercem i empatią. Wierzymy, że każdy uśmiech opowiada swoją własną historię, a my jesteśmy tutaj aby pomóc napisać jej najpiękniejszy rozdział.',
    members: [
      {
        name: 'lek. dent. Sonia Sugier-Karpińska',
        role: 'Właścicielka kliniki',
        description:
          'Doświadczony lekarz dentysta z wieloletnią praktyką. Specjalizuje się w kompleksowym leczeniu stomatologicznym, łącząc najnowoczesne metody z indywidualnym podejściem do każdego pacjenta.',
      },
      {
        name: 'lek. Nina Karpińska',
        role: 'Zarząd kliniki',
        description:
          'Młoda, dynamiczna lekarz, która wnosi świeże spojrzenie na stomatologię. Pasjonuje się nowoczesnymi technikami leczenia i zapewnianiem najwyższego komfortu pacjentom.',
      },
    ],
  },

  services: {
    title: 'Oferujemy',
    servicesList: [
      'Licówki',
      'Bonding',
      'Protetyka',
      'Leczenie pod mikroskopem',
      'Stomatologia zachowawcza',
      'Stomatologia estetyczna',
      'Periodontologia',
      'Endodoncja',
      'Stomatologia dziecięca',
      'Diagnostyka RTG',
    ],
  },

  priceList: {
    title: 'Cennik',
    categories: [
      {
        category: 'Diagnostyka',
        description:
          'Precyzyjne planowanie leczenia pozwala osiągnąć harmonijny i naturalny uśmiech. Wykorzystując diagnostykę RTG oraz dokumentację fotograficzną, możemy dokładnie ocenić stan uzębienia i zaplanować odpowiednie leczenie.',
        services: [
          { name: 'Przegląd/Badanie', price: '200 zł' },
          { name: 'Konsultacja specjalistyczna', price: '350 zł' },
          { name: 'Diagnostyka RTG (pantomogram)', price: 'od 200 zł' },
          {
            name: 'Pakiet diagnostyczny (diagnostyka RTG + dokumentacja fotograficzna)',
            price: '600 zł',
          },
        ],
      },
      {
        category: 'Profilaktyka stomatologiczna',
        description:
          'W SONAMED zależy nam na tym, aby Twój uśmiech był zdrowy i pełen blasku! Podczas wizyty higienizacyjnej usuwamy kamień nazębny, osady oraz dokładnie oczyszczamy zęby, pozostawiając je gładkie i świeże. Zabieg trwa zazwyczaj 1 do 1,5h, a jego koszt zależy od indywidualnych potrzeb i stanu jamy ustnej.',
        services: [
          { name: 'Pakiet higienizacyjny', price: 'od 390 zł' },
          { name: 'Kiretaż ½ łuku', price: 'od 560 zł' },
        ],
      },
      {
        category: 'Stomatologia zachowawcza',
        description:
          'W klinice SONAMED oferujemy estetyczne i trwałe odbudowy zębów, idealnie dopasowane do ich naturalnego kształtu i koloru. Cena zabiegu zależy od stopnia zniszczenia zęba oraz zakresu rekonstrukcji.',
        services: [
          { name: 'Wypełnienie estetyczne', price: 'od 370 zł' },
          { name: 'Znieczulenie miejscowe', price: '0 zł' },
          { name: 'Wkład/Nakład kompozytowy', price: '1 500 zł' },
        ],
      },
      {
        category: 'Stomatologia estetyczna',
        description:
          'Twój uśmiech to Twoja wizytówka! Oferujemy kompleksowe zabiegi poprawiające wygląd zębów – wybielanie i bonding. Stawiamy na naturalny efekt i harmonię rysów twarzy, podkreślając piękno Twojego uśmiechu.',
        services: [
          { name: 'Wybielanie SONAMED', price: 'od 1 600 zł' },
          { name: 'Bonding/Flow Injection (1 ząb)', price: '1 100 zł' },
          { name: 'ICON (1 ząb)', price: '500 zł' },
        ],
      },
      {
        category: 'Protetyka',
        description:
          'Twój uśmiech zasługuje na perfekcję! Korony, mosty, licówki i protezy tworzymy z dbałością o każdy detal, łącząc nowoczesne technologie z estetyką. Indywidualnie dopasowane rekonstrukcje przywracają piękny wygląd, komfort i pełną funkcję zgryzu – tak, byś mógł uśmiechać się bez ograniczeń.',
        services: [
          { name: 'Korona pełnoceramiczna', price: 'od 2 700 zł' },
          { name: 'Licówka pełnoceramiczna', price: 'od 2 700 zł' },
          { name: 'Proteza akrylowa', price: 'od 4 000 zł' },
        ],
      },
      {
        category: 'Chirurgia stomatologiczna',
        description:
          'Podstawowe zabiegi chirurgiczne wykonujemy w naszym gabinecie. W przypadkach bardziej skomplikowanych zabiegów chirurgicznych kierujemy pacjentów do zaufanych specjalistów.',
        services: [{ name: 'Usunięcie zęba', price: 'od 400 zł' }],
      },
      {
        category: 'Stomatologia dziecięca',
        description:
          'Zdrowy uśmiech od najmłodszych lat to inwestycja na całe życie. Tworzymy przyjazną atmosferę, aby każda wizyta była pozytywnym doświadczeniem. Oferujemy bezstresowe leczenie, profilaktykę i nowoczesne metody ochrony zębów, dbając o komfort małych pacjentów.',
        services: [
          { name: 'Wizyta adaptacyjna', price: '200 zł' },
          { name: 'Usunięcie zęba mlecznego', price: 'od 180 zł' },
          { name: 'Wypełnienie w zębie mlecznym', price: 'od 180 zł' },
          { name: 'Aparat ruchomy', price: 'od 800 zł' },
        ],
      },
      {
        category: 'Endodoncja i leczenie w mikroskopie',
        description:
          'Praca w powiększeniu i użycie specjalistycznych narzędzi pozwalają nam skutecznie leczyć nawet najbardziej skomplikowane przypadki. Leczenie kanałowe pod mikroskopem umożliwia dokładne oczyszczenie i odbudowę zęba, co często pozwala uniknąć jego usunięcia.',
        services: [
          {
            name: 'Leczenie kanałowe (znieczulenie + opracowanie i termiczne wypełnienie kanałów)',
            price: 'od 1 200 zł',
          },
          {
            name: 'Zamknięcie perforacji (cena do leczenia kanałowego)',
            price: 'od 250 zł',
          },
          {
            name: 'Usunięcie złamanego narzędzia (cena do leczenia kanałowego)',
            price: 'od 300 zł',
          },
        ],
      },
      {
        category: 'Fizjoterapia stomatologiczna',
        description:
          'Kompleksowe podejście do zdrowia jamy ustnej obejmuje także pracę z układem mięśniowo-szkieletowym. Fizjoterapia pomaga w leczeniu problemów ze stawami skroniowo-żuchwowymi, napięciami mięśniowymi oraz bólami głowy i karku wynikającymi z nieprawidłowego zgryzu.',
        services: [
          { name: 'Konsultacja fizjoterapeutyczna', price: 'od 280 zł' },
        ],
      },
      {
        category: 'Neurologopedia',
        description:
          'Mowa i prawidłowa funkcja mięśni twarzy to klucz do zdrowia i harmonii w jamie ustnej. Neurologopeda wspiera zarówno dzieci, jak i dorosłych w terapii wad wymowy, dysfunkcji oddychania, połykania oraz problemów wynikających z napięć mięśniowych.',
        services: [
          { name: 'Diagnostyka logopedyczna', price: '350 zł' },
          { name: 'Terapia neurologopedyczna', price: '350 zł' },
        ],
      },
      {
        category:
          'Leczenie bólu twarzy, bruksizmu i zaburzeń stawu skroniowo-żuchwowego',
        description:
          'TMD (zaburzenia stawu skroniowo-żuchwowego) i bruksizm to powszechne schorzenia objawiające się bólem mięśni twarzy, szczęki oraz zgrzytaniem lub zaciskaniem zębów. Mogą prowadzić do bólu głowy, zużycia zębów i trudności w otwieraniu ust. W naszej klinice oferujemy kompleksową diagnostykę i nowoczesne leczenie tych dolegliwości.',
        services: [
          { name: 'Konsultacja', price: 'od 500 zł' },
          { name: 'Szyna okluzyjna', price: '2 000 zł' },
        ],
      },
    ],
    disclaimer:
      'Chętnie przygotujemy szczegółową wycenę uwzględniającą Twój plan leczenia. Ceny podane w cenniku mają charakter orientacyjny i mogą ulec zmianie w zależności od indywidualnych potrzeb pacjenta. Dokładną wycenę przygotowujemy po konsultacji i opracowaniu spersonalizowanego planu leczenia – z przyjemnością omówimy ją z Tobą na miejscu.',
  },

  appointmentForm: {
    title: 'Umów się na wizytę',
    description:
      'Prześlij uzupełniony formularz, a w przeciągu 24h skontaktujemy się z Tobą i zaprosimy na konsultację.',
    fields: [
      'Imię i nazwisko *',
      'Adres e-mail *',
      'Numer telefonu *',
      'Wiadomość',
    ],
    privacyConsent:
      'Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką Prywaności w celu obsługi zapytania wysłanego poprzez formularz kontaktowy.',
  },

  footer: {
    policies: ['POLITYKA PRYWATNOŚCI', 'POLITYKA COOKIES'],
    cta: 'Zarezerwuj wizytę',
  },
};
