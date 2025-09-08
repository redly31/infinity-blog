import { prisma } from "@/shared/prisma"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { slug: true } })
  return posts.map((post) => ({ slug: post.slug }))
}

// ISR
export const revalidate = 60

import React from "react"
import PostDescription from "@/features/post/ui/post-description"

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <PostDescription slug={slug} />
}
