import { IPost } from '@/types/post';
import { createClient, MicroCMSQueries } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export const getPosts = async (queries?: MicroCMSQueries) => {
  const posts = await client.getList<IPost>({
    endpoint: "posts",
    queries
  })

  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return posts
}