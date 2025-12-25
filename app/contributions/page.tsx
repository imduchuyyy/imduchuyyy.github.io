import { ContributionsSection } from '../../components/ContributionsSection';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
    title: "Contributions | imduchuyyy",
    description: "A showcase of my open source contributions.",
};

export default function ContributionsPage() {
    return (
        <div className="container mx-auto px-4 py-32 max-w-7xl">
            <FadeIn>
                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
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
