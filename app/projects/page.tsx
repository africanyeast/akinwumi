import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { profile, projects } from "@/lib/content";
import { Footer, ProjectDetail } from "@/components/ProjectEntry";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: "Everything I've built, from payments infrastructure at Helicarrier to recent experiments.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-10 pb-16 md:pt-16 md:pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-10">
        <Link href="/" className="inline-flex items-center text-sm text-faint hover:text-fg transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          {profile.name}
        </Link>
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-fg mb-16">Projects</h1>

      <div className="mb-24 border-y border-line divide-y divide-line [&>*]:py-14">
        {projects.map((project) => (
          <ProjectDetail key={project.slug} project={project} />
        ))}
      </div>

      <Footer education={profile.education} email={profile.email} />
    </main>
  );
}
