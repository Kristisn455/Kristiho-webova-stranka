const h = window.React.createElement;
const { useState } = window.React;

const heroImage = "./assets/hero-chalet.jpg";

const roomImages = {
  ridge: "./assets/room-suite.jpg",
  family: "./assets/room-family.jpg",
  attic: "./assets/room-attic.jpg"
};

const galleryImages = {
  lounge: "./assets/lodge-lounge.jpg",
  dining: "./assets/dining-local.jpg",
  trail: "./assets/trail-forest.jpg",
  spa: "./assets/spa-tub.jpg"
};

const translations = {
  sk: {
    languageLabel: "Jazyk",
    menuItems: [
      { key: "home", label: "Domov" },
      { key: "about", label: "O nás" },
      { key: "story", label: "O penzióne" },
      { key: "rooms", label: "Izby" },
      { key: "wellness", label: "Wellness" },
      { key: "dining", label: "Gastronómia" },
      { key: "menu", label: "Menu" },
      { key: "gallery", label: "Fotogaléria" },
      { key: "contact", label: "Kontakt" }
    ],
    sections: {
      home: {
        hero: {
          badge: "Penzión Didian",
          title: "Rodinný penzión uprostred horskej doliny",
          description:
            "Didian je fiktívny penzión v Zelenej doline. Drevené interiéry, vôňa rúbaného dreva a osobná starostlivosť našej rodiny vytvárajú pobyt, ktorý pôsobí skutočne a útulne.",
          highlights: [
            "Raňajky z lokálnych fariem",
            "Wellness zóna s bylinkovou kaďou",
            "Sprievodca po okolitých hrebeňoch"
          ]
        },
        intro: [
          "Každý hosť je vítaný ako člen rodiny – už na prahu vás čaká vôňa dreva, domáce koláče a úsmev nášho tímu.",
          "Domovská atmosféra sa stará o to, aby ste zrelaxovali po túre aj po dlhom dni na svahu."
        ],
        keyPoints: [
          "Súkromné parkovanie a transfer zo stanice",
          "Spoločenská izba s krbom a knižnicou",
          "Program na mieru podľa sezóny"
        ]
      },
      about: {
        title: "O nás",
        paragraphs: [
          "Penzión Didian obnovila naša rodina v roku 2024 spolu s miestnymi remeselníkmi. Zachovali sme pôvodné trámy, hlinené omietky a doplnili ich o pohodlie, ktoré od moderného penziónu očakávate.",
          "Každé ráno pripravujeme raňajky z ingrediencií od susedov zo Zelenej doliny a radi poradíme, kam sa vybrať za zážitkom."],
        stats: [
          { label: "Rok obnovy", value: "2024" },
          { label: "Izby", value: "8" },
          { label: "Suita", value: "1" },
          { label: "Hostí ročne", value: "3 200" }
        ]
      },
      story: {
        title: "O penzióne",
        paragraphs: [
          "Na mieste dnešného penziónu stál salašnícky dom. Z jeho atmosféry sme si ponechali cit pre remeslo – nábytok z masívneho dreva, textílie tkané v blízkej dielni a ornamenty, ktoré pripomínajú dedičstvo obce.",
          "Didian je miesto, kde sa dá len tak sedieť na verande, sledovať pasúce sa ovce a užívať si ticho. Popoludní sa pri krbe stretávajú hostia aj personál, aby sa podelili o tipy na výlety." ]
      },
      rooms: {
        title: "Izby",
        intro: "Tri kategórie izieb spájajú prírodné materiály, pohodlné lôžka a služby podľa vášho rytmu.",
        items: [
          {
            name: "Panoramatická suita Hrebeň",
            size: "65 m²",
            sleeps: "2 – 4 hostia",
            description: "Presklená obývačka s výhľadom na dolinu, vlastná infrasauna a kúpeľňa s vaňou.",
            perks: [
              "Súkromná terasa",
              "Servis raňajok do suity",
              "Večerný čajový rituál"
            ],
            price: "od 210 EUR / noc",
            image: roomImages.ridge,
            imageAlt: "Panoramatická suita penziónu Didian"
          },
          {
            name: "Rodinná izba Pastierka",
            size: "42 m²",
            sleeps: "2 – 5 hostí",
            description: "Samostatná detská nika, hojdačka v čitárni a vyhrievaná podlaha v kúpeľni.",
            perks: [
              "Detský uvítací balíček",
              "Tipy na výlety v okolí",
              "Večerné čítanie rozprávok"
            ],
            price: "od 165 EUR / noc",
            image: roomImages.family,
            imageAlt: "Rodinná izba so sedením"
          },
          {
            name: "Podkrovné štúdio Didian",
            size: "28 m²",
            sleeps: "1 – 2 hostia",
            description: "Atmosférické podkrovie s pracovným stolom, zvukovou izoláciou a výhľadom na les.",
            perks: [
              "Kávovar a čajový bar",
              "Playlist horských melódií",
              "Prístup do spoločenskej knižnice"
            ],
            price: "od 135 EUR / noc",
            image: roomImages.attic,
            imageAlt: "Podkrovné štúdio s drevenými trámami"
          }
        ]
      },
      wellness: {
        title: "Wellness",
        description:
          "Wellness zóna je navrhnutá pre pokojné momenty po túre. Ponúkame zaslúžený oddych s horskými bylinkami a teplom drevených povrchov.",
        features: [
          { title: "Bylinková kaďa", detail: "Smrekové ihličie, horské bylinky a výhľad na lúku." },
          { title: "Fínska sauna", detail: "Denné rituály s éterickými olejmi a jemnou hudbou." },
          { title: "Masážny ateliér", detail: "Terapeuti z okolia s relaxačnými aj športovými technikami." }
        ]
      },
      dining: {
        title: "Gastronómia",
        description: "Kuchyňa Didian stavia na produktoch z doliny, sezónnych receptoch a večernej atmosfére pri krbe.",
        features: [
          { title: "Raňajkový bufet", detail: "Domáce pečivo, regionálne syry a čerstvé vajíčka." },
          { title: "Večerné menu", detail: "Trojchodový výber z lokálnych surovín." },
          { title: "Salašnícky snack", detail: "Popoludňajšie polievky, koláče a bylinkové limonády." }
        ]
      },
      menu: {
        title: "Jedálny lístok",
        description: "Ukážka našich stálic – sezónne menu vám radi pošleme pred príchodom.",
        categories: [
          {
            name: "Raňajky",
            highlight: "Podávame 7:30 – 10:00",
            items: [
              { name: "Domáci chlieb s bylinkovým maslom", detail: "maslo so žeruchou, vajíčko na mäkko", price: "7 EUR" },
              { name: "Ovsená kaša Didian", detail: "ovsené vločky, lesné ovocie, med", price: "6 EUR" }
            ]
          },
          {
            name: "Hlavné jedlá",
            highlight: "Servírujeme 12:00 – 21:00",
            items: [
              { name: "Jelení guláš na víne", detail: "domáce noky, brusnice, marinovaná cibuľka", price: "14 EUR" },
              { name: "Pstruh z horského potoka", detail: "bylinkové maslo, pečená koreňová zelenina", price: "15 EUR" }
            ]
          },
          {
            name: "Dezerty a nápoje",
            highlight: "Pečieme a miešame denne",
            items: [
              { name: "Tvarožník Didian", detail: "tvaroh z farmy, šípkový rozvar, slaný karamel", price: "5 EUR" },
              { name: "Bylinkový čaj", detail: "mäta, medovka, materina dúška, horský med", price: "3 EUR" }
            ]
          }
        ]
      },
      gallery: {
        title: "Fotogaléria",
        description: "Pohľad do salónika, reštaurácie, wellness aj na turistické chodníky v okolí.",
        images: [
          { image: galleryImages.lounge, alt: "Salónik s krbom", caption: "Knižnica pripravená na večerné posedenie." },
          { image: galleryImages.dining, alt: "Reštauračný stôl", caption: "Večera servírovaná pri krbe." },
          { image: galleryImages.trail, alt: "Lesný chodník", caption: "Chodník smerujúci na hrebeň Didiany." },
          { image: galleryImages.spa, alt: "Bylinková kaďa", caption: "Wellness kaďa pripravená po túre." }
        ]
      },
      contact: {
        title: "Kontakt",
        description: "Recepcia je otvorená denne od 8:00 do 21:00. Mimo tohto času odpovedáme do 12 hodín.",
        addressLabel: "Adresa",
        address: "Zelená dolina 128, 013 13 Lysá Lúka",
        phoneLabel: "Telefón",
        phone: "+421 901 555 210",
        emailLabel: "E-mail",
        email: "recepcia@penziondidian.sk",
        hoursTitle: "Otváracie hodiny",
        hours: [
          { day: "Pondelok – Piatok", hours: "08:00 – 21:00" },
          { day: "Sobota", hours: "08:00 – 22:00" },
          { day: "Nedeľa", hours: "08:00 – 20:00" }
        ],
        note: "Parkovanie je bezplatné priamo pri penzióne. Transfer z vlakovej stanice zabezpečíme na požiadanie."
      }
    }
  },
  en: {
    languageLabel: "Language",
    menuItems: [
      { key: "home", label: "Home" },
      { key: "about", label: "About" },
      { key: "story", label: "Guesthouse" },
      { key: "rooms", label: "Rooms" },
      { key: "wellness", label: "Wellness" },
      { key: "dining", label: "Dining" },
      { key: "menu", label: "Menu" },
      { key: "gallery", label: "Gallery" },
      { key: "contact", label: "Contact" }
    ],
    sections: {
      home: {
        hero: {
          badge: "Didian Guesthouse",
          title: "Family-run lodge in a quiet mountain valley",
          description:
            "Didian Guesthouse is a fictional retreat in Green Valley. Timber interiors, the scent of firewood and personal hosting make every stay feel genuine.",
          highlights: [
            "Farm-to-table breakfast",
            "Herbal tub and sauna corner",
            "Guided hikes on nearby ridges"
          ]
        },
        intro: [
          "Every guest is welcomed like family – fresh bakes, timber warmth and our team ready with tips for the day.",
          "Whether you arrive from the slopes or a ridge hike, we help you slow down and enjoy the valley."],
        keyPoints: [
          "Private parking and station transfer",
          "Lounge with fireplace and library",
          "Tailored seasonal programme"
        ]
      },
      about: {
        title: "About us",
        paragraphs: [
          "Our family restored the lodge together with local artisans in 2024, keeping the original beams and clay plaster while adding modern comfort.",
          "Breakfast comes from neighbours in the valley and we gladly plan your daily adventures."],
        stats: [
          { label: "Restored", value: "2024" },
          { label: "Rooms", value: "8" },
          { label: "Suite", value: "1" },
          { label: "Guests / year", value: "3,200" }
        ]
      },
      story: {
        title: "About the lodge",
        paragraphs: [
          "The house once served shepherds. We kept its craft spirit – solid timber furniture, textiles woven nearby and floral folk patterns.",
          "Didian invites you to sit on the veranda, watch the pasture and share travel stories with fellow guests by the fireplace." ]
      },
      rooms: {
        title: "Rooms",
        intro: "Three room types combine natural materials, comfortable beds and services shaped around your rhythm.",
        items: [
          {
            name: "Ridge panoramic suite",
            size: "65 m²",
            sleeps: "2 – 4 guests",
            description: "Glass-fronted living room overlooking the valley, private infrared sauna and soaking tub.",
            perks: [
              "Private terrace",
              "Breakfast served in-suite",
              "Evening tea ritual"
            ],
            price: "from 210 EUR / night",
            image: roomImages.ridge,
            imageAlt: "Panoramic suite of Didian Guesthouse"
          },
          {
            name: "Shepherd family room",
            size: "42 m²",
            sleeps: "2 – 5 guests",
            description: "Kids' nook, reading swing corner and heated bathroom floor.",
            perks: [
              "Family welcome kit",
              "Daily trip suggestions",
              "Bedtime story corner"
            ],
            price: "from 165 EUR / night",
            image: roomImages.family,
            imageAlt: "Family room with seating"
          },
          {
            name: "Attic studio",
            size: "28 m²",
            sleeps: "1 – 2 guests",
            description: "Atmospheric loft with writing desk, acoustic treatment and forest view.",
            perks: [
              "Coffee & tea station",
              "Curated mountain playlist",
              "Access to the lounge library"
            ],
            price: "from 135 EUR / night",
            image: roomImages.attic,
            imageAlt: "Attic studio with timber beams"
          }
        ]
      },
      wellness: {
        title: "Wellness",
        description:
          "The wellness corner brings alpine herbs and wooden warmth for slow regeneration after the day outside.",
        features: [
          { title: "Herbal tub", detail: "Spruce needles and alpine herbs with meadow views." },
          { title: "Finnish sauna", detail: "Daily rituals with essential oils and gentle folk music." },
          { title: "Massage studio", detail: "Therapists focusing on relaxation and post-hike recovery." }
        ]
      },
      dining: {
        title: "Dining",
        description: "Our kitchen celebrates valley farms, seasonal recipes and evenings by the fireplace.",
        features: [
          { title: "Breakfast buffet", detail: "House-made bread, regional cheese and free-range eggs." },
          { title: "Dinner menu", detail: "Three-course tasting made from seasonal produce." },
          { title: "Shepherd snack", detail: "Afternoon soups, cakes and herbal lemonades." }
        ]
      },
      menu: {
        title: "Sample menu",
        description: "A glimpse of our favourites – the seasonal menu awaits your visit.",
        categories: [
          {
            name: "Breakfast",
            highlight: "Served 7:30 – 10:00",
            items: [
              { name: "House bread with herb butter", detail: "garden cress butter, soft-boiled valley egg", price: "7 EUR" },
              { name: "Didian oat bowl", detail: "oats, forest berries, hazelnuts, honey", price: "6 EUR" }
            ]
          },
          {
            name: "Mains",
            highlight: "Available 12:00 – 21:00",
            items: [
              { name: "Venison stew", detail: "red wine sauce, dumplings, lingonberry", price: "14 EUR" },
              { name: "Mountain trout", detail: "herb butter, roasted root vegetables", price: "15 EUR" }
            ]
          },
          {
            name: "Desserts & drinks",
            highlight: "Baked and brewed daily",
            items: [
              { name: "Didian cottage cheesecake", detail: "farm curd, rosehip coulis, salted caramel", price: "5 EUR" },
              { name: "Garden herbal tea", detail: "mint, lemon balm, thyme, valley honey", price: "3 EUR" }
            ]
          }
        ]
      },
      gallery: {
        title: "Gallery",
        description: "Lounge, restaurant, wellness and nearby trails captured for inspiration.",
        images: [
          { image: galleryImages.lounge, alt: "Lounge with fireplace", caption: "Library lounge ready for evening chats." },
          { image: galleryImages.dining, alt: "Dining table", caption: "Dinner plated with local ingredients." },
          { image: galleryImages.trail, alt: "Forest trail", caption: "Trail leading towards the ridge." },
          { image: galleryImages.spa, alt: "Herbal tub", caption: "Herbal soak prepared after a day outside." }
        ]
      },
      contact: {
        title: "Contact",
        description: "Front desk is open daily 8am – 9pm. Outside these hours we reply within 12 hours.",
        addressLabel: "Address",
        address: "Green Valley 128, 013 13 Lysá Lúka",
        phoneLabel: "Phone",
        phone: "+421 901 555 210",
        emailLabel: "E-mail",
        email: "hello@didianlodge.com",
        hoursTitle: "Opening hours",
        hours: [
          { day: "Monday – Friday", hours: "08:00 – 21:00" },
          { day: "Saturday", hours: "08:00 – 22:00" },
          { day: "Sunday", hours: "08:00 – 20:00" }
        ],
        note: "Parking next to the lodge with optional station transfer." }
    }
  }
};

const languages = [
  { code: "sk", label: "SK" },
  { code: "en", label: "EN" }
];

function LanguageToolbar({ language, onSelect, label }) {
  return h("div", { className: "language-toolbar" }, [
    h("span", { key: "label", className: "language-label" }, ${label}:),
    h(
      "div",
      { key: "options", className: "language-options" },
      languages.map((option) =>
        h(
          "button",
          {
            key: option.code,
            type: "button",
            className: language-button,
            onClick: () => onSelect(option.code),
            "aria-pressed": option.code === language
          },
          option.label
        )
      )
    )
  ]);
}

function SideMenu({ items, onNavigate, active }) {
  return h(
    "aside",
    { className: "side-menu" },
    h(
      "ul",
      { className: "side-menu-list" },
      items.map((item) =>
        h(
          "li",
          { key: item.key },
          h(
            "button",
            {
              type: "button",
              className: side-menu-button,
              onClick: () => onNavigate(item.key)
            },
            item.label
          )
        )
      )
    )
  );
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

function MenuCategory({ category }) {
  return h("article", { className: "menu-card" }, [
    h("div", { key: "header", className: "menu-card-header" }, [
      h("h3", { key: "name" }, category.name),
      category.highlight ? h("span", { key: "highlight", className: "menu-highlight" }, category.highlight) : null
    ]),
    h(
      "ul",
      { key: "items", className: "menu-item-list" },
      category.items.map((item) =>
        h("li", { key: item.name, className: "menu-item" }, [
          h("div", { key: "text", className: "menu-item-text" }, [
            h("span", { key: "item-name", className: "menu-item-name" }, item.name),
            h("span", { key: "item-detail", className: "menu-item-detail" }, item.detail)
          ]),
          h("span", { key: "price", className: "menu-item-price" }, item.price)
        ])
      )
    )
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

function HeroCard({ hero }) {
  return h("div", { className: "hero-card" }, [
    h("figure", { key: "media", className: "hero-media" }, [
      h("img", { key: "image", src: heroImage, alt: hero.title, loading: "lazy" })
    ]),
    h("div", { key: "content", className: "hero-inner" }, [
      h("div", { key: "badge", className: "hero-badge" }, hero.badge),
      h("h1", { key: "title", className: "hero-title" }, hero.title),
      h("p", { key: "description", className: "hero-description" }, hero.description),
      h(
        "div",
        { key: "highlights", className: "hero-highlights" },
        hero.highlights.map((item, index) => h("span", { key: ${item}-, className: "hero-pill" }, item))
      )
    ])
  ]);
}

function renderSection(sectionKey, t) {
  const section = t.sections[sectionKey];

  switch (sectionKey) {
    case "home":
      return h("div", { className: "home-panel" }, [
        h(HeroCard, { key: "hero", hero: section.hero }),
        h(
          "div",
          { key: "intro", className: "home-intro" },
          section.intro.map((paragraph) => h("p", { key: paragraph }, paragraph))
        ),
        h(
          "ul",
          { key: "points", className: "home-points" },
          section.keyPoints.map((point) => h("li", { key: point }, point))
        )
      ]);
    case "about":
      return h("div", { className: "section about-section" }, [
        h("div", { key: "intro", className: "section-intro" }, [
          h("h2", { key: "title", className: "section-title" }, section.title),
          ...section.paragraphs.map((paragraph) => h("p", { key: paragraph, className: "section-text" }, paragraph))
        ]),
        h(
          "div",
          { key: "stats", className: "stats-grid" },
          section.stats.map((stat) =>
            h("div", { key: stat.label, className: "stat-card" }, [
              h("span", { key: "value", className: "stat-value" }, stat.value),
              h("span", { key: "label", className: "stat-label" }, stat.label)
            ])
          )
        )
      ]);
    case "story":
      return h("div", { className: "section story-section" }, [
        h("h2", { key: "title", className: "section-title" }, section.title),
        ...section.paragraphs.map((paragraph) => h("p", { key: paragraph, className: "section-text" }, paragraph))
      ]);
    case "rooms":
      return h("div", { className: "section rooms-section" }, [
        h("h2", { key: "title", className: "section-title" }, section.title),
        h("p", { key: "intro", className: "section-text" }, section.intro),
        h(
          "div",
          { key: "grid", className: "rooms-grid" },
          section.items.map((item) => h(RoomCard, { key: item.name, item }))
        )
      ]);
    case "wellness":
    case "dining":
      return h("div", { className: "section" }, [
        h("h2", { key: "title", className: "section-title" }, section.title),
        h("p", { key: "description", className: "section-text" }, section.description),
        h(
          "div",
          { key: "features", className: "feature-grid" },
          section.features.map((feature) =>
            h("article", { key: feature.title, className: "feature-card" }, [
              h("h3", { key: "title" }, feature.title),
              h("p", { key: "detail" }, feature.detail)
            ])
          )
        )
      ]);
    case "menu":
      return h("div", { className: "section menu-section" }, [
        h("h2", { key: "title", className: "section-title" }, section.title),
        h("p", { key: "description", className: "section-text" }, section.description),
        h(
          "div",
          { key: "grid", className: "menu-grid" },
          section.categories.map((category) => h(MenuCategory, { key: category.name, category }))
        )
      ]);
    case "gallery":
      return h("div", { className: "section gallery-section" }, [
        h("h2", { key: "title", className: "section-title" }, section.title),
        h("p", { key: "description", className: "section-text" }, section.description),
        h(
          "div",
          { key: "grid", className: "gallery-grid" },
          section.images.map((item) =>
            h("figure", { key: item.caption, className: "gallery-card" }, [
              h("img", { key: "image", className: "gallery-image", src: item.image, alt: item.alt, loading: "lazy" }),
              h("figcaption", { key: "caption", className: "gallery-caption" }, item.caption)
            ])
          )
        )
      ]);
    case "contact":
      return h("div", { className: "section contact-section" }, [
        h("h2", { key: "title", className: "section-title" }, section.title),
        h("p", { key: "description", className: "section-text" }, section.description),
        h("div", { key: "grid", className: "contact-grid" }, [
          h("div", { key: "address", className: "contact-card" }, [
            h("h3", { key: "label" }, section.addressLabel),
            h("p", { key: "value" }, section.address)
          ]),
          h("div", { key: "phone", className: "contact-card" }, [
            h("h3", { key: "label" }, section.phoneLabel),
            h("a", { key: "link", href: 	el: }, section.phone)
          ]),
          h("div", { key: "email", className: "contact-card" }, [
            h("h3", { key: "label" }, section.emailLabel),
            h("a", { key: "link", href: mailto: }, section.email)
          ]),
          h(ContactHours, { key: "hours", title: section.hoursTitle, hours: section.hours })
        ]),
        h("p", { key: "note", className: "section-note" }, section.note)
      ]);
    default:
      return null;
  }
}

export default function App() {
  const [language, setLanguage] = useState("sk");
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[language];

  return h("div", { className: "site-wrapper" }, [
    h("header", { key: "topbar", className: "topbar" }, [
      h("div", { key: "brand", className: "brand" }, [
        h("div", { key: "mark", className: "brand-mark" }, "D"),
        h("div", { key: "text", className: "brand-text" }, [
          h("span", { key: "name", className: "brand-name" }, "Didian"),
          h("span", { key: "badge", className: "brand-sub" }, "Guesthouse")
        ])
      ]),
      h(LanguageToolbar, {
        key: "lang",
        language,
        onSelect: setLanguage,
        label: t.languageLabel
      })
    ]),
    h("main", { key: "main", className: "main-content" }, [
      h("div", { key: "content", className: "content-layout" }, [
        h(SideMenu, {
          key: "side",
          items: t.menuItems,
          active: activeSection,
          onNavigate: setActiveSection
        }),
        h("div", { key: "panel", className: "section-stack" }, [
          renderSection(activeSection, t)
        ])
      ])
    ]),
    h("footer", { key: "footer", className: "site-footer" }, "© 2025 Didian Guesthouse – showcase project.")
  ]);
}

