import { getPosts } from "@/libs/client"

const TopPage = async () => {
  const { contents } = await getPosts();
  
  return (
    <></>
  )
}
export default TopPage