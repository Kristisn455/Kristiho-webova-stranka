const h = window.React.createElement;
const { useState } = window.React;

const heroImage = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80";

const roomImages = {
  ridge: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  family: "https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=1200&q=80",
  attic: "https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?auto=format&fit=crop&w=1200&q=80"
};

const galleryImages = {
  dawn: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  lounge: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  trail: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1200&q=80",
  spa: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
};

const translations = {
  sk: {
    languageName: "Slovenčina",
    languageLabel: "Jazyk",
    nav: [
      { label: "Domov", target: "hero" },
      { label: "O penzióne", target: "about" },
      { label: "Izby", target: "rooms" },
      { label: "Relax", target: "wellness" },
      { label: "Gastronómia", target: "dining" },
      { label: "Zážitky", target: "experiences" },
      { label: "Galéria", target: "gallery" },
      { label: "Kontakt", target: "contact" }
    ],
    hero: {
      badge: "Penzión Didian",
      title: "Tichá horská drevenica pod hrebeňom Didiany",
      description: "Fiktívny penzión Didian spája poctivú drevenú architektúru, moderný wellness a príbehy obce Zelená dolina. Ponárame hostí do horského života so šepotom smrekov a remeselnou kuchyňou.",
      highlights: [
        "Autorský wellness v drevenom kúpeli",
        "Izby s ručne maľovanými ornamentmi",
        "Folklórne večery a horské túry"
      ],
      ctaPrimary: "Zistiť dostupnosť",
      ctaSecondary: "Stiahnuť brožúru",
      image: heroImage
    },
    about: {
      title: "Príbeh Didian v Zelenej doline",
      text: "Didian je rodinná drevenica, ktorú sme obnovili s miestnymi majstrami. V každej izbe cítiť vôňu borovice, v jedálni praská kachľová pec a terasa hľadí na rúbanisko, ktoré sa vracia späť lesu.",
      stats: [
        { label: "Rok obnovy", value: "2024" },
        { label: "Izby a suity", value: "17" },
        { label: "Wellness zóny", value: "3" },
        { label: "Hostia ročne", value: "3 500" }
      ],
      note: "Penzión Didian je fiktívny projekt inšpirovaný tradičnými penziónmi pod horami."
    },
    rooms: {
      title: "Izby s vôňou dreva",
      subtitle: "Tri podpisové kategórie navrhnuté pre páry, rodiny aj solitérne duše.",
      items: [
        {
          name: "Panoramatická suita Hrebeň",
          size: "65 m²",
          sleeps: "2 – 4 hostia",
          description: "Dvojizbová suita s presklenou stenou, vlastnou infrasaunou a výhľadom na horské lúky.",
          perks: [
            "Privátna terasa so sedením z jelše",
            "Rituál večerného čaju od Didianovej babky",
            "Mini knižnica s horskými mapami"
          ],
          price: "od 210 € / noc",
          image: roomImages.ridge,
          imageAlt: "Panoramatická suita s výhľadom na hory"
        },
        {
          name: "Rodinná izba Pastierka",
          size: "42 m²",
          sleeps: "2 – 5 hostí",
          description: "Drevené obklady, oddelená detská nika a tradičné prehozy tkané v susednej manufaktúre.",
          perks: [
            "Interaktívna mapa rodinných výletov",
            "Hojdačky v interiérovom zákutí",
            "Detský welcome balíček s remeselnými hrami"
          ],
          price: "od 165 € / noc",
          image: roomImages.family,
          imageAlt: "Rodinná izba s drevenými detailmi"
        },
        {
          name: "Podkrovné štúdio Didian",
          size: "34 m²",
          sleeps: "1 – 2 hostia",
          description: "Atmosférické podkrovie so svetlíkom, stolíkom pre zápis cesty a posteľou orientovanou na východ slnka.",
          perks: [
            "Audio príbehy o živote v horách",
            "Večerný bylinkový sprej na vankúš",
            "Rezervované miesto v spoločenskej knižnici"
          ],
          price: "od 135 € / noc",
          image: roomImages.attic,
          imageAlt: "Podkrovné štúdio s drevenými trámami"
        }
      ]
    },
    wellness: {
      title: "Relax po horskom dni",
      description: "Naše wellness zázemie spája tradičné rituály s modernou regeneráciou. Všetko obohatené o vôňu kosodreviny a tichý zvuk potoka.",
      features: [
        {
          title: "Bylinkové kúpele",
          detail: "Kúpacie kade z jedľového dreva so zmesou horských bylín a minerálnou vodou."
        },
        {
          title: "Salašnícka sauna",
          detail: "Saunová ceremónia s horúcimi kameňmi, solnými peelingmi a zvukom fujary."
        },
        {
          title: "Regeneračný ateliér",
          detail: "Masáže po túrach, dychové cvičenia a strečing vedený horským sprievodcom."
        }
      ]
    },
    dining: {
      title: "Gastronómia Didian",
      description: "V kuchyni staviame na lokálnych farmách, sýtych raňajkách a kreatívnych večerných menu.",
      features: [
        {
          title: "Raňajky zo salaša",
          detail: "Čerstvé pečivo, domáci syr, vajíčka z dvora a sirupy z horských plodov."
        },
        {
          title: "Večera pri peci",
          detail: "Sezónne štvorchodové menu servírované pri otvorenej kachľovej peci."
        },
        {
          title: "Nočný čajový bar",
          detail: "Infúzie z borievky, horca a malinových listov, k tomu remeselné koláče."
        }
      ]
    },
    experiences: {
      title: "Zážitky so sprievodcom",
      description: "Každý deň pripravujeme program, ktorý prepája krajinu, remeslo a komunitu Zelenej doliny.",
      highlights: [
        {
          title: "V prírode",
          items: [
            "Ranná prechádzka na hrebeň Didiany s fotopauzou",
            "Cyklookruh po opustených pastvinách",
            "Nočné pozorovanie hviezd pri ohnisku"
          ]
        },
        {
          title: "Remeslá",
          items: [
            "Maľovanie ornamentov na drevo",
            "Výroba syra s miestnou syrárkou",
            "Workshop horských bylinkových tinktúr"
          ]
        },
        {
          title: "Komunita",
          items: [
            "Folklórny večer so susedmi",
            "Diskusia o ochrane lesa",
            "Kino pod holým nebom s horskými filmami"
          ]
        }
      ]
    },
    gallery: {
      title: "Pohľady z Didianu",
      description: "Nálada drevenice, ranné hmly aj večerné svetlá v jednej galérii.",
      images: [
        {
          image: galleryImages.dawn,
          alt: "Terasa penziónu v rannom svetle",
          caption: "Raňajkový stôl na terase ponorený do hmly"
        },
        {
          image: galleryImages.lounge,
          alt: "Spoločenská miestnosť s kachľami",
          caption: "Spoločenská knižnica so zavesenými lampášmi"
        },
        {
          image: galleryImages.trail,
          alt: "Turistický chodník v lese",
          caption: "Lesný chodník na náročnejší popoludňajší výlet"
        },
        {
          image: galleryImages.spa,
          alt: "Wellness kútik s drevenou kaďou",
          caption: "Bylinkový kúpeľ pripravený po návrate z túry"
        }
      ]
    },
    testimonials: {
      title: "Hostia o Didiane",
      items: [
        {
          quote: "Konečne miesto, kde wellness pôsobí autenticky a nič nepôsobí ako kulisa.",
          name: "Ema, Bratislava",
          role: "Hosťka víkendového pobytu"
        },
        {
          quote: "Program pre deti bol tak kreatívny, že sme sa pridali aj my dospelí.",
          name: "Rodina Nováková",
          role: "Rodinné prázdniny"
        },
        {
          quote: "Večera pri peci a rozprávanie o tradíciách ma preniesli do detstva.",
          name: "Palo, Košice",
          role: "Milovník folklóru"
        }
      ]
    },
    callToAction: {
      title: "Pripravení na horský pobyt?",
      text: "Napíšte nám preferovaný termín a pripravíme pre vás pobyt so všetkými detailmi.",
      primary: "Kontaktujte recepciu",
      secondary: "Pozrieť izby"
    },
    contact: {
      title: "Kontakt & príchod",
      description: "Sme vám k dispozícii denne od 8:00 do 21:00. Mimo tohto času odpovieme do 12 hodín.",
      addressLabel: "Adresa",
      address: "Zelená dolina 128, 013 13 Lysá Lúka",
      phoneLabel: "Telefón",
      phone: "+421 901 555 210",
      emailLabel: "E-mail",
      email: "recepcia@penziondidian.sk",
      hoursTitle: "Otváracie hodiny recepcie",
      hours: [
        { day: "Pondelok – Piatok", hours: "08:00 – 21:00" },
        { day: "Sobota", hours: "08:00 – 22:00" },
        { day: "Nedeľa", hours: "08:00 – 20:00" }
      ],
      note: "Parkovanie je vyhradené priamo pri drevenici. Transfer z vlakovej stanice zabezpečíme na požiadanie."
    },
    footer: {
      note: "© 2025 Penzión Didian. Fiktívny projekt vytvorený pre ukážku webu."
    }
  },
  en: {
    languageName: "English",
    languageLabel: "Language",
    nav: [
      { label: "Home", target: "hero" },
      { label: "About", target: "about" },
      { label: "Rooms", target: "rooms" },
      { label: "Relax", target: "wellness" },
      { label: "Dining", target: "dining" },
      { label: "Experiences", target: "experiences" },
      { label: "Gallery", target: "gallery" },
      { label: "Contact", target: "contact" }
    ],
    hero: {
      badge: "Didian Guesthouse",
      title: "A quiet mountain lodge beneath the Didian ridge",
      description: "The fictional Didian Guesthouse weaves timber architecture, a modern spa and the stories of Green Valley village. We immerse guests in mountain life with spruce whispers and craft cooking.",
      highlights: [
        "Signature wellness rituals in wooden tubs",
        "Rooms painted with folk patterns",
        "Guided folklore evenings and ridge hikes"
      ],
      ctaPrimary: "Check availability",
      ctaSecondary: "Download brochure",
      image: heroImage
    },
    about: {
      title: "The Didian story in Green Valley",
      text: "Didian is a family lodge restored together with local artisans. Every room carries the scent of pine, the dining hall glows with a tiled stove and the terrace faces forest that quietly returns to life.",
      stats: [
        { label: "Restored in", value: "2024" },
        { label: "Rooms & suites", value: "17" },
        { label: "Wellness zones", value: "3" },
        { label: "Guests per year", value: "3,500" }
      ],
      note: "Didian Guesthouse is a fictional project inspired by mountain pensions."
    },
    rooms: {
      title: "Rooms with the scent of timber",
      subtitle: "Three signature categories crafted for couples, families and solo travelers.",
      items: [
        {
          name: "Panoramic Suite Ridge",
          size: "65 m²",
          sleeps: "2 – 4 guests",
          description: "A two-room suite with floor-to-ceiling glazing, private infrared sauna and meadow views.",
          perks: [
            "Private terrace with alder seating",
            "Evening tea ritual from the Didian family recipe",
            "Mini library filled with hiking maps"
          ],
          price: "from €210 / night",
          image: roomImages.ridge,
          imageAlt: "Panoramic suite overlooking the mountains"
        },
        {
          name: "Family Room Shepherd",
          size: "42 m²",
          sleeps: "2 – 5 guests",
          description: "Warm timber lining, a dedicated kids' nook and textiles woven in the neighboring workshop.",
          perks: [
            "Interactive map of family-friendly trips",
            "Indoor swing corner",
            "Children's welcome kit with craft games"
          ],
          price: "from €165 / night",
          image: roomImages.family,
          imageAlt: "Family room with timber details"
        },
        {
          name: "Attic Studio Didian",
          size: "34 m²",
          sleeps: "1 – 2 guests",
          description: "Atmospheric loft with skylight, writing desk for travel notes and a bed facing sunrise.",
          perks: [
            "Audio stories about mountain life",
            "Nightly herbal pillow mist",
            "Reserved seat in the lounge library"
          ],
          price: "from €135 / night",
          image: roomImages.attic,
          imageAlt: "Attic studio with timber beams"
        }
      ]
    },
    wellness: {
      title: "Unwind after a mountain day",
      description: "Our wellness wing blends traditional rituals with contemporary recovery, always accompanied by alpine herbs and the murmur of a stream.",
      features: [
        {
          title: "Herbal soaking tubs",
          detail: "Spruce-wood tubs infused with mountain herbs and mineral water."
        },
        {
          title: "Shepherd sauna",
          detail: "Sauna ceremonies with hot stones, salt scrubs and live fujara music."
        },
        {
          title: "Recovery atelier",
          detail: "Post-hike massages, breathwork and stretching led by a mountain guide."
        }
      ]
    },
    dining: {
      title: "Didian dining",
      description: "The kitchen celebrates local farms, generous breakfasts and imaginative evening menus.",
      features: [
        {
          title: "Pasture breakfast",
          detail: "Fresh bread, farmhouse cheese, yard eggs and syrups from mountain fruit."
        },
        {
          title: "Stove-side dinner",
          detail: "Seasonal four-course tasting served beside the open tile stove."
        },
        {
          title: "Night tea bar",
          detail: "Infusions of juniper, gentian and raspberry leaf paired with artisan cakes."
        }
      ]
    },
    experiences: {
      title: "Curated experiences",
      description: "Each day we design a program that connects the landscape, craft and community of Green Valley.",
      highlights: [
        {
          title: "Out in nature",
          items: [
            "Sunrise walk to the Didian ridge with a photo stop",
            "Cycling loop across forgotten pastures",
            "Night-time stargazing around the fire"
          ]
        },
        {
          title: "Craft & taste",
          items: [
            "Painting folk patterns on timber",
            "Cheese making with a local cheesemonger",
            "Mountain herbal tincture workshop"
          ]
        },
        {
          title: "Community",
          items: [
            "Folklore evening with neighbors",
            "Talk on forest stewardship",
            "Open-air cinema featuring mountain films"
          ]
        }
      ]
    },
    gallery: {
      title: "Scenes from Didian",
      description: "The mood of the lodge, mountain mornings and evening glow captured together.",
      images: [
        {
          image: galleryImages.dawn,
          alt: "Guesthouse terrace in morning light",
          caption: "Breakfast table soaked in valley mist"
        },
        {
          image: galleryImages.lounge,
          alt: "Lounge with a tile stove",
          caption: "Library lounge lit by hanging lanterns"
        },
        {
          image: galleryImages.trail,
          alt: "Forest hiking trail",
          caption: "Trail leading to an adventurous afternoon hike"
        },
        {
          image: galleryImages.spa,
          alt: "Wellness corner with a wooden tub",
          caption: "Herbal soak prepared after a day outside"
        }
      ]
    },
    testimonials: {
      title: "Guests about Didian",
      items: [
        {
          quote: "Finally a spa that feels authentic and never staged.",
          name: "Emma, Bratislava",
          role: "Weekend stay guest"
        },
        {
          quote: "The children's program was so creative that we joined in ourselves.",
          name: "Novak family",
          role: "Family holiday"
        },
        {
          quote: "Dinner by the stove and the stories about tradition brought back childhood memories.",
          name: "Paul, Košice",
          role: "Folklore enthusiast"
        }
      ]
    },
    callToAction: {
      title: "Ready for a mountain stay?",
      text: "Send us your preferred dates and we will tailor every detail of the stay for you.",
      primary: "Contact reception",
      secondary: "View rooms"
    },
    contact: {
      title: "Contact & arrival",
      description: "We are available daily from 8:00 to 21:00. Outside these hours we reply within 12 hours.",
      addressLabel: "Address",
      address: "Green Valley 128, 013 13 Lysá Lúka",
      phoneLabel: "Telephone",
      phone: "+421 901 555 210",
      emailLabel: "E-mail",
      email: "hello@didianlodge.com",
      hoursTitle: "Reception opening hours",
      hours: [
        { day: "Monday – Friday", hours: "08:00 – 21:00" },
        { day: "Saturday", hours: "08:00 – 22:00" },
        { day: "Sunday", hours: "08:00 – 20:00" }
      ],
      note: "Parking is reserved right beside the lodge. We provide station transfer on request."
    },
    footer: {
      note: "© 2025 Didian Guesthouse. Fictional project created for a web showcase."
    }
  }
};

const languages = [
  { code: "sk", label: "SK" },
  { code: "en", label: "EN" }
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
    h("figure", { key: "figure", className: "room-figure" }, [
      h("img", {
        key: "image",
        className: "room-image",
        src: item.image,
        alt: item.imageAlt,
        loading: "lazy"
      })
    ]),
    h("div", { key: "body", className: "room-body" }, [
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
    ])
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

function GalleryCard({ image, alt, caption }) {
  return h("figure", { className: "gallery-card" }, [
    h("img", { key: "image", className: "gallery-image", src: image, alt, loading: "lazy" }),
    h("figcaption", { key: "caption", className: "gallery-caption" }, caption)
  ]);
}

function TestimonialCard({ quote, name, role }) {
  return h("article", { className: "testimonial-card" }, [
    h("p", { key: "quote", className: "testimonial-quote" }, `"${quote}"`),
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
      h(
        "section",
        {
          key: "hero",
          id: "hero",
          className: "hero-section",
          style: { backgroundImage: `url(${t.hero.image})` }
        },
        [
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
        ]
      ),
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
          t.wellness.features.map((feature) => h(FeatureCard, { key: feature.title, ...feature }))
        )
      ]),
      h("section", { key: "dining", id: "dining", className: "section dining-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, t.dining.title),
          h("p", { key: "text", className: "section-text" }, t.dining.description)
        ]),
        h(
          "div",
          { key: "features", className: "feature-grid" },
          t.dining.features.map((feature) => h(FeatureCard, { key: feature.title, ...feature }))
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
          t.gallery.images.map((item) => h(GalleryCard, { key: item.caption, ...item }))
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
