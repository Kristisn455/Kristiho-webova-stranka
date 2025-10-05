const h = React.createElement;

const athleteProfile = {
  name: 'Didian Genicek',
  tagline: 'Profesion�lny hr�� vodn�ho p�la & taktick� vizion�r',
  biography: `Didian Genicek je smerodajnou postavou modern�ho vodn�ho p�la. Narodil sa v mestskom pr�stave Lysport a u� ako die�a
  tr�noval v pr�stavn�ch baz�noch. Svoj debut v profesion�lnej lige absolvoval v osemn�stich rokoch a odvtedy vedie t�m Lysport Leviathans
  k s�rii trofej�. Je zn�my najm� schopnos�ou ��ta� hru a bleskov�mi kontran�behmi, ktor� rozkladaj� obrany s�pera.`,
};

const highlightStats = [
  { label: 'G�ly v sez�ne 2024', value: 87 },
  { label: 'Asistencie', value: 56 },
  { label: 'Vyhrat� sprinty', value: 41 },
  { label: 'Priemern� �as v baz�ne', value: '29:17 min' },
];

const accolades = [
  { year: 2024, title: 'MVP Eur�pskej ligy', detail: 'Ako kapit�n priviedol Lysport Leviathans k majstrovsk�mu titulu.' },
  { year: 2023, title: 'Zlat� �iapka', detail: 'Najlep�� strelec fin�le Svetov�ho poh�ra.' },
  { year: 2021, title: 'Defenz�vna kotva roka', detail: 'Najmenej inkasovan�ch g�lov pri jeho pr�tomnosti v baz�ne.' },
];

const timeline = [
  { year: '2014', event: 'Prv� juniorsk� majstrovstv� � debut za Lysport Tidebreakers.' },
  { year: '2017', event: 'Podpis profesion�lnej zmluvy a r�chly posun do z�kladnej zostavy.' },
  { year: '2019', event: 'Rozhoduj�ci g�l v semifin�le Svetov�ho poh�ra � prv� ve�k� zlato.' },
  { year: '2022', event: 'Zalo�enie akad�mie pre deti z pobre�n�ch komun�t.' },
  { year: '2024', event: 'Rekordn�ch 87 g�lov v sez�ne a neporazen� dom�ca liga.' },
];

const upcomingMatches = [
  { opponent: 'Riviera Barracudas', date: '12. j�l 2025', venue: 'Akvad�m Lysport', detail: 'K���ov� duel o prie�ku v Lige oce�nov.' },
  { opponent: 'Nordhaven Maelstrom', date: '26. j�l 2025', venue: 'Severn� �portov� centrum', detail: 'O�ak�van� odveta po nap�navom fin�le minul� rok.' },
  { opponent: 'Sicilia Sirens', date: '9. august 2025', venue: 'Sirens Arena', detail: 'Charitat�vny z�pas podporuj�ci �istotu oce�nov.' },
];

const quotes = [
  { source: 'Tr�nerka Mira Volansk�', text: 'Didian ��ta vodu tak, ako in� ��taj� hudbu. Jeho �toky maj� rytmus, ktor� zlom� ka�d� obranu.' },
  { source: 'Spoluhr�� Dario Kellen', text: 'Sta��, �e zdvihne ruku a cel� t�m vie, �o bude nasledova�. Je motor aj kompas n�ho klubu.' },
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
      h('div', { key: 'badge', className: 'hero-badge' }, 'Vodn� p�lo'),
      h('h1', { key: 'name' }, athleteProfile.name),
      h('p', { key: 'tagline', className: 'hero-tagline' }, athleteProfile.tagline),
      h('a', { key: 'cta', href: '#matches', className: 'hero-cta' }, 'Pozri nadch�dzaj�ce z�pasy'),
    ]),

    h('section', { key: 'bio', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: 'Pr�beh medzi �ralokmi' }),
      h('p', { key: 'bio', className: 'body-text' }, athleteProfile.biography),
    ]),

    h('section', { key: 'stats', className: 'section' }, [
      h(SectionHeading, { key: 'heading', title: '��sla, ktor� definuj� sez�nu' }),
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
      h(SectionHeading, { key: 'heading', title: '�asov� os kari�ry' }),
      h('ul', { key: 'timeline', className: 'timeline' }, timeline.map((item) => h(TimelineItem, { key: item.year, ...item }))),
    ]),

    h('section', { key: 'quotes', className: 'section' }, [
      h(SectionHeading, { key: 'heading', title: 'Hlasy z baz�na' }),
      h('div', { key: 'quote-grid', className: 'quote-grid' }, quotes.map((item, index) => h(QuoteCard, { key: index, ...item }))),
    ]),

    h('section', { key: 'matches', id: 'matches', className: 'section card' }, [
      h(SectionHeading, { key: 'heading', title: 'Nadch�dzaj�ce z�pasy', subtitle: 'Pripravte sa na �al�� pr�liv adrenal�nu' }),
      h('div', { key: 'matches-grid', className: 'match-grid' }, upcomingMatches.map((match) => h(MatchCard, { key: match.opponent, ...match }))),
    ]),

    h('footer', { key: 'footer', className: 'footer' }, [
      h('p', { key: 'note' }, 'Fikt�vny profil vytvoren� pre tr�ningov� ��ely.'),
      h('p', { key: 'cta' }, 'Sledujte Didiana na soci�lnych sie�ach � #GenicekWave'),
    ]),
  ]);
}
