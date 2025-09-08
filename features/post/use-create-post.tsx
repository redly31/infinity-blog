import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "@/shared/api"
import { Post } from "./post"
import { NewPostInput } from "./new-post-input"

export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation<Post, Error, NewPostInput>({
    mutationFn: async (post: NewPostInput) => {
      const slug = post.title.toLowerCase().replace(/\s+/g, "-")
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
