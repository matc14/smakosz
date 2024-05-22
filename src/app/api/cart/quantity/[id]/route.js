import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request, {params}){
    const { quantity } = await request.json();

    const id = Number(params.id);
    

    const cart = await prisma.cart.update({
        where: {id},
        data: {
            quantity: Number(quantity)}
    })

    return NextResponse.json(cart)
}