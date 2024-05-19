
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EditDish from "../Components/EditDish";
import AddDish from "../Components/AddDish";
import { PrismaClient } from "@prisma/client";
export const dynamic = "force-dynamic";

const prisma = new PrismaClient;

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


function Dish({ id, imageSrc, name, price }) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <img src={imageSrc} className="w-[400px] h-[300px]" />
            <span className="pt-4 font-bold text-center">{name}</span>
            <span className="mr-2 text-[#324A6D] mb-2 text-center p-1.5">{price + " zł"}</span>
            {/* <Button className="mr-2 xl:w-72 w-60  text-[#D9D9D9] font-bold border border-[#412234] bg-[#412234] mb-4 hover:bg-[#4e283e] hover:border-[#4e283e] active:bg-[#572e46] focus:ring-0">Szczegóły</Button> */}
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
                            <EditDish
                                key={dish.id}
                                id={dish.id}
                                imageSrc={dish.image}
                                nameC={dish.name}
                                priceC={dish.price}
                            />
                        )
                    })
                    }
                    <AddDish />
                </div>
            </section>
            <Footer />
        </>
    );
}