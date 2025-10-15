export function generateStaticParams() {
  return [{ slug: 'hello' }, { slug: 'about' }]
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/contents/${slug}.mdx`)

  return <Post />
}

export const dynamicParams = false
