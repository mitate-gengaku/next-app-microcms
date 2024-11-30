import { SearchForm } from "@/components/form/search";
import { PostCard } from "@/components/posts/card";
import { getPosts } from "@/libs/client"

const Search = async ({
    searchParams
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) => {
  const search = (await searchParams).search
  const { contents } = await getPosts({
    q: search?.toString(),
    limit: 12
  });
  
  return (
    <div className="w-full px-8 pt-32 py-8 md:w-4/5 mx-auto font-noto-sans">
      <h1 className="mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        僕たちしっかりやろうねえジョバンニ
      </h1>
      <p className="mb-16 text-center text-lg text-slate-500">にわかに、車のなかが、ぱっとあかりが射して来ました。ですからもしもこの天の川がほんとうに川だと</p>
      <SearchForm />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        <div className="cols-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            検索結果
          </h3>
        </div>
        {!contents.length && (
          <div>
            <h3>見つかりませんでした。</h3>
          </div>
        )}
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
export default Search