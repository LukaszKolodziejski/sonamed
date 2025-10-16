// FAQ dla pacjentów gabinetu stomatologicznego Sonamed
// Obejmuje informacje o 12 specjalnościach oraz często zadawane pytania

export interface Question {
  id: string;
  question: string;
  answer: string;
  category: 'usługi' | 'leczenie' | 'organizacja' | 'profilaktyka' | 'finanse';
}

export const FAQ_DATA: Question[] = [
  // PYTANIA O USŁUGI STOMATOLOGICZNE
  {
    id: 'stomatologia-zachowawcza',
    question: 'Czym jest stomatologia zachowawcza?',
    answer:
      'Stomatologia zachowawcza zajmuje się leczeniem i odbudową zębów dotkniętych próchnicą oraz innymi uszkodzeniami. Obejmuje wypełnianie ubytków (plomby), leczenie nadwrażliwości zębów, odbudowę zębów po urazach oraz profilaktykę próchnicy. Celem jest zachowanie naturalnych zębów w jak najlepszym stanie i przywrócenie ich funkcji przy minimalnej ingerencji.',
    category: 'usługi',
  },
  {
    id: 'endodoncja-leczenie-kanalowe',
    question: 'Na czym polega endodoncja (leczenie kanałowe)?',
    answer:
      'Endodoncja to specjalność zajmująca się leczeniem wnętrza zęba, czyli miazgi zębowej. Leczenie kanałowe przeprowadza się, gdy dochodzi do zapalenia lub martwicy miazgi na skutek głębokiej próchnicy lub urazu. Procedura polega na usunięciu zainfekowanej miazgi, oczyszczeniu i dezynfekcji kanałów korzeniowych, a następnie ich szczelnym wypełnieniu. Pozwala to uratować ząb przed koniecznością usunięcia.',
    category: 'usługi',
  },
  {
    id: 'protetyka-stomatologiczna',
    question: 'Czym zajmuje się protetyka stomatologiczna?',
    answer:
      'Protetyka stomatologiczna to dziedzina zajmująca się odbudową brakujących lub uszkodzonych zębów za pomocą sztucznych uzupełnień. Obejmuje wykonywanie koron, mostów, protez częściowych i całkowitych oraz licówek. Celem jest przywrócenie funkcji żucia, mowy oraz estetyki uśmiechu. Współczesna protetyka wykorzystuje nowoczesne materiały i technologie, zapewniając trwałe i estetyczne rozwiązania.',
    category: 'usługi',
  },
  {
    id: 'implantologia',
    question: 'Co to jest implantologia stomatologiczna?',
    answer:
      'Implantologia to nowoczesna dziedzina stomatologii zajmująca się wszczepianiem implantów zębowych. Implanty to tytanowe śruby wszczepiane w kość szczęki lub żuchwy, które zastępują korzeń utraconego zęba. Na implancie mocowana jest korona protetyczna, most lub proteza. Implanty zapewniają trwałe, stabilne i estetyczne rozwiązanie dla osób z brakującymi zębami, pozwalając na normalny żucie i mówienie.',
    category: 'usługi',
  },
  {
    id: 'chirurgia-stomatologiczna',
    question: 'Na czym polega chirurgia stomatologiczna?',
    answer:
      'Chirurgia stomatologiczna obejmuje wszystkie zabiegi operacyjne w obrębie jamy ustnej. Należą do nich: usuwanie zębów (ekstrakcje), usuwanie zębów zatrzymanych (np. zębów mądrości), resekcje wierzchołków korzeni, usuwanie torbieli i guzków, zabiegi implantologiczne, plastyka wędzidełek oraz zabiegi regeneracyjne kości i dziąseł. Większość zabiegów wykonuje się w znieczuleniu miejscowym.',
    category: 'usługi',
  },
  {
    id: 'ortodoncja',
    question: 'Czym jest ortodoncja i wady zgryzu?',
    answer:
      'Ortodoncja zajmuje się diagnozowaniem, zapobieganiem i leczeniem nieprawidłowości w ustawieniu zębów oraz wad zgryzu. Leczenie ortodontyczne przeprowadza się za pomocą różnych aparatów: stałych (zamocowanych na zębach), ruchomych, przezroczystych nakładek czy aparatów lingwalnych. Celem jest poprawa funkcji żucia, estetyki uśmiechu oraz profilaktyka problemów ze stawem skroniowo-żuchwowym. Leczenie ortodontyczne jest możliwe w każdym wieku.',
    category: 'usługi',
  },
  {
    id: 'periodontologia',
    question: 'Czym zajmuje się periodontologia?',
    answer:
      'Periodontologia to specjalność zajmująca się profilaktyką, diagnozowaniem i leczeniem chorób przyzębia - tkanek otaczających i podtrzymujących zęby (dziąsła, więzadła przyzębia, cement korzeniowy, kość wyrostka zębodołowego). Leczy zapalenie dziąseł, paradontozę, recesje dziąseł oraz przeprowadza zabiegi regeneracyjne. Nieleczone choroby przyzębia mogą prowadzić do utraty zębów, dlatego regularna opieka periodontologiczna jest bardzo ważna.',
    category: 'usługi',
  },
  {
    id: 'stomatologia-dziecieca',
    question: 'Na czym polega stomatologia dziecięca (pedodoncja)?',
    answer:
      'Stomatologia dziecięca koncentruje się na opiece stomatologicznej nad dziećmi od niemowlęctwa do okresu dojrzewania. Obejmuje profilaktykę (lakowanie zębów, fluoryzacja), leczenie próchnicy zębów mlecznych i stałych, edukację w zakresie higieny jamy ustnej oraz monitorowanie prawidłowego rozwoju uzębienia. Lekarze pedodonci są specjalnie przygotowani do pracy z dziećmi, stosując techniki redukujące lęk i stres.',
    category: 'usługi',
  },
  {
    id: 'stomatologia-estetyczna',
    question: 'Co obejmuje stomatologia estetyczna?',
    answer:
      'Stomatologia estetyczna skupia się na poprawie wyglądu zębów i uśmiechu. Obejmuje wybielanie zębów, wykonywanie licówek ceramicznych, estetyczne odbudowy kompozytowe, korektę kształtu i koloru zębów, gingivoplastykę (modelowanie linii dziąseł) oraz kompleksową przebudowę uśmiechu. Zabiegi te nie tylko poprawiają estetykę, ale często także funkcję zębów, przyczyniając się do lepszego samopoczucia pacjenta.',
    category: 'usługi',
  },
  {
    id: 'profilaktyka-stomatologiczna',
    question: 'Czym jest profilaktyka stomatologiczna?',
    answer:
      'Profilaktyka stomatologiczna obejmuje wszystkie działania mające na celu zapobieganie chorobom jamy ustnej. Należy do niej: regularne przeglądy stomatologiczne, profesjonalne czyszczenie zębów (usuwanie kamienia nazębnego i osadów), fluoryzacja, lakowanie zębów, instruktaż higieny jamy ustnej oraz edukacja pacjentów. Regularna profilaktyka pozwala na wczesne wykrycie problemów i ich leczenie przed rozwojem poważnych powikłań.',
    category: 'usługi',
  },
  {
    id: 'diagnostyka-obrazowa',
    question: 'Na czym polega diagnostyka obrazowa w stomatologii?',
    answer:
      'Diagnostyka obrazowa w stomatologii wykorzystuje różne techniki obrazowania do oceny stanu zębów, kości szczęk i tkanek jamy ustnej. Obejmuje zdjęcia pantomograficzne (panoramiczne), zdjęcia wewnątrzustne, tomografię komputerową (CBCT) oraz cyfrową radiografię. Te badania są niezbędne do dokładnej diagnozy, planowania leczenia, monitorowania postępów terapii oraz wykrywania patologii niedostrzegalnych podczas standardowego badania klinicznego.',
    category: 'usługi',
  },
  {
    id: 'medycyna-estetyczna',
    question: 'Czym jest medycyna estetyczna w stomatologii?',
    answer:
      'Medycyna estetyczna w stomatologii to zabiegi mające na celu poprawę wyglądu twarzy i okolic jamy ustnej. Obejmuje: wypełnienia kwasem hialuronowym (modelowanie ust, zmarszczki), botoks (leczenie bruksizmu, zmarszczki mimiczne), mezoterapię, oraz inne zabiegi wygładzające i ujędrniające skórę. Te procedury często uzupełniają leczenie stomatologiczne, tworząc kompleksową poprawę estetyki twarzy i uśmiechu.',
    category: 'usługi',
  },

  // PYTANIA O LECZENIE I ZABIEGI
  {
    id: 'czy-leczenie-bolesne',
    question: 'Czy leczenie stomatologiczne jest bolesne?',
    answer:
      'Współczesna stomatologia oferuje skuteczne metody znieczulenia, dzięki czemu większość zabiegów jest całkowicie bezbolesna. Przed podaniem znieczulenia stosujemy żele znieczulające, które minimalizują dyskomfort związany z iniekcją. Dla pacjentów z dużym lękiem dostępne są dodatkowe metody sedacji. Nasz zespół dba o maksymalny komfort pacjenta podczas każdej wizyty.',
    category: 'leczenie',
  },
  {
    id: 'ile-kosztuje-leczenie',
    question: 'Ile kosztuje leczenie stomatologiczne?',
    answer:
      'Koszty leczenia stomatologicznego zależą od rodzaju i zakresu potrzebnych zabiegów. Po pierwszej wizycie diagnostycznej przedstawiamy szczegółowy plan leczenia z kosztorysem. Oferujemy różne opcje finansowania, w tym płatność ratalna. Część zabiegów może być refundowana przez NFZ. Zachęcamy do kontaktu w celu uzyskania szczegółowych informacji o cenach konkretnych zabiegów.',
    category: 'finanse',
  },
  {
    id: 'czy-krwawienie-dziąseł-normalne',
    question: 'Czy krwawienie dziąseł podczas szczotkowania jest normalne?',
    answer:
      'Krwawienie dziąseł podczas szczotkowania NIE jest normalne i może wskazywać na zapalenie dziąseł lub inne problemy periodontologiczne. Najczęstszą przyczyną jest nagromadzenie płytki nazębnej i kamienia. Zalecamy jak najszybszą wizytę u periodontologa w celu diagnozy i wdrożenia odpowiedniego leczenia. Wczesne wykrycie i leczenie chorób dziąseł zapobiega poważniejszym powikłaniom.',
    category: 'leczenie',
  },
  {
    id: 'jak-często-dentysta',
    question: 'Jak często powinienem odwiedzać dentystę?',
    answer:
      'Zalecamy wizyty kontrolne co 6 miesięcy dla większości pacjentów. Osoby z większym ryzykiem chorób jamy ustnej (np. z chorobami przyzębia, cukrzycą) mogą potrzebować częstszych wizyt - co 3-4 miesiące. Regularne wizyty pozwalają na wczesne wykrycie problemów, co znacznie ułatwia leczenie i zmniejsza jego koszty. Częstotliwość wizyt może być dostosowana indywidualnie do potrzeb pacjenta.',
    category: 'profilaktyka',
  },
  {
    id: 'czy-wybielanie-bezpieczne',
    question: 'Czy wybielanie zębów jest bezpieczne?',
    answer:
      'Profesjonalne wybielanie zębów przeprowadzane pod nadzorem dentysty jest bezpieczne i skuteczne. Przed zabiegiem przeprowadzamy dokładne badanie i dobieramy odpowiednią metodę wybielania. Stosujemy sprawdzone preparaty i techniki, które minimalizują ryzyko nadwrażliwości. Nie zalecamy samodzielnego wybielania bez konsultacji ze specjalistą, ponieważ może to prowadzić do uszkodzenia szkliwa zębowego.',
    category: 'leczenie',
  },
  {
    id: 'jak-dbać-o-implanty',
    question: 'Jak dbać o implanty zębowe?',
    answer:
      'Implanty wymagają takiej samej higieny jak naturalne zęby, a nawet bardziej starannej. Należy szczotkować je specjalnymi szczoteczkami co najmniej dwa razy dziennie, używać nici dentystycznej lub irygatorów, unikać twardych pokarmów mogących uszkodzić koronę. Bardzo ważne są regularne wizyty kontrolne co 6 miesięcy. Przy odpowiedniej pielęgnacji implanty mogą służyć przez całe życie.',
    category: 'leczenie',
  },
  {
    id: 'czy-można-leczyć-kilka-zębów',
    question: 'Czy można leczyć kilka zębów podczas jednej wizyty?',
    answer:
      'Tak, często możliwe jest leczenie kilku zębów podczas jednej wizyty, co pozwala na skrócenie czasu leczenia i zwiększenie komfortu pacjenta. Decyzja zależy od rodzaju zabiegów, stanu zdrowia pacjenta i jego tolerancji. Planujemy leczenie tak, aby było ono możliwie efektywne i komfortowe. Zawsze informujemy pacjenta o planowanym zakresie zabiegów przed rozpoczęciem wizyty.',
    category: 'leczenie',
  },
  {
    id: 'objawy-próchnicy',
    question: 'Jakie są pierwsze objawy próchnicy?',
    answer:
      'Pierwsze objawy próchnicy to: nadwrażliwość zębów na słodkie, zimne lub ciepłe pokarmy, ból zęba podczas żucia, widoczne przebarwienia lub ciemne plamy na powierzchni zęba, nieświeży oddech oraz nieprzyjemny smak w ustach. Na wczesnym etapie próchnica może być bezobjawowa, dlatego tak ważne są regularne wizyty kontrolne umożliwiające jej wykrycie i leczenie zanim pojawią się dolegliwości bólowe.',
    category: 'leczenie',
  },
  {
    id: 'leczenie-kanałowe-skuteczne',
    question: 'Czy leczenie kanałowe jest skuteczne?',
    answer:
      'Tak, leczenie kanałowe jest bardzo skuteczną metodą ratowania zębów. Współcześnie wskaźnik powodzenia wynosi około 85-95%. Po prawidłowo przeprowadzonym leczeniu endodontycznym ząb może służyć przez wiele lat. Kluczowe jest dokładne oczyszczenie kanałów, ich szczelne wypełnienie oraz właściwa odbudowa korony zęba. W przypadku niepowodzenia możliwe jest ponowne leczenie lub leczenie chirurgiczne (resekcja wierzchołka korzenia).',
    category: 'leczenie',
  },
  {
    id: 'objawy-paradontozy',
    question: 'Jakie są objawy paradontozy?',
    answer:
      'Objawy paradontozy (zaawansowanej choroby przyzębia) to: krwawienie dziąseł podczas szczotkowania, zaczerwienienie i obrzęk dziąseł, cofanie się dziąseł (recesje), ruchomość zębów, powiększające się szpary między zębami, nieprzyjemny zapach z ust, ropne wydzieliny z kieszeni dziąsłowych oraz ból podczas żucia. Paradontoza nieleczona prowadzi do utraty zębów, dlatego wymaga natychmiastowej interwencji periodontologa.',
    category: 'leczenie',
  },

  // PYTANIA ORGANIZACYJNE I PRAKTYCZNE
  {
    id: 'jak-umówić-wizytę',
    question: 'Jak mogę umówić się na wizytę?',
    answer:
      'Wizytę można umówić na kilka sposobów: telefonicznie pod numerem +48501054824, online przez naszą stronę internetową w zakładce "Umów wizytę", osobiście w recepcji naszego gabinetu lub przez media społecznościowe. Recepcja jest czynna od poniedziałku do piątku w godzinach 8:00-16:00. Staramy się oferować terminy dostosowane do możliwości pacjentów.',
    category: 'organizacja',
  },
  {
    id: 'pierwsza-wizyta',
    question: 'Jak wygląda pierwsza wizyta?',
    answer:
      'Pierwsza wizyta obejmuje szczegółowe badanie stomatologiczne, wywiad medyczny, dokumentację fotograficzną (jeśli potrzebna), oraz wykonanie zdjęć rentgenowskich w razie konieczności. Na podstawie badania opracowujemy indywidualny plan leczenia z kosztorysem. Wizyta trwa około 30-45 minut. Prosimy o przybycie 10 minut wcześniej w celu wypełnienia dokumentów medycznych i uzyskania niezbędnych informacji.',
    category: 'organizacja',
  },
  {
    id: 'jakie-dokumenty',
    question: 'Jakie dokumenty powinienem zabrać na wizytę?',
    answer:
      'Na pierwszą wizytę prosimy o zabranie: ważnego dokumentu tożsamości (dowód osobisty/paszport), aktualnych wyników badań (jeśli posiadane), listy przyjmowanych leków, dokumentacji z poprzedniego leczenia stomatologicznego (jeśli dostępna). W przypadku pacjentów NFZ - kartę pacjenta lub numer PESEL. Dla osób niepełnoletnich wymagana jest obecność opiekuna prawnego lub pisemna zgoda na leczenie.',
    category: 'organizacja',
  },
  {
    id: 'formy-płatności',
    question: 'Jakie formy płatności są akceptowane?',
    answer:
      'Przyjmujemy różne formy płatności: gotówkę, karty płatnicze (Visa, Mastercard), przelewy bankowe, BLIK, oraz płatności mobilne. Oferujemy także możliwość płatności ratalnej przez firmy finansowe współpracujące z naszym gabinetem. Część zabiegów może być refundowana przez NFZ. Szczegółowe informacje o formach płatności i możliwościach finansowania udziela recepcja.',
    category: 'finanse',
  },
  {
    id: 'czy-na-nfz',
    question: 'Czy przyjmujecie pacjentów na NFZ?',
    answer:
      'Tak, świadczymy wybrane usługi w ramach kontraktu z NFZ. Obejmują one podstawowe zabiegi stomatologii zachowawczej, periodontologii oraz chirurgii stomatologicznej. Szczegółowy zakres świadczeń refundowanych można uzyskać kontaktując się z recepcją. Terminy wizyt NFZ mogą być ograniczone ze względu na limity. Oferujemy także pełną gamę usług komercyjnych bez oczekiwania.',
    category: 'finanse',
  },
  {
    id: 'czy-dla-dzieci',
    question: 'Czy gabinet przyjmuje dzieci?',
    answer:
      'Tak, specjalizujemy się także w leczeniu dzieci. Mamy wykwalifikowanego pedodontę, który posiada doświadczenie w pracy z najmłodszymi pacjentami. Gabinet jest przystosowany do potrzeb dzieci, a nasz zespół używa specjalnych technik redukujących lęk i stres. Oferujemy kompleksową opiekę od pierwszego roku życia, w tym profilaktykę, leczenie oraz edukację w zakresie higieny jamy ustnej.',
    category: 'organizacja',
  },
  {
    id: 'co-przed-wizytą',
    question: 'Jak przygotować się do wizyty?',
    answer:
      'Przed wizytą zalecamy: dokładne umycie zębów (ale nie bezpośrednio przed zabiegiem chirurgicznym), przygotowanie listy pytań do lekarza, zabranie wymaganych dokumentów, punktualne przybycie, oraz unikanie alkoholu 24h przed zabiegiem. W przypadku lęku przed leczeniem można skonsultować się z lekarzem możliwości zastosowania sedacji. Należy też poinformować o przyjmowanych lekach i chorobach przewlekłych.',
    category: 'organizacja',
  },
  {
    id: 'czy-z-przeziębieniem',
    question: 'Czy mogę przyjść na wizytę z przeziębieniem?',
    answer:
      'W przypadku objawów infekcji górnych dróg oddechowych (gorączka, katar, kaszel, ból gardła) zalecamy przełożenie wizyty. Ma to na celu ochronę personelu i innych pacjentów przed zakażeniem, oraz zapewnienie Państwu komfortu leczenia. Po ustąpieniu objawów można normalnie korzystać z usług gabinetu. W nagłych przypadkach (silny ból) prosimy o telefoniczny kontakt w celu ustalenia postępowania.',
    category: 'organizacja',
  },
  {
    id: 'po-zabiegu-ograniczenia',
    question: 'Czy są jakieś ograniczenia po zabiegu?',
    answer:
      'Ograniczenia po zabiegu zależą od jego rodzaju. Po plombach: unikać twardych pokarmów przez 2h. Po ekstrakcjach: nie płukać, nie palić, unikać wysiłku przez 24h. Po wybielaniu: unikać barwiących pokarmów przez 48h. Po implantacji: dieta płynna, unikać wysiłku przez tydzień. Zawsze przekazujemy szczegółowe instrukcje pooperacyjne oraz numery kontaktowe w przypadku problemów.',
    category: 'leczenie',
  },
  {
    id: 'nagły-ból-zęba',
    question: 'Co robić w przypadku nagłego bólu zęba?',
    answer:
      'W przypadku nagłego silnego bólu zęba należy: skontaktować się telefonicznie z naszym gabinetem (oferujemy pomoc w nagłych przypadkach), tymczasowo zastosować dostępne bez recepty leki przeciwbólowe zgodnie z ulotką, unikać zbyt gorących/zimnych pokarmów, delikatnie płukać jamę ustną letnią wodą z solą. Nie stosować aspiryny bezpośrednio na ząb ani gorących okładów. Zapewniamy pomoc w przypadkach nagłych.',
    category: 'leczenie',
  },

  // PYTANIA O HIGIENĘ I PROFILAKTYKĘ
  {
    id: 'jak-szczotkować-zęby',
    question: 'Jak prawidłowo szczotkować zęby?',
    answer:
      'Zęby należy szczotkować co najmniej 2 razy dziennie przez 2 minuty, najlepiej po posiłkach. Używaj szczoteczki o średniej twardości, pastę z fluorem, szczotkuj delikatnie okrężnymi ruchami wszystkie powierzchnie zębów, nie zapomnij o języku i dziąsłach. Wymień szczoteczkę co 3 miesiące. Uzupełnij szczotkowanie nitką dentystyczną i płynem do płukania. Nasz zespół chętnie udzieli szczegółowego instruktażu higieny dostosowanego do Twoich potrzeb.',
    category: 'profilaktyka',
  },
  {
    id: 'czy-nitka-konieczna',
    question: 'Czy używanie nici dentystycznej jest konieczne?',
    answer:
      'Tak, używanie nici dentystycznej jest niezbędne dla utrzymania zdrowia jamy ustnej. Szczoteczka dociera tylko do 60% powierzchni zębów, a nitka czyści przestrzenie międzyzębowe, gdzie najczęściej rozwija się próchnica i choroby dziąseł. Nitką należy czyścić zęby codziennie, najlepiej wieczorem przed szczotkowaniem. Alternatywą może być irygator lub szczoteczki międzyzębowe. Pokażemy jak prawidłowo używać nici podczas wizyty.',
    category: 'profilaktyka',
  },
  {
    id: 'płyn-do-płukania',
    question: 'Czy płyn do płukania jamy ustnej jest potrzebny?',
    answer:
      'Płyn do płukania jamy ustnej jest doskonałym uzupełnieniem codziennej higieny. Pomaga usunąć bakterie z trudnodostępnych miejsc, odświeża oddech, może dostarczać fluor wzmacniający szkliwo. Nie zastępuje jednak szczotkowania i nitkowania. Wybierz płyn dostosowany do swoich potrzeb (przeciw próchnicy, chorobom dziąseł, wrażliwości). Unikaj płynów z alkoholem przy długotrwałym stosowaniu. Nasz zespół pomoże dobrać odpowiedni płyn.',
    category: 'profilaktyka',
  },
  {
    id: 'dieta-zdrowie-zębów',
    question: 'Jaka dieta wpływa na zdrowie zębów?',
    answer:
      'Dieta ma ogromny wpływ na zdrowie zębów. Ogranicz cukry i skrobię (słodycze, napoje gazowane, przekąski), które karmią bakterie próchnicowe. Jedz produkty bogate w wapń (nabiał, ryby), fosfor (mięso, jaja), witaminy (owoce, warzywa). Pij dużo wody, zwłaszcza fluoryzowanej. Unikaj częstego podjadania między posiłkami. Jeśli jesz słodycze, rób to podczas posiłków, nie między nimi. Po słodyczach płucz usta wodą.',
    category: 'profilaktyka',
  },
  {
    id: 'czy-żuć-gumę',
    question: 'Czy żucie gumy jest dobre dla zębów?',
    answer:
      'Żucie gumy bezcu krowej (z ksylitolem lub sorbitolem) może być korzystne dla zębów. Stymuluje wydzielanie śliny, która neutralizuje kwasy i zmywa bakterie, dostarcza fluor i inne minerały wzmacniające szkliwo. Żuj gumę przez 10-20 minut po posiłkach. Unikaj gum z cukrem, które mogą zwiększać ryzyko próchnicy. Guma nie zastępuje podstawowej higieny jamy ustnej - szczotkowania i nitkowania.',
    category: 'profilaktyka',
  },
];

// Kategorie dla łatwiejszego filtrowania
export const FAQ_CATEGORIES = {
  usługi: 'Nasze usługi stomatologiczne',
  leczenie: 'Leczenie i zabiegi',
  organizacja: 'Organizacja wizyt',
  profilaktyka: 'Profilaktyka i higiena',
  finanse: 'Płatności i finansowanie',
} as const;

// Funkcja do filtrowania pytań według kategorii
export const getQuestionsByCategory = (
  category: keyof typeof FAQ_CATEGORIES
) => {
  return FAQ_DATA.filter((question) => question.category === category);
};

// Funkcja do wyszukiwania pytań
export const searchQuestions = (searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return FAQ_DATA.filter(
    (question) =>
      question.question.toLowerCase().includes(term) ||
      question.answer.toLowerCase().includes(term)
  );
};
