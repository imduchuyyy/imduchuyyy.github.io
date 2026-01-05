import { Github, Star, ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from './ui/utils';
import Link from 'next/link';

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
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 2,
    name: "minicache",
    description:
      "Production-ready caching server in under 1000 lines of code.",
    stars: 85,
    forks: 10,
    language: "Rust",
    tags: ["rust", "cache", "server", "linked-list"],
    url: "https://github.com/imduchuyyy/minicache",
    featured: true
  },
  {
    id: 6,
    name: "openpass-eth",
    description:
      "An experimental Ethereum wallet leveraging Account Abstraction.",
    stars: 70,
    forks: 8,
    language: "Solidity",
    tags: ["solidity", "account-abstraction", "passkey", "social-recovery"],
    url: "https://github.com/openpass-eth",
    featured: true,
  },
  {
    id: 3,
    name: "p-amm",
    description:
      "Minimal constant product AMM on Solana using Pinocchio.",
    stars: 210,
    forks: 25,
    language: "Rust",
    tags: ["rust", "amm", "solana", "pinocchio"],
    url: "https://github.com/imduchuyyy/p-amm",
  },
  {
    id: 1,
    name: "backmybuild",
    description:
      "Using stealth-address to hide creator's wallet address.",
    stars: 120,
    forks: 15,
    language: "Solidity",
    tags: ["web3", "nextjs", "wagmi", "base"],
    url: "https://github.com/backmybuild",
    homepage: "https://backmybuild.com",
    featured: true
  },
  {
    id: 4,
    name: "sol-ver",
    description:
      "Intent-based trading platform on Solana (Pinocchio) (WIP).",
    stars: 120,
    forks: 15,
    language: "Rust",
    tags: ["solana", "amm", "pinocchio"],
    url: "https://github.com/sol-ver/program",
    featured: true
  },
  {
    id: 10,
    name: "fully-onchain-marketplace",
    description:
      "A fully onchain NFT marketplace.",
    stars: 120,
    forks: 15,
    language: "Solidity",
    tags: ["solidity", "nft", "marketplace", "onchain"],
    url: "https://github.com/imduchuyyy/fully-onchain-marketplace",
  },
  {
    id: 11,
    name: "confidential-transaction",
    description:
      "Confidential transaction implementation using zk-SNARKs.",
    stars: 85,
    forks: 10,
    language: "Rust",
    tags: ["rust", "zk-snarks", "ethereum", "confidential-transaction"],
    url: "https://github.com/pendapay/confidential-transaction",
    featured: true
  },
  {
    id: 4,
    name: "tokenight",
    description:
      "AI agent to create tokens with just a tweet.",
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
      "Secure environment manager with encrypted storage.",
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
      "CLI tool to scaffold Viction dapps.",
    stars: 60,
    forks: 5,
    language: "Typescript",
    tags: ["typescript"],
    url: "https://github.com/imduchuyyy/create-viction-dapp",
  },
  {
    id: 4,
    name: "lucci-agent",
    description:
      "News analysis and automated Telegram posting bot.",
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
      "Fix passkey signature verification in webauthn-sol library.",
    stars: 38,
    forks: 4,
    language: "Solidity",
    tags: ["solidity", "evm", "webauthn"],
    url: "https://github.com/base/webauthn-sol/pull/30",
  },
  {
    id: 17,
    name: "saros-swap",
    description:
      "Add swap-exact-out support to Saros swap AMM.",
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
      "Add NFT module support to Cosmos SDK ignite CLI.",
    stars: 38,
    forks: 4,
    language: "Go",
    tags: ["go", "cosmos-sdk", "ignite", "nft"],
    url: "https://github.com/ignite/cli/pull/3411",
  },
  {
    id: 19,
    name: "buildonviction/victionchain",
    description:
      "Support VRC-25 upgrade feature in Viction Chain.",
    stars: 38,
    forks: 4,
    language: "Golang",
    tags: ["golang", "evm", "vrc-25", "viction-chain"],
    url: "https://github.com/BuildOnViction/victionchain/pull/535",
  },
  {
    id: 20,
    name: "vault-near",
    description:
      "Token distribution smart contract on NEAR.",
    stars: 38,
    forks: 4,
    language: "Rust",
    tags: ["rust", "near", "vault", "distribute"],
    url: "https://github.com/imduchuyyy/vault-near",
  },
];

export function ContributionsSection() {
  const others = projects.filter(p => !p.featured);

  return (
    <div className="space-y-12">
      <FeaturedProjects />

      <div className="space-y-4">
        <h2 className="text-xl font-bold font-mono text-muted-foreground">Other Projects</h2>
        <div className="flex flex-col space-y-4">
          {others.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="https://github.com/imduchuyyy"
          target="_blank"
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
        >
          <span>See more on GitHub</span>
          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export function FeaturedProjects({ withHeader = true }: { withHeader?: boolean }) {
  const featured = projects.filter(p => p.featured);

  return (
    <div className="space-y-4">
      {withHeader && (
        <h2 className="text-2xl font-bold font-mono flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Featured</span>
        </h2>
      )}
      <div className="flex flex-col space-y-4">
        {featured.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 hover:opacity-100 opacity-90 transition-opacity"
    >
      <span className="w-48 text-foreground/90 font-medium shrink-0 group-hover:underline decoration-1 underline-offset-4 transition-all">
        {project.name}
      </span>
      <span className="text-sm text-muted-foreground line-clamp-1">
        {project.description}
      </span>
    </Link>
  );
}

