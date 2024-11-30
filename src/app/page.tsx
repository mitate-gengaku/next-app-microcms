import { PostCard } from "@/components/posts/card";
import { getPosts } from "@/libs/client"
import { Button, Input } from "@medusajs/ui";
import Link from "next/link";

const TopPage = async () => {
  const { contents } = await getPosts({
    limit: 6
  });
  
  return (
    <div className="w-full px-8 pt-32 py-8 md:w-4/5 mx-auto font-noto-sans">
      <h1 className="mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        僕たちしっかりやろうねえジョバンニ
      </h1>
      <p className="mb-16 text-center text-lg text-slate-500">にわかに、車のなかが、ぱっとあかりが射して来ました。ですからもしもこの天の川がほんとうに川だと</p>
      <form
        className="w-full md:w-3/5 lg:w-2/5 mb-16 mx-auto"
        >
        <Input
          type="search"
          />
      </form>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        <div className="cols-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            人気の投稿
          </h3>
        </div>
        {contents.map((content) => (
          <PostCard 
            post={content}
            />
        ))}
        <div className="flex justify-center cols-span-1 md:col-span-2 lg:col-span-3">
          <Button
            variant="secondary"
            size="large"
            className="px-6 rounded-full"
            asChild
            >
            <Link
              href={"/posts"}
              >
              全記事一覧
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default TopPage