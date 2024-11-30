import { TriangleRightMini } from "@medusajs/icons";
import Link from "next/link";
import { Badge } from "@medusajs/ui";
import { getPost } from "@/libs/client";
import { Markdown } from "@/components/lib/react-markdown";

const PostDetail = async ({
    params
  }: {
    params: Promise<{ postId: string }>;
 }) => {
  const postId = (await params).postId
  const post = await getPost(postId)

  return (
    <div className="w-full px-8 py-8 pt-24 md:pt-32 md:w-4/5 mx-auto font-noto-sans">
      <div
        className="mb-8 font-noto-sans"
        >
        <ol className="flex items-center gap-1 text-sm text-gray-500">
          <li className="hover:text-gray-800 transition-all">
            <Link
              href={"/"}
              >
              /
            </Link>
          </li>
          <li>
            <TriangleRightMini /> 
          </li>
          <li className="hover:text-gray-800 transition-all">
            <Link
              href={"/posts"}
              >
              記事一覧
            </Link>
          </li>
          <li>
            <TriangleRightMini />
          </li>
          <li>
            {post.title}
          </li>
        </ol>
      </div>
      <div className="mb-8 lg:mb-12 flex flex-wrap items-center gap-4">
        {post.categories.map((category) => (
          <Badge rounded="full" key={category.id}>{category.title}</Badge>
        ))}
      </div>
      <Markdown content={post.content} />
    </div>
  )
}

export default PostDetail;