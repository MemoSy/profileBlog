import connectMongo from '@/utils/connectMongo';
import Post from '@/models/postModel';
import { NextResponse } from 'next/server';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export async function GET(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const posts = await Post.find()
    console.log('CREATED DOCUMENT');

    return new NextResponse(JSON.stringify(posts), {status: 200})
  } catch (error) {
    return new NextResponse("Database Error", {status: 500})
  }
}

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectMongo();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};