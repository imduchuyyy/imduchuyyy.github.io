import { Metadata } from 'next';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { Github, Mail, Twitter, Linkedin, Rss } from 'lucide-react';
import { getAllPosts } from '../lib/mdx';
import { FeaturedProjects } from '@/components/ContributionsSection';

export const metadata: Metadata = {
  title: "imduchuyyy",
  description: "Web3 Developer & Open Source Enthusiast",
};

export default function App() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <FadeIn>
        <section className="space-y-6 mb-24">
          <h1 className="text-xl font-bold tracking-tight">Hey there!</h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              My name is Huy. I&apos;m a Blockchain Engineer with a passion for building decentralized applications
              and tooling that empowers users. I&apos;m currently working as a Technical Leader at <Link href="https://ne.xyz" target="_blank" className="text-foreground border-b border-foreground/20">Ninety Eight</Link>.
            </p>
            <p>
              In my spare time, I contribute to <Link href="/contributions" className="text-foreground border-b border-foreground/20">open source projects</Link> and write about <Link href="/writing" className="text-foreground border-b border-foreground/20">my learnings</Link> in the crypto space.
            </p>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <div className="flex items-center gap-6">
              <span className="text-sm font-mono text-muted-foreground">Find me on</span>
              <div className="flex gap-4">
                <a href="https://github.com/imduchuyyy" target="_blank" className="hover:text-foreground transition-colors"><Github size={18} /></a>
                <a href="https://x.com/imduchuyyy" target="_blank" className="hover:text-foreground transition-colors"><Twitter size={18} /></a>
                <a href="https://linkedin.com/in/imduchuyyy" target="_blank" className="hover:text-foreground transition-colors"><Linkedin size={18} /></a>
                <a href="mailto:duchuy.124dk@gmail.com" className="hover:text-foreground transition-colors"><Mail size={18} /></a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-mono">Or anywhere with my handle @imduchuyyy</p>
          </div>
        </section>

        <section className="space-y-8 mb-24">
          <h2 className="text-lg font-bold">Posts</h2>

          <div className="flex flex-col space-y-4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <PostRow
                  key={post.slug}
                  date={new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  title={post.title}
                  href={`/writing/${post.slug}`}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-sm">No posts found.</p>
            )}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-lg font-bold">Projects</h2>
          <FeaturedProjects withHeader={false} />
        </section>
      </FadeIn>
    </div>
  );
}

function PostRow({ date, title, href }: { date: string, title: string, href: string }) {
  return (
    <Link href={href} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
      <span className="w-24 text-sm font-mono text-muted-foreground shrink-0">{date}</span>
      <span className="text-foreground/80 group-hover:text-foreground group-hover:underline decoration-1 underline-offset-4 transition-all">
        {title}
      </span>
    </Link>
  )
}
