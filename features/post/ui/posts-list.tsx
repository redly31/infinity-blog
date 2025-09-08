"use client"
import { useGetPosts } from "@/features/post/model/use-get-posts"
import PostItem from "@/features/post/ui/post-item"
import { Post } from "../model/post"

export default function PostsList({ initialPosts }: { initialPosts: Post[] }) {
  const { data: posts, isLoading, isError, error } = useGetPosts(initialPosts)

  if (isLoading) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error?.message}</div>

  return (
    <section className="flex flex-col gap-4">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  )
}
