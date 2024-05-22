'use client'
import { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useRouter } from 'next/navigation';
import DeleteCart from './DeleteCart';
export const dynamic = "force-dynamic";


function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">KOSZYK</span>
        </section>
    );
}


function CartItem({ id, imageSrc, name, price, priceSum, quantity, func, onIncrease, onDecrease, onQuantityChange}) {

    return (
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <img src={imageSrc} className="w-[400px] h-[300px]" />
            <span className="pt-4 text-xl font-bold text-center">{name}</span>
            <div className="flex flex-row justify-center items-center w-full pt-1">
            <div className="flex flex-col mr-8">
            <span className="font-bold text-[#324A6D] text-center pt-1.5">Cena/szt</span>
            <span className="text-[#324A6D] mb-1 text-center pb-1.5">{price + " zł"}</span>
            </div>
            <div className="flex flex-col">
            <span className="font-bold text-[#324A6D] text-center pt-1.5">Koszt</span>
            <span className="text-[#324A6D] mb-1 text-center pb-1.5">{priceSum + " zł"}</span>
            </div>
            </div>
            <span className="font-bold text-[#324A6D] text-center p-1.5">Ilość</span>
            <div className='flex flex-row items-center justify-center mb-2'>
            <button onClick={onDecrease} className='w-8 h-8 text-center rounded-full text-2xl bg-[#467FF7] text-[#fff8f0] hover:bg-[#4675f7] px-2.5'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" fill="none" viewBox="0 0 59 8">
  <path fill="#fff" d="M54.895 7.943H4.431a3.605 3.605 0 0 1 0-7.21h50.464a3.605 3.605 0 0 1 0 7.21Z"/>
</svg>
</button>
            <input
                    type="number"
                    value={quantity}
                    onChange={onQuantityChange}
                    className="no-spinner text-center mx-3 text-[#324A6D] w-16 p-1.5 border border-gray-300 rounded"
                    min="1"
                    max="20"
                />
            <button onClick={onIncrease} className='w-8 h-8 text-center rounded-full text-2xl bg-[#467FF7] text-[#fff8f0] hover:bg-[#4675f7] px-1.5'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 87 87">
  <path fill="#fff" d="M68.895 40.077H47.268V18.45a3.605 3.605 0 0 0-7.21 0v21.627H18.431a3.605 3.605 0 0 0 0 7.21h21.627v21.627a3.605 3.605 0 0 0 7.21 0V47.287h21.627a3.605 3.605 0 0 0 0-7.21Z"/>
</svg>
</button>
            </div>
            <DeleteCart id={id} func={func}/>
        </div>
    );
}


export default function Home({ }) {
    const [cartItems, setCartItems] = useState([]);
    const updateCartItemQuantity = async (id, quantity) => {
        await fetch(`/api/cart/quantity/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity })
    })
        fetchCartItems();
    };

    const handleIncrease = (id, currentQuantity) => {
        updateCartItemQuantity(id, currentQuantity + 1);
    };

    const handleDecrease = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            updateCartItemQuantity(id, currentQuantity - 1);
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, cart) => total + cart.dish.price * cart.quantity, 0);
    };
    
    async function fetchCartItems() {
        const response = await fetch('/api/cart');
        const  data = await response.json();
        data.sort((a, b) => a.id - b.id);
        setCartItems(data);
    }


    const handleQuantityChange = (id, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity > 0) {
            updateCartItemQuantity(id, newQuantity);
        }
    };
    
      useEffect(() => {
    
        fetchCartItems();
      }, []);

    return (
        <>
            <title>Smakosz - Koszyk</title>
            <Navbar />
            <Title />
            <section className="flex justify-center items-center pt-10">
                <div className="w-5/6 text-center">
                    <span className="text-2xl font-bold">Całkowita cena: {getTotalPrice()} zł</span>
                </div>
            </section>
            <section className="flex justify-center items-center">
                <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-5/6 py-10">
                        {cartItems.map(cart => {
                        return (
                            <CartItem
                                key={cart.id}
                                id={cart.id}
                                imageSrc={cart.dish.image}
                                name={cart.dish.name}
                                price={cart.dish.price}
                                priceSum={cart.dish.price * cart.quantity}
                                quantity={cart.quantity}
                                func={fetchCartItems}
                                onDecrease={() => handleDecrease(cart.id, cart.quantity)}
                                onIncrease={() => handleIncrease(cart.id, cart.quantity)}
                                onQuantityChange={(event) => handleQuantityChange(cart.id, event)}
                            />

                        )
                    })
                    }
                </div>
            </section>
            
            <Footer />
        </>
    );
}