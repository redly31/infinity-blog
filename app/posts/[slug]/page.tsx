import { Post } from "@/app/generated/prisma"
import { useDeletePost } from "@/features/post/use-delete-post"
import { prisma } from "@/shared/prisma"
import ReactMarkdown from "react-markdown"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { slug: true } })
  return posts.map((post) => ({ slug: post.slug }))
}

// ISR
export const revalidate = 60

export default async function PostPage(props: Props) {
  const { params } = await props // ⚡ важно
  const slug = decodeURIComponent(params.slug)
  const post: Post | null = await prisma.post.findUnique({
    where: { slug: slug },
  })

  if (!post) return <div>Пост не найден</div>

  return (
    <article className="flex flex-col gap-4">
      {post.image && <img src={post.image} alt="Изображение поста" />}

      <h1 className="text-2xl font-bold">{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}
