import connectMongo from '@/utils/connectMongo';
import Post from '@/models/postModel';
import { NextResponse } from 'next/server';

export async function GET(req, {params}) {
  const id = params.id
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const post = await Post.find({title: id})
    console.log('CREATED DOCUMENT');

    return new NextResponse(JSON.stringify(post), {status: 200})
  } catch (error) {
    return new NextResponse(`Database Error ${error}`, {status: 500})
  }
}

export const POST = async (request,{params}) => {
  const id = params.id
  const post = await Post.find({title: id})

  try {
    await connectMongo();

    const newPost = await Post.updateOne({title: id}, {clicked: Number(post[0].clicked) + 1})
    

    return new NextResponse(newPost, { status: 200 });
  } catch (err) {
    return console.log(`Database Error ${err}`, { status: 500 });
  }
};