import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/shared/api"
import { Post } from "../model/post"

export default function DeletePostButton({ id }: { id: number }) {
  const queryClient = useQueryClient()

  const mutation = useMutation<void, Error, number>({
    mutationFn: async (id: number) => {
      await api.delete<Post>(`/posts/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return (
    <button
      onClick={() => mutation.mutate(id)}
      type="submit"
      disabled={mutation.isPending}
      className="bg-white text-black cursor-pointer px-8 py-2"
    >
      Удалить
    </button>
  )
}
