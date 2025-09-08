import { prisma } from "@/shared/prisma"
import ReactMarkdown from "react-markdown"
import { Post } from "../model/post"

export default async function PostDescription({ slug }: { slug: string }) {
  const decodeSlug = decodeURIComponent(slug)
  const post: Post | null = await prisma.post.findUnique({
    where: { slug: decodeSlug },
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
