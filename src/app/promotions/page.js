import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">PROMOCJE</span>
        </section>
    );
}

function Content() {
    return (
        <section className="flex justify-center items-center">
        <div class="grid grid-cols-2 gap-4 w-5/6 py-10">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto w-full" src="img/promo-1.png" alt=""/>
                </div>
                <div>
                    <img class="h-auto w-full" src="img/promo-3.png" alt=""/>
                </div>
                <div>
                    <img class="h-auto w-full" src="img/promo-5.png" alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto w-full" src="img/promo-2.png" alt=""/>
                </div>
                <div>
                    <img class="h-auto w-full" src="img/promo-4.png" alt=""/>
                </div>
                <div>
                    <img class="h-auto w-full" src="img/promo-6.png" alt=""/>
                </div>
            </div>
        </div>
        </section>
    );
}



export default function Home() {

    return (
        <>
            <title>Smakosz - Promocje</title>
            <Navbar />
            <Title />
            <Content />
            <Footer />
        </>
    );
}