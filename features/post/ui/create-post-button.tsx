import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/shared/api"
import { generateSlug } from "@/shared/generate-slug"
import { NewPostInput } from "../model/new-post-input"
import { Post } from "../model/post"

export default function CreatePostButton({ props }: { props: NewPostInput }) {
  const queryClient = useQueryClient()

  const mutation = useMutation<Post, Error, NewPostInput>({
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

  const handleCreateNewPost = () => {
    mutation.mutate({
      title: props.title,
      content: props.content,
      image: props.image || undefined,
    })
  }

  return (
    <button
      onClick={() => handleCreateNewPost()}
      type="submit"
      className="bg-white text-black cursor-pointer px-8 py-2"
    >
      Создать пост
    </button>
  )
}
