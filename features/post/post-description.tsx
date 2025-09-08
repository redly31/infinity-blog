import { prisma } from "@/shared/prisma"
import ReactMarkdown from "react-markdown"
import { Post } from "./post"

export default async function PostDescription(params: { slug: string }) {
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
