import { prisma } from "@/shared/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: "Не удалось загрузить посты" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, slug, content, excerpt, image } = body

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "title, slug и content обязательны" },
        { status: 400 }
      )
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        image,
      },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Ошибка при создании поста" },
      { status: 500 }
    )
  }
}
