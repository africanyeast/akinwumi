import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectLayoutProps {
    title: string;
    summary: string;
    tags: string[];
    date?: string;
    children: React.ReactNode;
}

export function ProjectLayout({ title, summary, tags, date, children }: ProjectLayoutProps) {
    return (
        <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto font-sans">
            {/* Navigation */}
            <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 group no-underline"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            {/* Project Header */}
            <header className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-10">
                {date && (
                    <div className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-3">
                        {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                )}
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                    {title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6">
                    {summary}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 rounded-sm text-xs font-mono"
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
            <footer className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-400 text-center">
                © {new Date().getFullYear()} Wumi - Built with Next.js & Bun
            </footer>
        </div>
    );
}

// Reusable Section Components for consistency across projects

export function Section({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) {
    return (
        <section className={cn("border-l-2 border-gray-100 dark:border-gray-900 pl-6 md:pl-8 ml-1", className)}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {title}
            </h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                {children}
            </div>
        </div>
    );
}

export function Annotation({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/40 rounded-sm border-l-2 border-blue-500/50 text-sm text-gray-600 dark:text-gray-400 italic">
            <span className="not-italic font-semibold text-gray-700 dark:text-gray-300 mr-2">Annotation:</span>
            {children}
        </div>
    );
}

export function CodeBlock({ code, language = "typescript" }: { code: string, language?: string }) {
    return (
        <pre className="my-6 p-4 rounded-md bg-gray-900 text-gray-200 overflow-x-auto text-[13px] font-mono leading-6 border border-gray-800">
            <div className="text-xs text-gray-500 mb-2 select-none uppercase">{language}</div>
            <code>{code}</code>
        </pre>
    );
}
