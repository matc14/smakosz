'use client'
//import { useRouter } from "next/navigation"
import { Button } from "flowbite-react"

export default function AddCart({ id }) {
    //const router = useRouter()
    const userId = 1;
    const productId = 1;
    const quantity = 1;
    async function handleClick() {

        try {
            await fetch(`/api/cart/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, productId, quantity })
            })
        } catch (e) {
            console.error(e)
        }

    }


    

    return (
        <Button onClick={handleClick} className="xl:w-72 w-48  text-[#fff] font-bold mb-4 bg-[#f74646] hover:bg-[#ec4242] focus:ring-0 border-none rounded-full">Usuń</Button>

    )
}