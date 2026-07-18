/**
 * Единый источник контента сайта.
 *
 * Для замены текста, e-mail, Telegram или карточек не нужно искать строку в
 * компонентах: меняйте только этот файл. Структура проверяется TypeScript,
 * поэтому случайно пропущенное поле будет видно ещё до публикации.
 */

export type Work = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string[];
  image: string;
};

export const site = {
  meta: {
    title: "Dina Makarova — Author, Journalist, Filmmaker",
    shortTitle: "Dina Makarova",
    description:
      "Author, journalist and filmmaker creating stories, exploring cultures and connecting people.",
    locale: "en_US",
  },
  navigation: [
    { label: "Home", href: "/#home" },
    { label: "Create", href: "/#create" },
    { label: "Explore", href: "/#explore" },
    { label: "Connect", href: "/#connect" },
    { label: "Works", href: "/#works" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    eyebrow: "Author · Journalist · International Projects",
    firstName: "Dina",
    lastName: "Makarova",
    subtitle: "Creating ideas. Exploring cultures. Connecting people.",
    cta: "Explore my work",
    image: "/images/dina.jpg",
    imageAlt: "Portrait of Dina Makarova",
  },
  pillars: [
    {
      id: "create",
      number: "01",
      title: "Create",
      text: "Books · Films · Television\nJournalism · Music · Calligraphy",
      href: "/work/books",
    },
    {
      id: "explore",
      number: "02",
      title: "Explore",
      text: "Countries · Cultures · Essays\nPhotography · Sacred Places · Video Diaries",
      href: "/work/travel",
    },
    {
      id: "connect",
      number: "03",
      title: "Connect",
      text: "Educational Projects\nInternational Partnerships · Social Impact",
      href: "/#contact",
    },
  ],
  about: {
    eyebrow: "About",
    title: "Stories can cross every border.",
    paragraphs: [
      "Dina Makarova is an author, journalist and film director whose work is rooted in curiosity, human connection and respect for different cultures.",
      "Across books, films, essays and international projects, she searches for stories that help people see one another more clearly.",
    ],
  },
  quote: {
    text: "I believe in the power of stories that inspire, connect and create change.",
    author: "Dina Makarova",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s create something meaningful.",
    text: "For editorial work, collaborations, screenings and international projects, write directly or connect on Telegram.",
    email: "hawwaraw@gmail.com",
    telegramLabel: "@Human_Tales",
    telegramUrl: "https://t.me/Human_Tales",
  },
  newsletter: {
    eyebrow: "Stay connected",
    title: "Letters about stories, places and new work.",
    disclaimer: "Occasional updates only. No noise, no spam.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Dina Makarova`,
  },
} as const;

export const works: Work[] = [
  {
    slug: "books",
    title: "Books",
    eyebrow: "Writing",
    summary: "Long-form stories about people, memory and the places that shape us.",
    description: [
      "Books offer room for the details that disappear in a hurried world: a voice, a gesture, the history carried by a landscape.",
      "This section is prepared for publications, excerpts, translations and future reading events.",
    ],
    image: "/images/books.png",
  },
  {
    slug: "films",
    title: "Films",
    eyebrow: "Directing",
    summary: "Documentary observation, visual essays and human stories on screen.",
    description: [
      "Film makes it possible to listen before explaining. The camera stays close to people, places and the small details where meaning lives.",
      "This section is ready for trailers, festival selections, credits and screening information.",
    ],
    image: "/images/films.png",
  },
  {
    slug: "journalism",
    title: "Journalism",
    eyebrow: "Stories",
    summary: "Reporting and essays built on attention, context and real encounters.",
    description: [
      "Journalism begins with a careful question and the patience to hear an honest answer.",
      "Future articles can be added here as individual publications without changing the layout of the site.",
    ],
    image: "/images/journalism.png",
  },
  {
    slug: "travel",
    title: "Travel Notes",
    eyebrow: "Places",
    summary: "Cultures, sacred places, photography and notes from the road.",
    description: [
      "Travel is not a list of destinations, but a way to look more closely and reconsider what feels familiar.",
      "This section can grow into a journal of essays, photographs and video diaries organised by country or theme.",
    ],
    image: "/images/travel.png",
  },
  {
    slug: "music",
    title: "Music",
    eyebrow: "Compositions",
    summary: "Sound, rhythm and compositions that continue a story beyond words.",
    description: [
      "Music creates an emotional language of its own and gives visual and literary work another dimension.",
      "Recordings, collaborations and composition notes can be published here when they are ready.",
    ],
    image: "/images/music.png",
  },
];
