"use client"
import { useState } from "react"
import CreatePostButton from "./create-post-button"

export default function NewPostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
      <CreatePostButton props={{ title, content, image }} />
    </form>
  )
}
