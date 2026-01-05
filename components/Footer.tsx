import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto text-sm text-muted-foreground font-mono">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-white/5 pt-8">
                <div className="flex flex-col">
                    <span>© {new Date().getFullYear()} imduchuyyy</span>
                    <span className="text-xs text-muted-foreground/60 mt-1">
                        Built with Next.js, Tailwind CSS.
                    </span>
                </div>

                <nav className="flex items-center gap-4">
                    <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                    <Link href="/writing" className="hover:text-foreground transition-colors">Writing</Link>
                    <Link href="/rss.xml" className="hover:text-foreground transition-colors">RSS</Link>
                </nav>
            </div>
        </footer>
    );
}
