import { prisma } from "@/shared/prisma"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { slug: true } })
  return posts.map((post) => ({ slug: post.slug }))
}

// ISR
export const revalidate = 60

import React from "react"
import PostDescription from "@/features/post/post-description"

export default async function page(props: Props) {
  const { params } = await props
  return <PostDescription {...params} />
}
