import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';


const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions)
  
//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

  const userId = session.user.id;


    const cartItems = await prisma.cart.findMany({
      where: { userId },
      include: {
        dish: true,
      },
    });
    return Response.json(cartItems)
}