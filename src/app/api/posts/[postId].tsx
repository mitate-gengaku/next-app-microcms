import { client, getPost } from "@/libs/client";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: {
  postId: string
}}) {
  const postId = params.postId
  try {
    const res = await getPost(postId)

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    throw error;
  }
}