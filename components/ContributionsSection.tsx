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
    name: "p-amm",
    description: "Minimal constant product (x*y=k) AMM on Solana using Pinocchio.",
    url: "https://github.com/imduchuyyy/p-amm",
    featured: true,
  },
  {
    name: "saros-swap",
    description: "Add swap-exact-out support to Saros swap AMM (merged).",
    url: "https://github.com/saros-xyz/saros-swap/pull/5",
    featured: true,
  },
  {
    name: "shmcache",
    description: "Cross-process key/value cache in Rust over POSIX shared memory.",
    url: "https://github.com/imduchuyyy/minicache",
    featured: true,
  },
  {
    name: "confidential-transaction",
    description: "Confidential transaction implementation using zk-SNARKs.",
    url: "https://github.com/pendapay/confidential-transaction",
    featured: true,
  },
  {
    name: "victionchain",
    description: "Support VRC-25 upgrade feature in Viction Chain (merged).",
    url: "https://github.com/BuildOnViction/victionchain/pull/535",
    featured: true,
  },
  {
    name: "sol-ver",
    description: "Intent-based trading program on Solana using Pinocchio (WIP).",
    url: "https://github.com/sol-ver/program",
  },
  {
    name: "openpass-eth",
    description: "An experimental Ethereum wallet leveraging Account Abstraction.",
    url: "https://github.com/openpass-eth",
  },
  {
    name: "backmybuild",
    description: "Using stealth-address to hide creator's wallet address.",
    url: "https://github.com/backmybuild",
  },
  {
    name: "base/webauthn-sol",
    description: "Fix passkey signature malleability check (open PR).",
    url: "https://github.com/base/webauthn-sol/pull/30",
  },
  {
    name: "fully-onchain-marketplace",
    description: "A fully onchain NFT marketplace.",
    url: "https://github.com/imduchuyyy/fully-onchain-marketplace",
  },
  {
    name: "crypt-env",
    description: "Secure environment manager with encrypted storage.",
    url: "https://github.com/imduchuyyy/crypt-env",
  },
  {
    name: "create-viction-dapp",
    description: "CLI tool to scaffold Viction dapps.",
    url: "https://github.com/imduchuyyy/create-viction-dapp",
  },
  {
    name: "lucci-agent",
    description: "Personalized on-chain notification bot for Telegram.",
    url: "https://github.com/lucci-labs/lucci-agent",
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

