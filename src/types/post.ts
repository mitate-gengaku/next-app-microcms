import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export interface ICategory extends MicroCMSDate {
  id: string;
  title: string;
  slug: string;
}

export interface IPost extends MicroCMSDate {
  id: string;
  title: string;
  description: string;
  content: string;
  image: MicroCMSImage;
  categories: ICategory[]
}