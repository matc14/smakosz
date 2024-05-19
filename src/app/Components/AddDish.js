'use client'
import { Button } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddDish({}) {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter()

    const reset = () => {
        setImage('');
        setName('');
        setPrice('');
    };

    const add = async (e) => {
        e.preventDefault();
        await fetch('/api/dish', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image, name, price })
        })
        reset()
        router.refresh()
    }

    return (
        <form onSubmit={add}>
            <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
                    <img src={image} className="w-[400px] h-[300px] bg-[url('/img/image.png')] bg-contain bg-center" 
                    onError={(e) => {
                        e.target.src = '/img/image.png';
                    }} />
                    <span className="pt-4 font-bold text-[#1C2448] text-center">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nazwa"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-full text-center text-[#1C2448] p-0 h-5"
                            maxLength="50">
                        </input>
                    </span>

                    <span className="mr-2 text-[#324A6D] mb-2 text-center p-1.5"><input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="0.00"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-16 h-5 rounded-full text-[#324A6D] text-center p-0"
                        maxLength="5">
                    </input> zł</span>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="img/plik.png"
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="xl:w-72 w-48 h-9 text-[#324A6D] mt-0 mb-4 focus:ring-0 text-center text-base rounded-full p-1.5">
                    </input>

                    <div className="flex flex-row items-center justify-center">
                        <Button type="submit" className="mx-auto xl:w-32 w-20 mr-4 text-[#fff] font-bold bg-[#1e6e36] hover:bg-[#195f2e] mb-4 border-none focus:ring-0 rounded-full ">Dodaj</Button>
                        <Button onClick={reset} className="mx-auto xl:w-32 w-20 ml-4 text-[#fff] font-bold mb-4 bg-[#f74646] border-none hover:bg-[#ec4242] focus:ring-0 rounded-full">Wyczyść</Button>

                    </div>

            </div>
        </form >
    );
}