import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2, Calendar } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
    title: "CV | imduchuyyy",
    description: "My professional experience and skills.",
};

export default function CVPage() {
    return (
        <div className="container mx-auto px-4 py-32 max-w-4xl">
            <FadeIn>
                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="text-4xl font-bold font-mono">Curriculum Vitae</h1>
                    <p className="text-muted-foreground">
                        My professional journey and technical expertise.
                    </p>
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
                                        <h3 className="text-xl font-bold text-primary">Blockchain Team Leader</h3>
                                        <p className="text-lg font-medium text-white/90">Ninety Eight - Viet Nam</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Dec 2023 — Current</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Lead the team building smart contracts and protocols for multiple successful projects:
                                    </p>
                                    <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary/50">
                                        <li>
                                            <Link href="https://saros.xyz" className="text-white hover:text-primary transition-colors font-medium">Saros.xyz</Link> (Leading liquidity layer on Solana):
                                            Authorized over 50m TVL and nearly 1b trading volume. Built core protocol and SDK for partner interaction.
                                        </li>
                                        <li>
                                            <Link href="https://dagora.xyz" className="text-white hover:text-primary transition-colors font-medium">Dagora.xyz</Link> (Multichain NFT marketplace):
                                            Designed and built core protocol, achieved multi-million trading volume, and successfully launched nearly 200 launchpads.
                                        </li>
                                        <li>
                                            <Link href="https://viction.xyz" className="text-white hover:text-primary transition-colors font-medium">Victionchain</Link> (Blockchain Layer 1):
                                            Contributed to Victionchain to improve Sponsor transaction mechanism. Introduced new standard VRC25 to help projects sponsor gas for their users.
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
                                        <h3 className="text-xl font-bold text-primary">Blockchain Researcher</h3>
                                        <p className="text-lg font-medium text-white/90">Ninety Eight - Viet Nam</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Nov 2021 — Dec 2023</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary/50">
                                    <li>
                                        <span className="text-white font-medium">OneId</span> (World first multichain name service):
                                        Built and maintained core protocol for OneID.
                                    </li>
                                    <li>
                                        <span className="text-white font-medium">Baryon</span> (Multichain suite of DeFi products):
                                        Built and maintained core products on Baryon (AMM, staking).
                                    </li>
                                </ul>
                            </Card>

                            <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">Blockchain Researcher Intern</h3>
                                        <p className="text-lg font-medium text-white/90">Vietnam Blockchain Corporation - Viet Nam</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Aug 2020 — Nov 2021</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-muted-foreground list-disc list-inside marker:text-primary/50">
                                    <li>Conducted in-depth blockchain research, enhancing project insights.</li>
                                    <li>Collaborated with cross-functional teams to optimize blockchain solutions.</li>
                                    <li>Participated in innovative blockchain projects, boosting team efficiency.</li>
                                </ul>
                            </Card>
                            <Card className="p-6 border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">Frontend Intern</h3>
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
                                    "Blockchain", "Solidity", "Rust", "Ethereum", "Solana",
                                    "Market research", "Business operation"
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
