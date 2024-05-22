import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Opinions from "./Components/Opinions";
import Link from "next/link";
import { Textarea } from "flowbite-react";
import { Button } from "flowbite-react";

function Title() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex lg:flex-row flex-col h-auto justify-center items-center py-20 w-5/6">
        <span className="text-6xl font-bold items-center justify-center xl:w-1/2 w-full mx-auto lg:mb-0 mb-8 text-[#1C2448]">Najlepsza restauracja w Twojej okolicy!</span>
        <div className="flex flex-col xl:w-1/2 w-full mx-auto">
          <span className="mb-4 text-[#324A6D]">Zapraszamy na najlepsze dania w Twojej okolicy</span>
          <Link href="/menu">
            <button className="rounded-full bg-[#467FF7] text-[#fff8f0] hover:bg-[#4675f7] py-2 w-48 text-center">Poznaj nasze menu</button>
          </Link>
        </div>
      </div>
      <img className="w-5/6 hidden lg:block pb-20" src="img/home-title.png" />
    </section>
  );
}

function Why() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-5/6 flex xl:flex-row flex-col h-auto justify-center items-center pb-20">
        <div className="flex flex-col w-auto mx-auto">
          <span className="mb-4 text-6xl font-bold text-[#1C2448]">Dlaczego my?</span>
          <span className="mb-4 w-full xl:pr-40 text-[#324A6D]">Po pierwsze, nasza restauracja to oaza smaku. Kuchnia, którą oferujemy, to nie tylko zestaw potraw, ale prawdziwa symfonia smaków, połączenie tradycji z nowoczesnością. Dbamy o to, aby każdy składnik był starannie wyselekcjonowany, a każda potrawa stanowiła prawdziwe arcydzieło kulinarnego rzemiosła. Dlaczego my? Bo wierzymy, że jedzenie powinno być nie tylko pożywieniem dla ciała, ale również uczuciem dla duszy.</span>
        </div>
        <img className="items-center justify-center xl:w-auto w-full h-auto mx-auto lg:mb-0 mb-8" src="img/home-why.png" />
      </div>
    </section>
  );
}

function Catering() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-5/6 flex xl:flex-row flex-col h-auto justify-center items-center pb-20">
        <img className="hidden xl:block items-center justify-center xl:w-auto w-full h-auto mx-auto lg:mb-0 mb-8" src="img/home-catering.png" />
        <div className="flex flex-col w-auto mx-auto">
          <span className="mb-4 text-6xl font-bold xl:pl-40 text-[#1C2448]">Nasz Catering</span>
          <span className="mb-4 w-full xl:pl-40 text-[#324A6D]">Nasz catering to niezrównane doświadczenie kulinarne dostosowane do Twoich potrzeb. Zestawiamy świeże, lokalne składniki z kreatywnością kulinarną, aby stworzyć potrawy, które zachwycą Twoich gości. Dlaczego my? Nasz zespół doświadczonych kucharzy i obsługi zatroszczy się o każdy detal, sprawiając, że Twoje wydarzenie będzie niezapomniane. Bez względu na to, czy to kameralna uroczystość czy duża konferencja, nasz catering oferuje różnorodność smaków, elegancję i profesjonalizm. Daj nam przyjemność obsłużyć Cię i spraw, aby smakowało nie tylko pysznie, ale także wyjątkowo.</span>
        </div>
        <img className="xl:hidden block items-center justify-center xl:w-auto w-full h-auto mx-auto lg:mb-0 mb-8" src="img/home-catering.png" />
      </div>
    </section>
  );
}

function Dishes() {
  return (
    <section className="flex flex-col justify-center items-center pb-20">
      <span className="mb-4 text-6xl font-bold text-[#1C2448]">Poznaj nasze dania</span>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 justify-center items-center w-5/6">
        <div className="flex flex-col">
          <img className="w-80 h-96 mt-8" src="img/home-dish-1.png" />
          <span className="font-bold text-lg">Margherita</span>
          <span>40.00 zł</span>
        </div>
        <div className="flex flex-col">
          <img className="w-80 h-96" src="img/home-dish-2.png" />
          <span className="font-bold text-lg">Jalapeño</span>
          <span>45.00 zł</span>
        </div>
        <div className="flex flex-col">
          <img className="w-80 h-96 mt-8" src="img/home-dish-3.png" />
          <span className="font-bold text-lg">Hawajska</span>
          <span>60.00 zł</span>
        </div>
        <div className="flex flex-col">
          <img className="w-80 h-96" src="img/home-dish-4.png" />
          <span className="font-bold text-lg">Swojska</span>
          <span>55.00 zł</span>
        </div>
      </div>
    </section>
  );
}

function Promotions() {
  return (
    <section className="flex flex-col justify-center items-center pb-20">
      <span className="mb-4 text-6xl font-bold text-[#1C2448] text-center">Zobacz nasze promocje</span>
      <span className="max-w-[450px] w-auto text-center py-10 text-[#324A6D]">Zapraszamy do odkrywania naszych atrakcyjnych promocji! "Zobacz Nasze Promocje" to brama do pełnego smaku przy oszczędnościach. Dla naszych klientów przygotowaliśmy wyjątkowe oferty, które sprawią, że Twoje doświadczenie kulinarne stanie się jeszcze bardziej satysfakcjonujące. Czy to specjalne zestawy, rabaty na zamówienia większe czy unikalne wydarzenia kulinarne – nasze promocje są skrojone na miarę Twoich oczekiwań. Dlaczego warto zajrzeć? Bo dobre jedzenie zasługuje na wyjątkową okazję, a nasze promocje sprawią, że smakowanie będzie nie tylko pełne wrażeń, ale także przyjazne dla Twojego portfela. Odkryj, jak możemy umilić Ci gastronomiczne chwile!</span>
      <Link href="/promotions">
        <button className="rounded-full bg-[#467FF7] text-[#fff8f0] hover:bg-[#4675f7] py-2 w-48">PROMOCJE</button>
      </Link>
    </section>
  );
}






export default function Home() {
  return (
    <>
      <title>Smakosz</title>
      <Navbar />
      <Title />
      <Why />
      <Catering />
      {/* <Dishes /> */}
      <Promotions />
      <Opinions />
      <Footer />
    </>
  );
}
