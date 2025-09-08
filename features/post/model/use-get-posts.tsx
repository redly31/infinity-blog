import { useQuery } from "@tanstack/react-query"
import { Post } from "./post"
import { api } from "@/shared/api"

export function useGetPosts(initialPosts: Post[]) {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    staleTime: 1000 * 60 * 1, // 1 минуту данные свежие
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: initialPosts,
    refetchOnMount: false,
    queryFn: async () => {
      const { data } = await api.get<Post[]>("/posts")
      return data
    },
  })
}
