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
    languageName: "Slovenčina",
    languageLabel: "Jazyk",
    nav: [
      { label: "Domov", target: "hero" },
      { label: "O penzióne", target: "about" },
      { label: "Izby", target: "rooms" },
      { label: "Relax", target: "wellness" },
      { label: "Gastronómia", target: "dining" },
      { label: "Menu", target: "menu" },
      { label: "Zážitky", target: "experiences" },
      { label: "Galéria", target: "gallery" },
      { label: "Kontakt", target: "contact" }
    ],
    hero: {
      badge: "Penzión Didian",
      title: "Rodinný penzión uprostred horskej doliny",
      description: "Didian je fiktívny penzión v Zelenej doline. Drevené interiéry, vôňa rúbaného dreva a osobná starostlivosť našej rodiny vytvárajú pobyt, ktorý pôsobí skutočne a útulne.",
      highlights: [
        "Raňajky z lokálnych fariem",
        "Wellness zóna s bylinkovou kaďou",
        "Sprievodca po okolitých hrebeňoch"
      ],
      ctaPrimary: "Pozrieť izby",
      ctaSecondary: "Pozrieť menu"
    },
    about: {
      title: "Ako vznikol penzión Didian",
      text: "Na mieste starej salašníckej usadlosti sme obnovili penzión s ôsmimi izbami a jednou panoramatickou suitou. Naša rodina ho vedie s dôrazom na remeselné detaily, poctivú kuchyňu a pokojné služby.",
      stats: [
        { label: "Rok obnovy", value: "2024" },
        { label: "Izby", value: "8" },
        { label: "Suita", value: "1" },
        { label: "Hostí ročne", value: "3 200" }
      ],
      note: "Penzión Didian je ukážkový projekt vytvorený pre potreby prezentácie."
    },
    rooms: {
      title: "Naše izby",
      subtitle: "Tri kategórie navrhnuté pre páry, rodiny aj sólo cestovateľov.",
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
      title: "Wellness & relax",
      description: "Malá wellness zóna ponúka bylinkovú kaďu, fínsku saunu a miestnosť na individuálne masáže.",
      features: [
        { title: "Bylinková kaďa", detail: "Smrekové ihličie a horské bylinky v teplej vode s výhľadom na lúku." },
        { title: "Fínska sauna", detail: "Denné rituály s éterickými olejmi a hudbou z hornej Oravy." },
        { title: "Masážny ateliér", detail: "Lokálni terapeuti so zameraním na relaxačné a športové techniky." }
      ]
    },
    dining: {
      title: "Kuchyňa Didian",
      description: "Reštaurácia podáva raňajky formou bufetu, trojchodové večere a popoludňajší snack bar.",
      features: [
        { title: "Raňajkový bufet", detail: "Domáce pečivo, regionálne syry a čerstvé vajíčka z farmy." },
        { title: "Večerné menu", detail: "Sezónne suroviny z okolitých fariem, servírované pri krbe." },
        { title: "Salašnícky snack", detail: "Polievky, domáce koláče a bylinkové limonády popoludní." }
      ]
    },
    menu: {
      title: "Jedálny lístok",
      description: "Menu sa mení podľa sezóny, no základné stálice ostávajú. Varíme z poctivých surovín od farmárov zo Zelenej doliny.",
      categories: [
        {
          name: "Raňajky",
          highlight: "Podávame 7:30 – 10:00",
          items: [
            { name: "Domáci chlieb s bylinkovým maslom", detail: "maslo so žeruchou, marinovaná pažítka, vajíčko na mäkko", price: "7 EUR" },
            { name: "Ovsená kaša Didian", detail: "ovsené vločky, lesné ovocie, lieskové orechy, med", price: "6 EUR" }
          ]
        },
        {
          name: "Hlavné jedlá",
          highlight: "Servírujeme 12:00 – 21:00",
          items: [
            { name: "Jelení guláš na víne", detail: "domáce noky, brusnicový džem, marinovaná cibuľka", price: "14 EUR" },
            { name: "Pstruh z horského potoka", detail: "bylinkové maslo, pečená koreňová zelenina, citrónová pena", price: "15 EUR" }
          ]
        },
        {
          name: "Dezerty a nápoje",
          highlight: "Pečieme a miešame denne",
          items: [
            { name: "Tvarožník Didian", detail: "tvaroh z farmy, šípkový rozvar, slaný karamel", price: "5 EUR" },
            { name: "Bylinkový čaj z našej záhrady", detail: "mäta, medovka, materina dúška, horský med", price: "3 EUR" }
          ]
        }
      ]
    },
    sideMenu: [
      { label: "O nás", target: "about" },
      { label: "Izby", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Gastronómia", target: "dining" },
      { label: "Jedálny lístok", target: "menu" },
      { label: "Zážitky", target: "experiences" },
      { label: "Fotogaléria", target: "gallery" },
      { label: "Referencie", target: "testimonials" },
      { label: "Kontakt", target: "contact" }
    ],
    experiences: {
      title: "Čo môžete zažiť",
      description: "Denne pripravujeme program od pohodových prechádzok až po remeselné workshopy.",
      highlights: [
        {
          title: "Vonku",
          items: ["Výstup na hrebeň Didiany", "Školená turistická prehliadka", "Večerné pozorovanie hviezd"]
        },
        {
          title: "Remeslá",
          items: ["Maľovanie ľudových ornamentov", "Výroba syra na salaši", "Kurz bylinkových sirupov"]
        },
        {
          title: "Spoločné chvíle",
          items: ["Folklórny večer pri ohnisku", "Filmový klub s horskou témou", "Degustácia lokálnych vín"]
        }
      ]
    },
    gallery: {
      title: "Fotogaléria",
      description: "Pohľad do salónika, reštaurácie, wellness aj na turistické trasy v okolí.",
      images: [
        { image: galleryImages.lounge, alt: "Salónik s krbom", caption: "Knižnica s krbom pre večerné posedenie." },
        { image: galleryImages.dining, alt: "Reštauračný stôl", caption: "Večera z lokálnych ingrediencií." },
        { image: galleryImages.trail, alt: "Lesný chodník", caption: "Chodník smerujúci na horský hrebeň." },
        { image: galleryImages.spa, alt: "Bylinková kaďa", caption: "Wellness kaďa s bylinkami a výhľadom." }
      ]
    },
    testimonials: {
      title: "Hovoria o nás",
      items: [
        { quote: "Pripomína pobyty u starých rodičov na dedine, ale s moderným komfortom.", name: "Marta", role: "rodinný víkend" },
        { quote: "Perfektné zázemie po cyklovýlete, večer sme si užili wellness.", name: "Peter", role: "pár z Trnavy" },
        { quote: "Deti milovali detský kútik a raňajky boli top.", name: "Novákovci", role: "rodinný pobyt" }
      ]
    },
    callToAction: {
      title: "Naplánujte si pobyt",
      text: "Napíšte nám, ktorý termín vám vyhovuje. Do 24 hodín pošleme ponuku s cenou a dostupnosťou.",
      primary: "Kontaktovať recepciu",
      secondary: "Pozrieť izby"
    },
    contact: {
      title: "Kontakt",
      description: "Recepcia je otvorená denne od 8:00 do 21:00. Mimo pracovných hodín odpovedáme do 12 hodín.",
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
    },
    footer: {
      note: "© 2025 Penzión Didian – ukážkový projekt."
    }
  },
  en: {
    languageName: "English",
    languageLabel: "Language",
    nav: [
      { label: "Home", target: "hero" },
      { label: "About", target: "about" },
      { label: "Rooms", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Dining", target: "dining" },
      { label: "Menu", target: "menu" },
      { label: "Experiences", target: "experiences" },
      { label: "Gallery", target: "gallery" },
      { label: "Contact", target: "contact" }
    ],
    hero: {
      badge: "Didian Guesthouse",
      title: "Family-run lodge in a quiet mountain valley",
      description: "The fictional Didian Guesthouse blends timber interiors, the scent of firewood and personal hosting from our family so every stay feels genuine.",
      highlights: [
        "Farm-to-table breakfast",
        "Herbal tub and sauna corner",
        "Guided hikes on nearby ridges"
      ],
      ctaPrimary: "View rooms",
      ctaSecondary: "See the menu"
    },
    about: {
      title: "Our story",
      text: "We restored an old shepherd estate into a guesthouse with eight rooms and one panoramic suite. Craft details, honest cuisine and unhurried service define the stay.",
      stats: [
        { label: "Restored", value: "2024" },
        { label: "Rooms", value: "8" },
        { label: "Suite", value: "1" },
        { label: "Guests / year", value: "3,200" }
      ],
      note: "Didian Guesthouse is a fictional showcase project."
    },
    rooms: {
      title: "Rooms",
      subtitle: "Three room types designed for couples, families and solo travellers.",
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
          description: "Dedicated kids' nook, reading swing corner and heated bathroom floor.",
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
      title: "Wellness & relax",
      description: "A compact wellness area with herbal tub, Finnish sauna and a dedicated massage room.",
      features: [
        { title: "Herbal tub", detail: "Spruce needles and alpine herbs in warm water overlooking the meadow." },
        { title: "Finnish sauna", detail: "Daily rituals with essential oils and gentle local music." },
        { title: "Massage studio", detail: "Certified therapists focusing on relaxation and post-hike recovery." }
      ]
    },
    dining: {
      title: "Dining",
      description: "Breakfast buffet, three-course dinners and an afternoon snack bar served daily.",
      features: [
        { title: "Breakfast buffet", detail: "House-made bread, regional cheese and free-range eggs." },
        { title: "Dinner menu", detail: "Seasonal produce from nearby farms, plated by the fireplace." },
        { title: "Shepherd snack", detail: "Soups, cakes and herbal lemonades in the afternoon." }
      ]
    },
    menu: {
      title: "Sample menu",
      description: "Menus change with the season; these signature dishes stay with us year-round.",
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
            { name: "Venison stew", detail: "red wine sauce, dumplings, lingonberry preserve", price: "14 EUR" },
            { name: "Mountain trout", detail: "herb butter, roasted root vegetables, lemon foam", price: "15 EUR" }
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
    sideMenu: [
      { label: "About", target: "about" },
      { label: "Rooms", target: "rooms" },
      { label: "Wellness", target: "wellness" },
      { label: "Dining", target: "dining" },
      { label: "Menu", target: "menu" },
      { label: "Experiences", target: "experiences" },
      { label: "Gallery", target: "gallery" },
      { label: "Testimonials", target: "testimonials" },
      { label: "Contact", target: "contact" }
    ],
    experiences: {
      title: "Experiences",
      description: "Daily programmes from relaxed walks to craft workshops.",
      highlights: [
        { title: "Outdoors", items: ["Hike to Didian ridge", "Guided village walk", "Stargazing around the fire"] },
        { title: "Craft", items: ["Painting folk patterns", "Cheese making class", "Herbal syrup workshop"] },
        { title: "Together", items: ["Folklore night", "Mountain film screening", "Regional wine tasting"] }
      ]
    },
    gallery: {
      title: "Gallery",
      description: "Lounge, restaurant, wellness and nearby trails captured for inspiration.",
      images: [
        { image: galleryImages.lounge, alt: "Lounge with fireplace", caption: "Library lounge with evening atmosphere." },
        { image: galleryImages.dining, alt: "Dining table", caption: "Dinner plated with local ingredients." },
        { image: galleryImages.trail, alt: "Forest trail", caption: "Trail leading towards the mountain ridge." },
        { image: galleryImages.spa, alt: "Herbal tub", caption: "Herbal spa tub prepared after a day outside." }
      ]
    },
    testimonials: {
      title: "Guest feedback",
      items: [
        { quote: "Feels like visiting grandparents in the countryside, only with better beds.", name: "Sarah", role: "family weekend" },
        { quote: "Perfect base after our cycling tour, and the wellness in the evening was ideal.", name: "Tom", role: "couple from Vienna" },
        { quote: "Kids loved the reading corner and breakfast was fantastic.", name: "Novak family", role: "family stay" }
      ]
    },
    callToAction: {
      title: "Plan your stay",
      text: "Tell us your preferred dates and we will send an offer with availability within 24 hours.",
      primary: "Contact reception",
      secondary: "View rooms"
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
      note: "Parking right next to the lodge. Station transfer available on request."
    },
    footer: {
      note: "© 2025 Didian Guesthouse – showcase project."
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

function SideMenu({ items, onNavigate }) {
  return h(
    "aside",
    { className: "side-menu" },
    h(
      "ul",
      { className: "side-menu-list" },
      items.map((item) =>
        h(
          "li",
          { key: item.target },
          h(
            "button",
            {
              type: "button",
              className: "side-menu-button",
              onClick: () => onNavigate(item.target)
            },
            item.label
          )
        )
      )
    )
  );
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

  const contentSections = [
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
    h("section", { key: "wellness", id: "wellness", className: "section wellness-section" }, [
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
    h("section", { key: "dining", id: "dining", className: "section dining-section" }, [
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
    h("section", { key: "menu", id: "menu", className: "section menu-section" }, [
      h("div", { key: "intro", className: "section-intro" }, [
        h("h2", { key: "title", className: "section-title" }, t.menu.title),
        h("p", { key: "text", className: "section-text" }, t.menu.description)
      ]),
      h(
        "div",
        { key: "grid", className: "menu-grid" },
        t.menu.categories.map((category) =>
          h(MenuCategory, { key: category.name, category })
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
  ];

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
        { key: "hero", id: "hero", className: "hero-section" },
        [
          h("div", { key: "hero-card", className: "hero-card" }, [
            h("figure", { key: "media", className: "hero-media" }, [
              h("img", {
                key: "hero-image",
                className: "hero-image",
                src: heroImage,
                alt: "Penzión Didian – horská drevenica",
                loading: "lazy"
              })
            ]),
            h("div", { key: "content", className: "hero-inner" }, [
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
                    onClick: () => scrollToSection("menu")
                  },
                  t.hero.ctaSecondary
                )
              ])
            ])
          ])
        ]
      ),
      h("div", { key: "content", className: "content-layout" }, [
        h(SideMenu, { key: "side", items: t.sideMenu, onNavigate: scrollToSection }),
        h("div", { key: "stack", className: "section-stack" }, contentSections)
      ])
    ]),
    h("footer", { key: "footer", className: "site-footer" }, t.footer.note)
  ]);
}
