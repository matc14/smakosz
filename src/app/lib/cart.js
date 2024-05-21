import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addToCart(userId, productId, quantity) {
  try {
    await prisma.cart.create({
      data: {
        userId,
        productId,
        quantity,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function removeFromCart(cartId) {
  try {
    await prisma.cart.delete({
      where: {
        id: cartId,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}