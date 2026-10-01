export const profile = {
  name: "Akin Wumi",
  intro: [
    "Product engineer. I spent three years as a technical PM at Helicarrier (BuyCoins, YC S18), eventually leading a team of 15 building payments and stablecoin infrastructure for African fintechs. Then I co-founded Abacus Technologies, where we built a PFM product on top of a proprietary open-banking stack.",
    "These days, when I am not volunteering for social causes, I am tinkering with frontier technologies.",
  ],
  email: "akinwumiobadare@gmail.com",
  github: "africanyeast",
  location: "Lagos, Nigeria",
  education: "BSc Computer Science, University of Ilorin",
};

export interface Point {
  /** Bold lead-in, e.g. "Customers". */
  label?: string;
  text: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Anchor on the projects page. */
  slug: string;
  name: string;
  tagline: string;
  year?: string;
  /** Where it was built: a company, or "Personal". */
  context: string;
  role?: string;
  status?: string;
  summary: string;
  points: Point[];
  stack?: string;
  links?: ProjectLink[];
}

const helicarrier = "Helicarrier (BuyCoins, YC S18)";

/** Latest to oldest. */
export const projects: Project[] = [
  {
    slug: "garvey",
    name: "Garvey",
    tagline: "An opinionated, AI-native writing primitive",
    year: "2026",
    context: "Personal",
    status: "Prototype",
    summary:
      "The ambition is to have a tool that lets me write up to 10x more, and better: essays, emails, product research, anything that has to be written.",
    points: [
      {
        label: "Thesis",
        text: "AI writing assistance is rarely shaped around how any one person actually writes, and predicting what a writer intends to say is hard to get right. So the bet isn't on the AI guessing. It's on translating a real, manual writing workflow into software faithfully (gathering research, taking notes, setting out what the piece is for, drafting) and then augmenting each step with AI where it helps.",
      },
      {
        label: "The primitive today",
        text: "A document that carries its own context: the project's intent, research notes tagged to the passages they support, and the writer's style profile. The AI reads outward from the cursor (block, then section, then project, then style) and acts through small plugins: tab completion, continue writing, contextual suggestions, OCR and content insertion.",
      },
    ],
    stack: "Claude Agent SDK · Next.js · BlockNote · local-first file vault",
    links: [{ label: "Code", href: "https://github.com/africanyeast/garvey-2" }],
  },
  {
    slug: "ominira",
    name: "Project Ominira",
    tagline: "A collective study platform",
    year: "2026",
    context: "Personal",
    status: "Live",
    summary:
      "An online library and study platform for Pan-Africanists, where every text can be listened to in an African voice.",
    points: [
      {
        label: "Narration in African voices",
        text: "Any passage can be read aloud on demand by one of eight African English voices from Nigeria, Kenya, Tanzania and South Africa, a woman and a man from each. For full audiobooks, voice-cloning models (Chatterbox & Qwen) on a separate GPU machine narrates the book section by section.",
      },
      {
        label: "Study features",
        text: "A reader for EPUB, PDF (via PDFium) and web articles; typed or voice notes attached to specific passages; search across the whole library; live reader presence; sync across devices.",
      },
      // {
      //   label: "Ingestion pipeline",
      //   text: "Python service that converts EPUBs into a canonical, versioned JSON book format, validates each one against a schema, then publishes it to Supabase storage and Postgres.",
      // },
    ],
    stack: "Next.js · Supabase · Python · TanStack Query · Zustand",
    links: [{ label: "Project Ominira", href: "https://projectominira.org" }],
  },
  {
    slug: "ngn-cny",
    name: "NGN ⇄ CNY",
    tagline: "Stablecoin FX for Nigeria–China trade",
    year: "2026",
    context: "Personal",
    status: "Testnet PoC",
    summary:
      "Nigeria–China trade is $26B+ a year. Businesses pay 3–5% in double conversion (NGN → USD → CNY) and wait a day or more for settlement.",
    points: [
      {
        label: "What I built",
        text: "Naira and Yuan stablecoin swaps on Tempo's native DEX. The client sets up the chain side itself (mints test tokens, seeds liquidity, funds wallets), and swaps settle in under 60 seconds.",
      },
      {
        label: "Proof of Concept",
        text: "Tempo's DEX currently only allows pairs against USD, so there's still a USD hop. It also depends on reliable fiat on/off-ramps at both ends, and on deep enough liquidity to avoid slippage.",
      },
    ],
    stack: "Next.js · Tempo testnet",
    links: [
      // { label: "Demo", href: "https://ngncny.vercel.app" },
      { label: "Code", href: "https://github.com/africanyeast/tempo-ngn-cny-swap" },
    ],
  },
  {
    slug: "nairabooks",
    name: "NairaBooks",
    tagline: "Accounting for Nigeria's new tax regime",
    year: "2026",
    context: "Personal",
    status: "Prototype",
    summary:
      "Nigeria's recent tax law hits individuals earning over ₦800K a year and SMEs with turnover over ₦100M. NairaBooks is a privacy-first accounting tool: all data stays in the browser, and VAT is calculated automatically.",
    points: [
      {
        label: "Status",
        text: "A UX prototype. The AI transaction categorisation is simulated for now; building the bank-data pipeline is the next step.",
      },
    ],
    stack: "Next.js · Tailwind · Bun",
    links: [
      { label: "Demo", href: "https://nairabooks.vercel.app" },
      { label: "Why I built it", href: "/writings/proof-of-concept-nairabooks" },
    ],
  },
  {
    slug: "clipsync",
    name: "ClipSync",
    tagline: "Private clipboard sync across browsers",
    year: "2026",
    context: "Personal",
    summary:
      "End-to-end encrypted clipboard sync between browsers over WebRTC, with no server to run. Built in about 2 hours with a coding agent.",
    points: [],
    stack: "Chrome extension · WebRTC",
    links: [
      { label: "Code", href: "https://github.com/africanyeast/clipsync" },
      { label: "Why I built it", href: "/writings/clipsync-motivation" },
    ],
  },
  {
    slug: "kopi",
    name: "Kopi",
    tagline: "Visual research agent for video editors",
    year: "2025",
    context: "Personal",
    summary:
      "Video editors spend hours hunting for B-roll. Kopi takes a script or brief and returns curated visuals.",
    points: [
      {
        label: "Agent pipeline",
        text: "An LLM classifies the input as a script, a search or both, then writes searchable queries for each distinct visual concept. Each query goes to the right place: stock libraries for generic or aesthetic shots, web search and Wikimedia for specific people, events and places.",
      },
      {
        label: "Two-stage selection",
        text: "A fast model (Groq) ranks up to hundreds of results by metadata down to 20. Then a vision model (Gemini) looks at those 20 and picks the final 5–8.",
      },
      {
        label: "Search layer",
        text: "Six image sources behind one adapter interface with a unified schema, plus WebSocket streaming for infinite scroll.",
      },
    ],
    stack: "Python · Flask · Groq · Gemini · Redis · Supabase · Docker",
    links: [
      // { label: "usekopi.com", href: "https://usekopi.com" },
      { label: "Code", href: "https://github.com/africanyeast/rollmanager-be" },
    ],
  },
  {
    slug: "sohne",
    name: "Sohne",
    tagline: "Bitcoin whitepaper implementation using Python",
    context: "Personal",
    summary:
      "A from-scratch blockchain: Proof of Work, UTXO transactions, ECDSA (P-256) signatures, mining, and nodes that talk to each other over HTTP. It comes with a web wallet and block explorer, plus a one-command multi-node local network.",
    points: [],
    stack: "Python · Docker",
    links: [{ label: "Code", href: "https://github.com/africanyeast/sohne" }],
  },
  {
    slug: "abacus",
    name: "Abacus",
    tagline: "Mission control for your money",
    year: "2022 – 2024",
    context: "Abacus Technologies",
    role: "Co-founder & CEO",
    summary: "A personal finance app for Nigerians that brought every account into one view using open banking technology.",
    points: [
      {
        label: "The hard part",
        text: "No Plaid-equivalent fit our use case, so we built our own open-banking stack with 15+ financial integrations, then shipped iOS and Android apps on top of it.",
      },
      {
        label: "Outcome",
        text: "Raised a $150K seed and grew the team from 2 to 5. Reached 50K+ MAU in 8 months.",
      },
      {
        label: "What I learned",
        text: "Traction alone didn't make it sustainable. I wrote about that in the NairaBooks post.",
      },
    ],
    links: [
      {
        label: "Launch post",
        href: "https://trustabacus.medium.com/introducing-abacus-mission-control-for-your-money-4b3bd06bfff7",
      },
      { label: "NairaBooks post", href: "/writings/proof-of-concept-nairabooks" },
    ],
  },
  {
    slug: "sendcash-pay",
    name: "Sendcash Pay",
    tagline: "Direct Debit Payments for African fintechs",
    year: "2019 – 2022",
    context: helicarrier,
    role: "Technical Product Manager",
    summary:
      "An open-banking, Plaid-like payment processor that let fintechs collect money directly from their users' bank accounts.",
    points: [
      { label: "Merchants", text: "BuyCoins, Kuda, PiggyVest, Rise, and 50+ integrated merchants." },
      {
        label: "What I did",
        text: "Led the development (from the design of API architecture to the implementation, and documentation that 3rd-party merchants integrate against). I also worked directly with merchants on integration and support.",
      },
      { label: "Outcome", text: "$100M+ in total processed volume." },
    ],
  },
  {
    slug: "ramp",
    name: "RAMP",
    tagline: "Africa's first programmatic crypto on/off-ramp",
    year: "2019 – 2022",
    context: helicarrier,
    role: "Technical Product Manager",
    summary:
      "A tool that lets crypto traders convert between USDT/USDC and fiat programmatically, at a time when banks and regulators made that hard.",
    points: [
      {
        label: "What I did",
        text: "Built and launched end to end. Handled customer experience and support.",
      },
    ],
  },
  {
    slug: "span",
    name: "SPAN",
    tagline: "Pan-African crypto agent network",
    year: "2019 – 2022",
    context: helicarrier,
    role: "Technical Product Manager",
    summary:
      "A network of local agents who move value across borders using stablecoins. Users pay in or cash out in local currency, and stablecoins settle the transfer between countries.",
    points: [
      { label: "What I did", text: "Led the build, recuitment of agents and launch of the network." },
      { label: "Outcome", text: "SPAN is now part of Accrue." },
    ],
    links: [{ label: "Accrue", href: "https://cashramp.co/" }],
  },
];

export interface ExternalWriting {
  title: string;
  summary: string;
  date?: string;
  href: string;
}

/** Writing hosted elsewhere, listed alongside the MDX posts. */
export const externalWritings: ExternalWriting[] = [
  {
    title: "Open Banking and Sendcash Pay",
    summary: "Notes on open banking and building Sendcash Pay, a payment processor for African fintechs.",
    href: "https://app.notion.com/p/akinwumi/Open-Banking-and-Sendcash-Pay-d7f14be930d14cc0ac7214f483dcd889",
  },
  {
    title: "Introducing Abacus — mission control for your money",
    summary: "The launch announcement for Abacus, a personal finance app that brings every account into one view.",
    date: "2022-09-22",
    href: "https://trustabacus.medium.com/introducing-abacus-mission-control-for-your-money-4b3bd06bfff7",
  },
];
