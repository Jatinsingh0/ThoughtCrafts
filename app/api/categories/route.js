import prisma from "@/app/utils/connect"
import { NextResponse } from "next/server"

export const GET = async() => {
   try{
      const categories = await prisma.category.findMany();
      return new NextResponse(JSON.stringify(categories, {status: 200}))
   }catch(err){
    return new NextResponse(JSON.stringify("failed to get Category Data", {status: 500}))
   }
}