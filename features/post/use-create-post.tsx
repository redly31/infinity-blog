import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "@/shared/api"
import { Post } from "./post"
import { NewPostInput } from "./new-post-input"

function generateSlug(title: string) {
  let slug = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "")
    .replace(/-+/g, "-")

  if (!slug) slug = "post-" + Date.now() // если пустой, создаём уникальный
  return slug
}

export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation<Post, Error, NewPostInput>({
    mutationFn: async (post: NewPostInput) => {
      const slug = generateSlug(post.title)
      const { data } = await api.post<Post>("/posts", {
        title: post.title,
        slug,
        content: post.content,
        excerpt: post.content.slice(0, 100),
        image: post.image,
      })
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })
}
