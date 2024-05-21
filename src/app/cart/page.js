// 'use client'
// import { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { useRouter } from "next/navigation";

// function Title() {
//     return (
//         <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
//             <span className="text-6xl font-bold text-center py-5 text-[#fff]">KOSZYK</span>
//         </section>
//     );
// }

// function CartItem({ id, imageSrc, name, price }) {
//     return (
//         <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8] mb-4">
//             <img src={imageSrc} className="w-[200px] h-[150px]" />
//             <span className="pt-4 font-bold text-center">{name}</span>
//             <span className="mr-2 text-[#324A6D] mb-2 text-center p-1.5">{price + " zł"}</span>
//         </div>
//     );
// }

// export default function Cart() {
//     const [cart, setCart] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart"));
//         if (storedCart) {
//             setCart(storedCart);
//         }
//     }, []);

//     return (
//         <>
//             <title>Smakosz - Koszyk</title>
//             <Navbar />
//             <Title />
//             <section className="flex justify-center items-center">
//                 <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-5/6 py-10">
//                     {cart.length > 0 ? (
//                         cart.map((item) => (
//                             <CartItem
//                                 key={item.id}
//                                 id={item.id}
//                                 imageSrc={item.imageSrc}
//                                 name={item.name}
//                                 price={item.price}
//                             />
//                         ))
//                     ) : (
//                         <span className="text-2xl">Twój koszyk jest pusty</span>
//                     )}
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// }


'use client'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
  const session = useSession();


async function fetchCartItems() {
    const response = await fetch('/api/cart');
    const  data = await response.json();
    setCartItems(data);
}

  useEffect(() => {
    // const fetchCartItems = async () => {
    //   if (session) {
    //     const response = await fetch('/api/cart');
    //     setCartItems(response.data);
    //     setLoading(false);
    //   } else {
    //     // Handle case where usser is not authenticated
    //     setLoading(false);
    //   }


    fetchCartItems();
  }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.dish.image_url} alt={item.dish.name} width="50" height="50" />
              <div>{item.dish.name}</div>
              <div>{item.dish.price} USD</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;