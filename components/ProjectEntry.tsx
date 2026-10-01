import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Point, Project } from "@/lib/content";

/** Two columns on desktop: a narrow aside (dates, context) and the content. */
export function Row({ aside, children, id }: { aside: React.ReactNode; children: React.ReactNode; id?: string }) {
    return (
        <div id={id} className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-10 scroll-mt-16">
            <div className="text-xs tabular-nums text-faint leading-5 md:pt-1">{aside}</div>
            <div className="min-w-0">{children}</div>
        </div>
    );
}

export function Status({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-2 py-0.5 rounded-full border border-line text-[11px] tabular-nums text-faint whitespace-nowrap">
            {children}
        </span>
    );
}

function Points({ points }: { points: Point[] }) {
    return (
        <ul className="mt-4 space-y-2.5">
            {points.map((point) => (
                <li
                    key={point.label ?? point.text}
                    className="relative pl-4 text-[15px] leading-7 text-muted before:absolute before:left-0 before:top-[0.8rem] before:h-px before:w-2 before:bg-faint"
                >
                    {point.label && <span className="font-medium text-fg">{point.label}: </span>}
                    {point.text}
                </li>
            ))}
        </ul>
    );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
    const external = href.startsWith("http");
    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-0.5 font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-fg transition-colors"
        >
            {children}
            {external && <ArrowUpRight className="w-3.5 h-3.5" />}
        </Link>
    );
}

/** One line per project on the homepage, linking to its full write-up. */
export function ProjectIndexItem({ project }: { project: Project }) {
    return (
        <Row aside={project.year}>
            <Link href={`/projects#${project.slug}`} className="group block">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-medium text-fg underline decoration-transparent underline-offset-4 group-hover:decoration-fg transition-colors">
                        {project.name}
                    </span>
                    {project.status && <Status>{project.status}</Status>}
                </div>
                <p className="text-sm text-muted leading-relaxed">
                    {project.tagline}
                    <span className="text-faint"> · {project.context}</span>
                </p>
            </Link>
        </Row>
    );
}

/** A project in full: what it is, what I did, and where to see it. */
export function ProjectDetail({ project }: { project: Project }) {
    return (
        <Row
            id={project.slug}
            aside={
                <>
                    {project.year && <div>{project.year}</div>}
                    <div className="mt-1 text-muted">{project.context}</div>
                    {project.role && <div>{project.role}</div>}
                </>
            }
        >
            <article>
                <header className="mb-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold tracking-tight text-fg">{project.name}</h3>
                        {project.status && <Status>{project.status}</Status>}
                    </div>
                    <p className="text-sm text-faint">{project.tagline}</p>
                </header>

                <p className="text-[15px] leading-7 text-fg">{project.summary}</p>

                {project.points.length > 0 && <Points points={project.points} />}

                {(project.stack || project.links) && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        {project.stack && <span className="text-xs tabular-nums text-faint">{project.stack}</span>}
                        {project.links?.map((link) => (
                            <TextLink key={link.href} href={link.href}>
                                {link.label}
                            </TextLink>
                        ))}
                    </div>
                )}
            </article>
        </Row>
    );
}

export function SectionHeading({ title, action }: { title: string; action?: React.ReactNode }) {
    return (
        <div className="mb-10 flex items-center gap-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-faint shrink-0">{title}</h2>
            <div className="h-px flex-1 bg-line"></div>
            {action && <div className="shrink-0 text-sm">{action}</div>}
        </div>
    );
}

export function Footer({ education, email }: { education: string; email: string }) {
    return (
        <footer className="pt-8 border-t border-line flex flex-wrap justify-between gap-4 text-sm text-faint">
            <span>{education}</span>
            <a href={`mailto:${email}`} className="hover:text-fg transition-colors">
                {email}
            </a>
        </footer>
    );
}
