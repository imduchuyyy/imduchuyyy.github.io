import Link from 'next/link';
import { getAllPosts } from '../../lib/mdx';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
    title: "Writing | imduchuyyy",
    description: "Thoughts on software engineering, web3, and life.",
    icons: {
        icon: "https://avatars.githubusercontent.com/u/53326016?v=6",
    },
};

export default function WritingPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
            <FadeIn>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Writing</h1>
                    <p className="text-muted-foreground max-w-2xl">
                        Thoughts, tutorials, and rants about technology.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/writing/${post.slug}`}
                            className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 hover:opacity-100"
                        >
                            <span className="w-24 text-sm font-mono text-muted-foreground shrink-0">
                                {new Date(post.date).toLocaleDateString('en-GB', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </span>
                            <div className="flex flex-col">
                                <span className="text-lg font-medium text-foreground/90 group-hover:text-foreground group-hover:underline decoration-1 underline-offset-4 transition-all">
                                    {post.title}
                                </span>
                                {post.description && (
                                    <span className="text-sm text-muted-foreground/60 mt-1 line-clamp-1 group-hover:text-muted-foreground/80 transition-colors">
                                        {post.description}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-muted-foreground">
                            <p>No posts found.</p>
                        </div>
                    )}
                </div>
            </FadeIn>
        </div>
    );
}
