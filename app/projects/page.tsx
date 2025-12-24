import { ProjectsSection } from '../../components/ProjectsSection';

export const metadata = {
    title: "Projects | imduchuyyy",
    description: "A showcase of my open source projects and experiments.",
};

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-32 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold font-mono">Projects</h1>
                <p className="text-muted-foreground">
                    Everything I&apos;ve built, contributed to, or broken.
                </p>
            </div>
            <ProjectsSection />
        </div>
    );
}
