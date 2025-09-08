import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="font-sans mb-4 flex justify-between items-center text-2xl">
      <Link className="font-bold" href="/">
        Infinity Blog
      </Link>
      <Link
        href="/posts/new"
        className="flex items-center justify-center w-8 cursor-pointer h-8 bg-white text-black"
      >
        +
      </Link>
    </header>
  )
}
