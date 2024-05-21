import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { dishId } = req.body;

        try {
            const basketItem = await prisma.basket.create({
                data: {
                    dishId: dishId,
                },
            });

            res.status(200).json({ message: 'Dish added to basket', basketItem });
        } catch (error) {
            res.status(500).json({ error: 'Error adding dish to basket' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
