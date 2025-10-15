import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  tags: string[];
  url: string;
  homepage?: string;
}

const projects: Project[] = [
  {
    id: 3,
    name: "WriteOS",
    description:
      "An open-source notes-as-code platform for developers — Markdown notes synced with GitHub and plugin support.",
    stars: 210,
    forks: 25,
    language: "TypeScript",
    tags: ["markdown", "github", "electron", "editor"],
    url: "https://github.com/writeos",
    homepage: "https://writeos.app",
  },
  {
    id: 1,
    name: "BackMyBuild",
    description:
      "A crypto-native creator funding platform where builders can receive tips in any token, any chain — without setup. Features onchain profile links, stealth addresses, and $USDC balance capture on Base.",
    stars: 120,
    forks: 15,
    language: "TypeScript",
    tags: ["web3", "nextjs", "wagmi", "base"],
    url: "https://github.com/backmybuild",
    homepage: "https://backmybuild.com",
  },
  {
    id: 2,
    name: "Showra",
    description:
      "A personal NFT gallery builder that lets collectors showcase their onchain collections with custom layouts, view counts, and social links.",
    stars: 85,
    forks: 10,
    language: "TypeScript",
    tags: ["nft", "gallery", "web3"],
    url: "https://github.com/showra-xyz",
    homepage: "https://showra.xyz",
  },
  {
    id: 4,
    name: "Lucci AI",
    description:
      "Analyzes news and rewrite them into Vietnamese, then automatically post to Telegram channel.",
    stars: 60,
    forks: 5,
    language: "Python",
    tags: ["ai", "bot", "telegram", "web3"],
    url: "https://github.com/lucci-labs/lucci-agent",
    homepage: "https://t.me/lucci_agent",
  },
  {
    id: 5,
    name: "PendaPay",
    description:
      "Privacy-first crypto payment using zkSNARKs and stealth address.",
    stars: 42,
    forks: 3,
    language: "TypeScript",
    tags: ["web3", "base", "payment", "zksnarks", "privacy"],
    url: "https://github.com/pendapay",
  },
  {
    id: 6,
    name: "Abstraction",
    description:
      "An Account Abstraction SDK for Ethereum, built with TypeScript and Ethers.js. Simplifies the integration of AA features into dApps.",
    stars: 70,
    forks: 8,
    language: "TypeScript",
    tags: ["solidity", "typescript", "nextjs", "react"],
    url: "https://github.com/abstraction",
  },
  {
    id: 7,
    name: "IsThisCoinDead",
    description:
      "A simple web app that analyzes onchain and social metrics to determine if a token is dead or still active — meme meets analytics.",
    stars: 38,
    forks: 4,
    language: "TypeScript",
    tags: ["web3", "analytics", "meme"],
    url: "https://github.com/imduchuyyy/isthiscoindead",
    homepage: "https://isthiscoindead.xyz",
  },
  {
    id: 8,
    name: "Tele Tip",
    description:
      "A Telegram bot that allows users to receive crypto tips directly in their wallets via stealth addresses. Supports multiple chains and tokens.",
    stars: 38,
    forks: 4,
    language: "TypeScript",
    tags: ["web3", "analytics", "meme"],
    url: "https://github.com/imduchuyyy/teletip",
  },
];

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Open Source Projects
        </h2>
        <p className="text-muted-foreground">
          Some of my open source projects that I&apos;ve built and maintained.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow border-border/50">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="line-clamp-1">{project.name}</span>
                </CardTitle>
              </div>
              <CardDescription className="line-clamp-2 min-h-[3rem]">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col justify-between gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-9 px-3 rounded-md bg-secondary hover:bg-accent transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-9 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

