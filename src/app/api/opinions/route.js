import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function POST(request) {
    
    const { content } = await request.json();
    const session = await getServerSession(authOptions);    
    const opinion = await prisma.opinion.create({
        data: {
            authorId: session.user.id,
            content,
        }
    })

    return NextResponse.json({ message: "Opinia została wysłana", opinion})
}

export async function GET() {
      const opinions = await prisma.opinion.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 2,
        include: {
          author: true,
        },
      });
      return Response.json(opinions);

}
