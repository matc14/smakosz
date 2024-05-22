import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    const { userId, dishId, quantity } = await request.json();

    const existingCart = await prisma.cart.findFirst({
        where: {
            userId: Number(userId),
            dishId: Number(dishId),
        },
    });

    let cart;
    if (existingCart) {
        cart = await prisma.cart.update({
            where: {
                id: existingCart.id,
            },
            data: {
                quantity: existingCart.quantity + Number(quantity),
            },
        });
    } else {
        cart = await prisma.cart.create({
            data: {
                userId: Number(userId),
                dishId: Number(dishId),
                quantity: Number(quantity),
            },
        });
    }

    return NextResponse.json({ message: "Dodano danie do koszyka", cart });
}