import Link from "next/link"
import React from "react"

export default function PostItem() {
  return (
    <Link href="/" className="block">
      <article className="w-full h-48 cursor-pointer">
        <img
          src="https://avatars.mds.yandex.net/i?id=5ebabe3146e55dd377743a2bef2fc792_l-10641531-images-thumbs&n=13"
          alt="excerpt"
          className="w-full h-32 object-cover"
        />
        <h2 className="text-xl font-bold line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam a
          temporibus error, facilis saepe itaque amet dolore adipisci laborum
          consectetur at eaque nemo minima, beatae commodi quasi non fuga ipsam.
        </h2>
      </article>
    </Link>
  )
}
