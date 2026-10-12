import { Star, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  name: string;
  description: string;
  url: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "vic-geth",
    description: "go-ethereum fork for Viction: VRC-25 fees, txpool rules, hardforks.",
    url: "https://github.com/BuildOnViction/vic-geth",
    featured: true,
  },
  {
    name: "vic-erigon",
    description: "Erigon fork for Viction: PoSV consensus and genesis support.",
    url: "https://github.com/BuildOnViction/vic-erigon",
    featured: true,
  },
  {
    name: "victionchain",
    description: "VRC-25 upgrade and a fee refund fix in Viction Chain (merged).",
    url: "https://github.com/BuildOnViction/victionchain/pulls?q=author%3Aimduchuyyy",
    featured: true,
  },
  {
    name: "shmcache",
    description: "Cross-process key/value cache in Rust over POSIX shared memory.",
    url: "https://github.com/imduchuyyy/shmcache",
    featured: true,
  },
  {
    name: "tinybook",
    description: "Order book matching engine in Rust, written from scratch.",
    url: "https://github.com/imduchuyyy/tinybook",
    featured: true,
  },
  {
    name: "agentcanpay",
    description: "Rust CLI that gives an AI agent its own crypto wallet.",
    url: "https://github.com/imduchuyyy/agentcanpay",
  },
  {
    name: "querypro",
    description: "Terminal UI for backend stacks, Go core with gRPC plugins.",
    url: "https://github.com/imduchuyyy/querypro",
  },
  {
    name: "multichain-indexer",
    description: "Cut memory allocations in the Tron indexer (merged).",
    url: "https://github.com/fystack/multichain-indexer/pull/33",
  },
  {
    name: "multicall-proxy",
    description: "Upgradeable (UUPS) multicall contract built with Foundry.",
    url: "https://github.com/imduchuyyy/multicall-proxy",
  },
  {
    name: "openpass-eth",
    description: "ERC-4337 wallet with passkey signers and social recovery.",
    url: "https://github.com/openpass-eth",
  },
  {
    name: "saros-swap",
    description: "Swap-exact-out support for the Saros AMM on Solana (merged).",
    url: "https://github.com/saros-xyz/saros-swap/pulls?q=author%3Aimduchuyyy",
  },
  {
    name: "confidential-transaction",
    description: "Confidential transaction implementation using zk-SNARKs.",
    url: "https://github.com/pendapay/confidential-transaction",
  },
  {
    name: "sol-ver",
    description: "Intent-based trading program on Solana using Pinocchio (WIP).",
    url: "https://github.com/sol-ver/program",
  },
  {
    name: "ontheflywallet",
    description: "Wallet in Rust that derives keys on the fly, never storing them.",
    url: "https://github.com/imduchuyyy/ontheflywallet",
  },
  {
    name: "base/webauthn-sol",
    description: "Fix passkey signature malleability check (open PR).",
    url: "https://github.com/base/webauthn-sol/pull/30",
  },
  {
    name: "backmybuild",
    description: "Using stealth-address to hide creator's wallet address.",
    url: "https://github.com/backmybuild",
  },
  {
    name: "crypt-env",
    description: "Secure environment manager with encrypted storage.",
    url: "https://github.com/imduchuyyy/crypt-env",
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
            <ProjectRow key={project.name} project={project} />
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
          <ProjectRow key={project.name} project={project} />
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

