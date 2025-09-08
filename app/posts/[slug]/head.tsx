import { prisma } from "@/shared/prisma"

type Props = { params: { slug: string } }

export default async function Head(props: Props) {
  const { params } = await props
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })

  if (!post) return <></>

  return (
    <>
      <title>{post.title}</title>
      <meta
        name="description"
        content={post.excerpt || post.content.slice(0, 150)}
      />
      <meta property="og:title" content={post.title} />
      {post.image && <meta property="og:image" content={post.image} />}
    </>
  )
}
