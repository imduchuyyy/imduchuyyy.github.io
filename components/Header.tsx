"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            className="font-mono hover:text-primary transition-colors"
          >
            {"<huy />"}
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
