import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

export async function generateStaticParams() {
    const posts = getPostSlugs();
    return posts.map((post) => ({
        slug: post.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return {
            title: `${post.title} | imduchuyyy`,
            description: post.description,
            icons: {
                icon: "https://euc.li/imduchuyyy.eth",
            },
        };
    } catch {
        return {
            title: 'Post Not Found',
            icons: {
                icon: "https://euc.li/imduchuyyy.eth",
            },
        };
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-32 max-w-3xl">
            <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Writing
            </Link>

            <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    {post.title}
                </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-code:font-mono prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkMath, remarkGfm],
                            rehypePlugins: [
                                rehypeKatex,
                                [rehypePrettyCode, {
                                    theme: 'github-dark',
                                    keepBackground: true,
                                }]
                            ],
                        }
                    }}
                />
            </div>
        </article>
    );
}
