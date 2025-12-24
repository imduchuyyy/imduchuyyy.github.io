"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from './ui/utils';
import { Terminal } from 'lucide-react';

const items = [
  { name: 'Home', href: '/' },
  { name: 'Writing', href: '/writing' },
  { name: 'Projects', href: '/projects' },
  { name: 'CV', href: '/cv' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className="flex items-center gap-1 bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-2xl shadow-primary/10 pointer-events-auto">
        {items.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-1.5 text-sm font-mono transition-colors rounded-full",
                isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute inset-0 bg-white/5 rounded-full -z-10" />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
