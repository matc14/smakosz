'use client';
import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";

export default function DeleteUser({ id, login, firstName, lastName, email }) {
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

        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <span className="font-bold text-center mt-5">Login: {login}</span>
            <span className="pt-2 text-center">Imię: {firstName} </span>
            <span className="pt-2 text-center">Nazwisko: {lastName}</span>
            <span className="pt-2 text-center mb-5">Email: {email}</span>
            <Button onClick={handleClick} className="xl:w-72 w-48 text-[#fff] font-bold mb-4 bg-[#f74646] hover:bg-[#ec4242] focus:ring-0 border-none rounded-full">
            Usuń
        </Button>        </div> 
        
    );
}
