import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { getAllWritings } from "@/lib/mdx";
import { Portfolio } from "@/components/Portfolio";

// Projects Data
const personalProjects = [
  {
    name: "NairaBooks",
    synopsis: "A prototype for an AI-powered accounting software for Nigeria.",
    link: "https://nairabooks.vercel.app"
  },
  {
    name: "Sohne",
    synopsis: "Bitcoin whitepaper implementation in Python + a wallet client for the Sohne network.",
    link: "https://github.com/akinxwumi/sohne"
  },
  {
    name: "Kopi",
    synopsis: "Visual research AI agent.",
    link: "https://usekopi.com"
  },
  {
    name: "ClipSync",
    synopsis: "Private clipboard sync across Chromium-based browsers using WebRTC.",
    link: "https://github.com/akinxwumi/clipsync"
  },
  {
    name: "ChessRepo",
    synopsis: "Daily top chess grandmasters games tracker.",
    link: "https://github.com/akinxwumi/chessrepo-v2"
  },
  {
    name: "ChessProcedure",
    synopsis: "Chess performance analysis tool (Lichess, Chess.com).",
    link: "https://github.com/akinxwumi/chessprocedure"
  },
  {
    name: "Woodpecker",
    synopsis: "Chess tactics trainer tool using the woodpecker method.",
    link: "https://github.com/akinxwumi/woodpecker"
  },
  {
    name: "LindyTV",
    synopsis: "YouTube client for a personalized TV experience.",
    link: "https://github.com/akinxwumi/lindytv"
  }
];

const workGroups = [
  {
    company: "Abacus Technologies",
    role: "Co-founder & CEO",
    projects: [
      {
        name: "Abacus App (iOS/Android)",
        synopsis: "Personal finance ecosystem.",
        link: null
      }
    ]
  },
  {
    company: "BuyCoins (YC S18)",
    role: "Technical Product Manager",
    projects: [
      {
        name: "Sendcash Pay",
        synopsis: "Open banking, Plaid-like payment processor for Afrika.",
        link: null
      },
      {
        name: "SPAN",
        synopsis: "Pan-Afrikan crypto agent network.",
        link: null
      },
      {
        name: "RAMP",
        synopsis: "Afrika's first programmatic crypto on/off-ramp (USDT/UDSC ⇄ Fiat).",
        link: null
      }
    ]
  }
];

export default async function Home() {
  const writings = await getAllWritings();

  return (
    <main className="min-h-screen py-20 px-6 md:px-12 max-w-3xl mx-auto font-sans bg-white dark:bg-[#0a0a0a]">
      {/* Header / About */}
      <header className="mb-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
          Akin Wumi
        </h1>
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
          <p>
            Product guy, currently experimenting with frontier technologies. I am open to work opportunities or collaborations.
          </p>
          <div className="flex gap-5 text-sm">
            <a className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>akinxwumi@proton.me</span>
            </a>
            <a href="https://github.com/akinxwumi" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              <span>akinxwumi</span>
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <Portfolio personalProjects={personalProjects} workGroups={workGroups} />

      {/* Writings Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">
            Writings
          </h2>
          <div className="h-px flex-1 bg-gray-100 dark:bg-gray-900"></div>
        </div>

        <div className="space-y-8">
          {writings.length > 0 ? (
            writings.map((post) => (
              <Link
                key={post.slug}
                href={`/writings/${post.slug}`}
                className="block group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  {post.date && (
                    <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-600 leading-relaxed max-w-2xl">
                  {post.summary}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 dark:text-gray-600 italic">No writings yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
