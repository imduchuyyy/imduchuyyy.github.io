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
    id: 6,
    name: "openpass-eth",
    description:
      "An experimental Ethereum wallet that leverages Account Abstraction (EIP-4337 and EIP-7702) to provide a seamless and secure user experience without the need for traditional private keys.",
    stars: 70,
    forks: 8,
    language: "Solidity",
    tags: ["solidity", "account-abstraction", "passkey", "social-recovery"],
    url: "https://github.com/openpass-eth",
  },
  {
    id: 3,
    name: "p-amm",
    description:
      "A cheapest implementation of constant product AMM built on top of Solana using Pinocchio for zero-dependencies architecture.",
    stars: 210,
    forks: 25,
    language: "Rust",
    tags: ["rust", "amm", "solana", "pinocchio"],
    url: "https://github.com/imduchuyyy/p-amm",
  },
  {
    id: 1,
    name: "BackMyBuild",
    description:
      "A crypto-native creator funding platform where builders can receive tips in any token, any chain — without setup. Features onchain profile links, stealth addresses, and $USDC balance capture on Base.",
    stars: 120,
    forks: 15,
    language: "Solidity",
    tags: ["web3", "nextjs", "wagmi", "base"],
    url: "https://github.com/backmybuild",
    homepage: "https://backmybuild.com",
  },
  {
    id: 10,
    name: "Fully onchain marketplace",
    description:
      "A fully onchain NFT marketplace",
    stars: 120,
    forks: 15,
    language: "Solidity",
    tags: ["solidity", "nft", "marketplace", "onchain"],
    url: "https://github.com/imduchuyyy/fully-onchain-marketplace",
  },
  {
    id: 2,
    name: "Minicache",
    description:
      "Your production-ready caching server with under 100 lines of code.",
    stars: 85,
    forks: 10,
    language: "Rust",
    tags: ["rust", "cache", "server", "linked-list"],
    url: "https://github.com/imduchuyyy/minicache",
  },
  {
    id: 11,
    name: "confidential-transaction",
    description:
      "A confidential transaction implementation built on top of Ethereum using zk-SNARKs.",
    stars: 85,
    forks: 10,
    language: "Rust",
    tags: ["rust", "zk-snarks", "ethereum", "confidential-transaction"],
    url: "https://github.com/pendapay/confidential-transaction",
  },
  {
    id: 4,
    name: "Tokenight",
    description:
      "An AI agent that let people can create token with just a tweet.",
    stars: 60,
    forks: 5,
    language: "Typescript",
    tags: ["typescript", "ai", "bot", "telegram", "web3"],
    url: "https://github.com/imduchuyyy/tokenight",
  },
  {
    id: 12,
    name: "crypt-env",
    description:
      "Secure environment manager with profile-based encrypted storage.",
    stars: 60,
    forks: 5,
    language: "Typescript",
    tags: ["typescript", "environment", "manager", "encrypted", "storage"],
    url: "https://github.com/imduchuyyy/crypt-env",
    homepage: "https://www.npmjs.com/package/@imduchuyyy/crypt-env"
  },
  {
    id: 13,
    name: "create-viction-dapp",
    description:
      "A CLI tool to create Viction dapps. Inspired by create-onchain (base).",
    stars: 60,
    forks: 5,
    language: "Typescript",
    tags: ["typescript"],
    url: "https://github.com/imduchuyyy/create-viction-dapp",
  },
  {
    id: 4,
    name: "Lucci AI",
    description:
      "Analyzes news and rewrite them into Vietnamese, then automatically post to Telegram channel.",
    stars: 60,
    forks: 5,
    language: "Go",
    tags: ["go", "ai", "bot", "telegram", "web3"],
    url: "https://github.com/lucci-labs/lucci-agent",
    homepage: "https://t.me/lucci_agent",
  },
  {
    id: 16,
    name: "base/webauthn-sol",
    description:
      "I contributed to base/webauthn-sol by fixing the issue where the libirary can't verify passkey signature.",
    stars: 38,
    forks: 4,
    language: "Solidity",
    tags: ["solidity", "evm", "webauthn"],
    url: "https://github.com/base/webauthn-sol/pull/30",
  },
  {
    id: 17,
    name: "Saros-swap",
    description:
      "I contributed to Saros-swap by adding support swap-exact-out function.",
    stars: 38,
    forks: 4,
    language: "Rust",
    tags: ["rust", "solana", "swap-exact-out", "saros-swap"],
    url: "https://github.com/saros-xyz/saros-swap/pull/5",
  },
  {
    id: 18,
    name: "ignite/cli",
    description:
      "I contributed to ignite/cli by adding support for NFT module in Cosmos SDK.",
    stars: 38,
    forks: 4,
    language: "Go",
    tags: ["go", "cosmos-sdk", "ignite", "nft"],
    url: "https://github.com/ignite/cli/pull/3411",
  },
  {
    id: 19,
    name: "Viction Chain",
    description:
      "I contributed to Viction Chain by adding support for upgrade VRC-25 feature.",
    stars: 38,
    forks: 4,
    language: "Golang",
    tags: ["golang", "evm", "vrc-25", "viction-chain"],
    url: "https://github.com/BuildOnViction/victionchain/pull/535",
  },
  {
    id: 20,
    name: "Vault NEAR",
    description:
      "Simple implementation smart contract on NEAR to let user distribute token to multiple recipients.",
    stars: 38,
    forks: 4,
    language: "Rust",
    tags: ["rust", "near", "vault", "distribute"],
    url: "https://github.com/imduchuyyy/vault-near",
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

