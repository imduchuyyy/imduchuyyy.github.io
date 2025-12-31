import Link from 'next/link';
import { getAllPosts } from '../../lib/mdx';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
    title: "Writing | imduchuyyy",
    description: "Thoughts on software engineering, web3, and life.",
    icons: {
        icon: "https://euc.li/imduchuyyy.eth",
    },
};

export default function WritingPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-32 max-w-3xl">
            <FadeIn>
                <div className="max-w-2xl text-center mb-16 space-y-4 mx-auto">
                    <h1 className="text-4xl font-bold font-mono">Writing</h1>
                    <p className="text-muted-foreground">
                        Thoughts, tutorials, and rants about technology.
                    </p>
                </div>

                <div className="space-y-10">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/writing/${post.slug}`}
                            className="block group space-y-3 p-6 -mx-6 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                {post.tags && (
                                    <>
                                        <span>•</span>
                                        <div className="flex gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-primary/80 uppercase tracking-wider">#{tag}</span>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-muted-foreground leading-relaxed line-clamp-2">
                                {post.description}
                            </p>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">
                            <p>No posts found. Check back later!</p>
                        </div>
                    )}
                </div>
            </FadeIn>
        </div>
    );
}
