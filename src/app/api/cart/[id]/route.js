import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request, {params}){
    const id = Number(params.id);
    
    const cart = await prisma.cart.delete({
        where: {id}
    })

    return NextResponse.json(cart)
}