import PostsList from "@/features/post/ui/posts-list"
import { prisma } from "@/shared/prisma"

export const revalidate = 60

export default async function PostsListPage() {
  const posts = await prisma.post.findMany()
  return <PostsList initialPosts={posts} />
}
