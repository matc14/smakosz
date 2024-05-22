import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';


const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions)
  
  const userId = session.user.id;

    const user = await prisma.user.findMany({
      where: { id: userId },
    });
    return Response.json(user)
}