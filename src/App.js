const h = window.React.createElement;

const translations = {
  sk: {
    languageName: 'Slovenčina',
    languageLabel: 'Jazyk',
    heroBadge: 'Vodné pólo',
    heroTagline: 'Profesionálny hráč vodného póla & taktický vizionár',
    heroCta: 'Pozri nadchádzajúce zápasy',
    biographyTitle: 'Príbeh medzi žralokmi',
    biography: `Didian Genicek je smerodajnou postavou moderného vodného póla. Narodil sa v mestskom prístave Lysport a už ako dieťa
    trénoval v prístavných bazénoch. Svoj debut v profesionálnej lige absolvoval v osemnástich rokoch a odvtedy vedie tím Lysport Leviathans
    k sérii trofejí. Je známy najmä schopnosťou čítať hru a bleskovými kontranábehmi, ktoré rozkladajú obrany súpera.`,
    statsTitle: 'Čísla, ktoré definujú sezónu',
    stats: [
      { label: 'Góly v sezóne 2024', value: '87' },
      { label: 'Asistencie', value: '56' },
      { label: 'Vyhraté sprinty', value: '41' },
      { label: 'Priemerný čas v bazéne', value: '29:17 min' },
    ],
    accoladesTitle: 'Trofeje & ocenenia',
    accolades: [
      { year: '2024', title: 'MVP Európskej ligy', detail: 'Ako kapitán priviedol Lysport Leviathans k majstrovskému titulu.' },
      { year: '2023', title: 'Zlatá čiapka', detail: 'Najlepší strelec finále Svetového pohára.' },
      { year: '2021', title: 'Defenzívna kotva roka', detail: 'Najmenej inkasovaných gólov pri jeho prítomnosti v bazéne.' },
    ],
    timelineTitle: 'Časová os kariéry',
    timeline: [
      { year: '2014', event: 'Prvé juniorské majstrovstvá – debut za Lysport Tidebreakers.' },
      { year: '2017', event: 'Podpis profesionálnej zmluvy a rýchly posun do základnej zostavy.' },
      { year: '2019', event: 'Rozhodujúci gól v semifinále Svetového pohára – prvé veľké zlato.' },
      { year: '2022', event: 'Založenie akadémie pre deti z pobrežných komunít.' },
      { year: '2024', event: 'Rekordných 87 gólov v sezóne a neporazená domáca liga.' },
    ],
    quotesTitle: 'Hlasy z bazéna',
    quotes: [
      { source: 'Trénerka Mira Volanská', text: 'Didian číta vodu tak, ako iní čítajú hudbu. Jeho útoky majú rytmus, ktorý zlomí každú obranu.' },
      { source: 'Spoluhráč Dario Kellen', text: 'Stačí, že zdvihne ruku a celý tím vie, čo bude nasledovať. Je motor aj kompas nášho klubu.' },
    ],
    matchesTitle: 'Nadchádzajúce zápasy',
    matchesSubtitle: 'Pripravte sa na ďalší príliv adrenalínu',
    matches: [
      { opponent: 'Riviera Barracudas', date: '12. júl 2025', venue: 'Akvadóm Lysport', detail: 'Kľúčový duel o priečku v Lige oceánov.' },
      { opponent: 'Nordhaven Maelstrom', date: '26. júl 2025', venue: 'Severné športové centrum', detail: 'Očakávaná odveta po napínavom finále minulý rok.' },
      { opponent: 'Sicilia Sirens', date: '9. august 2025', venue: 'Sirens Arena', detail: 'Charitatívny zápas podporujúci čistotu oceánov.' },
    ],
    footerNote: 'Fiktívny profil vytvorený pre tréningové účely.',
    footerCta: 'Sledujte Didiana na sociálnych sieťach – #GenicekWave',
  },
  cs: {
    languageName: 'Čeština',
    languageLabel: 'Jazyk',
    heroBadge: 'Vodní pólo',
    heroTagline: 'Profesionální hráč vodního póla & taktický vizionář',
    heroCta: 'Podívej se na nadcházející zápasy',
    biographyTitle: 'Příběh mezi žraloky',
    biography: `Didian Genicek je určující postavou moderního vodního póla. Narodil se v přístavním městě Lysport a už jako dítě trénoval v dokových bazénech.
    Profesionální debut si odbyl v osmnácti letech a od té doby vede Lysport Leviathans k sérii trofejí. Proslavil se bleskovými protiútoky a přesným čtením hry.`,
    statsTitle: 'Čísla, která definují sezónu',
    stats: [
      { label: 'Góly v sezóně 2024', value: '87' },
      { label: 'Asistence', value: '56' },
      { label: 'Vyhrané sprinty', value: '41' },
      { label: 'Průměrný čas ve vodě', value: '29:17 min' },
    ],
    accoladesTitle: 'Trofeje & ocenění',
    accolades: [
      { year: '2024', title: 'MVP Evropské ligy', detail: 'Jako kapitán dovedl Lysport Leviathans k mistrovskému titulu.' },
      { year: '2023', title: 'Zlatá čepice', detail: 'Nejlepší střelec finále Světového poháru.' },
      { year: '2021', title: 'Obranná kotva roku', detail: 'Nejméně inkasovaných gólů s ním v bazénu.' },
    ],
    timelineTitle: 'Časová osa kariéry',
    timeline: [
      { year: '2014', event: 'První juniorské mistrovství – debut za Lysport Tidebreakers.' },
      { year: '2017', event: 'Podpis profesionální smlouvy a rychlý posun do základní sestavy.' },
      { year: '2019', event: 'Rozhodující gól v semifinále Světového poháru – první velké zlato.' },
      { year: '2022', event: 'Založení akademie pro děti z pobřežních komunit.' },
      { year: '2024', event: 'Rekordních 87 gólů v sezóně a neporazitelná domácí liga.' },
    ],
    quotesTitle: 'Hlasy z bazénu',
    quotes: [
      { source: 'Trenérka Mira Volanská', text: 'Didian čte vodu jako jiní čtou noty. Jeho útoky mají rytmus, který rozbije každou obranu.' },
      { source: 'Spoluhráč Dario Kellen', text: 'Stačí zvednout ruku a celý tým ví, co bude následovat. Je motorem i kompasem našeho klubu.' },
    ],
    matchesTitle: 'Nadcházející zápasy',
    matchesSubtitle: 'Připravte se na další příliv adrenalinu',
    matches: [
      { opponent: 'Riviera Barracudas', date: '12. července 2025', venue: 'Akvadóm Lysport', detail: 'Klíčový duel o místo v Lize oceánů.' },
      { opponent: 'Nordhaven Maelstrom', date: '26. července 2025', venue: 'Severní sportovní centrum', detail: 'Očekávaná odveta po napínavém finále minulý rok.' },
      { opponent: 'Sicilia Sirens', date: '9. srpna 2025', venue: 'Sirens Arena', detail: 'Charitativní zápas na podporu čistoty oceánů.' },
    ],
    footerNote: 'Fiktivní profil vytvořený pro tréninkové účely.',
    footerCta: 'Sledujte Didiana na sociálních sítích – #GenicekWave',
  },
  de: {
    languageName: 'Deutsch',
    languageLabel: 'Sprache',
    heroBadge: 'Wasserball',
    heroTagline: 'Professioneller Wasserballspieler & taktischer Visionär',
    heroCta: 'Bevorstehende Spiele ansehen',
    biographyTitle: 'Geschichte zwischen Haien',
    biography: `Didian Genicek gilt als prägende Figur des modernen Wasserballs. Er wuchs im Hafenviertel von Lysport auf und trainierte schon als Kind in den Dockbecken.
    Mit achtzehn gab er sein Profidebüt und führt seitdem die Lysport Leviathans von Titel zu Titel. Blitzschnelle Konter und ein unbestechliches Spielverständnis sind sein Markenzeichen.`,
    statsTitle: 'Zahlen der Saison',
    stats: [
      { label: 'Tore in der Saison 2024', value: '87' },
      { label: 'Vorlagen', value: '56' },
      { label: 'Gewonnene Anschwimmen', value: '41' },
      { label: 'Durchschnittliche Zeit im Wasser', value: '29:17 Min.' },
    ],
    accoladesTitle: 'Trophäen & Auszeichnungen',
    accolades: [
      { year: '2024', title: 'MVP der EuroLeague', detail: 'Als Kapitän führte er die Lysport Leviathans zum Meistertitel.' },
      { year: '2023', title: 'Goldene Kappe', detail: 'Top-Torschütze im Finale des Weltpokals.' },
      { year: '2021', title: 'Defensivanker des Jahres', detail: 'Die wenigsten Gegentreffer mit ihm im Wasser.' },
    ],
    timelineTitle: 'Karrierehöhepunkte',
    timeline: [
      { year: '2014', event: 'Erstes Junioren-Championat – Debüt für die Lysport Tidebreakers.' },
      { year: '2017', event: 'Profivertrag und Sprung in die Startaufstellung.' },
      { year: '2019', event: 'Entscheidendes Tor im Halbfinale des Weltpokals – erstes großes Gold.' },
      { year: '2022', event: 'Gründung einer Akademie für Kinder aus Küstengemeinden.' },
      { year: '2024', event: '87 Tore in der Saison und eine ungeschlagene Heimliga.' },
    ],
    quotesTitle: 'Stimmen aus dem Becken',
    quotes: [
      { source: 'Trainerin Mira Volanská', text: 'Didian liest das Wasser wie andere Musik. Seine Angriffe haben einen Rhythmus, der jede Abwehr bricht.' },
      { source: 'Mitspieler Dario Kellen', text: 'Ein Handzeichen von ihm genügt und das ganze Team kennt den Plan. Er ist Motor und Kompass unseres Klubs.' },
    ],
    matchesTitle: 'Bevorstehende Spiele',
    matchesSubtitle: 'Mach dich bereit für die nächste Adrenalinwelle',
    matches: [
      { opponent: 'Riviera Barracudas', date: '12. Juli 2025', venue: 'Akvadóm Lysport', detail: 'Schlüsselduell um die Spitze der Ozeanliga.' },
      { opponent: 'Nordhaven Maelstrom', date: '26. Juli 2025', venue: 'Nordisches Sportzentrum', detail: 'Erwartetes Rückspiel nach dem packenden Finale im Vorjahr.' },
      { opponent: 'Sicilia Sirens', date: '9. August 2025', venue: 'Sirens Arena', detail: 'Charity-Spiel zur Unterstützung sauberer Ozeane.' },
    ],
    footerNote: 'Fiktives Profil für Trainingszwecke erstellt.',
    footerCta: 'Folge Didian in den sozialen Medien – #GenicekWave',
  },
  en: {
    languageName: 'English',
    languageLabel: 'Language',
    heroBadge: 'Water Polo',
    heroTagline: 'Professional water polo player & tactical visionary',
    heroCta: 'See upcoming fixtures',
    biographyTitle: 'Story Among Sharks',
    biography: `Didian Genicek is a defining figure in modern water polo. Raised in the harbor city of Lysport, he trained in dockside pools from childhood.
    He made his pro debut at eighteen and has led the Lysport Leviathans to a string of trophies ever since. Lightning-fast counterattacks and uncanny game reading are his signature.`,
    statsTitle: 'Season-defining numbers',
    stats: [
      { label: 'Goals in the 2024 season', value: '87' },
      { label: 'Assists', value: '56' },
      { label: 'Sprints won', value: '41' },
      { label: 'Average time in the water', value: '29:17 min' },
    ],
    accoladesTitle: 'Trophies & accolades',
    accolades: [
      { year: '2024', title: 'Euro League MVP', detail: 'Captain who guided the Lysport Leviathans to the championship.' },
      { year: '2023', title: 'Golden Cap', detail: 'Top scorer in the World Cup final.' },
      { year: '2021', title: 'Defensive Anchor of the Year', detail: 'Fewest goals conceded with him in the pool.' },
    ],
    timelineTitle: 'Career timeline',
    timeline: [
      { year: '2014', event: 'First junior championship – debut for the Lysport Tidebreakers.' },
      { year: '2017', event: 'Signed pro contract and moved straight into the starting lineup.' },
      { year: '2019', event: 'Decisive goal in the World Cup semi-final – first major gold.' },
      { year: '2022', event: 'Founded an academy for kids from coastal communities.' },
      { year: '2024', event: 'Record 87 goals in the season and an unbeaten home league run.' },
    ],
    quotesTitle: 'Voices from the pool',
    quotes: [
      { source: 'Coach Mira Volanská', text: 'Didian reads the water the way others read music. His attacks carry a rhythm that cracks any defense.' },
      { source: 'Teammate Dario Kellen', text: 'The moment he raises his hand the whole crew knows the plan. He is the engine and compass of our club.' },
    ],
    matchesTitle: 'Upcoming fixtures',
    matchesSubtitle: 'Get ready for another surge of adrenaline',
    matches: [
      { opponent: 'Riviera Barracudas', date: '12 July 2025', venue: 'Akvadóm Lysport', detail: 'Top-of-the-table clash in the Ocean League.' },
      { opponent: 'Nordhaven Maelstrom', date: '26 July 2025', venue: 'Northern Sports Center', detail: 'Anticipated rematch after last season’s thriller.' },
      { opponent: 'Sicilia Sirens', date: '9 August 2025', venue: 'Sirens Arena', detail: 'Charity match supporting cleaner oceans.' },
    ],
    footerNote: 'Fictional profile created for practice purposes.',
    footerCta: 'Follow Didian on social media – #GenicekWave',
  },
  es: {
    languageName: 'Español',
    languageLabel: 'Idioma',
    heroBadge: 'Waterpolo',
    heroTagline: 'Jugador profesional de waterpolo y visionario táctico',
    heroCta: 'Ver próximos partidos',
    biographyTitle: 'Historia entre tiburones',
    biography: `Didian Genicek es una figura clave del waterpolo moderno. Nació en el puerto de Lysport y desde niño se entrenó en las piscinas del muelle.
    Debutó como profesional a los dieciocho años y desde entonces lidera a los Lysport Leviathans en una racha de trofeos. Sus contragolpes relámpago y su lectura perfecta del juego son su sello.`,
    statsTitle: 'Números que definen la temporada',
    stats: [
      { label: 'Goles en la temporada 2024', value: '87' },
      { label: 'Asistencias', value: '56' },
      { label: 'Sprints ganados', value: '41' },
      { label: 'Tiempo medio en el agua', value: '29:17 min' },
    ],
    accoladesTitle: 'Trofeos y reconocimientos',
    accolades: [
      { year: '2024', title: 'MVP de la Liga Europea', detail: 'Como capitán llevó a Lysport Leviathans al título.' },
      { year: '2023', title: 'Gorra dorada', detail: 'Máximo goleador en la final de la Copa del Mundo.' },
      { year: '2021', title: 'Ancla defensiva del año', detail: 'Menos goles encajados con él en el agua.' },
    ],
    timelineTitle: 'Línea de tiempo profesional',
    timeline: [
      { year: '2014', event: 'Primer campeonato juvenil: debut con los Lysport Tidebreakers.' },
      { year: '2017', event: 'Firma del contrato profesional y salto al quinteto inicial.' },
      { year: '2019', event: 'Gol decisivo en la semifinal de la Copa del Mundo: primer gran oro.' },
      { year: '2022', event: 'Fundación de una academia para niños de comunidades costeras.' },
      { year: '2024', event: '87 goles en la temporada y liga local invicta.' },
    ],
    quotesTitle: 'Voces desde la piscina',
    quotes: [
      { source: 'Entrenadora Mira Volanská', text: 'Didian lee el agua como otros leen música. Sus ataques tienen un ritmo que rompe cualquier defensa.' },
      { source: 'Compañero Dario Kellen', text: 'Le basta levantar la mano para que todo el equipo sepa el plan. Es el motor y la brújula del club.' },
    ],
    matchesTitle: 'Próximos partidos',
    matchesSubtitle: 'Prepárate para otra oleada de adrenalina',
    matches: [
      { opponent: 'Riviera Barracudas', date: '12 de julio de 2025', venue: 'Akvadóm Lysport', detail: 'Duelo clave por la cima de la Liga de los Océanos.' },
      { opponent: 'Nordhaven Maelstrom', date: '26 de julio de 2025', venue: 'Centro Deportivo del Norte', detail: 'Revancha esperada tras la final del año pasado.' },
      { opponent: 'Sicilia Sirens', date: '9 de agosto de 2025', venue: 'Sirens Arena', detail: 'Partido benéfico a favor de océanos más limpios.' },
    ],
    footerNote: 'Perfil ficticio creado con fines de práctica.',
    footerCta: 'Sigue a Didian en redes sociales – #GenicekWave',
  },
  fr: {
    languageName: 'Français',
    languageLabel: 'Langue',
    heroBadge: 'Water-polo',
    heroTagline: 'Joueur professionnel de water-polo et stratège visionnaire',
    heroCta: 'Voir les prochains matchs',
    biographyTitle: 'Histoire parmi les requins',
    biography: `Didian Genicek est une figure majeure du water-polo moderne. Né dans le port de Lysport, il s’est entraîné dès l’enfance dans les bassins du quai.
    À dix-huit ans il fait ses débuts professionnels et mène depuis les Lysport Leviathans de titre en titre. Ses contre-attaques fulgurantes et sa lecture du jeu font sa renommée.`,
    statsTitle: 'Chiffres de la saison',
    stats: [
      { label: 'Buts en saison 2024', value: '87' },
      { label: 'Passes décisives', value: '56' },
      { label: 'Sprints gagnés', value: '41' },
      { label: 'Temps moyen dans l’eau', value: '29:17 min' },
    ],
    accoladesTitle: 'Trophées & distinctions',
    accolades: [
      { year: '2024', title: 'MVP de la Ligue européenne', detail: 'En capitaine, il a conduit les Lysport Leviathans au titre.' },
      { year: '2023', title: 'Bonnet d’or', detail: 'Meilleur buteur de la finale de la Coupe du monde.' },
      { year: '2021', title: 'Ancre défensive de l’année', detail: 'Le moins de buts encaissés lorsqu’il est dans le bassin.' },
    ],
    timelineTitle: 'Chronologie de carrière',
    timeline: [
      { year: '2014', event: 'Premiers championnats juniors – débuts avec les Lysport Tidebreakers.' },
      { year: '2017', event: 'Signature du contrat professionnel et place de titulaire.' },
      { year: '2019', event: 'But décisif en demi-finale de Coupe du monde – premier grand titre.' },
      { year: '2022', event: 'Fondation d’une académie pour les enfants des côtes.' },
      { year: '2024', event: '87 buts sur la saison et championnat local invaincu.' },
    ],
    quotesTitle: 'Voix du bassin',
    quotes: [
      { source: 'Entraîneuse Mira Volanská', text: 'Didian lit l’eau comme d’autres lisent une partition. Ses attaques ont un rythme qui brise n’importe quelle défense.' },
      { source: 'Coéquipier Dario Kellen', text: 'Un simple geste de sa main et toute l’équipe comprend le plan. Il est le moteur et la boussole du club.' },
    ],
    matchesTitle: 'Matches à venir',
    matchesSubtitle: 'Préparez-vous à une nouvelle vague d’adrénaline',
    matches: [
      { opponent: 'Riviera Barracudas', date: '12 juillet 2025', venue: 'Akvadóm Lysport', detail: 'Match clé pour le sommet de la Ligue des Océans.' },
      { opponent: 'Nordhaven Maelstrom', date: '26 juillet 2025', venue: 'Centre sportif du Nord', detail: 'Revanche attendue après la finale palpitante de l’an passé.' },
      { opponent: 'Sicilia Sirens', date: '9 août 2025', venue: 'Sirens Arena', detail: 'Rencontre caritative pour des océans plus propres.' },
    ],
    footerNote: 'Profil fictif créé à des fins d’entraînement.',
    footerCta: 'Suivez Didian sur les réseaux sociaux – #GenicekWave',
  },
};

const languages = [
  { code: 'sk', label: 'Slovenčina' },
  { code: 'cs', label: 'Čeština' },
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];

function SectionHeading({ title, subtitle }) {
  return h('div', { className: 'section-heading' }, [
    h('h2', { key: 'title' }, title),
    subtitle ? h('p', { key: 'subtitle', className: 'section-subtitle' }, subtitle) : null,
  ]);
}

function StatCard({ label, value }) {
  return h('article', { className: 'stat-card' }, [
    h('span', { key: 'value', className: 'stat-value' }, value),
    h('span', { key: 'label', className: 'stat-label' }, label),
  ]);
}

function TimelineItem({ year, event }) {
  return h('li', { className: 'timeline-item' }, [
    h('span', { key: 'year', className: 'timeline-year' }, year),
    h('p', { key: 'event', className: 'timeline-event' }, event),
  ]);
}

function MatchCard({ opponent, date, venue, detail }) {
  return h('article', { className: 'match-card' }, [
    h('h3', { key: 'opponent' }, opponent),
    h('p', { key: 'date', className: 'match-meta' }, date),
    h('p', { key: 'venue', className: 'match-meta' }, venue),
    h('p', { key: 'detail', className: 'match-detail' }, detail),
  ]);
}

function QuoteCard({ source, text }) {
  return h('blockquote', { className: 'quote-card' }, [
    h('p', { key: 'text' }, `"${text}"`),
    h('cite', { key: 'source' }, source),
  ]);
}

export default function App() {
  const [language, setLanguage] = window.React.useState('sk');
  const t = translations[language];

  return h('main', { className: 'page-shell' }, [
    h('div', { key: 'lang', className: 'language-toolbar' }, [
      h('span', { key: 'label', className: 'language-label' }, `${t.languageLabel}:`),
      h('div', { key: 'options', className: 'language-options' }, languages.map((option) => h('button', {
        key: option.code,
        type: 'button',
        className: `language-button${option.code === language ? ' active' : ''}`,
        onClick: () => setLanguage(option.code),
        'aria-pressed': option.code === language,
      }, option.label))),
    ]),

    h('header', { key: 'hero', className: 'hero' }, [
      h('div', { key: 'badge', className: 'hero-badge' }, t.heroBadge),
      h('h1', { key: 'name' }, 'Didian Genicek'),
      h('p', { key: 'tagline', className: 'hero-tagline' }, t.heroTagline),
      h('a', { key: 'cta', href: '#matches', className: 'hero-cta' }, t.heroCta),
    ]),

    h('section', { key: 'bio', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: t.biographyTitle }),
      h('p', { key: 'bio', className: 'body-text' }, t.biography),
    ]),

    h('section', { key: 'stats', className: 'section' }, [
      h(SectionHeading, { key: 'heading', title: t.statsTitle }),
      h('div', { key: 'grid', className: 'stat-grid' }, t.stats.map((stat) => h(StatCard, { key: stat.label, ...stat }))),
    ]),

    h('section', { key: 'accolades', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: t.accoladesTitle }),
      h('ul', { key: 'list', className: 'accolade-list' }, t.accolades.map((item) => h('li', { key: `${item.year}-${item.title}`, className: 'accolade-item' }, [
        h('span', { key: 'year', className: 'accolade-year' }, item.year),
        h('div', { key: 'content', className: 'accolade-content' }, [
          h('h3', { key: 'title' }, item.title),
          h('p', { key: 'detail' }, item.detail),
        ]),
      ]))),
    ]),

    h('section', { key: 'timeline', className: 'section card timeline-card' }, [
      h(SectionHeading, { key: 'heading', title: t.timelineTitle }),
      h('ul', { key: 'timeline', className: 'timeline' }, t.timeline.map((item) => h(TimelineItem, { key: `${item.year}-${item.event}`, ...item }))),
    ]),

    h('section', { key: 'quotes', className: 'section' }, [
      h(SectionHeading, { key: 'heading', title: t.quotesTitle }),
      h('div', { key: 'quote-grid', className: 'quote-grid' }, t.quotes.map((item, index) => h(QuoteCard, { key: `${item.source}-${index}`, ...item }))),
    ]),

    h('section', { key: 'matches', id: 'matches', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: t.matchesTitle, subtitle: t.matchesSubtitle }),
      h('div', { key: 'matches-grid', className: 'match-grid' }, t.matches.map((match) => h(MatchCard, { key: `${match.opponent}-${match.date}`, ...match }))),
    ]),

    h('footer', { key: 'footer', className: 'footer' }, [
      h('p', { key: 'note' }, t.footerNote),
      h('p', { key: 'cta' }, t.footerCta),
    ]),
  ]);
}
