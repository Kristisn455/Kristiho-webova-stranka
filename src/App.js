const h = window.React.createElement;
const { useState } = window.React;

const heroImage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80';

const roomImages = {
  poseidon: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  aurora: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
  garden: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80'
};

const galleryImages = {
  terrace: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  lounge: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80',
  garden: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  sauna: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'
};

const translations = {
  sk: {
    languageName: "Slovenčina",
    languageLabel: "Jazyk",
    nav: [
      { label: "Domov", target: "hero" },
      { label: "O penzióne", target: "about" },
      { label: "Izby", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Zážitky", target: "experiences" },
      { label: "Kontakt", target: "contact" }
    ],
    hero: {
      badge: "Penzión Didian",
      title: "Vodopád pokoja v srdci Lysportu",
      description: "Penzión Didian je fiktívne útočisko inšpirované sústredeným duchom vodnopólového šampióna Didiana Geniceka. Panorámy na fjord, autorské wellness rituály a kuchyňa vedená oceánom vytvárajú pobyt, kde sa regenerujú športovci aj snílci.",
      highlights: [
        "Sky spa s výhľadom na fjord",
        "Udržateľné suity s adaptívnou klímou",
        "Program na mieru v elemente vody"
      ],
      ctaPrimary: "Rezervovať pobyt",
      ctaSecondary: "Virtuálna prehliadka",
      image: heroImage
    },
    about: {
      title: "Pohostinnosť s tímovým srdcom",
      text: "Didian sme navrhli ako miesto, kde sa tímový duch stretáva s pokojom severného pobrežia. Každá suita pripomína rozhodujúci zápas, každý servisný detail nasleduje rytmus prílivu. Príďte, nadýchnite sa slaného vzduchu a nechajte sever spomaliť čas.",
      stats: [
        { label: "Rok otvorenia", value: "2026" },
        { label: "Suity & izby", value: "18" },
        { label: "Wellness zóny", value: "4" },
        { label: "Hodnotenie hostí", value: "4,9 / 5" }
      ],
      note: "Captain's Lounge zostáva Didianovým obľúbeným miestom na taktické porady a večerné platne."
    },
    rooms: {
      title: "Suity vytvorené na regeneráciu",
      subtitle: "Tri signatúrne kategórie spájajú remeselný dizajn, špičkový komfort a šepot severného pobrežia.",
      items: [
        {
          name: "Suite Poseidon",
          size: "78 m²",
          sleeps: "2–4 hostia",
          description: "Dvojpodlažná suita s výhľadom na prístav, súkromnou parnou saunou a galériou trofejí.",
          perks: [
            "Privátny concierge tím 24/7",
            "Vinotéka plná pobrežných ročníkov",
            "Hudobná scéna s kurátorovanými playlistami"
          ],
          price: "od 289 € / noc",
          image: roomImages.poseidon,
          imageAlt: "Suite Poseidon s výhľadom na prístav"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 hostia",
          description: "Vzdušný loft pre páry, ktoré hľadajú rovnováhu medzi aktívnym dňom a pokojom večera.",
          perks: [
            "Svetelné scény podľa biorytmu",
            "Panoramatická vaňa z vulkanického kameňa",
            "Raňajkový koš doručený do suity"
          ],
          price: "od 189 € / noc",
          image: roomImages.aurora,
          imageAlt: "Loft Aurora s panoramatickým oknom"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 hostia",
          description: "Samostatná kabána v bylinkovej záhrade so súkromnou terasou a ohniskom na rozprávanie príbehov.",
          perks: [
            "Bylinkový rituálny balíček na mieru",
            "Vonkajšia dažďová sprcha pod borovicami",
            "Rezervované ležadlá pri lagúne"
          ],
          price: "od 209 € / noc",
          image: roomImages.garden,
          imageAlt: "Garden Cabana obklopená zeleňou"
        }
      ]
    },
    wellness: {
      title: "Wellness v rytme Didiana",
      description: "Voda sa tu hýbe v Didianovom tempe. Striedajte kontrastné bazény, ceremoniálne sauny a meditácie v soľnej jaskyni pod vedením našich koučov.",
      features: [
        { title: "Sky Lagoon", detail: "Soľný infinity bazén s plávajúcimi platformami na dychové cvičenia." },
        { title: "Nordic Heat Lab", detail: "Saunové ceremónie choreografované wellness tímom Didiana." },
        { title: "Recovery Studio", detail: "Fyzioterapia pre športovcov, lymfodrenáž a šité strečingové bloky." }
      ]
    },
    dining: {
      title: "Kuchyňa s chuťou oceánu",
      description: "Šéfkuchárka Lina spolupracuje s prístavnými farmármi a rannými rybármi, aby na tanieri rozprávala príbehy z Ocean League.",
      features: [
        { title: "Reštaurácia Tidal", detail: "Päťchodové degustácie s párovaním vín a živou hudbou pri krbe." },
        { title: "Bar Brine", detail: "Autorské koktaily s morskou soľou, chaluhovými bittermi a fermentovanými sirupmi." },
        { title: "Sunrise Pantry", detail: "Celodenný bar so funkčnými smoothie, cold brew a remeselným pečivom." }
      ]
    },
    experiences: {
      title: "Zážitky kurátorované posádkou",
      description: "Náš tím pripraví itinerár na mieru – či už túžite po tréningu na otvorenej vode alebo poetických večeroch v prístave.",
      highlights: [
        {
          title: "Vodné dobrodružstvá",
          items: [
            "Ranné plávanie v prístave s bývalým ligovým kapitánom",
            "Kajakovanie v bioluminiscenčných lagúnach",
            "Úvod do taktiky vodného póla"
          ]
        },
        {
          title: "Pobrežná kultúra",
          items: [
            "Komentované prechádzky folklórom Lysportu",
            "Workshop tvorby soľných kvetov",
            "Vinylové večery v Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Dychové laboratóriá so športovým psychológom",
            "Sound bath v soľnej jaskyni",
            "Súkromné klavírne západy slnka"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosféra penziónu",
      description: "Obrázky prezradia, prečo hostia opisujú Didian ako spojenie energie a pokoja.",
      images: [
        {
          image: galleryImages.terrace,
          alt: "Raňajky na terase Sky Lagoon",
          caption: "Ranné hmly sa prevaľujú cez terasu Sky Lagoon"
        },
        {
          image: galleryImages.lounge,
          alt: "Captain's Lounge pripravená na večer",
          caption: "Captain's Lounge nachystaná na večerné rozprávanie"
        },
        {
          image: galleryImages.garden,
          alt: "Bylinková záhrada s chodníkom",
          caption: "Garden Cabana ukrytá medzi aromatickými bylinkami"
        },
        {
          image: galleryImages.sauna,
          alt: "Sauna s ceremóniou Aufguss",
          caption: "Nordic Heat Lab počas ceremoniálneho Aufgussu"
        }
      ]
    },
    testimonials: {
      title: "Hlasy hostí",
      items: [
        {
          quote: "Tempo saunových ceremónií mi resetovalo tréningové nastavenie. Didian pôsobí ako aktívny regeneračný kemp.",
          name: "Tamara, triatlonistka",
          role: "Hosť z Prahy"
        },
        {
          quote: "Každý detail v lofte Aurora bol premyslený, od playlistov po svetlo. Za noc som napísal tri skladby.",
          name: "Elias, hudobník",
          role: "Hosť z Berlína"
        },
        {
          quote: "Vraciame sa kvôli kuchyni aj príbehom posádky. Je to jediné miesto, kde sa cítime ako členovia tímu.",
          name: "Marek & Petra",
          role: "Stáli hostia"
        }
      ]
    },
    callToAction: {
      title: "Vytvorte si vlastný scenár pobytu",
      text: "Povedzte nám, ako sa chcete cítiť pri odchode. Zabezpečíme transfery, wellness rituály, tréningy aj večerný soundtrack.",
      primary: "Naplánovať pobyt",
      secondary: "Pozrieť dostupnosť"
    },
    contact: {
      title: "Kontakt & príchod",
      description: "Hostí vítame nepretržite. Odpoveď concierge tímu očakávajte do 12 hodín.",
      addressLabel: "Adresa",
      address: "Prístav Lysport 7, 842 10, Severné pobrežie",
      phoneLabel: "Telefón",
      phone: "+421 900 123 456",
      emailLabel: "E-mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Recepcia",
      hours: [
        { day: "Pondelok – Nedeľa", hours: "24 hodín denne" }
      ],
      note: "Kryté parkovanie zahŕňa nabíjanie elektromobilov a úschovu športových dosiek."
    },
    footer: {
      note: "© 2025 Penzión Didian – fiktívny koncept inšpirovaný Didianom Genicekom."
    }
  },
  cs: {
    languageName: "Čeština",
    languageLabel: "Jazyk",
    nav: [
      { label: "Domů", target: "hero" },
      { label: "O penzionu", target: "about" },
      { label: "Pokoje", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Zážitky", target: "experiences" },
      { label: "Kontakt", target: "contact" }
    ],
    hero: {
      badge: "Penzion Didian",
      title: "Vodopád klidu v srdci Lysportu",
      description: "Penzion Didian je fiktivní útočiště inspirované soustředěním vodnopólového šampiona Didiana Geniceka. Panoramata fjordu, autorské wellness rituály a kuchyně vedená oceánem vytvářejí pobyt, kde regenerují sportovci i snílci.",
      highlights: [
        "Sky spa s výhledem na fjord",
        "Udržitelné suity s adaptivní klimatizací",
        "Program na míru v elementu vody"
      ],
      ctaPrimary: "Rezervovat pobyt",
      ctaSecondary: "Virtuální prohlídka",
      image: heroImage
    },
    about: {
      title: "Pohostinnost s týmovým srdcem",
      text: "Didian jsme navrhli jako místo, kde se týmový duch potkává s klidem severního pobřeží. Každá suita připomíná rozhodující zápas, každý servisní detail následuje rytmus přílivu. Přijeďte, nadechněte se slaného vzduchu a nechte sever zpomalit čas.",
      stats: [
        { label: "Rok otevření", value: "2026" },
        { label: "Suity & pokoje", value: "18" },
        { label: "Wellness zóny", value: "4" },
        { label: "Hodnocení hostů", value: "4,9 / 5" }
      ],
      note: "Captain's Lounge zůstává Didianovým oblíbeným místem pro taktické porady a večerní vinyl."
    },
    rooms: {
      title: "Suity navržené pro regeneraci",
      subtitle: "Tři signaturní kategorie spojují řemeslný design, špičkový komfort a šum severního pobřeží.",
      items: [
        {
          name: "Suite Poseidon",
          size: "78 m²",
          sleeps: "2–4 hosté",
          description: "Dvoupodlažní suita s výhledem na přístav, soukromou parní saunou a galerií trofejí.",
          perks: [
            "Privátní concierge tým 24/7",
            "Vinotéka plná pobřežních ročníků",
            "Hudební scéna s kurátorovanými playlisty"
          ],
          price: "od 289 € / noc",
          image: roomImages.poseidon,
          imageAlt: "Suite Poseidon s výhledem na přístav"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 hosté",
          description: "Lehký loft pro páry hledající rovnováhu mezi aktivním dnem a klidným večerem.",
          perks: [
            "Světelné scény podle biorytmu",
            "Panoramatická vana z vulkanického kamene",
            "Snídaňový koš doručený do suity"
          ],
          price: "od 189 € / noc",
          image: roomImages.aurora,
          imageAlt: "Loft Aurora s panoramatickým oknem"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 hosté",
          description: "Samostatná cabana v bylinkové zahradě se soukromou terasou a ohništěm na příběhy.",
          perks: [
            "Bylinkový rituální balíček na míru",
            "Venkovní dešťová sprcha pod borovicemi",
            "Rezervovaná lehátka u laguny"
          ],
          price: "od 209 € / noc",
          image: roomImages.garden,
          imageAlt: "Garden Cabana obklopená zelení"
        }
      ]
    },
    wellness: {
      title: "Wellness v rytmu Didiana",
      description: "Voda se tu pohybuje v Didianově tempu. Střídejte kontrastní bazény, ceremoniální sauny a meditace v solné jeskyni vedené našimi kouči.",
      features: [
        { title: "Sky Lagoon", detail: "Slaný infinity bazén s plovoucími plošinami na dechová cvičení." },
        { title: "Nordic Heat Lab", detail: "Saunové ceremoniály choreografované wellness posádkou Didiana." },
        { title: "Recovery Studio", detail: "Fyzioterapie pro sportovce, lymfodrenáž a šité strečinkové bloky." }
      ]
    },
    dining: {
      title: "Kuchyně s chutí oceánu",
      description: "Šéfkuchařka Lina spolupracuje s přístavními farmami a ranními rybáři, aby na talíři vyprávěla příběhy z Ocean League.",
      features: [
        { title: "Restaurace Tidal", detail: "Pěti chodové degustace s párováním vín a živou hudbou u krbu." },
        { title: "Bar Brine", detail: "Autorské koktejly s mořskou solí, chaluhovými bittery a fermentovanými sirupy." },
        { title: "Sunrise Pantry", detail: "Celodenní bar s funkčními smoothie, cold brew a řemeslným pečivem." }
      ]
    },
    experiences: {
      title: "Zážitky kurátorované posádkou",
      description: "Náš tým vám připraví itinerář na míru – ať toužíte po tréninku na otevřené vodě nebo po poetických večerech v přístavu.",
      highlights: [
        {
          title: "Vodní dobrodružství",
          items: [
            "Ranní plavání v přístavu s bývalým ligovým kapitánem",
            "Kajak v bioluminiscenčních lagunách",
            "Úvod do taktiky vodního póla"
          ]
        },
        {
          title: "Pobřežní kultura",
          items: [
            "Komentované procházky folklórem Lysportu",
            "Workshop výroby solných květů",
            "Vinylové večery v Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Dýchací laboratoře se sportovním psychologem",
            "Sound bath v solné jeskyni",
            "Soukromé klavírní západy slunce"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosféra penzionu",
      description: "Obrázky prozradí, proč hosté popisují Didian jako spojení energie a klidu.",
      images: [
        {
          image: galleryImages.terrace,
          alt: "Snídaně na terase Sky Lagoon",
          caption: "Ranní mlha se válí přes terasu Sky Lagoon"
        },
        {
          image: galleryImages.lounge,
          alt: "Captain's Lounge připravená na večer",
          caption: "Captain's Lounge nachystaná na večerní příběhy"
        },
        {
          image: galleryImages.garden,
          alt: "Bylinková zahrada s chodníkem",
          caption: "Garden Cabana ukrytá mezi aromatickými bylinkami"
        },
        {
          image: galleryImages.sauna,
          alt: "Sauna během ceremoniálu Aufguss",
          caption: "Nordic Heat Lab v průběhu saunového obřadu"
        }
      ]
    },
    testimonials: {
      title: "Hlasy hostů",
      items: [
        {
          quote: "Tempo saunových ceremoniálů mi přenastavilo trénink. Didian působí jako aktivní regenerační kemp.",
          name: "Tamara, triatlonistka",
          role: "Host z Prahy"
        },
        {
          quote: "Každý detail v loftu Aurora byl promyšlený, od playlistů po světlo. Za noc jsem napsal tři skladby.",
          name: "Elias, hudebník",
          role: "Host z Berlína"
        },
        {
          quote: "Vracíme se kvůli kuchyni i příběhům posádky. Je to jediné místo, kde se cítíme jako členové týmu.",
          name: "Marek & Petra",
          role: "Stálí hosté"
        }
      ]
    },
    callToAction: {
      title: "Vytvořte si vlastní scénář pobytu",
      text: "Řekněte nám, jak se chcete cítit při odjezdu. Zařídíme transfery, wellness rituály, tréninky i večerní soundtrack.",
      primary: "Naplánovat pobyt",
      secondary: "Zkontrolovat dostupnost"
    },
    contact: {
      title: "Kontakt & příjezd",
      description: "Hosty vítáme nepřetržitě. Odpověď concierge týmu čekejte do 12 hodin.",
      addressLabel: "Adresa",
      address: "Přístav Lysport 7, 842 10, Severní pobřeží",
      phoneLabel: "Telefon",
      phone: "+421 900 123 456",
      emailLabel: "E-mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Recepce",
      hours: [
        { day: "Pondělí – Neděle", hours: "24 hodin denně" }
      ],
      note: "Kryté parkování zahrnuje nabíjení elektromobilů i úschovu sportovního vybavení."
    },
    footer: {
      note: "© 2025 Penzion Didian – fiktivní koncept inspirovaný Didianem Genicekem."
    }
  },
  de: {
    languageName: "Deutsch",
    languageLabel: "Sprache",
    nav: [
      { label: "Start", target: "hero" },
      { label: "Über uns", target: "about" },
      { label: "Suiten", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Erlebnisse", target: "experiences" },
      { label: "Kontakt", target: "contact" }
    ],
    hero: {
      badge: "Pension Didian",
      title: "Ein Wasserfall der Ruhe im Herzen von Lysport",
      description: "Die Pension Didian ist ein fiktiver Rückzugsort, inspiriert vom Fokus des Wasserball-Champions Didian Genicek. Fjordpanoramen, signierte Wellness-Rituale und eine ozeanorientierte Küche schaffen einen Aufenthalt, der Athleten und Träumer gleichermaßen regeneriert.",
      highlights: [
        "Sky Spa mit Blick auf den Fjord",
        "Nachhaltige Suiten mit adaptivem Klima",
        "Crew-kuratierte Wasser- und Kulturerlebnisse"
      ],
      ctaPrimary: "Aufenthalt buchen",
      ctaSecondary: "Virtuellen Rundgang starten",
      image: heroImage
    },
    about: {
      title: "Gastfreundschaft mit Teamgeist",
      text: "Didian wurde als Ort entworfen, an dem Teamgeist auf gelassene Nordküste trifft. Jede Suite erinnert an ein entscheidendes Spiel, jedes Servicedetail folgt dem Takt der Gezeiten. Kommen Sie an, atmen Sie die salzige Luft und lassen Sie die Zeit langsamer werden.",
      stats: [
        { label: "Eröffnungsjahr", value: "2026" },
        { label: "Suiten & Zimmer", value: "18" },
        { label: "Wellness-Zonen", value: "4" },
        { label: "Bewertung", value: "4,9 / 5" }
      ],
      note: "Die Captain's Lounge bleibt Didians Lieblingsraum für Strategie-Meetings und abendliche Vinyl-Sessions."
    },
    rooms: {
      title: "Suiten für echte Regeneration",
      subtitle: "Drei Signature-Kategorien verbinden Handwerksdesign, höchsten Komfort und das Flüstern der Nordküste.",
      items: [
        {
          name: "Suite Poseidon",
          size: "78 m²",
          sleeps: "2–4 Gäste",
          description: "Zweigeschossige Suite mit Hafenblick, privatem Dampfbad und Trophäengalerie.",
          perks: [
            "Privates Concierge-Team rund um die Uhr",
            "Weinkeller mit Küstenjahrgängen",
            "Soundbühne mit kuratierten Playlists"
          ],
          price: "ab 289 € / Nacht",
          image: roomImages.poseidon,
          imageAlt: "Suite Poseidon mit Blick auf den Hafen"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 Gäste",
          description: "Lichtdurchflutetes Loft für Paare, die aktive Tage und ruhige Abende verbinden möchten.",
          perks: [
            "Circadiane Lichtstimmungen",
            "Panoramabadewanne aus vulkanischem Stein",
            "Frühstückskorb direkt in die Suite"
          ],
          price: "ab 189 € / Nacht",
          image: roomImages.aurora,
          imageAlt: "Loft Aurora mit weitem Fenster"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 Gäste",
          description: "Freistehende Cabana im Kräutergarten mit privater Terrasse und Feuerstelle für Geschichten.",
          perks: [
            "Individuelles Kräuterritual-Set",
            "Outdoor-Regendusche unter Kiefern",
            "Reservierte Liegen an der Lagune"
          ],
          price: "ab 209 € / Nacht",
          image: roomImages.garden,
          imageAlt: "Garden Cabana umgeben von Kräutern"
        }
      ]
    },
    wellness: {
      title: "Wellness im Didian-Takt",
      description: "Hier bewegt sich das Wasser in Didians Tempo. Wechseln Sie zwischen Kontrastbecken, Zeremonien-Saunen und Meditationen in der Salzgrotte – begleitet von unserem Performance-Team.",
      features: [
        { title: "Sky Lagoon", detail: "Salzwasser-Infinity-Pool mit schwebenden Breathwork-Decks." },
        { title: "Nordic Heat Lab", detail: "Saunazeremonien, choreografiert von Didians Wellness-Crew." },
        { title: "Recovery Studio", detail: "Physiotherapie auf Athletenniveau, Lymphfluss und maßgeschneiderte Stretching-Sessions." }
      ]
    },
    dining: {
      title: "Küche mit Meeresnote",
      description: "Chefköchin Lina arbeitet mit Hafenbauern und Morgenfischern, um Geschichten aus der Ocean League zu servieren.",
      features: [
        { title: "Restaurant Tidal", detail: "Fünf-Gänge-Menüs mit Weinbegleitung und Live-Musik am Kamin." },
        { title: "Bar Brine", detail: "Signature-Cocktails mit Meersalz, Algenbittern und fermentierten Sirupen." },
        { title: "Sunrise Pantry", detail: "Ganztags-Pantry mit funktionalen Smoothies, Cold Brew und handwerklichem Gebäck." }
      ]
    },
    experiences: {
      title: "Erlebnisse der Crew",
      description: "Unser Team stellt jeden Tagesablauf individuell zusammen – ob Sie Offene-Wasser-Training oder poetische Hafenabende wünschen.",
      highlights: [
        {
          title: "Wasserabenteuer",
          items: [
            "Sonnenaufgangsschwimmen im Hafen mit ehemaligem Ligakapitän",
            "Biolumineszenz-Kajak in den Lagunen",
            "Einführung in die Taktik des Wasserballs"
          ]
        },
        {
          title: "Küstenkultur",
          items: [
            "Erzählte Spaziergänge durch die Folklore von Lysport",
            "Workshop zur Herstellung von Salzblüten",
            "Vinylabende in der Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Atemarbeit mit dem Sportpsychologen",
            "Klangbad in der Salzgrotte",
            "Private Klavierabende mit Fjordblick"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosphäre der Pension",
      description: "Diese Eindrücke zeigen, warum Gäste Didian als Mischung aus Energie und Ruhe beschreiben.",
      images: [
        {
          image: galleryImages.terrace,
          alt: "Frühstücksterrasse der Sky Lagoon",
          caption: "Morgendlicher Nebel über der Sky-Lagoon-Terrasse"
        },
        {
          image: galleryImages.lounge,
          alt: "Captain's Lounge am Abend",
          caption: "Captain's Lounge bereit für Geschichten bei Kerzenlicht"
        },
        {
          image: galleryImages.garden,
          alt: "Kräutergartenpfad mit Cabana",
          caption: "Garden Cabana versteckt zwischen aromatischen Kräutern"
        },
        {
          image: galleryImages.sauna,
          alt: "Sauna während einer Aufguss-Zeremonie",
          caption: "Nordic Heat Lab im Moment des Aufgusses"
        }
      ]
    },
    testimonials: {
      title: "Stimmen der Gäste",
      items: [
        {
          quote: "Der Rhythmus der Saunarituale hat meinen Trainingsfokus neu justiert. Didian fühlt sich wie aktives Recovery an.",
          name: "Tamara, Triathletin",
          role: "Gast aus Prag"
        },
        {
          quote: "Jedes Detail im Aurora Loft war stimmig, von der Playlist bis zum Licht. Ich habe in einer Nacht drei Songs geschrieben.",
          name: "Elias, Musiker",
          role: "Gast aus Berlin"
        },
        {
          quote: "Wir kommen wegen der Küche und der Geschichten der Crew zurück. Hier fühlen wir uns wie Ehrenmitglieder des Teams.",
          name: "Marek & Petra",
          role: "Stammgäste"
        }
      ]
    },
    callToAction: {
      title: "Gestalten Sie Ihr Aufenthaltsdrehbuch",
      text: "Sagen Sie uns, wie Sie abreisen möchten. Wir organisieren Transfers, Spa-Rituale, Coachings und Abend-Soundtracks.",
      primary: "Aufenthalt planen",
      secondary: "Verfügbarkeit prüfen"
    },
    contact: {
      title: "Kontakt & Anreise",
      description: "Wir heißen Gäste rund um die Uhr willkommen. Eine Antwort unseres Concierge-Teams erfolgt innerhalb von 12 Stunden.",
      addressLabel: "Adresse",
      address: "Hafen Lysport 7, 842 10, Nordküste",
      phoneLabel: "Telefon",
      phone: "+421 900 123 456",
      emailLabel: "E-Mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Rezeption",
      hours: [
        { day: "Montag – Sonntag", hours: "24 Stunden" }
      ],
      note: "Überdachte Parkplätze bieten Ladestationen für E-Fahrzeuge und Stauraum für Wassersportgeräte."
    },
    footer: {
      note: "© 2025 Pension Didian – fiktives Konzept inspiriert von Didian Genicek."
    }
  },
  en: {
    languageName: "English",
    languageLabel: "Language",
    nav: [
      { label: "Home", target: "hero" },
      { label: "About", target: "about" },
      { label: "Suites", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Experiences", target: "experiences" },
      { label: "Contact", target: "contact" }
    ],
    hero: {
      badge: "Didian Guesthouse",
      title: "A waterfall of calm in the heart of Lysport",
      description: "Didian Guesthouse is a fictional retreat inspired by the focus of water polo champion Didian Genicek. Fjord panoramas, signature wellness rituals, and an ocean-forward kitchen shape a stay where athletes and dreamers restore in equal measure.",
      highlights: [
        "Sky spa overlooking the fjord",
        "Sustainable suites with adaptive climate",
        "Crew-curated water and culture adventures"
      ],
      ctaPrimary: "Book your stay",
      ctaSecondary: "Take a virtual tour",
      image: heroImage
    },
    about: {
      title: "Hospitality with a competitive heartbeat",
      text: "We shaped Didian as a place where team spirit meets unhurried coastal living. Every suite nods to a decisive match, every service ritual follows the rhythm of the tide. Arrive, breathe in the salt air, and let the north shore slow time for you.",
      stats: [
        { label: "Opening year", value: "2026" },
        { label: "Suites & rooms", value: "18" },
        { label: "Wellness zones", value: "4" },
        { label: "Guest rating", value: "4.9 / 5" }
      ],
      note: "Captain's Lounge remains Didian's favourite room for strategy huddles and evening vinyl."
    },
    rooms: {
      title: "Suites designed for regeneration",
      subtitle: "Three signature categories combine crafted design, generous comfort, and the whisper of the northern coast.",
      items: [
        {
          name: "Poseidon Suite",
          size: "78 m²",
          sleeps: "2–4 guests",
          description: "A two-level suite overlooking the harbour with a private steam sauna and trophy gallery.",
          perks: [
            "Private concierge team on call 24/7",
            "Wine cellar stocked with coastal vintages",
            "Immersive sound stage with curated playlists"
          ],
          price: "from €289 / night",
          image: roomImages.poseidon,
          imageAlt: "Poseidon Suite looking over the harbour"
        },
        {
          name: "Aurora Loft",
          size: "52 m²",
          sleeps: "2 guests",
          description: "An airy loft for couples balancing active days with serene evenings.",
          perks: [
            "Circadian lighting presets",
            "Panoramic soaking tub carved from volcanic stone",
            "Breakfast hamper delivered to the suite"
          ],
          price: "from €189 / night",
          image: roomImages.aurora,
          imageAlt: "Aurora Loft with sweeping window"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 guests",
          description: "A standalone cabana in the herb garden with a private terrace and storytelling firepit.",
          perks: [
            "Personalised herb ritual kit",
            "Outdoor rainfall shower beneath the pines",
            "Reserved lagoon loungers at sunrise"
          ],
          price: "from €209 / night",
          image: roomImages.garden,
          imageAlt: "Garden Cabana surrounded by greenery"
        }
      ]
    },
    wellness: {
      title: "Wellness in Didian's rhythm",
      description: "Water moves here at Didian's tempo. Alternate contrast pools, ceremonial saunas, and salt cave meditations led by our performance coaches.",
      features: [
        { title: "Sky Lagoon", detail: "Saltwater infinity pool with floating breathwork decks." },
        { title: "Nordic Heat Lab", detail: "Sauna ceremonies choreographed by Didian's wellness crew." },
        { title: "Recovery Studio", detail: "Athlete-grade physiotherapy, lymphatic flow, and tailored stretching blocks." }
      ]
    },
    dining: {
      title: "Cuisine with a taste of the ocean",
      description: "Head chef Lina works with harbourside growers and morning fishermen to plate stories from the Ocean League.",
      features: [
        { title: "Tidal Restaurant", detail: "Five-course tasting menus with wine pairings and live fireplace sets." },
        { title: "Brine Bar", detail: "Signature cocktails infused with sea salt, kelp bitters, and fermented syrups." },
        { title: "Sunrise Pantry", detail: "All-day pantry serving functional smoothies, cold brew, and artisan pastries." }
      ]
    },
    experiences: {
      title: "Experiences curated by the crew",
      description: "Our hosts tailor each itinerary, whether you crave open-water training or poetic nights in the harbour.",
      highlights: [
        {
          title: "Water adventures",
          items: [
            "Sunrise harbour swim coached by a former league captain",
            "Bioluminescent lagoon kayaking beneath the northern lights",
            "Introductory water polo tactics clinic"
          ]
        },
        {
          title: "Coastal culture",
          items: [
            "Story-led walks through Lysport folklore",
            "Salt-flower crafting workshop with local artisans",
            "Vinyl evenings inside the Captain's Lounge"
          ]
        },
        {
          title: "Mind & body",
          items: [
            "Breathwork labs with the sports psychologist",
            "Sound baths inside the salt cave",
            "Private piano sunsets overlooking the fjord"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosphere snapshots",
      description: "A glimpse of why guests describe Didian as equal parts vibrant energy and restorative calm.",
      images: [
        {
          image: galleryImages.terrace,
          alt: "Breakfast mist on the Sky Lagoon terrace",
          caption: "Breakfast mist rolling across the Sky Lagoon terrace"
        },
        {
          image: galleryImages.lounge,
          alt: "Captain's Lounge set for evening stories",
          caption: "Captain's Lounge set for evening storytelling"
        },
        {
          image: galleryImages.garden,
          alt: "Garden path lined with herbs",
          caption: "Garden Cabana hidden between aromatic herbs"
        },
        {
          image: galleryImages.sauna,
          alt: "Sauna during an Aufguss ceremony",
          caption: "Nordic Heat Lab mid Aufguss ritual"
        }
      ]
    },
    testimonials: {
      title: "Guest voices",
      items: [
        {
          quote: "The cadence of the sauna ceremonies reset my training mindset. Didian feels like an active recovery camp.",
          name: "Tamara, triathlete",
          role: "Guest from Prague"
        },
        {
          quote: "Every detail in the Aurora Loft was intentional, from the playlists to the lighting. I wrote three songs in one night.",
          name: "Elias, musician",
          role: "Guest from Berlin"
        },
        {
          quote: "We return for the kitchen and the crew's stories. It's the only place where we feel like honorary teammates.",
          name: "Marek & Petra",
          role: "Returning guests"
        }
      ]
    },
    callToAction: {
      title: "Craft your own stay script",
      text: "Tell us how you want to feel when you depart. We'll arrange transfers, spa rituals, coaching sessions, and evening soundtracks.",
      primary: "Plan my stay",
      secondary: "Check availability"
    },
    contact: {
      title: "Contact & arrival",
      description: "We welcome guests around the clock. Expect a response from our concierge crew within 12 hours.",
      addressLabel: "Address",
      address: "Harbour Lysport 7, 842 10, Northern Coast",
      phoneLabel: "Phone",
      phone: "+421 900 123 456",
      emailLabel: "Email",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Front desk",
      hours: [
        { day: "Monday – Sunday", hours: "24 hours" }
      ],
      note: "Covered parking includes EV charging and storage for boards and paddles."
    },
    footer: {
      note: "© 2025 Didian Guesthouse – fictional concept inspired by Didian Genicek."
    }
  },
  es: {
    languageName: "Español",
    languageLabel: "Idioma",
    nav: [
      { label: "Inicio", target: "hero" },
      { label: "Sobre nosotros", target: "about" },
      { label: "Suites", target: "rooms" },
      { label: "Bienestar", target: "wellness" },
      { label: "Experiencias", target: "experiences" },
      { label: "Contacto", target: "contact" }
    ],
    hero: {
      badge: "Pensión Didian",
      title: "Una cascada de calma en el corazón de Lysport",
      description: "La Pensión Didian es un refugio ficticio inspirado en la concentración del campeón de waterpolo Didian Genicek. Las panorámicas del fiordo, los rituales wellness de autor y una cocina guiada por el océano crean una estancia donde se recargan atletas y soñadores.",
      highlights: [
        "Sky spa con vistas al fiordo",
        "Suites sostenibles con clima adaptable",
        "Experiencias de agua y cultura curadas por la tripulación"
      ],
      ctaPrimary: "Reservar estancia",
      ctaSecondary: "Tour virtual",
      image: heroImage
    },
    about: {
      title: "Hospitalidad con pulso competitivo",
      text: "Diseñamos Didian como un lugar donde el espíritu de equipo se encuentra con la vida pausada de la costa norte. Cada suite recuerda a un partido decisivo y cada detalle de servicio sigue el ritmo de la marea. Llegue, respire el aire salado y deje que el norte desacelere el tiempo.",
      stats: [
        { label: "Año de apertura", value: "2026" },
        { label: "Suites y habitaciones", value: "18" },
        { label: "Zonas de wellness", value: "4" },
        { label: "Valoración", value: "4,9 / 5" }
      ],
      note: "La Captain's Lounge sigue siendo la sala favorita de Didian para reuniones estratégicas y vinilos nocturnos."
    },
    rooms: {
      title: "Suites pensadas para regenerar",
      subtitle: "Tres categorías insignia combinan diseño artesanal, confort generoso y el murmullo de la costa norte.",
      items: [
        {
          name: "Suite Poseidón",
          size: "78 m²",
          sleeps: "2–4 huéspedes",
          description: "Suite dúplex con vistas al puerto, sauna de vapor privada y galería de trofeos.",
          perks: [
            "Equipo de concierge 24/7",
            "Bodega con añadas costeras",
            "Escenario sonoro con playlists curadas"
          ],
          price: "desde 289 € / noche",
          image: roomImages.poseidon,
          imageAlt: "Suite Poseidón con vista al puerto"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 huéspedes",
          description: "Loft luminoso para parejas que equilibran días activos con noches serenas.",
          perks: [
            "Escenas de luz circadiana",
            "Bañera panorámica tallada en piedra volcánica",
            "Canasta de desayuno servida en la suite"
          ],
          price: "desde 189 € / noche",
          image: roomImages.aurora,
          imageAlt: "Loft Aurora con ventana panorámica"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 huéspedes",
          description: "Cabina independiente en el jardín de hierbas con terraza privada y fogata para historias.",
          perks: [
            "Kit de ritual de hierbas personalizado",
            "Ducha de lluvia exterior bajo los pinos",
            "Hamacas reservadas junto a la laguna"
          ],
          price: "desde 209 € / noche",
          image: roomImages.garden,
          imageAlt: "Garden Cabana rodeada de vegetación"
        }
      ]
    },
    wellness: {
      title: "Bienestar al ritmo de Didian",
      description: "Aquí el agua fluye al ritmo de Didian. Alterne piscinas de contraste, saunas ceremoniales y meditaciones en la cueva de sal guiadas por nuestros coaches.",
      features: [
        { title: "Sky Lagoon", detail: "Piscina infinita de agua salada con plataformas flotantes para breathwork." },
        { title: "Nordic Heat Lab", detail: "Ceremonias de sauna coreografiadas por el equipo wellness de Didian." },
        { title: "Recovery Studio", detail: "Fisioterapia de nivel atleta, drenaje linfático y bloques de estiramiento personalizados." }
      ]
    },
    dining: {
      title: "Cocina con sabor a océano",
      description: "La chef Lina trabaja con productores del puerto y pescadores madrugadores para servir historias de la Ocean League.",
      features: [
        { title: "Restaurante Tidal", detail: "Degustaciones de cinco tiempos con maridaje de vinos y música en vivo junto al fuego." },
        { title: "Bar Brine", detail: "Cócteles de autor con sal marina, bitters de algas y siropes fermentados." },
        { title: "Sunrise Pantry", detail: "Bar abierto todo el día con smoothies funcionales, cold brew y repostería artesanal." }
      ]
    },
    experiences: {
      title: "Experiencias curadas por la tripulación",
      description: "Nuestros anfitriones diseñan cada itinerario, ya sea que busque entrenamiento en aguas abiertas o noches poéticas en el puerto.",
      highlights: [
        {
          title: "Aventuras acuáticas",
          items: [
            "Natación al amanecer en el puerto con un ex capitán de liga",
            "Kayak en lagunas bioluminiscentes bajo las luces del norte",
            "Clínica introductoria de táctica de waterpolo"
          ]
        },
        {
          title: "Cultura costera",
          items: [
            "Paseos narrados por el folclore de Lysport",
            "Taller de elaboración de flor de sal",
            "Noches de vinilos en la Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Laboratorios de respiración con el psicólogo deportivo",
            "Sound bath en la cueva de sal",
            "Atardeceres privados de piano frente al fiordo"
          ]
        }
      ]
    },
    gallery: {
      title: "Postales del ambiente",
      description: "Un vistazo basta para entender por qué los huéspedes describen Didian como energía vibrante y calma reparadora.",
      images: [
        {
          image: galleryImages.terrace,
          alt: "Desayuno con niebla en la terraza Sky Lagoon",
          caption: "La niebla matutina envuelve la terraza de Sky Lagoon"
        },
        {
          image: galleryImages.lounge,
          alt: "Captain's Lounge lista para la noche",
          caption: "Captain's Lounge preparada para historias vespertinas"
        },
        {
          image: galleryImages.garden,
          alt: "Sendero de jardín aromático",
          caption: "Garden Cabana escondida entre hierbas aromáticas"
        },
        {
          image: galleryImages.sauna,
          alt: "Sauna durante un ritual Aufguss",
          caption: "Nordic Heat Lab en pleno ritual Aufguss"
        }
      ]
    },
    testimonials: {
      title: "Voces de los huéspedes",
      items: [
        {
          quote: "El ritmo de las ceremonias de sauna reajustó mi mente de entrenamiento. Didian se siente como un campamento de recuperación activa.",
          name: "Tamara, triatleta",
          role: "Huésped de Praga"
        },
        {
          quote: "Cada detalle del Loft Aurora fue intencional, desde las playlists hasta la luz. Escribí tres canciones en una noche.",
          name: "Elias, músico",
          role: "Huésped de Berlín"
        },
        {
          quote: "Volvemos por la cocina y las historias de la tripulación. Es el único lugar donde nos sentimos parte del equipo.",
          name: "Marek & Petra",
          role: "Huéspedes recurrentes"
        }
      ]
    },
    callToAction: {
      title: "Diseñe su propio guion de estancia",
      text: "Cuéntenos cómo quiere sentirse al despedirse. Organizaremos traslados, rituales de spa, sesiones de coaching y bandas sonoras nocturnas.",
      primary: "Planear mi estancia",
      secondary: "Ver disponibilidad"
    },
    contact: {
      title: "Contacto y llegada",
      description: "Recibimos huéspedes las 24 horas. Nuestro equipo de concierge responde en menos de 12 horas.",
      addressLabel: "Dirección",
      address: "Puerto Lysport 7, 842 10, Costa Norte",
      phoneLabel: "Teléfono",
      phone: "+421 900 123 456",
      emailLabel: "Correo",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Recepción",
      hours: [
        { day: "Lunes – Domingo", hours: "24 horas" }
      ],
      note: "El estacionamiento cubierto incluye carga para vehículos eléctricos y espacio para tablas y equipo acuático."
    },
    footer: {
      note: "© 2025 Pensión Didian – concepto ficticio inspirado en Didian Genicek."
    }
  },
  fr: {
    languageName: "Français",
    languageLabel: "Langue",
    nav: [
      { label: "Accueil", target: "hero" },
      { label: "À propos", target: "about" },
      { label: "Suites", target: "rooms" },
      { label: "Bien-être", target: "wellness" },
      { label: "Expériences", target: "experiences" },
      { label: "Contact", target: "contact" }
    ],
    hero: {
      badge: "Maison d'hôtes Didian",
      title: "Une cascade de sérénité au cœur de Lysport",
      description: "La maison d'hôtes Didian est un refuge fictif inspiré par la concentration du champion de water-polo Didian Genicek. Panoramas sur le fjord, rituels bien-être signature et cuisine guidée par l'océan composent un séjour où se régénèrent athlètes et rêveurs.",
      highlights: [
        "Sky spa avec vue sur le fjord",
        "Suites durables à climat adaptatif",
        "Expériences d'eau et de culture orchestrées par l'équipage"
      ],
      ctaPrimary: "Réserver mon séjour",
      ctaSecondary: "Visite virtuelle",
      image: heroImage
    },
    about: {
      title: "Une hospitalité au rythme de l'équipe",
      text: "Nous avons imaginé Didian comme un lieu où l'esprit d'équipe rencontre la douceur de la côte nord. Chaque suite évoque un match décisif et chaque détail de service suit le rythme des marées. Arrivez, respirez l'air salin et laissez le nord ralentir le temps.",
      stats: [
        { label: "Année d'ouverture", value: "2026" },
        { label: "Suites & chambres", value: "18" },
        { label: "Zones bien-être", value: "4" },
        { label: "Avis des hôtes", value: "4,9 / 5" }
      ],
      note: "La Captain's Lounge reste la pièce préférée de Didian pour les briefings stratégiques et les vinyles du soir."
    },
    rooms: {
      title: "Des suites pensées pour la régénération",
      subtitle: "Trois catégories signature mêlent design artisanal, confort généreux et murmure du littoral nordique.",
      items: [
        {
          name: "Suite Poséidon",
          size: "78 m²",
          sleeps: "2–4 hôtes",
          description: "Suite en duplex avec vue sur le port, hammam privé et galerie de trophées.",
          perks: [
            "Équipe de conciergerie disponible 24/7",
            "Cave à vin garnie de millésimes côtiers",
            "Scène sonore immersive aux playlists sélectionnées"
          ],
          price: "à partir de 289 € / nuit",
          image: roomImages.poseidon,
          imageAlt: "Suite Poséidon sur le port"
        },
        {
          name: "Loft Aurore",
          size: "52 m²",
          sleeps: "2 hôtes",
          description: "Loft lumineux pour les couples qui équilibrent journées actives et soirées paisibles.",
          perks: [
            "Scénarios lumineux circadiens",
            "Baignoire panoramique sculptée dans la pierre volcanique",
            "Panier petit-déjeuner livré en suite"
          ],
          price: "à partir de 189 € / nuit",
          image: roomImages.aurora,
          imageAlt: "Loft Aurore avec large fenêtre"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 hôtes",
          description: "Cabane indépendante au cœur du jardin d'herbes, terrasse privée et brasero pour les histoires.",
          perks: [
            "Kit de rituel aux herbes personnalisé",
            "Douche pluie extérieure sous les pins",
            "Transats réservés à la lagune"
          ],
          price: "à partir de 209 € / nuit",
          image: roomImages.garden,
          imageAlt: "Garden Cabana entourée d'herbes"
        }
      ]
    },
    wellness: {
      title: "Bien-être au rythme de Didian",
      description: "Ici l'eau suit le tempo de Didian. Alternez bassins contrastés, saunas cérémoniels et méditations dans la grotte de sel guidées par nos coaches.",
      features: [
        { title: "Sky Lagoon", detail: "Piscine à débordement d'eau salée avec plateformes flottantes pour le breathwork." },
        { title: "Nordic Heat Lab", detail: "Rituels de sauna chorégraphiés par l'équipe bien-être de Didian." },
        { title: "Recovery Studio", detail: "Physiothérapie de niveau athlète, drainage lymphatique et séances de stretching sur mesure." }
      ]
    },
    dining: {
      title: "Cuisine aux saveurs de l'océan",
      description: "La cheffe Lina travaille avec les producteurs du port et les pêcheurs du matin pour raconter des histoires de l'Ocean League.",
      features: [
        { title: "Restaurant Tidal", detail: "Menus dégustation en cinq services avec accords mets-vins et musique live au coin du feu." },
        { title: "Bar Brine", detail: "Cocktails signature à la fleur de sel, bitters d'algues et sirops fermentés." },
        { title: "Sunrise Pantry", detail: "Comptoir toute la journée avec smoothies fonctionnels, cold brew et pâtisseries artisanales." }
      ]
    },
    experiences: {
      title: "Expériences signées équipage",
      description: "Nos hôtes personnaliseront votre programme, qu'il s'agisse d'entraînement en eau libre ou de soirées poétiques au port.",
      highlights: [
        {
          title: "Aventures aquatiques",
          items: [
            "Nage au lever du soleil encadrée par un ancien capitaine de ligue",
            "Kayak dans des lagunes bioluminescentes sous les aurores",
            "Atelier d'initiation à la tactique du water-polo"
          ]
        },
        {
          title: "Culture côtière",
          items: [
            "Balades contées à travers le folklore de Lysport",
            "Atelier d'artisans sur la fleur de sel",
            "Soirées vinyles dans la Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Laboratoires de respiration avec le psychologue du sport",
            "Bain sonore dans la grotte de sel",
            "Couchers de soleil au piano face au fjord"
          ]
        }
      ]
    },
    gallery: {
      title: "Instantanés de l'atmosphère",
      description: "Quelques images suffisent pour comprendre pourquoi Didian marie énergie vibrante et calme réparateur.",
      images: [
        {
          image: galleryImages.terrace,
          alt: "Terrasse Sky Lagoon au petit-déjeuner",
          caption: "La brume du matin glisse sur la terrasse de la Sky Lagoon"
        },
        {
          image: galleryImages.lounge,
          alt: "Captain's Lounge prête pour le soir",
          caption: "Captain's Lounge prête pour des histoires nocturnes"
        },
        {
          image: galleryImages.garden,
          alt: "Allée du jardin d'herbes",
          caption: "Garden Cabana cachée au milieu des herbes aromatiques"
        },
        {
          image: galleryImages.sauna,
          alt: "Sauna pendant un rituel Aufguss",
          caption: "Nordic Heat Lab durant une cérémonie Aufguss"
        }
      ]
    },
    testimonials: {
      title: "Voix des hôtes",
      items: [
        {
          quote: "Le rythme des cérémonies de sauna a réinitialisé mon esprit d'entraînement. Didian ressemble à un camp de récupération active.",
          name: "Tamara, triathlète",
          role: "Cliente venue de Prague"
        },
        {
          quote: "Chaque détail du Loft Aurore était intentionnel, des playlists à la lumière. J'ai composé trois morceaux en une nuit.",
          name: "Elias, musicien",
          role: "Client venu de Berlin"
        },
        {
          quote: "Nous revenons pour la cuisine et les histoires de l'équipage. C'est le seul endroit où l'on se sent membres honoraires de l'équipe.",
          name: "Marek & Petra",
          role: "Hôtes fidèles"
        }
      ]
    },
    callToAction: {
      title: "Composez votre scénario de séjour",
      text: "Dites-nous comment vous souhaitez repartir. Nous orchestrerons transferts, rituels de spa, coachings et bandes-son du soir.",
      primary: "Planifier mon séjour",
      secondary: "Voir les disponibilités"
    },
    contact: {
      title: "Contact & arrivée",
      description: "Nous accueillons les invités 24h/24. Notre équipe de conciergerie répond dans les 12 heures.",
      addressLabel: "Adresse",
      address: "Port Lysport 7, 842 10, Côte Nord",
      phoneLabel: "Téléphone",
      phone: "+421 900 123 456",
      emailLabel: "E-mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Réception",
      hours: [
        { day: "Lundi – Dimanche", hours: "Ouvert 24h/24" }
      ],
      note: "Le parking couvert inclut la recharge pour véhicules électriques et l'espace pour le matériel nautique."
    },
    footer: {
      note: "© 2025 Maison d'hôtes Didian – concept fictif inspiré par Didian Genicek."
    }
  }
};
const languages = [
  { code: 'sk', label: 'SK' },
  { code: 'cs', label: 'CZ' },
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' }
];

function Navigation({ items, onNavigate }) {
  return h(
    'nav',
    { className: 'nav-links' },
    items.map((item) =>
      h(
        'a',
        {
          key: item.target,
          href: `#${item.target}`,
          className: 'nav-link',
          onClick: (event) => {
            event.preventDefault();
            onNavigate(item.target);
          }
        },
        item.label
      )
    )
  );
}

function LanguageToolbar({ language, onSelect, label }) {
  return h('div', { className: 'language-toolbar' }, [
    h('span', { key: 'label', className: 'language-label' }, `${label}:`),
    h(
      'div',
      { key: 'options', className: 'language-options' },
      languages.map((option) =>
        h(
          'button',
          {
            key: option.code,
            type: 'button',
            className: `language-button${option.code === language ? ' active' : ''}`,
            onClick: () => onSelect(option.code),
            'aria-pressed': option.code === language
          },
          option.label
        )
      )
    )
  ]);
}

function StatCard({ label, value }) {
  return h('div', { className: 'stat-card' }, [
    h('span', { key: 'value', className: 'stat-value' }, value),
    h('span', { key: 'label', className: 'stat-label' }, label)
  ]);
}

function RoomCard({ item }) {
  return h('article', { className: 'room-card' }, [
    h('figure', { key: 'figure', className: 'room-figure' }, [
      h('img', {
        key: 'image',
        className: 'room-image',
        src: item.image,
        alt: item.imageAlt,
        loading: 'lazy'
      })
    ]),
    h('div', { key: 'body', className: 'room-body' }, [
      h('div', { key: 'header', className: 'room-header' }, [
        h('h3', { key: 'name', className: 'room-name' }, item.name),
        h('div', { key: 'meta', className: 'room-meta' }, [
          h('span', { key: 'size', className: 'room-size' }, item.size),
          h('span', { key: 'sleeps', className: 'room-sleeps' }, item.sleeps)
        ])
      ]),
      h('p', { key: 'description', className: 'room-description' }, item.description),
      h(
        'ul',
        { key: 'perks', className: 'room-perks' },
        item.perks.map((perk) => h('li', { key: perk }, perk))
      ),
      h('div', { key: 'price', className: 'room-price' }, item.price)
    ])
  ]);
}

function FeatureCard({ title, detail }) {
  return h('article', { className: 'feature-card' }, [
    h('h3', { key: 'title' }, title),
    h('p', { key: 'detail' }, detail)
  ]);
}

function ExperienceColumn({ title, items }) {
  return h('article', { className: 'experience-column' }, [
    h('h3', { key: 'title' }, title),
    h(
      'ul',
      { key: 'list', className: 'experience-list' },
      items.map((item) => h('li', { key: item }, item))
    )
  ]);
}

function GalleryCard({ image, alt, caption }) {
  return h('figure', { className: 'gallery-card' }, [
    h('img', { key: 'image', className: 'gallery-image', src: image, alt, loading: 'lazy' }),
    h('figcaption', { key: 'caption', className: 'gallery-caption' }, caption)
  ]);
}

function TestimonialCard({ quote, name, role }) {
  return h('article', { className: 'testimonial-card' }, [
    h('p', { key: 'quote', className: 'testimonial-quote' }, `"${quote}"`),
    h('div', { key: 'person', className: 'testimonial-person' }, [
      h('span', { key: 'name', className: 'testimonial-name' }, name),
      h('span', { key: 'role', className: 'testimonial-role' }, role)
    ])
  ]);
}

function ContactHours({ title, hours }) {
  return h('div', { className: 'contact-hours' }, [
    h('h3', { key: 'title' }, title),
    h(
      'ul',
      { key: 'list', className: 'hours-list' },
      hours.map((item) =>
        h('li', { key: item.day }, [
          h('span', { key: 'day', className: 'hours-day' }, item.day),
          h('span', { key: 'time', className: 'hours-time' }, item.hours)
        ])
      )
    )
  ]);
}

export default function App() {
  const [language, setLanguage] = useState('sk');
  const t = translations[language];

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return h('div', { className: 'site-wrapper' }, [
    h('header', { key: 'topbar', className: 'topbar' }, [
      h('div', { key: 'brand', className: 'brand' }, [
        h('div', { key: 'mark', className: 'brand-mark' }, 'D'),
        h('div', { key: 'text', className: 'brand-text' }, [
          h('span', { key: 'name', className: 'brand-name' }, 'Didian'),
          h('span', { key: 'badge', className: 'brand-sub' }, t.hero.badge)
        ])
      ]),
      h(Navigation, { key: 'nav', items: t.nav, onNavigate: scrollToSection }),
      h(LanguageToolbar, {
        key: 'lang',
        language,
        onSelect: setLanguage,
        label: t.languageLabel
      })
    ]),
    h('main', { key: 'main', className: 'main-content' }, [
      h(
        'section',
        {
          key: 'hero',
          id: 'hero',
          className: 'hero-section',
          style: { backgroundImage: `url(${t.hero.image})` }
        },
        [
          h('div', { key: 'inner', className: 'hero-inner' }, [
            h('div', { key: 'badge', className: 'hero-badge' }, t.hero.badge),
            h('h1', { key: 'title', className: 'hero-title' }, t.hero.title),
            h('p', { key: 'description', className: 'hero-description' }, t.hero.description),
            h(
              'div',
              { key: 'highlights', className: 'hero-highlights' },
              t.hero.highlights.map((item, index) =>
                h('span', { key: `${item}-${index}`, className: 'hero-pill' }, item)
              )
            ),
            h('div', { key: 'ctas', className: 'hero-ctas' }, [
              h(
                'button',
                {
                  key: 'primary',
                  type: 'button',
                  className: 'hero-primary',
                  onClick: () => scrollToSection('rooms')
                },
                t.hero.ctaPrimary
              ),
              h(
                'button',
                {
                  key: 'secondary',
                  type: 'button',
                  className: 'hero-secondary',
                  onClick: () => scrollToSection('gallery')
                },
                t.hero.ctaSecondary
              )
            ])
          ])
        ]
      ),
      h('section', { key: 'about', id: 'about', className: 'section about-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.about.title),
          h('p', { key: 'text', className: 'section-text' }, t.about.text)
        ]),
        h(
          'div',
          { key: 'stats', className: 'stats-grid' },
          t.about.stats.map((stat) => h(StatCard, { key: stat.label, ...stat }))
        ),
        h('p', { key: 'note', className: 'section-note' }, t.about.note)
      ]),
      h('section', { key: 'rooms', id: 'rooms', className: 'section rooms-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.rooms.title),
          h('p', { key: 'subtitle', className: 'section-text' }, t.rooms.subtitle)
        ]),
        h(
          'div',
          { key: 'grid', className: 'rooms-grid' },
          t.rooms.items.map((item) => h(RoomCard, { key: item.name, item }))
        )
      ]),
      h('section', { key: 'wellness', id: 'wellness', className: 'section alt-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.wellness.title),
          h('p', { key: 'text', className: 'section-text' }, t.wellness.description)
        ]),
        h(
          'div',
          { key: 'features', className: 'feature-grid' },
          t.wellness.features.map((feature) =>
            h(FeatureCard, { key: feature.title, ...feature })
          )
        )
      ]),
      h('section', { key: 'dining', id: 'dining', className: 'section dining-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.dining.title),
          h('p', { key: 'text', className: 'section-text' }, t.dining.description)
        ]),
        h(
          'div',
          { key: 'features', className: 'feature-grid' },
          t.dining.features.map((feature) =>
            h(FeatureCard, { key: feature.title, ...feature })
          )
        )
      ]),
      h('section', { key: 'experiences', id: 'experiences', className: 'section experiences-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.experiences.title),
          h('p', { key: 'text', className: 'section-text' }, t.experiences.description)
        ]),
        h(
          'div',
          { key: 'columns', className: 'experiences-columns' },
          t.experiences.highlights.map((column) =>
            h(ExperienceColumn, { key: column.title, ...column })
          )
        )
      ]),
      h('section', { key: 'gallery', id: 'gallery', className: 'section gallery-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.gallery.title),
          h('p', { key: 'text', className: 'section-text' }, t.gallery.description)
        ]),
        h(
          'div',
          { key: 'grid', className: 'gallery-grid' },
          t.gallery.images.map((item) => h(GalleryCard, { key: item.caption, ...item }))
        )
      ]),
      h('section', { key: 'testimonials', id: 'testimonials', className: 'section testimonials-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.testimonials.title)
        ]),
        h(
          'div',
          { key: 'grid', className: 'testimonials-grid' },
          t.testimonials.items.map((item, index) =>
            h(TestimonialCard, { key: `${item.name}-${index}`, ...item })
          )
        )
      ]),
      h('section', { key: 'cta', className: 'section cta-section' }, [
        h('div', { key: 'panel', className: 'cta-panel' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.callToAction.title),
          h('p', { key: 'text', className: 'section-text' }, t.callToAction.text),
          h('div', { key: 'buttons', className: 'cta-buttons' }, [
            h(
              'button',
              {
                key: 'primary',
                type: 'button',
                className: 'hero-primary',
                onClick: () => scrollToSection('contact')
              },
              t.callToAction.primary
            ),
            h(
              'button',
              {
                key: 'secondary',
                type: 'button',
                className: 'hero-secondary',
                onClick: () => scrollToSection('rooms')
              },
              t.callToAction.secondary
            )
          ])
        ])
      ]),
      h('section', { key: 'contact', id: 'contact', className: 'section contact-section' }, [
        h('div', { key: 'intro', className: 'section-intro' }, [
          h('h2', { key: 'title', className: 'section-title' }, t.contact.title),
          h('p', { key: 'text', className: 'section-text' }, t.contact.description)
        ]),
        h('div', { key: 'grid', className: 'contact-grid' }, [
          h('div', { key: 'address', className: 'contact-card' }, [
            h('h3', { key: 'label' }, t.contact.addressLabel),
            h('p', { key: 'value' }, t.contact.address)
          ]),
          h('div', { key: 'phone', className: 'contact-card' }, [
            h('h3', { key: 'label' }, t.contact.phoneLabel),
            h(
              'a',
              { key: 'value', href: `tel:${t.contact.phone}` },
              t.contact.phone
            )
          ]),
          h('div', { key: 'email', className: 'contact-card' }, [
            h('h3', { key: 'label' }, t.contact.emailLabel),
            h(
              'a',
              { key: 'value', href: `mailto:${t.contact.email}` },
              t.contact.email
            )
          ]),
          h(ContactHours, { key: 'hours', title: t.contact.hoursTitle, hours: t.contact.hours })
        ]),
        h('p', { key: 'note', className: 'section-note' }, t.contact.note)
      ])
    ]),
    h('footer', { key: 'footer', className: 'site-footer' }, t.footer.note)
  ]);
}
