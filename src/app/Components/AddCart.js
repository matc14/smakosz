'use client'
//import { useRouter } from "next/navigation"
import { Button } from "flowbite-react"
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function AddCart({ id }) {
    const dishId = id;
    const {data: session, status} = useSession();
    const userId = session?.user.id;
    const quantity = 1;
    async function handleClick() {
        try {
            await fetch(`/api/cart/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, dishId, quantity })
            })
            
        } catch (e) {
            console.error(e)
        }

    }


    

    return (
        <>
        {session ? (
        <Button onClick={handleClick} className="xl:w-72 w-48  text-[#fff] font-bold mb-4 bg-[#467FF7] hover:bg-[#4675f7] focus:ring-0 border-none rounded-full">Dodaj do koszyka</Button>) : 
        (<Link href="/login">
        <Button className="xl:w-72 w-48  text-[#fff] font-bold mb-4 bg-[#467FF7] hover:bg-[#4675f7] focus:ring-0 border-none rounded-full">Dodaj do koszyka</Button>
        </Link>)}
        </>
    )
}