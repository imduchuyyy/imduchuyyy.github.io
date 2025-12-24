import { Metadata } from 'next';
import { ProfileSection } from '../components/ProfileSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "imduchuyyy - Web3 Developer & Open Source Enthusiast",
  description: "Passionate about building elegant solutions to complex problems. Love contributing to open source and creating tools that make developers' lives easier. Always learning, always shipping.",
  keywords: ["Web3", "Developer", "Open Source", "Solidity", "TypeScript", "Next.js", "Tailwind CSS"],
  authors: [{ name: "imduchuyyy", url: "https://imduchuyyy.xyz" }],
  creator: "imduchuyyy",
  publisher: "imduchuyyy",
  metadataBase: new URL("https://imduchuyyy.github.io/"),
  openGraph: {
    title: "imduchuyyy - Web3 Developer & Open Source Enthusiast",
    description: "Passionate about building elegant solutions to complex problems. Love contributing to open source and creating tools that make developers' lives easier. Always learning, always shipping.",
    url: "https://imduchuyyy.github.io/",
    siteName: "imduchuyyy",
    images: [
      {
        url: "https://euc.li/imduchuyyy.eth",
        width: 1200,
        height: 630,
        alt: "imduchuyyy - Web3 Developer & Open Source Enthusiast",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "imduchuyyy - Web3 Developer & Open Source Enthusiast",
    description: "Passionate about building elegant solutions to complex problems. Love contributing to open source and creating tools that make developers' lives easier. Always learning, always shipping.",
    images: ["https://euc.li/imduchuyyy.eth"],
    creator: "@imduchuyyy",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://euc.li/imduchuyyy.eth",
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex flex-col items-center justify-center overflow-x-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <main className="container mx-auto px-4 pt-32 pb-16 max-w-7xl z-10 space-y-24">
        <ProfileSection />

        {/* Intro / Latest Writing Teaser */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
            Welcome to my digital playground.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I write about distributed systems, cryptography, and the future of the web.
            Check out my <Link href="/writing" className="text-primary hover:underline">writing</Link>,
            explore my <Link href="/projects" className="text-primary hover:underline">projects</Link>,
            or view my <Link href="/cv" className="text-primary hover:underline">CV</Link>.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-muted-foreground border-t border-border/50 pt-8 text-sm">
          <p>Built with Next.js, Tailwind CSS & Magic</p>
          <p className="mt-2 text-xs">© 2025 imduchuyyy. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
