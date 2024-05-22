'use client';
import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";

export default function DeleteUser({ id }) {
    const router = useRouter();

    async function handleClick() {
        try {
            await fetch(`/api/user/${id}`, {
                method: 'DELETE'
            });
            router.refresh();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Button onClick={handleClick} className="xl:w-72 w-48 text-[#fff] font-bold mb-4 bg-[#f74646] hover:bg-[#ec4242] focus:ring-0 border-none rounded-full">
            Usuń
        </Button>
    );
}
