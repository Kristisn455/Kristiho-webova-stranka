const h = window.React.createElement;

const athleteProfile = {
  name: 'Didian Genicek',
  tagline: 'Profesionálny hráč vodného póla & taktický vizionár',
  biography: `Didian Genicek je smerodajnou postavou moderného vodného póla. Narodil sa v mestskom prístave Lysport a už ako dieťa
  trénoval v prístavných bazénoch. Svoj debut v profesionálnej lige absolvoval v osemnástich rokoch a odvtedy vedie tím Lysport Leviathans
  k sérii trofejí. Je známy najmä schopnosťou čítať hru a bleskovými kontranábehmi, ktoré rozkladajú obrany súpera.`,
};

const highlightStats = [
  { label: 'Góly v sezóne 2024', value: 87 },
  { label: 'Asistencie', value: 56 },
  { label: 'Vyhraté sprinty', value: 41 },
  { label: 'Priemerný čas v bazéne', value: '29:17 min' },
];

const accolades = [
  { year: 2024, title: 'MVP Európskej ligy', detail: 'Ako kapitán priviedol Lysport Leviathans k majstrovskému titulu.' },
  { year: 2023, title: 'Zlatá čiapka', detail: 'Najlepší strelec finále Svetového pohára.' },
  { year: 2021, title: 'Defenzívna kotva roka', detail: 'Najmenej inkasovaných gólov pri jeho prítomnosti v bazéne.' },
];

const timeline = [
  { year: '2014', event: 'Prvé juniorské majstrovstvá – debut za Lysport Tidebreakers.' },
  { year: '2017', event: 'Podpis profesionálnej zmluvy a rýchly posun do základnej zostavy.' },
  { year: '2019', event: 'Rozhodujúci gól v semifinále Svetového pohára – prvé veľké zlato.' },
  { year: '2022', event: 'Založenie akadémie pre deti z pobrežných komunít.' },
  { year: '2024', event: 'Rekordných 87 gólov v sezóne a neporazená domáca liga.' },
];

const upcomingMatches = [
  { opponent: 'Riviera Barracudas', date: '12. júl 2025', venue: 'Akvadóm Lysport', detail: 'Kľúčový duel o priečku v Lige oceánov.' },
  { opponent: 'Nordhaven Maelstrom', date: '26. júl 2025', venue: 'Severné športové centrum', detail: 'Očakávaná odveta po napínavom finále minulý rok.' },
  { opponent: 'Sicilia Sirens', date: '9. august 2025', venue: 'Sirens Arena', detail: 'Charitatívny zápas podporujúci čistotu oceánov.' },
];

const quotes = [
  { source: 'Trénerka Mira Volanská', text: 'Didian číta vodu tak, ako iní čítajú hudbu. Jeho útoky majú rytmus, ktorý zlomí každú obranu.' },
  { source: 'Spoluhráč Dario Kellen', text: 'Stačí, že zdvihne ruku a celý tím vie, čo bude nasledovať. Je motor aj kompas nášho klubu.' },
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
  return h('main', { className: 'page-shell' }, [
    h('header', { key: 'hero', className: 'hero' }, [
      h('div', { key: 'badge', className: 'hero-badge' }, 'Vodné pólo'),
      h('h1', { key: 'name' }, athleteProfile.name),
      h('p', { key: 'tagline', className: 'hero-tagline' }, athleteProfile.tagline),
      h('a', { key: 'cta', href: '#matches', className: 'hero-cta' }, 'Pozri nadchádzajúce zápasy'),
    ]),

    h('section', { key: 'bio', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: 'Príbeh medzi žralokmi' }),
      h('p', { key: 'bio', className: 'body-text' }, athleteProfile.biography),
    ]),

    h('section', { key: 'stats', className: 'section' }, [
      h(SectionHeading, { key: 'heading', title: 'Čísla, ktoré definujú sezónu' }),
      h('div', { key: 'grid', className: 'stat-grid' }, highlightStats.map((stat) => h(StatCard, { key: stat.label, ...stat }))),
    ]),

    h('section', { key: 'accolades', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: 'Trofeje & ocenenia' }),
      h('ul', { key: 'list', className: 'accolade-list' }, accolades.map((item) => h('li', { key: item.year, className: 'accolade-item' }, [
        h('span', { key: 'year', className: 'accolade-year' }, item.year),
        h('div', { key: 'content', className: 'accolade-content' }, [
          h('h3', { key: 'title' }, item.title),
          h('p', { key: 'detail' }, item.detail),
        ]),
      ]))),
    ]),

    h('section', { key: 'timeline', className: 'section card timeline-card' }, [
      h(SectionHeading, { key: 'heading', title: 'Časová os kariéry' }),
      h('ul', { key: 'timeline', className: 'timeline' }, timeline.map((item) => h(TimelineItem, { key: item.year, ...item }))),
    ]),

    h('section', { key: 'quotes', className: 'section' }, [
      h(SectionHeading, { key: 'heading', title: 'Hlasy z bazéna' }),
      h('div', { key: 'quote-grid', className: 'quote-grid' }, quotes.map((item, index) => h(QuoteCard, { key: index, ...item }))),
    ]),

    h('section', { key: 'matches', id: 'matches', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: 'Nadchádzajúce zápasy', subtitle: 'Pripravte sa na ďalší príliv adrenalínu' }),
      h('div', { key: 'matches-grid', className: 'match-grid' }, upcomingMatches.map((match) => h(MatchCard, { key: match.opponent, ...match }))),
    ]),

    h('footer', { key: 'footer', className: 'footer' }, [
      h('p', { key: 'note' }, 'Fiktívny profil vytvorený pre tréningové účely.'),
      h('p', { key: 'cta' }, 'Sledujte Didiana na sociálnych sieťach – #GenicekWave'),
    ]),
  ]);
}
