export interface Post {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}
