import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const postPerPage = 2;

    const query = {
        take: postPerPage,
        skip: postPerPage * (page - 1),
        where:{
            ...(cat && {catSlug: cat}),
        },
    }
    try{
        const [posts,count] = await prisma.$transaction([
             prisma.post.findMany(query),
             prisma.post.count({where: query.where}),
        ]);
        return new NextResponse(JSON.stringify({posts,count}, {status: 200}));
    }catch(err){
       console.log(err)
       return new NextResponse(JSON.stringify("something went wrong with posts", {status: 500}));
    }
};

