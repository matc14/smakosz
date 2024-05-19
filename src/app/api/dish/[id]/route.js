import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request, {params}){
    const id = Number(params.id);
    
    const dish = await prisma.dish.delete({
        where: {id}
    })

    return NextResponse.json(dish)
}

export async function PUT(request, {params}){
    const { image, name, price } = await request.json();

    const id = Number(params.id);
    
    const dish = await prisma.dish.update({
        where: {id},
        data: {
            image,
            name,
            price: Number(price)}
    })

    return NextResponse.json(dish)
}