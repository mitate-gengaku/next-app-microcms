import { PostCard } from "@/components/posts/card";
import { getPosts } from "@/libs/client";

const AllPost = async () => {
  const { contents } = await getPosts({
    limit: 12
  });

  return (
    <div className="w-full px-8 py-8 pt-24 md:pt-32 md:w-4/5 mx-auto font-noto-sans">
      <div
        className="mb-8 lg:mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-noto-sans"
        >
        <div className="cols-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            投稿一覧
          </h3>
        </div>
        {contents.map((content) => (
          <PostCard
            post={content}
            key={content.id}
            />
        ))}
      </div>
    </div>
  )
}

export default AllPost;