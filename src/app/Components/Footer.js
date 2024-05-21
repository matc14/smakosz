import Link from "next/link";

function Footer() {
    return (
        <footer className="flex flex-col bg-[#F3F5F8] justify-between items-center">
            <div className="flex lg:flex-row flex-col justify-between py-20 w-5/6">
                <div className="mx-auto flex flex-col pb-10">
                    <span className="font-bold text-xl text-[#1C2448]">Smakosz</span>
                    <span className="text-[#324A6D]">Zobacz nasze socialmedia!</span>
                    <div className="flex flex-row justify-between pt-4">
                        <Link href="https://www.facebook.com">
                            <img className="w-4 h-6" src="/img/facebook.png" />
                        </Link>
                        <Link href="https://www.instagram.com">
                            <img className="w-6 h-6" src="/img/instagram.png" />
                        </Link>
                        <Link href="https://x.com">
                            <img className="w-7 h-6" src="/img/twitter.png" />
                        </Link>
                    </div>
                </div>
                <div className="mx-auto flex flex-col">
                    <span className="font-bold text-xl text-[#1C2448]">Bądź z nami w kontakcie</span>
                    <span className="text-[#324A6D]">Email: Kontakt@smakosz.com</span>
                    <span className="text-[#324A6D]">Telefon: 933-290-231 </span>
                </div>
                <iframe className="mx-auto lg:block hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19160.34664945622!2d23.166976!3d53.10941435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff958ff944ed1%3A0x8bc9b89417a615cf!2sWydzia%C5%82%20Biologii%20Uniwersytetu%20w%20Bia%C5%82ymstoku!5e0!3m2!1spl!2spl!4v1704973558504!5m2!1spl!2spl" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <iframe className="mx-auto block lg:hidden pb-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19160.34664945622!2d23.166976!3d53.10941435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff958ff944ed1%3A0x8bc9b89417a615cf!2sWydzia%C5%82%20Biologii%20Uniwersytetu%20w%20Bia%C5%82ymstoku!5e0!3m2!1spl!2spl!4v1704973558504!5m2!1spl!2spl" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="text-center text-white bg-[#467FF7] py-3 font-light w-full">
                <span>© 2024 Smakosz</span>
            </div>
        </footer>
    );
}

export default Footer;
