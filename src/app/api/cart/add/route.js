import { addToCart } from '../../../lib/cart';

export async function POST(request) {
    const { userId, productId, quantity } = await request.json();
    const result = await addToCart(userId, productId, quantity);
    return Response.json(result)


}
