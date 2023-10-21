import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {slug} = params;
    try{
        const post = await prisma.post.findUnique({
            where: {slug},
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(post, {status: 200}));
    }catch(err){
       console.log(err)
       return new NextResponse(JSON.stringify("something went wrong with posts", {status: 500}));
    }
};