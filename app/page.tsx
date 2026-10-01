import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { getAllWritings } from "@/lib/mdx";
import { externalWritings, profile, projects } from "@/lib/content";
import { Footer, ProjectIndexItem, Row, SectionHeading } from "@/components/ProjectEntry";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Home() {
  const posts = await getAllWritings();
  // Newest first; undated entries go last.
  const writings = [
    ...posts.map((post) => ({ ...post, href: `/writings/${post.slug}`, external: false })),
    ...externalWritings.map((post) => ({ ...post, external: true })),
  ].sort((a, b) => (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0));

  return (
    <main className="min-h-screen pt-10 pb-16 md:pt-16 md:pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <header className="mb-24">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-fg">{profile.name}</h1>
          <ThemeToggle />
        </div>
        <div className="space-y-4 text-lg text-fg leading-relaxed max-w-2xl mb-8">
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-fg transition-colors">
            <Mail className="w-4 h-4" />
            <span>{profile.email}</span>
          </a>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{profile.github}</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </span>
        </div>
      </header>

      <section className="mb-24">
        <SectionHeading
          title="Projects"
          action={
            <Link href="/projects" className="inline-flex items-center gap-1 text-faint hover:text-fg transition-colors">
              In detail <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectIndexItem key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mb-24">
        <SectionHeading title="Writing" />
        <div className="space-y-8">
          {writings.map((post) => (
            <Row
              key={post.href}
              aside={post.date && new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            >
              <Link
                href={post.href}
                target={post.external ? "_blank" : undefined}
                rel={post.external ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <h3 className="font-medium text-fg underline decoration-transparent underline-offset-4 group-hover:decoration-fg transition-colors mb-1">
                  {post.title}
                  {post.external && <ArrowUpRight className="inline w-3.5 h-3.5 ml-0.5 align-baseline" />}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-2xl">{post.summary}</p>
              </Link>
            </Row>
          ))}
        </div>
      </section>

      <Footer education={profile.education} email={profile.email} />
    </main>
  );
}
