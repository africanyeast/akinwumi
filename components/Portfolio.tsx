"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    name: string;
    synopsis: string;
    link: string | null;
}

interface WorkGroup {
    company: string;
    role: string;
    period?: string;
    projects: Project[];
}

interface PortfolioProps {
    personalProjects: Project[];
    workGroups: WorkGroup[];
}

export function Portfolio({ personalProjects, workGroups }: PortfolioProps) {
    const [activeTab, setActiveTab] = useState<"personal" | "work">("personal");

    return (
        <section className="mb-24">
            {/* Header Row: Title + Separator + Tabs */}
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-sm font-bold uppercase text-gray-500 dark:text-gray-500 shrink-0">
                    Projects
                </h2>
                <div className="h-px flex-1 bg-gray-100 dark:bg-gray-900"></div>

                <div className="flex gap-6 shrink-0">
                    <button
                        onClick={() => setActiveTab("personal")}
                        className={cn(
                            "text-sm font-medium transition-colors relative pb-1",
                            activeTab === "personal"
                                ? "text-gray-900 dark:text-gray-100"
                                : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-300"
                        )}
                    >
                        Personal
                        {activeTab === "personal" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-px bg-gray-900 dark:bg-gray-100"
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("work")}
                        className={cn(
                            "text-sm font-medium transition-colors relative pb-1",
                            activeTab === "work"
                                ? "text-gray-900 dark:text-gray-100"
                                : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-300"
                        )}
                    >
                        Work
                        {activeTab === "work" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-px bg-gray-900 dark:bg-gray-100"
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Content */}
            <div>
                <AnimatePresence mode="wait">
                    {activeTab === "personal" ? (
                        <motion.div
                            key="personal"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-8"
                        >
                            {personalProjects.map((project) => (
                                <ProjectCard key={project.name} project={project} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="work"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-12"
                        >
                            {workGroups.map((group) => (
                                <div key={group.company}>
                                    <div className="mb-8">
                                        <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 inline-block mr-2">
                                            {group.company}
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {group.role}
                                        </span>
                                    </div>
                                    <div className="space-y-8 pl-1">
                                        {group.projects.map((project) => (
                                            <ProjectCard key={project.name} project={project} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group">
            <div className="flex items-baseline justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.link ? (
                        <Link
                            href={project.link}
                            target={project.link.startsWith("http") ? "_blank" : undefined}
                            className="flex items-center gap-2"
                        >
                            {project.name}
                        </Link>
                    ) : (
                        <span>{project.name}</span>
                    )}
                </h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                {project.synopsis}
            </p>
        </article>
    );
}
