import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request) {
    const { login, email, firstName, lastName, password } = await request.json();

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            login,
            email,
            firstName,
            lastName,
            password: hash,
        }
    })

    return NextResponse.json({ message: "Użytkownik zarejestrowany pomyślnie", user})
}
