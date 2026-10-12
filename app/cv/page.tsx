import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2, Calendar } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
    title: "CV | imduchuyyy",
    description: "My professional experience and skills.",
    icons: {
        icon: "https://avatars.githubusercontent.com/u/53326016?v=6",
    },
};

export default function CVPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
            <FadeIn>
                <div className="mb-16 space-y-4">
                    <h1 className="text-4xl font-bold font-mono">Curriculum Vitae</h1>
                    <p className="text-muted-foreground">
                        My professional journey and technical expertise.
                    </p>
                    <a href="/cv.pdf" download className="inline-block text-sm font-mono text-foreground underline underline-offset-4">
                        Download PDF
                    </a>
                </div>
            </FadeIn>

            <div className="space-y-12">
                {/* Experience Section */}
                <FadeIn delay={0.1}>
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Experience
                            </span>
                        </h2>

                        <div className="grid gap-6">
                            <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">Technical Leader</h3>
                                        <p className="text-lg font-medium text-white/90">Ninety Eight - Viet Nam</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Dec 2023 — Current</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Lead the engineering team designing and shipping on-chain protocols on Solana and EVM:
                                    </p>
                                    <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary/50">
                                        <li>
                                            <Link href="https://viction.xyz" className="text-white hover:text-primary transition-colors font-medium">Viction</Link> (EVM Layer 1):
                                            Core contributor to the node clients. In vic-geth (go-ethereum fork), implemented VRC-25 fee payment, Viction txpool rules, hardfork config and p2p fixes. In vic-erigon (Erigon fork), brought up PoSV consensus. In the legacy client, introduced the VRC-25 gas sponsorship standard and fixed a fee refund bug.
                                        </li>
                                        <li>
                                            <span className="text-white font-medium">Vicscan</span> (Viction block explorer):
                                            Built the Rust backend, covering the block indexer pipeline, event bus, token and NFT indexing, and market data jobs.
                                        </li>
                                        <li>
                                            <Link href="https://saros.xyz" className="text-white hover:text-primary transition-colors font-medium">Saros.xyz</Link> (Leading liquidity layer on Solana):
                                            Designed and built the core AMM protocol and partner SDK. Grew to $50M+ TVL and ~$1B trading volume.
                                        </li>
                                        <li>
                                            <Link href="https://dagora.xyz" className="text-white hover:text-primary transition-colors font-medium">Dagora.xyz</Link> (Multichain NFT marketplace):
                                            Designed and built the core protocol. Reached multi-million trading volume and ran ~200 launchpads.
                                        </li>
                                        <li>
                                            <Link href="https://eternals.game" className="text-white hover:text-primary transition-colors font-medium">Eternals Game</Link> (Gaming on Viction):
                                            Built the core protocol for Eternals game.
                                        </li>
                                    </ul>
                                </div>
                            </Card>

                            <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">Blockchain Engineer</h3>
                                        <p className="text-lg font-medium text-white/90">Ninety Eight - Viet Nam</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Nov 2021 — Dec 2023</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary/50">
                                    <li>
                                        <span className="text-white font-medium">OneId</span> (Multichain name service):
                                        Built and maintained the core protocol.
                                    </li>
                                    <li>
                                        <span className="text-white font-medium">Baryon</span> (Multichain suite of DeFi products):
                                        Built and maintained the AMM and staking protocols.
                                    </li>
                                </ul>
                            </Card>

                            <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">Blockchain Engineer Intern</h3>
                                        <p className="text-lg font-medium text-white/90">Vietnam Blockchain Corporation - Viet Nam</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Aug 2020 — Nov 2021</span>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">Frontend Engineer Intern</h3>
                                        <p className="text-lg font-medium text-white/90">Acexis</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Nov 2019 — Aug 2020</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </section>
                </FadeIn>

                {/* Skills Section */}
                <FadeIn delay={0.2}>
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Technical Skills
                            </span>
                        </h2>
                        <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm">
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Go", "Rust", "Solidity", "TypeScript",
                                    "go-ethereum", "Erigon", "EVM", "Consensus", "Txpool", "P2P",
                                    "ERC-4337", "Foundry", "Indexers", "Tokio",
                                    "Solana programs", "zk-SNARKs", "Technical leadership"
                                ].map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="px-4 py-1.5 text-sm font-mono bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors cursor-default border-white/5"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    </section>
                </FadeIn>

                {/* Education Section */}
                <FadeIn delay={0.3}>
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Education
                            </span>
                        </h2>
                        <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-primary">Ho Chi Minh City University of Technology</h3>
                                    <p className="text-lg font-medium text-white/90">Bachelor of Engineering in Computer Science</p>
                                    <p className="text-muted-foreground mt-1">Viet Nam</p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </FadeIn>
            </div>
        </div>
    );
}
