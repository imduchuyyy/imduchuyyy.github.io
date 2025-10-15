import { Metadata } from 'next';
import { ProfileSection } from '../components/ProfileSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ThemeToggle } from '../components/ThemeToggle';

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
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Background gradient effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <ProfileSection />
        <ProjectsSection />
        
        {/* Footer */}
        <footer className="mt-20 text-center text-muted-foreground border-t border-border/50 pt-8">
          <p>Built with React, Nextjs, Github Page & Tailwind CSS</p>
          <p className="mt-2">© 2025 imduchuyyy. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
