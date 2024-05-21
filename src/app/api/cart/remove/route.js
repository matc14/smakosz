import { removeFromCart } from '../../../lib/cart';

export async function POOST(request) {
    const { cartId } = await request.json();
    const result = await removeFromCart(cartId);
    return Response(result);
}