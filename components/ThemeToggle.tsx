"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    function toggle() {
        const dark = document.documentElement.classList.toggle("dark");
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        } catch {
            // Private mode or blocked storage: the toggle still works for this visit.
        }
    }

    // Both icons render and CSS picks one, so server and client markup always match.
    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="cursor-pointer p-2 -m-2 text-faint hover:text-fg transition-colors"
        >
            <Moon className="w-4 h-4 dark:hidden" />
            <Sun className="w-4 h-4 hidden dark:block" />
        </button>
    );
}
