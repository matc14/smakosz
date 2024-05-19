import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">KONTAKT</span>
        </section>
    );
}

function Contact() {
    return (
      <section className="flex items-center justify-center">
        <div className="w-5/6 flex xl:flex-row flex-col h-auto justify-center items-center py-20">
        <div className="mx-auto flex flex-col">
            <span className="font-bold text-xl text-[#1C2448]">Bądź z nami w kontakcie</span>
            <span className="text-[#324A6D]">Email: Kontakt@smakosz.com</span>
            <span className="text-[#324A6D]">Telefon: 933-290-231 </span>
            </div>
          <img className="mt-10 items-center justify-center mx-auto xl:w-[600px] h-[450px] w-auto" src="img/contact.png" />
        </div>
      </section>
    );
  }
  
  function Hours() {
    return (
      <section className="flex items-center justify-center">
        <div className="w-5/6 flex xl:flex-row flex-col h-auto justify-center items-center pb-20">
        <iframe className="hidden xl:block mx-auto xl:w-[600px] h-[450px] w-auto items-center justify-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19160.34664945622!2d23.166976!3d53.10941435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff958ff944ed1%3A0x8bc9b89417a615cf!2sWydzia%C5%82%20Biologii%20Uniwersytetu%20w%20Bia%C5%82ymstoku!5e0!3m2!1spl!2spl!4v1704973558504!5m2!1spl!2spl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            
        <div className="mx-auto flex flex-col">
            <span className="font-bold text-xl text-[#1C2448] w-full mx-auto">Godziny otwarcia</span>
            <span className="text-[#324A6D]">Pon-Pt 10:00 - 18:00</span>
            <span className="text-[#324A6D]">Sob-Niedz 11:00 - 22:00 </span>
            </div>
          <iframe className="mt-10 xl:hidden block mx-auto xl:w-[600px] w-auto h-[450px] items-center justify-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19160.34664945622!2d23.166976!3d53.10941435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff958ff944ed1%3A0x8bc9b89417a615cf!2sWydzia%C5%82%20Biologii%20Uniwersytetu%20w%20Bia%C5%82ymstoku!5e0!3m2!1spl!2spl!4v1704973558504!5m2!1spl!2spl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    );
  }


export default function Home() {

    return (
        <>
            <title>Smakosz - Kontakt</title>
            <Navbar />
            <Title />
            <Contact />
            <Hours />
            <Footer />
        </>
    );
}