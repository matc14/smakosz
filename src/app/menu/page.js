
import { PrismaClient } from "@prisma/client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AddCart from "../Components/AddCart";


export const dynamic = "force-dynamic";

const prisma = new PrismaClient;

const session = await getServerSession(authOptions);

async function getDishes() {
    const dishes = await prisma.dish.findMany()
    return dishes;
}

function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">MENU</span>
        </section>
    );
}


function Dish({ id, imageSrc, name, price, addToCart }) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <img src={imageSrc} className="w-[400px] h-[300px]" />
            <span className="pt-4 font-bold text-center">{name}</span>
            <span className="mr-2 text-[#324A6D] mb-2 text-center p-1.5">{price + " zł"}</span>
        
            {/* <button 
                className="mt-4 px-4 py-2 bg-[#467FF7] text-white rounded"
            >
                Dodaj do koszyka
            </button> */}
            
            <AddCart />
        </div>
    );
}


export default async function Home({ }) {
    const dishes = await getDishes();


    return (
        <>
            <title>Smakosz - Menu</title>
            <Navbar />
            <Title />
            <section className="flex justify-center items-center">
                <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-5/6 py-10">
                    {dishes.map(dish => {
                        return (
                            <Dish
                                key={dish.id}
                                imageSrc={dish.image}
                                name={dish.name}
                                price={dish.price}
                                
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
