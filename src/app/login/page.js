'use client'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { signIn, useSession, } from 'next-auth/react';
import { useState } from "react";
import { useRouter } from "next/navigation";



function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">LOGOWANIE</span>
        </section>
    );
}

function Form() {

    const session = useSession();
    const router = useRouter();
    if (session?.status === 'authenticated') {
        router.push('/');
    }

    const [alert, setAlert] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const res = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });

        if (!res.error) {
            window.location.href = '/';
        } else {
            setAlert(true);
        }
    };


    return (
        <section className="flex flex-col items-center justify-center w-full h-auto bg-white py-32">
            <span className="mt-10 text-6xl font-bold text-[#1C2448] w-full text-center">Zaloguj się</span>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-10">
                    <input
                        type="text"
                        id="username"
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Login"
                        required />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Hasło"
                        required />
                </div>
                {alert ? (
                    <div class="px-3  py-2.5 mb-4 w-64 text-sm font-bold text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 rounded-full border-none text-center" role="alert">
                     Błędny login lub hasło!
                    </div>
                ) : 
                (
                    <></>
                )}
                
                <button type="submit" className="mb-10 py-2.5 w-64 bg-[#467FF7] hover:bg-[#4675f7] text-center text-[#fff] font-bold rounded-full border-none focus:ring-0">Zaloguj się</button>
            </form>
        </section>
    );
}

export default function Login() {



    return (
        <>
            <title>Smakosz - Logowanie</title>
            <Navbar />
            <Title />
            <Form />
            <Footer />
        </>
    );
}