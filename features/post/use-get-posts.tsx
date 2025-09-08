import { useQuery } from "@tanstack/react-query"
import { Post } from "./post"
import { api } from "@/shared/api"

export function useGetPosts() {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api.get<Post[]>("/posts")
      return data
    },
  })
}
