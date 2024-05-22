'use client';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useState } from "react";

function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">REJESTRACJA</span>
        </section>
    );
}

function Form() {
    const [login, setLogin] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rpassword, setRpassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const register = async (e) => {
        e.preventDefault();
        if (password !== rpassword) {
            setPasswordsMatch(false);
            return;
        }
        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, firstName, lastName, email, password })
        })

    }

    return (
        <section className="flex flex-col items-center justify-center w-full h-auto bg-white py-32">
            <span className="mt-10 text-6xl font-bold text-[#1C2448] w-full text-center">Zarejestruj się</span>
            <form onSubmit={register} className="flex flex-col items-center">
                <div className="mb-4 mt-10">
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Login"
                        required />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Imię"
                        required />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Nazwisko"
                        required />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Email"
                        required />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Hasło"
                        required />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="rpassword"
                        value={rpassword}
                        onChange={(e) => setRpassword(e.target.value)}
                        className="bg-[#F3F5F8] border text-[#1C2448] placeholder-[#324A6D] font-medium text-sm rounded-full block w-64 p-2.5"
                        placeholder="Powtórz Hasło"
                        required />
                </div>
                <button type="submit" className="mb-4 py-2.5 w-64 bg-[#467FF7] hover:bg-[#4675f7] text-center text-[#fff] font-bold rounded-full border-none focus:ring-0">Zarejestruj się</button>
                <Link href="/login">
                <button type="button"  className="py-2.5 w-64 bg-[#FF4757] hover:bg-[#ff5a5a] text-center text-[#fff] font-bold rounded-full border-none focus:ring-0">Powrót do logowania</button>
                </Link>
            </form>
        </section>
    );
}

export default function Register() {
    return (
        <>
            <title>Smakosz - Rejestracja</title>
            <Navbar />
            <Title />
            <Form />
            <Footer />
        </>
    );
}
