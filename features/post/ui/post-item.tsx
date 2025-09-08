import Link from "next/link"
import React from "react"
import { Post } from "../model/post"
import DeletePostButton from "./delete-post-button"

export default function PostItem({ post }: { post: Post }) {
  const createdAt: Date = new Date(post.createdAt)

  return (
    <article className="w-full max-h-48 border-2">
      {post.image && (
        <img
          src={post.image}
          alt="Изображение поста"
          className="w-full h-32 object-cover"
        />
      )}
      <div className="flex justify-between items-center p-2">
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
        </Link>
        <div className="flex items-center gap-4">
          <time dateTime={createdAt.toISOString()}>
            {createdAt.toLocaleDateString("ru-RU")}
          </time>
          <DeletePostButton id={post.id} />
        </div>
      </div>
    </article>
  )
}
