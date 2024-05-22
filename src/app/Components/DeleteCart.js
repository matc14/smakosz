'use client'
import { useRouter } from "next/navigation"
import { Button } from "flowbite-react"
import { useState } from "react"

export default function DeleteCart({ id , func}) {
    const router = useRouter()
    const [cartItems, setCartItems] = useState('');
    async function handleClick() {

        await fetch(`/api/cart/${id}`, {
            method: 'DELETE'
        })

        func();
    }

    return (
        <Button onClick={handleClick} className="xl:w-72 w-48  text-[#fff] font-bold mb-4 bg-[#f74646] hover:bg-[#ec4242] focus:ring-0 border-none rounded-full">Usuń z koszyka</Button>

    )
}