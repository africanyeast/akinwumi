import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface ProjectLayoutProps {
    title: string;
    summary: string;
    tags: string[];
    date?: string;
    children: React.ReactNode;
}

export function ProjectLayout({ title, summary, tags, date, children }: ProjectLayoutProps) {
    return (
        <div className="min-h-screen px-6 pt-10 pb-6 md:px-12 md:pt-16 md:pb-12 max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between gap-4 mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted hover:text-fg transition-colors group no-underline"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                <ThemeToggle />
            </div>

            {/* Project Header */}
            <header className="mb-8 border-b border-line pb-10">
                {date && (
                    <div className="text-xs text-faint tabular-nums mb-3">
                        {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                )}
                <h1 className="text-3xl font-bold tracking-tight text-fg mb-4">
                    {title}
                </h1>
                <p className="text-lg text-muted leading-relaxed max-w-2xl mb-6">
                    {summary}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 bg-subtle border border-line text-muted rounded-sm text-xs tabular-nums"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* Main Content Area - Explicitly not using 'prose' class to avoid magic styles */}
            <main className="space-y-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="mt-24 pt-8 border-t border-line text-sm text-faint text-center">
                © {new Date().getFullYear()} Akin Wumi
            </footer>
        </div>
    );
}

// Reusable Section Components for consistency across projects

export function Section({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) {
    return (
        <section className={cn("border-l-2 border-line pl-6 md:pl-8 ml-1", className)}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted mb-6">
                {title}
            </h2>
            <div className="space-y-6">
                {children}
            </div>
        </section>
    );
}

export function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-fg mb-3">
                {title}
            </h3>
            <div className="text-fg leading-relaxed text-[15px]">
                {children}
            </div>
        </div>
    );
}

export function Annotation({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-4 p-4 bg-subtle rounded-sm border-l-2 border-blue-500/50 text-sm text-muted italic">
            <span className="not-italic font-semibold text-fg mr-2">Annotation:</span>
            {children}
        </div>
    );
}

export function CodeBlock({ code, language = "typescript" }: { code: string, language?: string }) {
    return (
        <pre className="my-6 p-4 rounded-md bg-gray-900 text-gray-200 overflow-x-auto text-[13px] font-mono leading-6 border border-gray-800">
            <div className="text-xs text-muted mb-2 select-none uppercase">{language}</div>
            <code>{code}</code>
        </pre>
    );
}
