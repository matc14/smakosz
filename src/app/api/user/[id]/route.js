import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
    const { id } = params;

        await prisma.user.delete({
            where: { id: parseInt(id) }
        });
return Response.json("Usunięto konto")
}
