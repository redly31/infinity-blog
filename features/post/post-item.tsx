import { Post } from "@/app/generated/prisma"
import Link from "next/link"
import React from "react"

export default function PostItem({ post }: { post: Post }) {
  const createdAt: Date = new Date(post.createdAt)

  return (
    <Link href={`/posts/${post.slug}`} className="block">
      <article className="w-full max-h-48 cursor-pointer">
        {post.image && (
          <img
            src={post.image}
            alt="Изображение поста"
            className="w-full h-32 object-cover"
          />
        )}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
          <time dateTime={createdAt.toISOString()}>
            {createdAt.toLocaleDateString("ru-RU")}
          </time>
        </div>
      </article>
    </Link>
  )
}
