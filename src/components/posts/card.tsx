import { IPost } from "@/types/post"
import { Badge, Container } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

interface Props {
  post: IPost
}

export const PostCard = ({ post }: Props) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      >
      <Container
        className="p-0 border-0 shadow-none flex flex-col gap-3 dark:bg-transparent"
        >
        <Image
          src={post.image.url}
          alt="記事名の画像"
          width={1200}
          height={480}
          className="object-cover rounded-lg"
          />
        <h4 className="text-lg font-semibold">{post.title}</h4>
        <p className="text-sm text-gray-500">{post.description}</p>
        <div className="mb-3 flex flex-wrap items-center gap-4">
          {post.categories.map((category) => (
            <Badge rounded="full" key={category.id}>{category.title}</Badge>
          ))}
        </div>
        <span className="text-right text-xs text-gray-500 leading-none font-sans">{new Date(post.createdAt).toLocaleDateString('sv-SE').replaceAll("-", "/")}</span>
      </Container>
    </Link>
  )
}