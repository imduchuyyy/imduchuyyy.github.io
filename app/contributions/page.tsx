import { ContributionsSection } from '../../components/ContributionsSection';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
    title: "Contributions | imduchuyyy",
    description: "A showcase of my open source contributions.",
    icons: {
        icon: "https://euc.li/imduchuyyy.eth",
    },
};

export default function ContributionsPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
            <FadeIn>
                <div className="mb-16 space-y-4">
                    <h1 className="text-4xl font-bold font-mono">Contributions</h1>
                    <p className="text-muted-foreground">
                        Everything I&apos;ve built or contributed to.
                    </p>
                </div>
                <ContributionsSection />
            </FadeIn>
        </div>
    );
}
