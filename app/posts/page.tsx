"use client"
import { Post } from "@/features/post/post"
import PostItem from "@/features/post/post-item"
import { useGetPosts } from "@/features/post/use-get-posts"
import React from "react"

export default function PostsList() {
  const { data: posts, isLoading, isError, error } = useGetPosts()

  if (isLoading) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error?.message}</div>
  console.log(posts)
  return (
    <section className="flex flex-col gap-4">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  )
}
