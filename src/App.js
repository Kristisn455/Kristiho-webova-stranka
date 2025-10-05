const h = window.React.createElement;
const { useState } = window.React;

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
      title: "Vodopád oddychu v srdci Lysportu",
      description: "Fiktívny penzión Didian prináša energiu legendárneho vodnopólistu do sveta pohostinnosti. Legendárny výhľad na fjord, autorské spa rituály a kuchyňa plná morských chutí vytvárajú miesto, kde sa regeneruje telo aj hlava.",
      highlights: [
        "Sky spa s panoramatickým bazénom",
        "Ekologické izby s inteligentnou reguláciou klímy",
        "Kurátorované zážitky vo vodnom živle"
      ],
      ctaPrimary: "Rezervovať pobyt",
      ctaSecondary: "Virtuálna prehliadka"
    },
    about: {
      title: "Pohostinnosť inšpirovaná výkonom",
      text: "Penzión Didian vyrástol z Didianovej vášne pre tímového ducha. Každá izba rozpráva príbehy z ciest, každý servisný detail má rytmus víťazného zápasu. Stačí prísť a nechať sa unášať pokojom severného pobrežia.",
      stats: [
        { label: "Rok otvorenia", value: "2026" },
        { label: "Suites & izby", value: "18" },
        { label: "Wellness zóny", value: "4" },
        { label: "Hodnotenie hostí", value: "4.9 / 5" }
      ],
      note: "Stredobod rezortu je klubovňa „Captain's Lounge“ – Didianovo obľúbené miesto na taktické porady."
    },
    rooms: {
      title: "Izby navrhnuté pre regeneráciu",
      subtitle: "Tri signatúrne kategórie, ktoré spájajú remeselný dizajn, komfort a šepot severného pobrežia.",
      items: [
        {
          name: "Suite Poseidon",
          size: "78 m²",
          sleeps: "2–4 hostia",
          description: "Dvojpodlažný loft s výhľadom na prístav, súkromnou parnou saunou a galériou trofejí.",
          perks: [
            "Privátny concierge 24/7",
            "Vínna skriňa s lokálnymi ročníkmi",
            "Hudobná zóna s kurátorovanými playlistami"
          ],
          price: "od 289 € / noc"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 hostia",
          description: "Svetlá loftová izba pre páry, ktoré hľadajú vyváženie aktívneho programu a tichej večernej atmosféry.",
          perks: [
            "Inteligentné osvetlenie podľa biorytmu",
            "Panoramatická vaňa z vulkanického kameňa",
            "Raňajky servírované do izby"
          ],
          price: "od 189 € / noc"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 hostia",
          description: "Samostatná kabína v bylinkovej záhrade so súkromnou terasou a ohniskom na večerné rozprávania.",
          perks: [
            "Bylinkové ritual kit na mieru",
            "Súkromná outdoor sprcha",
            "Rezervované ležadlá pri lagúne"
          ],
          price: "od 209 € / noc"
        }
      ]
    },
    wellness: {
      title: "Wellness rytmus",
      description: "Priestor, kde voda tečie v Didianovom tempe. Striedajte kontrastné bazény, ceremoniálne sauny a relax v solných jaskyniach.",
      features: [
        {
          title: "Sky Lagoon",
          detail: "Infinity bazén so slanou vodou a „coach corner“ pre dychové tréningy."
        },
        {
          title: "Nordic Heat Lab",
          detail: "Sauny s ceremóniami v réžii wellness trénerov pripravených Didianom."
        },
        {
          title: "Regeneračné štúdio",
          detail: "Fyzio masáže pre športovcov, lymfodrenáže a personalizovaný strečing."
        }
      ]
    },
    dining: {
      title: "Kuchyňa s chuťou oceánu",
      description: "Chef Lina komponuje menu z lokálnych fariem a ranného lovu. Každý chod ladí s Didianovými spomienkami na cestovanie po lige oceánov.",
      features: [
        {
          title: "Restaurant Tidal",
          detail: "Päťchodové degustácie s párovaním vín a živou hudbou pri krbe."
        },
        {
          title: "Bar Brine",
          detail: "Signature koktejly s morskou soľou a fermentovanými sirupmi."
        },
        {
          title: "Sunrise Pantry",
          detail: "Celodenný bar s funkčnými smoothies, studeným brew a remeselným pečivom."
        }
      ]
    },
    experiences: {
      title: "Zážitky kurátorované posádkou",
      description: "Či už chcete trénovať s Didianovým tímom alebo len počúvať hudbu v štýle prístavných nocí, náš tím skúseností pripraví program na mieru.",
      highlights: [
        {
          title: "Vodné dobrodružstvá",
          items: [
            "Ranné plávanie v prístavnom bazéne s trénerom",
            "Kajakovanie po nočných lagúnach so svetielkujúcimi riasami",
            "Kurz taktiky vodného póla pre začiatočníkov"
          ]
        },
        {
          title: "Pobrežná kultúra",
          items: [
            "Výpravy za folklórom Lysportu",
            "Workshop výroby soľných kvetov",
            "Hudobné večery v Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Dycho cvičenia so športovým psychológom",
            "Sound bath v solnej jaskyni",
            "Privátne klavírne recitály na západ slnka"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosféra penziónu",
      description: "Stačí pár okamihov, aby ste pochopili, prečo hostia hovoria o Didianovi ako o rezorte, ktorý pulzuje energiou i pokojom.",
      captions: [
        "Ranné hmlisté raňajky na terase Sky Lagoon",
        "Captain's Lounge pripravená na večerné príbehy",
        "Garden Cabana ukrytá v bylinkovej záhrade",
        "Nordic Heat Lab počas ceremónie Aufguss"
      ]
    },
    testimonials: {
      title: "Hlasy hostí",
      items: [
        {
          quote: "Rytmus wellness ceremoniálov ma naladil na úplne inú vlnu. Penzión Didian je reset tela aj mysle.",
          name: "Tamara, triatlonistka",
          role: "Hosť z Prahy"
        },
        {
          quote: "Každý detail v izbe pôsobil úprimne. Personál mi prichystal tréningový plán podľa môjho tempa.",
          name: "Elias, hudobník",
          role: "Hosť z Berlína"
        },
        {
          quote: "Gurmánske menu a večerné príbehy v lounge sú to, čo nás privádza späť. Cítime sa ako súčasť tímu.",
          name: "Marek & Petra",
          role: "Stáli hostia"
        }
      ]
    },
    callToAction: {
      title: "Pripravte si vlastný scenár pobytu",
      text: "Naplánujeme za vás všetko – od privátneho transferu cez wellness rituály až po večerný playlist. Stačí nás kontaktovať.",
      primary: "Naplánovať pobyt",
      secondary: "Pozrieť dostupnosť"
    },
    contact: {
      title: "Kontakt & dostupnosť",
      description: "Hostí privítame 24/7. Concierge tím reaguje do 12 hodín.",
      addressLabel: "Adresa",
      address: "Prístav Lysport 7, 842 10, Severné pobrežie",
      phoneLabel: "Telefon",
      phone: "+421 900 123 456",
      emailLabel: "E-mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Recepcia",
      hours: [
        { day: "Pondelok – Nedeľa", hours: "00:00 – 24:00" }
      ],
      note: "Parkovanie pre hostí je kryté, so službou nabíjania elektromobilov."
    },
    footer: {
      note: "© 2025 Penzión Didian – fiktívny projekt inšpirovaný víziou Didiana Geniceka."
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
      title: "Vodopád odpočinku v srdci Lysportu",
      description: "Fiktivní penzion Didian přenáší energii legendárního vodního pólisty do světa pohostinnosti. Panoramatické výhledy na fjord, autorské spa rituály a kuchyně plná mořských chutí vytvářejí místo, kde se regeneruje tělo i hlava.",
      highlights: [
        "Sky spa s panoramatickým bazénem",
        "Ekologické pokoje s chytrou regulací klimatu",
        "Kurátorované zážitky ve vodním živlu"
      ],
      ctaPrimary: "Rezervovat pobyt",
      ctaSecondary: "Virtuální prohlídka"
    },
    about: {
      title: "Pohostinnost inspirovaná výkonem",
      text: "Penzion Didian vyrostl z Didianovy vášně pro týmového ducha. Každý pokoj vypráví cestovatelské příběhy, každý servisní detail má rytmus vítězného zápasu. Přijeďte a nechte se unášet klidem severního pobřeží.",
      stats: [
        { label: "Rok otevření", value: "2026" },
        { label: "Suites & pokoje", value: "18" },
        { label: "Wellness zóny", value: "4" },
        { label: "Hodnocení hostů", value: "4,9 / 5" }
      ],
      note: "Srdcem resortu je klubovna „Captain's Lounge“ – Didianovo oblíbené místo pro taktické porady."
    },
    rooms: {
      title: "Pokoje navržené pro regeneraci",
      subtitle: "Tři signaturní kategorie spojují řemeslný design, komfort a šepot severního pobřeží.",
      items: [
        {
          name: "Suite Poseidon",
          size: "78 m²",
          sleeps: "2–4 hosté",
          description: "Dvoupodlažní loft s výhledem na přístav, soukromou parní saunou a galerií trofejí.",
          perks: [
            "Privátní concierge 24/7",
            "Vinotéka s lokálními ročníky",
            "Hudební zóna s kurátorovanými playlisty"
          ],
          price: "od 289 € / noc"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 hosté",
          description: "Světlý loft pro páry hledající rovnováhu aktivního programu a tiché večerní atmosféry.",
          perks: [
            "Inteligentní osvětlení podle biorytmu",
            "Panoramatická vana z vulkanického kamene",
            "Snídaně servírované na pokoj"
          ],
          price: "od 189 € / noc"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 hosté",
          description: "Samostatná kabina v bylinkové zahradě se soukromou terasou a ohništěm pro večerní příběhy.",
          perks: [
            "Bylinkový rituální set na míru",
            "Soukromá venkovní sprcha",
            "Rezervovaná lehátka u laguny"
          ],
          price: "od 209 € / noc"
        }
      ]
    },
    wellness: {
      title: "Wellness rytmus",
      description: "Místo, kde voda proudí v Didianově tempu. Střídejte kontrastní bazény, ceremoniální sauny a relax v solných jeskyních.",
      features: [
        {
          title: "Sky Lagoon",
          detail: "Infinity bazén se slanou vodou a „coach corner“ pro dechové tréninky."
        },
        {
          title: "Nordic Heat Lab",
          detail: "Sauny s ceremoniály v režii wellness trenérů, které připravil Didian."
        },
        {
          title: "Regenerační studio",
          detail: "Fyzio masáže pro sportovce, lymfodrenáže a personalizovaný strečink."
        }
      ]
    },
    dining: {
      title: "Kuchyně s chutí oceánu",
      description: "Šéfkuchařka Lina skládá menu z lokálních farem a ranních úlovků. Každý chod ladí s Didianovými cestovatelskými vzpomínkami na ligu oceánů.",
      features: [
        {
          title: "Restaurant Tidal",
          detail: "Pětichodové degustace s párováním vín a živou hudbou u krbu."
        },
        {
          title: "Bar Brine",
          detail: "Signature koktejly s mořskou solí a fermentovanými sirupy."
        },
        {
          title: "Sunrise Pantry",
          detail: "Celodenní bar s funkčními smoothie, cold brew a řemeslným pečivem."
        }
      ]
    },
    experiences: {
      title: "Zážitky kurátorované posádkou",
      description: "Ať už chcete trénovat s Didianovým týmem nebo poslouchat hudbu přístavních nocí, náš experience tým připraví program na míru.",
      highlights: [
        {
          title: "Vodní dobrodružství",
          items: [
            "Ranní plavání v přístavním bazénu s trenérem",
            "Noční kajak po lagunách se světélkujícími řasami",
            "Kurz taktiky vodního póla pro začátečníky"
          ]
        },
        {
          title: "Pobřežní kultura",
          items: [
            "Výpravy za folklórem Lysportu",
            "Workshop výroby solných květů",
            "Hudební večery v Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Dechová cvičení se sportovním psychologem",
            "Sound bath v solné jeskyni",
            "Soukromé klavírní recitály při západu slunce"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosféra penzionu",
      description: "Stačí okamžik, abyste pochopili, proč hosté mluví o Didianu jako o resortu plném energie i klidu.",
      captions: [
        "Mlžné snídaně na terase Sky Lagoon",
        "Captain's Lounge připravená na večerní příběhy",
        "Garden Cabana ukrytá v bylinkové zahradě",
        "Nordic Heat Lab během ceremoniálu Aufguss"
      ]
    },
    testimonials: {
      title: "Hlasy hostů",
      items: [
        {
          quote: "Rytmus wellness ceremoniálů mě naladil na úplně jinou vlnu. Penzion Didian je restart těla i mysli.",
          name: "Tamara, triatlonistka",
          role: "Host z Prahy"
        },
        {
          quote: "Každý detail v pokoji působil upřímně. Personál mi připravil tréninkový plán podle mého tempa.",
          name: "Elias, hudebník",
          role: "Host z Berlína"
        },
        {
          quote: "Gurmánské menu a večerní příběhy v lounge nás přivádějí zpět. Cítíme se jako součást týmu.",
          name: "Marek & Petra",
          role: "Stálí hosté"
        }
      ]
    },
    callToAction: {
      title: "Vytvořte si vlastní scénář pobytu",
      text: "Naplánujeme za vás vše – od privátního transferu přes wellness rituály až po večerní playlist. Stačí nás kontaktovat.",
      primary: "Naplánovat pobyt",
      secondary: "Zkontrolovat dostupnost"
    },
    contact: {
      title: "Kontakt & dostupnost",
      description: "Hosty vítáme 24/7. Concierge tým odpoví do 12 hodin.",
      addressLabel: "Adresa",
      address: "Přístav Lysport 7, 842 10, Severní pobřeží",
      phoneLabel: "Telefon",
      phone: "+421 900 123 456",
      emailLabel: "E-mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Recepce",
      hours: [
        { day: "Pondělí – Neděle", hours: "00:00 – 24:00" }
      ],
      note: "Parkování je kryté a nabízí nabíjení elektromobilů."
    },
    footer: {
      note: "© 2025 Penzion Didian – fiktivní projekt inspirovaný vizí Didiana Geniceka."
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
      title: "Ein Wasserfall der Erholung im Herzen von Lysport",
      description: "Die fiktive Pension Didian bringt die Energie des legendären Wasserballspielers in die Welt der Gastlichkeit. Panoramablicke auf den Fjord, kuratierte Spa-Rituale und eine Küche voller Meeresgeschmack schaffen einen Ort, an dem Körper und Geist regenerieren.",
      highlights: [
        "Sky Spa mit Panoramabecken",
        "Nachhaltige Zimmer mit smarter Klimasteuerung",
        "Kuratiertes Programm rund um das Element Wasser"
      ],
      ctaPrimary: "Aufenthalt buchen",
      ctaSecondary: "Virtueller Rundgang"
    },
    about: {
      title: "Gastfreundschaft mit Wettkampfgeist",
      text: "Die Pension Didian entstand aus Didians Leidenschaft für Teamgeist. Jedes Zimmer erzählt Reisegeschichten, jeder Service-Detail folgt dem Rhythmus eines siegreichen Spiels. Kommen Sie an und lassen Sie sich von der Ruhe der Nordküste tragen.",
      stats: [
        { label: "Eröffnungsjahr", value: "2026" },
        { label: "Suiten & Zimmer", value: "18" },
        { label: "Wellness-Zonen", value: "4" },
        { label: "Gästebewertung", value: "4.9 / 5" }
      ],
      note: "Das Herz des Resorts ist die „Captain's Lounge“ – Didians Lieblingsplatz für Taktikbesprechungen."
    },
    rooms: {
      title: "Zimmer, die regenerieren",
      subtitle: "Drei Signature-Kategorien verbinden Handwerksdesign, Komfort und das Flüstern der Nordküste.",
      items: [
        {
          name: "Suite Poseidon",
          size: "78 m²",
          sleeps: "2–4 Gäste",
          description: "Zweistöckiges Loft mit Hafenblick, privatem Dampfbad und Trophäengalerie.",
          perks: [
            "Privater Concierge 24/7",
            "Weinschrank mit lokalen Jahrgängen",
            "Musikzone mit kuratierten Playlists"
          ],
          price: "ab 289 € / Nacht"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 Gäste",
          description: "Lichtdurchflutetes Loft für Paare, die Balance zwischen Aktivität und stillen Abenden suchen.",
          perks: [
            "Intelligente Beleuchtung nach Biorhythmus",
            "Panoramabadewanne aus vulkanischem Stein",
            "Frühstücksservice aufs Zimmer"
          ],
          price: "ab 189 € / Nacht"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 Gäste",
          description: "Eigenständige Cabana im Kräutergarten mit privater Terrasse und Feuerstelle.",
          perks: [
            "Individuelles Kräuterritual-Set",
            "Private Außendusche",
            "Reservierte Liegen an der Lagune"
          ],
          price: "ab 209 € / Nacht"
        }
      ]
    },
    wellness: {
      title: "Wellness im Takt",
      description: "Ein Ort, an dem Wasser in Didians Tempo fließt. Wechseln Sie zwischen Kontrastbecken, Zeremonien-Saunen und Ruhe in der Salzgrotte.",
      features: [
        {
          title: "Sky Lagoon",
          detail: "Infinity-Pool mit Salzwasser und „Coach Corner“ für Atemtrainings."
        },
        {
          title: "Nordic Heat Lab",
          detail: "Saunen mit Zeremonien unter Anleitung von Wellness-Coaches, kuratiert von Didian."
        },
        {
          title: "Regenerationsstudio",
          detail: "Sportmassagen, Lymphdrainagen und personalisierte Stretchings."
        }
      ]
    },
    dining: {
      title: "Küche mit Meeresnote",
      description: "Chefköchin Lina komponiert Menüs aus lokalen Höfen und dem Fang des Morgens. Jeder Gang erinnert an Didians Reisen durch die Ocean League.",
      features: [
        {
          title: "Restaurant Tidal",
          detail: "Fünf-Gänge-Degustation mit Weinbegleitung und Live-Musik am Kamin."
        },
        {
          title: "Bar Brine",
          detail: "Signature-Cocktails mit Meersalz und fermentierten Sirupen."
        },
        {
          title: "Sunrise Pantry",
          detail: "Ganztagsbar mit funktionellen Smoothies, Cold Brew und handwerklichem Gebäck."
        }
      ]
    },
    experiences: {
      title: "Erlebnisse mit Crew-Charakter",
      description: "Ob Training mit Didians Team oder Hafenklänge bei Nacht – unser Experience-Team stellt ein Programm nach Ihren Wünschen zusammen.",
      highlights: [
        {
          title: "Wasserabenteuer",
          items: [
            "Morgenschwimmen im Hafenbecken mit Coach",
            "Nacht-Kajak durch leuchtende Lagunen",
            "Taktik-Workshop Wasserball für Einsteiger"
          ]
        },
        {
          title: "Küstenkultur",
          items: [
            "Ausflüge in den Lysport-Folklor",
            "Workshop Salzblüten-Manufaktur",
            "Musikabende in der Captain's Lounge"
          ]
        },
        {
          title: "Mind & Body",
          items: [
            "Atemtraining mit Sportpsychologe",
            "Klangbad in der Salzgrotte",
            "Private Klavierabende zum Sonnenuntergang"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosphäre der Pension",
      description: "Nur wenige Eindrücke zeigen, warum Gäste Didian als Ort voller Energie und Ruhe beschreiben.",
      captions: [
        "Neblige Frühstücke auf der Sky-Lagoon-Terrasse",
        "Captain's Lounge bereit für Abendgeschichten",
        "Garden Cabana im Kräutergarten",
        "Nordic Heat Lab während der Aufguss-Zeremonie"
      ]
    },
    testimonials: {
      title: "Stimmen der Gäste",
      items: [
        {
          quote: "Der Rhythmus der Wellness-Zeremonien brachte mich auf eine andere Welle. Pension Didian ist Reset für Körper und Geist.",
          name: "Tamara, Triathletin",
          role: "Gast aus Prag"
        },
        {
          quote: "Jedes Detail im Zimmer fühlte sich ehrlich an. Das Team stellte mir einen Trainingsplan nach meinem Tempo zusammen.",
          name: "Elias, Musiker",
          role: "Gast aus Berlin"
        },
        {
          quote: "Das Gourmetmenü und die Geschichten in der Lounge holen uns jedes Jahr zurück. Wir fühlen uns wie Teil der Crew.",
          name: "Marek & Petra",
          role: "Stammgäste"
        }
      ]
    },
    callToAction: {
      title: "Gestalten Sie Ihr Aufenthaltsdrehbuch",
      text: "Wir planen alles – privater Transfer, Wellnessrituale, Abendplaylist. Kontaktieren Sie uns einfach.",
      primary: "Aufenthalt planen",
      secondary: "Verfügbarkeit prüfen"
    },
    contact: {
      title: "Kontakt & Erreichbarkeit",
      description: "Wir heißen Gäste rund um die Uhr willkommen. Das Concierge-Team antwortet innerhalb von 12 Stunden.",
      addressLabel: "Adresse",
      address: "Hafen Lysport 7, 842 10, Nordküste",
      phoneLabel: "Telefon",
      phone: "+421 900 123 456",
      emailLabel: "E-Mail",
      email: "crew@penzion-didian.sk",
      hoursTitle: "Rezeption",
      hours: [
        { day: "Montag – Sonntag", hours: "00:00 – 24:00" }
      ],
      note: "Überdachte Parkplätze mit Ladestationen für E-Fahrzeuge stehen bereit."
    },
    footer: {
      note: "© 2025 Pension Didian – fiktives Projekt inspiriert von Didian Genicek."
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
      description: "The fictional Didian Guesthouse channels the energy of a legendary water polo captain into hospitality. Fjord panoramas, signature spa rituals and an ocean-driven kitchen create a place where body and mind recharge.",
      highlights: [
        "Sky spa with panoramic saltwater pool",
        "Eco-conscious suites with intelligent climate",
        "Crew-curated adventures on and around the water"
      ],
      ctaPrimary: "Book your stay",
      ctaSecondary: "Take a virtual tour"
    },
    about: {
      title: "Hospitality with a competitive heartbeat",
      text: "Didian built this retreat around his passion for team spirit. Every suite tells travel stories, every service touch follows the rhythm of a winning match. Arrive and let the calm of the northern shoreline carry you.",
      stats: [
        { label: "Opening year", value: "2026" },
        { label: "Suites & rooms", value: "18" },
        { label: "Wellness zones", value: "4" },
        { label: "Guest rating", value: "4.9 / 5" }
      ],
      note: "At the centre stands the Captain's Lounge — Didian's favourite space for strategy sessions."
    },
    rooms: {
      title: "Suites designed for regeneration",
      subtitle: "Three signature categories combine crafted design, comfort and the whisper of the northern coast.",
      items: [
        {
          name: "Poseidon Suite",
          size: "78 m²",
          sleeps: "2–4 guests",
          description: "A two-level loft overlooking the harbour with a private steam sauna and trophy gallery.",
          perks: [
            "24/7 private concierge",
            "Wine library with local vintages",
            "Sound zone with curated playlists"
          ],
          price: "from €289 / night"
        },
        {
          name: "Aurora Loft",
          size: "52 m²",
          sleeps: "2 guests",
          description: "An airy loft for couples balancing active days with serene evenings.",
          perks: [
            "Circadian lighting scenes",
            "Panoramic tub carved from volcanic stone",
            "Breakfast trays delivered to the suite"
          ],
          price: "from €189 / night"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 guests",
          description: "A standalone cabana in the herb garden with a private terrace and storytelling firepit.",
          perks: [
            "Tailored herb ritual kit",
            "Private outdoor rain shower",
            "Reserved loungers at the lagoon"
          ],
          price: "from €209 / night"
        }
      ]
    },
    wellness: {
      title: "Wellness in rhythm",
      description: "Water moves here at Didian's tempo. Alternate contrast pools, ceremonial saunas and deep rest in salt caves.",
      features: [
        {
          title: "Sky Lagoon",
          detail: "Saltwater infinity pool with a coach corner for breath-training sessions."
        },
        {
          title: "Nordic Heat Lab",
          detail: "Saunas guided by wellness coaches following Didian's rituals."
        },
        {
          title: "Recovery Studio",
          detail: "Athlete-grade physio massages, lymphatic therapy and personalised stretching."
        }
      ]
    },
    dining: {
      title: "Cuisine tasting of the ocean",
      description: "Chef Lina composes menus from coastal farms and morning catches. Each course echoes Didian's journeys across the Ocean League.",
      features: [
        {
          title: "Tidal Restaurant",
          detail: "Five-course degustations with wine pairings and live fireplace music."
        },
        {
          title: "Brine Bar",
          detail: "Signature cocktails infused with sea salt and fermented syrups."
        },
        {
          title: "Sunrise Pantry",
          detail: "All-day counter with functional smoothies, cold brew and artisan pastries."
        }
      ]
    },
    experiences: {
      title: "Experiences curated by the crew",
      description: "Train with Didian's team or tune into harbour-night sounds — our experience crew tailors the program to you.",
      highlights: [
        {
          title: "Water adventures",
          items: [
            "Sunrise harbour swim with a coach",
            "Bioluminescent lagoon night kayaking",
            "Water polo tactics lab for beginners"
          ]
        },
        {
          title: "Coastal culture",
          items: [
            "Guided walks through Lysport folklore",
            "Salt flower crafting workshop",
            "Vinyl evenings inside the Captain's Lounge"
          ]
        },
        {
          title: "Mind & body",
          items: [
            "Breathwork with a sports psychologist",
            "Sound bath in the salt cave",
            "Private piano sunsets"
          ]
        }
      ]
    },
    gallery: {
      title: "Atmosphere snapshots",
      description: "A glimpse of why guests describe Didian as equal parts vibrant energy and restorative calm.",
      captions: [
        "Mist-filled breakfasts on the Sky Lagoon terrace",
        "Captain's Lounge ready for evening storytelling",
        "Garden Cabana nestled between herbal paths",
        "Nordic Heat Lab mid Aufguss ritual"
      ]
    },
    testimonials: {
      title: "Guest voices",
      items: [
        {
          quote: "The cadence of the wellness ceremonies tuned me to a new wave. Didian is a reset for body and mind.",
          name: "Tamara, triathlete",
          role: "Guest from Prague"
        },
        {
          quote: "Every detail felt intentional. The team created a training flow that matched my tempo.",
          name: "Elias, musician",
          role: "Guest from Berlin"
        },
        {
          quote: "Gourmet dinners and the storytelling evenings keep bringing us back. We feel like part of the crew.",
          name: "Marek & Petra",
          role: "Returning guests"
        }
      ]
    },
    callToAction: {
      title: "Craft your own stay script",
      text: "We arrange everything — private transfers, spa rituals, evening playlists. Reach out and we will choreograph the rest.",
      primary: "Plan my stay",
      secondary: "Check availability"
    },
    contact: {
      title: "Contact & arrival",
      description: "We welcome guests 24/7. The concierge crew answers within 12 hours.",
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
      note: "Covered parking with EV charging is included for guests."
    },
    footer: {
      note: "© 2025 Didian Guesthouse – a fictional concept inspired by Didian Genicek."
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
      description: "La pensión ficticia Didian canaliza la energía del legendario capitán de waterpolo hacia la hospitalidad. Panorámicas del fiordo, rituales de spa de autor y una cocina guiada por el océano crean un lugar donde cuerpo y mente se recargan.",
      highlights: [
        "Sky spa con piscina panorámica de agua salada",
        "Suites eco-conscientes con clima inteligente",
        "Experiencias curadas por la tripulación alrededor del agua"
      ],
      ctaPrimary: "Reservar estancia",
      ctaSecondary: "Tour virtual"
    },
    about: {
      title: "Hospitalidad con pulso competitivo",
      text: "Didian construyó este refugio a partir de su pasión por el espíritu de equipo. Cada suite cuenta historias de viaje y cada detalle de servicio sigue el ritmo de un partido ganador. Llegue y déjese llevar por la calma de la costa norte.",
      stats: [
        { label: "Año de apertura", value: "2026" },
        { label: "Suites y habitaciones", value: "18" },
        { label: "Zonas de wellness", value: "4" },
        { label: "Valoración de huéspedes", value: "4,9 / 5" }
      ],
      note: "El corazón del resort es la Captain's Lounge, el lugar favorito de Didian para sus charlas estratégicas."
    },
    rooms: {
      title: "Suites diseñadas para regenerar",
      subtitle: "Tres categorías insignia que combinan diseño artesanal, confort y el susurro de la costa norte.",
      items: [
        {
          name: "Suite Poseidón",
          size: "78 m²",
          sleeps: "2–4 huéspedes",
          description: "Loft de dos niveles con vista al puerto, sauna de vapor privada y galería de trofeos.",
          perks: [
            "Conserje privado 24/7",
            "Vinoteca con añadas locales",
            "Zona musical con playlists curadas"
          ],
          price: "desde 289 € / noche"
        },
        {
          name: "Loft Aurora",
          size: "52 m²",
          sleeps: "2 huéspedes",
          description: "Loft luminoso para parejas que buscan equilibrar días activos con noches serenas.",
          perks: [
            "Iluminación circadiana",
            "Bañera panorámica de piedra volcánica",
            "Desayunos servidos en la suite"
          ],
          price: "desde 189 € / noche"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 huéspedes",
          description: "Cabina independiente en el jardín de hierbas con terraza privada y fogata para contar historias.",
          perks: [
            "Kit ritual de hierbas personalizado",
            "Ducha exterior privada",
            "Hamacas reservadas junto a la laguna"
          ],
          price: "desde 209 € / noche"
        }
      ]
    },
    wellness: {
      title: "Bienestar a ritmo propio",
      description: "Aquí el agua fluye al ritmo de Didian. Alterne piscinas de contraste, saunas ceremoniales y descanso profundo en cuevas de sal.",
      features: [
        {
          title: "Sky Lagoon",
          detail: "Piscina infinita de agua salada con esquina de entrenamiento de respiración."
        },
        {
          title: "Nordic Heat Lab",
          detail: "Saunas con ceremonias guiadas por entrenadores de wellness formados por Didian."
        },
        {
          title: "Estudio Recovery",
          detail: "Masajes de fisioterapia deportiva, drenaje linfático y estiramientos personalizados."
        }
      ]
    },
    dining: {
      title: "Cocina con sabor a océano",
      description: "La chef Lina compone menús con granjas costeras y la captura matutina. Cada plato refleja los viajes de Didian por la Liga del Océano.",
      features: [
        {
          title: "Restaurante Tidal",
          detail: "Degustaciones de cinco tiempos con maridaje de vinos y música en vivo junto al fuego."
        },
        {
          title: "Bar Brine",
          detail: "Cócteles de autor con sal marina y siropes fermentados."
        },
        {
          title: "Sunrise Pantry",
          detail: "Bar todo el día con smoothies funcionales, cold brew y repostería artesanal."
        }
      ]
    },
    experiences: {
      title: "Experiencias curadas por la tripulación",
      description: "Entrene con el equipo de Didian o sintonice los sonidos nocturnos del puerto: nuestro crew diseña el programa a su medida.",
      highlights: [
        {
          title: "Aventuras acuáticas",
          items: [
            "Natación al amanecer en el puerto con entrenador",
            "Kayak nocturno en lagunas bioluminiscentes",
            "Laboratorio de táctica de waterpolo para principiantes"
          ]
        },
        {
          title: "Cultura costera",
          items: [
            "Rutas guiadas por el folclore de Lysport",
            "Taller de flor de sal",
            "Noches musicales en la Captain's Lounge"
          ]
        },
        {
          title: "Mente y cuerpo",
          items: [
            "Respiración con psicólogo deportivo",
            "Baño de sonido en la cueva de sal",
            "Recitales privados de piano al atardecer"
          ]
        }
      ]
    },
    gallery: {
      title: "Postales del ambiente",
      description: "Basta un vistazo para entender por qué los huéspedes describen a Didian como pura energía y calma a la vez.",
      captions: [
        "Desayunos brumosos en la terraza de Sky Lagoon",
        "Captain's Lounge lista para las historias nocturnas",
        "Garden Cabana escondida entre senderos de hierbas",
        "Nordic Heat Lab durante un ritual Aufguss"
      ]
    },
    testimonials: {
      title: "Voces de los huéspedes",
      items: [
        {
          quote: "El ritmo de las ceremonias wellness me llevó a otra frecuencia. Didian es un reset para cuerpo y mente.",
          name: "Tamara, triatleta",
          role: "Huésped de Praga"
        },
        {
          quote: "Cada detalle se sentía auténtico. El equipo creó un plan de entrenamiento a mi medida.",
          name: "Elias, músico",
          role: "Huésped de Berlín"
        },
        {
          quote: "La gastronomía y las historias en la lounge nos hacen volver. Nos sentimos parte de la tripulación.",
          name: "Marek & Petra",
          role: "Huéspedes recurrentes"
        }
      ]
    },
    callToAction: {
      title: "Diseñe su propio guion de estancia",
      text: "Nos encargamos de todo: traslados privados, rituales de spa, playlists nocturnas. Escríbanos y coordinamos el resto.",
      primary: "Planear mi estancia",
      secondary: "Ver disponibilidad"
    },
    contact: {
      title: "Contacto y llegada",
      description: "Recibimos huéspedes 24/7. El equipo de concierge responde en menos de 12 horas.",
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
      note: "Estacionamiento cubierto con carga para vehículos eléctricos incluido."
    },
    footer: {
      note: "© 2025 Pensión Didian – proyecto ficticio inspirado en Didian Genicek."
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
      badge: "Maison d’hôtes Didian",
      title: "Une cascade de sérénité au cœur de Lysport",
      description: "La maison d’hôtes fictive Didian canalise l’énergie du capitaine légendaire de water-polo dans l’art de recevoir. Panoramas sur le fjord, rituels de spa signature et cuisine inspirée de l’océan composent un lieu où corps et esprit se ressourcent.",
      highlights: [
        "Sky spa avec piscine panoramique d’eau salée",
        "Suites éco-conçues à climat intelligent",
        "Expériences orchestrées par l’équipage autour de l’eau"
      ],
      ctaPrimary: "Réserver mon séjour",
      ctaSecondary: "Visite virtuelle"
    },
    about: {
      title: "Une hospitalité au rythme de la compétition",
      text: "Didian a imaginé ce refuge à partir de sa passion pour l’esprit d’équipe. Chaque suite raconte un voyage, chaque geste de service suit le tempo d’un match victorieux. Arrivez et laissez la côte nord vous apaiser.",
      stats: [
        { label: "Année d’ouverture", value: "2026" },
        { label: "Suites & chambres", value: "18" },
        { label: "Zones bien-être", value: "4" },
        { label: "Avis des hôtes", value: "4,9 / 5" }
      ],
      note: "Le cœur du resort est la Captain's Lounge, l’endroit favori de Didian pour ses briefings tactiques."
    },
    rooms: {
      title: "Suites pensées pour la régénération",
      subtitle: "Trois catégories signature mêlent design artisanal, confort et murmure du littoral nordique.",
      items: [
        {
          name: "Suite Poséidon",
          size: "78 m²",
          sleeps: "2–4 hôtes",
          description: "Loft en duplex avec vue sur le port, hammam privé et galerie de trophées.",
          perks: [
            "Concierge privé 24/7",
            "Cave à vin de crus locaux",
            "Espace musical et playlists sur mesure"
          ],
          price: "à partir de 289 € / nuit"
        },
        {
          name: "Loft Aurore",
          size: "52 m²",
          sleeps: "2 hôtes",
          description: "Loft baigné de lumière pour couples en quête d’équilibre entre journées actives et soirées sereines.",
          perks: [
            "Éclairage circadien intelligent",
            "Baignoire panoramique en pierre volcanique",
            "Petit-déjeuner servi en suite"
          ],
          price: "à partir de 189 € / nuit"
        },
        {
          name: "Garden Cabana",
          size: "46 m²",
          sleeps: "2–3 hôtes",
          description: "Cabane indépendante au cœur du jardin d’herbes, terrasse privée et brasero pour les histoires du soir.",
          perks: [
            "Kit de rituel aux herbes personnalisé",
            "Douche extérieure privée",
            "Transats réservés près de la lagune"
          ],
          price: "à partir de 209 € / nuit"
        }
      ]
    },
    wellness: {
      title: "Bien-être en cadence",
      description: "Ici l’eau coule au tempo de Didian. Alternez bassins contrastés, saunas cérémoniels et repos profond dans les grottes salines.",
      features: [
        {
          title: "Sky Lagoon",
          detail: "Piscine à débordement d’eau salée avec corner d’entraînement respiratoire."
        },
        {
          title: "Nordic Heat Lab",
          detail: "Saunas et rituels guidés par des coachs bien-être formés par Didian."
        },
        {
          title: "Studio de récupération",
          detail: "Massages physiothérapeutiques, drainage lymphatique et stretching personnalisé."
        }
      ]
    },
    dining: {
      title: "Cuisine aux saveurs de l’océan",
      description: "La cheffe Lina compose des menus issus des fermes côtières et des prises du matin. Chaque plat fait écho aux voyages de Didian dans la Ocean League.",
      features: [
        {
          title: "Restaurant Tidal",
          detail: "Dégustations en cinq services avec accords mets-vins et musique live au coin du feu."
        },
        {
          title: "Bar Brine",
          detail: "Cocktails signature à la fleur de sel et sirops fermentés."
        },
        {
          title: "Sunrise Pantry",
          detail: "Comptoir toute la journée : smoothies bien-être, cold brew et pâtisserie artisanale."
        }
      ]
    },
    experiences: {
      title: "Expériences signées équipage",
      description: "Entraînez-vous avec l’équipe de Didian ou vibrez aux sons du port la nuit, notre crew compose un programme à votre mesure.",
      highlights: [
        {
          title: "Aventures aquatiques",
          items: [
            "Session de nage à l’aube avec coach",
            "Kayak nocturne sur lagunes bioluminescentes",
            "Atelier tactique de water-polo pour débutants"
          ]
        },
        {
          title: "Culture côtière",
          items: [
            "Balades guidées dans le folklore de Lysport",
            "Atelier de fleur de sel artisanale",
            "Soirées musicales à la Captain's Lounge"
          ]
        },
        {
          title: "Esprit & corps",
          items: [
            "Respiration accompagnée d’un psychologue du sport",
            "Bain sonore dans la grotte saline",
            "Récitals privés de piano au coucher du soleil"
          ]
        }
      ]
    },
    gallery: {
      title: "Instantanés de l’atmosphère",
      description: "Quelques images suffisent pour comprendre pourquoi Didian marie énergie vibrante et calme profond.",
      captions: [
        "Petits-déjeuners brumeux sur la terrasse de la Sky Lagoon",
        "Captain's Lounge prête pour les histoires du soir",
        "Garden Cabana nichée au milieu des herbes",
        "Nordic Heat Lab pendant un rituel Aufguss"
      ]
    },
    testimonials: {
      title: "Voix des hôtes",
      items: [
        {
          quote: "Le rythme des cérémonies bien-être m’a mis sur une nouvelle fréquence. Didian est un reset pour le corps et l’esprit.",
          name: "Tamara, triathlète",
          role: "Cliente de Prague"
        },
        {
          quote: "Chaque détail semblait pensé. L’équipe a imaginé un plan d’entraînement à mon tempo.",
          name: "Elias, musicien",
          role: "Client de Berlin"
        },
        {
          quote: "La cuisine et les histoires du lounge nous ramènent chaque saison. Nous nous sentons membres de l’équipage.",
          name: "Marek & Petra",
          role: "Hôtes fidèles"
        }
      ]
    },
    callToAction: {
      title: "Composez votre scénario de séjour",
      text: "Nous orchestrons tout pour vous : transferts privés, rituels spa, playlists du soir. Contactez-nous et laissez-nous chorégraphier la suite.",
      primary: "Planifier mon séjour",
      secondary: "Voir les disponibilités"
    },
    contact: {
      title: "Contact & accès",
      description: "Accueil 24h/24. Notre concierge répond sous 12 heures.",
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
      note: "Parking couvert avec bornes de recharge pour véhicules électriques inclus."
    },
    footer: {
      note: "© 2025 Maison d’hôtes Didian – concept fictif inspiré par Didian Genicek."
    }
  }
};

const languages = [
  { code: "sk", label: "SK" },
  { code: "cs", label: "CZ" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" }
];

function Navigation({ items, onNavigate }) {
  return h(
    "nav",
    { className: "nav-links" },
    items.map((item) =>
      h(
        "a",
        {
          key: item.target,
          href: `#${item.target}`,
          className: "nav-link",
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
  return h("div", { className: "language-toolbar" }, [
    h("span", { key: "label", className: "language-label" }, `${label}:`),
    h(
      "div",
      { key: "options", className: "language-options" },
      languages.map((option) =>
        h(
          "button",
          {
            key: option.code,
            type: "button",
            className: `language-button${option.code === language ? " active" : ""}`,
            onClick: () => onSelect(option.code),
            "aria-pressed": option.code === language
          },
          option.label
        )
      )
    )
  ]);
}

function StatCard({ label, value }) {
  return h("div", { className: "stat-card" }, [
    h("span", { key: "value", className: "stat-value" }, value),
    h("span", { key: "label", className: "stat-label" }, label)
  ]);
}

function RoomCard({ item }) {
  return h("article", { className: "room-card" }, [
    h("div", { key: "header", className: "room-header" }, [
      h("h3", { key: "name", className: "room-name" }, item.name),
      h("div", { key: "meta", className: "room-meta" }, [
        h("span", { key: "size", className: "room-size" }, item.size),
        h("span", { key: "sleeps", className: "room-sleeps" }, item.sleeps)
      ])
    ]),
    h("p", { key: "description", className: "room-description" }, item.description),
    h(
      "ul",
      { key: "perks", className: "room-perks" },
      item.perks.map((perk) => h("li", { key: perk }, perk))
    ),
    h("div", { key: "price", className: "room-price" }, item.price)
  ]);
}

function FeatureCard({ title, detail }) {
  return h("article", { className: "feature-card" }, [
    h("h3", { key: "title" }, title),
    h("p", { key: "detail" }, detail)
  ]);
}

function ExperienceColumn({ title, items }) {
  return h("article", { className: "experience-column" }, [
    h("h3", { key: "title" }, title),
    h(
      "ul",
      { key: "list", className: "experience-list" },
      items.map((item) => h("li", { key: item }, item))
    )
  ]);
}

function GalleryCard({ caption, index }) {
  return h("div", { className: "gallery-card", "data-index": index + 1 }, [
    h("span", { key: "caption" }, caption)
  ]);
}

function TestimonialCard({ quote, name, role }) {
  return h("article", { className: "testimonial-card" }, [
    h("p", { key: "quote", className: "testimonial-quote" }, `“${quote}”`),
    h("div", { key: "person", className: "testimonial-person" }, [
      h("span", { key: "name", className: "testimonial-name" }, name),
      h("span", { key: "role", className: "testimonial-role" }, role)
    ])
  ]);
}

function ContactHours({ title, hours }) {
  return h("div", { className: "contact-hours" }, [
    h("h3", { key: "title" }, title),
    h(
      "ul",
      { key: "list", className: "hours-list" },
      hours.map((item) =>
        h("li", { key: item.day }, [
          h("span", { key: "day", className: "hours-day" }, item.day),
          h("span", { key: "time", className: "hours-time" }, item.hours)
        ])
      )
    )
  ]);
}

export default function App() {
  const [language, setLanguage] = useState("sk");
  const t = translations[language];

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return h("div", { className: "site-wrapper" }, [
    h("header", { key: "topbar", className: "topbar" }, [
      h("div", { key: "brand", className: "brand" }, [
        h("div", { key: "mark", className: "brand-mark" }, "D"),
        h("div", { key: "text", className: "brand-text" }, [
          h("span", { key: "name", className: "brand-name" }, "Didian"),
          h("span", { key: "badge", className: "brand-sub" }, t.hero.badge)
        ])
      ]),
      h(Navigation, { key: "nav", items: t.nav, onNavigate: scrollToSection }),
      h(LanguageToolbar, {
        key: "lang",
        language,
        onSelect: setLanguage,
        label: t.languageLabel
      })
    ]),
    h("main", { key: "main", className: "main-content" }, [
      h("section", { key: "hero", id: "hero", className: "hero-section" }, [
        h("div", { key: "inner", className: "hero-inner" }, [
          h("div", { key: "badge", className: "hero-badge" }, t.hero.badge),
          h("h1", { key: "title", className: "hero-title" }, t.hero.title),
          h("p", { key: "description", className: "hero-description" }, t.hero.description),
          h(
            "div",
            { key: "highlights", className: "hero-highlights" },
            t.hero.highlights.map((item, index) =>
              h("span", { key: `${item}-${index}`, className: "hero-pill" }, item)
            )
          ),
          h("div", { key: "ctas", className: "hero-ctas" }, [
            h(
              "button",
              {
                key: "primary",
                type: "button",
                className: "hero-primary",
                onClick: () => scrollToSection("rooms")
              },
              t.hero.ctaPrimary
            ),
            h(
              "button",
              {
                key: "secondary",
                type: "button",
                className: "hero-secondary",
                onClick: () => scrollToSection("gallery")
              },
              t.hero.ctaSecondary
            )
          ])
        ])
      ]),
      h("section", { key: "about", id: "about", className: "section about-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.about.title),
          h("p", { key: "text", className: "section-text" }, t.about.text)
        ]),
        h(
          "div",
          { key: "stats", className: "stats-grid" },
          t.about.stats.map((stat) => h(StatCard, { key: stat.label, ...stat }))
        ),
        h("p", { key: "note", className: "section-note" }, t.about.note)
      ]),
      h("section", { key: "rooms", id: "rooms", className: "section rooms-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.rooms.title),
          h("p", { key: "subtitle", className: "section-text" }, t.rooms.subtitle)
        ]),
        h(
          "div",
          { key: "grid", className: "rooms-grid" },
          t.rooms.items.map((item) => h(RoomCard, { key: item.name, item }))
        )
      ]),
      h("section", { key: "wellness", id: "wellness", className: "section alt-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.wellness.title),
          h("p", { key: "text", className: "section-text" }, t.wellness.description)
        ]),
        h(
          "div",
          { key: "features", className: "feature-grid" },
          t.wellness.features.map((feature) =>
            h(FeatureCard, { key: feature.title, ...feature })
          )
        )
      ]),
      h("section", { key: "dining", className: "section dining-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.dining.title),
          h("p", { key: "text", className: "section-text" }, t.dining.description)
        ]),
        h(
          "div",
          { key: "features", className: "feature-grid" },
          t.dining.features.map((feature) =>
            h(FeatureCard, { key: feature.title, ...feature })
          )
        )
      ]),
      h("section", { key: "experiences", id: "experiences", className: "section experiences-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.experiences.title),
          h("p", { key: "text", className: "section-text" }, t.experiences.description)
        ]),
        h(
          "div",
          { key: "columns", className: "experiences-columns" },
          t.experiences.highlights.map((column) =>
            h(ExperienceColumn, { key: column.title, ...column })
          )
        )
      ]),
      h("section", { key: "gallery", id: "gallery", className: "section gallery-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.gallery.title),
          h("p", { key: "text", className: "section-text" }, t.gallery.description)
        ]),
        h(
          "div",
          { key: "grid", className: "gallery-grid" },
          t.gallery.captions.map((caption, index) =>
            h(GalleryCard, { key: caption, caption, index })
          )
        )
      ]),
      h("section", { key: "testimonials", id: "testimonials", className: "section testimonials-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.testimonials.title)
        ]),
        h(
          "div",
          { key: "grid", className: "testimonials-grid" },
          t.testimonials.items.map((item, index) =>
            h(TestimonialCard, { key: `${item.name}-${index}`, ...item })
          )
        )
      ]),
      h("section", { key: "cta", className: "section cta-section" }, [
        h("div", { key: "panel", className: "cta-panel" }, [
          h("h2", { key: "title", className: "section-title" }, t.callToAction.title),
          h("p", { key: "text", className: "section-text" }, t.callToAction.text),
          h("div", { key: "buttons", className: "cta-buttons" }, [
            h(
              "button",
              {
                key: "primary",
                type: "button",
                className: "hero-primary",
                onClick: () => scrollToSection("contact")
              },
              t.callToAction.primary
            ),
            h(
              "button",
              {
                key: "secondary",
                type: "button",
                className: "hero-secondary",
                onClick: () => scrollToSection("rooms")
              },
              t.callToAction.secondary
            )
          ])
        ])
      ]),
      h("section", { key: "contact", id: "contact", className: "section contact-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.contact.title),
          h("p", { key: "text", className: "section-text" }, t.contact.description)
        ]),
        h("div", { key: "grid", className: "contact-grid" }, [
          h("div", { key: "address", className: "contact-card" }, [
            h("h3", { key: "label" }, t.contact.addressLabel),
            h("p", { key: "value" }, t.contact.address)
          ]),
          h("div", { key: "phone", className: "contact-card" }, [
            h("h3", { key: "label" }, t.contact.phoneLabel),
            h(
              "a",
              { key: "value", href: `tel:${t.contact.phone}` },
              t.contact.phone
            )
          ]),
          h("div", { key: "email", className: "contact-card" }, [
            h("h3", { key: "label" }, t.contact.emailLabel),
            h(
              "a",
              { key: "value", href: `mailto:${t.contact.email}` },
              t.contact.email
            )
          ]),
          h(ContactHours, { key: "hours", title: t.contact.hoursTitle, hours: t.contact.hours })
        ]),
        h("p", { key: "note", className: "section-note" }, t.contact.note)
      ])
    ]),
    h("footer", { key: "footer", className: "site-footer" }, t.footer.note)
  ]);
}
