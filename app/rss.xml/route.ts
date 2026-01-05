
import { getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

const URL = 'https://imduchuyyy.github.io';

export async function GET() {
  const posts = getAllPosts();

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>imduchuyyy - Web3 Developer</title>
    <link>${URL}</link>
    <description>Web3 Developer & Open Source Enthusiast</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts.map((post) => {
    return `
    <item>
      <title>${post.title}</title>
      <link>${URL}/writing/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${URL}/writing/${post.slug}</guid>
    </item>`;
  }).join('')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
