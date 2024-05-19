import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    const { image, name, price } = await request.json();


    const dish = await prisma.dish.create({
        data: {
            image,
            name,
            price: Number(price)
        }
    })

    return NextResponse.json({ message: "Danie dodane pomyślnie", dish})
}