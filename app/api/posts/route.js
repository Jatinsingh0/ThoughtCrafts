import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        const posts = await prisma.post.findMany();
        return new NextResponse(JSON.stringify(posts, {status: 200}));
    }catch(err){
       console.log(err)
       return new NextResponse(JSON.stringify("something went wrong with posts", {status: 500}));
    }
};

