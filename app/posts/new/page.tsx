"use client"

import { useCreatePost } from "@/features/post/use-create-post"
import { useState } from "react"

export default function NewPostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const mutation = useCreatePost()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({
      title,
      content,
      image: image || undefined,
    })
    setTitle("")
    setContent("")
    setImage("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-xl mx-auto items-start"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
        className="border p-2 w-full outline-0"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Markdown контент"
        className="border p-2 w-full outline-0"
        rows={10}
        required
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Ссылка на изображение (опционально)"
        className="border p-2 w-full outline-0"
      />
      <button
        type="submit"
        className="bg-white text-black cursor-pointer px-8 py-2"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Создание..." : "Создать пост"}
      </button>
      {mutation.isError && (
        <p className="">Ошибка: {mutation.error?.message}</p>
      )}
      {mutation.isSuccess && <p className="">Пост успешно создан!</p>}
    </form>
  )
}
