import { prisma } from "@/shared/prisma"
import { NextResponse } from "next/server"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Некорректный id" }, { status: 400 })
    }

    await prisma.post.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Пост удалён" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Ошибка при удалении поста" },
      { status: 500 }
    )
  }
}
