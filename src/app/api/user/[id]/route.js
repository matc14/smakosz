import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await prisma.user.delete({
            where: { id: parseInt(id) }
        });
        return new Response(JSON.stringify({ message: 'User deleted' }), { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: 'Failed to delete user' }), { status: 500 });
    }
}
