export function generateSlug(title: string) {
  let slug = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "")
    .replace(/-+/g, "-")

  if (!slug) slug = "post-" + Date.now() // если пустой, создаём уникальный
  return slug
}
