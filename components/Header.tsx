"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from './ui/utils';
import Image from 'next/image';

const items = [
  { name: 'Home', href: '/' },
  { name: 'Writing', href: '/writing' },
  { name: 'Contributions', href: '/contributions' },
  { name: 'CV', href: '/cv' },
  // { name: 'Projects', href: '/projects' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-8 pb-4">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 flex items-start gap-4">
        {/* Logo Icon */}
        <Link href="/" className="mt-1">
          <Image src="https://avatars.githubusercontent.com/u/53326016?v=6" alt="Logo" width={38} height={38} />
        </Link>

        {/* Name and Nav */}
        <div className="flex flex-col gap-1">
          <Link href="/" className="font-bold text-lg leading-none tracking-tight hover:opacity-80 transition-opacity">
            imduchuyyy
          </Link>
          <nav className="flex items-center gap-2 text-sm text-foreground/80 font-mono">
            {items.map((item, idx) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-foreground hover:underline underline-offset-4 transition-all",
                    pathname === item.href ? "text-foreground font-semibold" : ""
                  )}
                >
                  {item.name}
                </Link>
                {idx < items.length - 1 && (
                  <span className="ml-2 text-muted-foreground">:</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
