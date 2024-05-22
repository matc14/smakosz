'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from 'next-auth/react';




function Navbar() {
    const { data: session, status } = useSession();
    function logOut(){
        signOut({ callbackUrl: '/', redirect:true })
    }

    if(session?.user.name === "admin") {
        var menu = '/menuadmin';
    }
    else{
        menu = '/menu';

    }

  useEffect(() => {
initFlowbite();
  }, []);
  const pathname = usePathname();
  return (
    <nav className="bg-[#F3F5F8] bg-opacity-100 sticky w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-[#1C2448]">SMAKOSZ</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link href="/cart">
<button type="button"
  className="text-[#fff8f0] bg-[#467FF7] hover:text-[#fff8f0] hover:bg-[#4675f7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-4 py-2 text-center h-10"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"/><circle cx="400" cy="416" r="32" fill="currentColor"/><path fill="currentColor" d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93"/></svg></button>
  </Link>
  <Link href="/account">
<button type="button"
  className="text-[#fff8f0] bg-[#467FF7] hover:text-[#fff8f0] hover:bg-[#4675f7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-4 py-2 text-center h-10 lg:mx-4 sm:mx-0 -mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg></button>
  </Link>
        {session ? (
<button type="button" onClick={logOut}
  className="text-[#fff8f0] bg-[#467FF7] hover:text-[#fff8f0] hover:bg-[#4675f7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-4 py-2 text-center h-10 "><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.1em" fill="none" viewBox="0 0 108 110">
  <path fill="#fff" d="M85.092 12.204c13.576 9.697 22.412 25.557 22.412 43.508 0 29.48-23.877 53.377-53.335 53.442C24.754 109.219.662 85.234.62 55.798c-.021-17.95 8.814-33.854 22.368-43.572 2.522-1.79 6.034-1.035 7.543 1.659l3.404 6.055a5.17 5.17 0 0 1-1.422 6.68C23.57 33.258 17.86 43.774 17.86 55.69c-.022 19.89 16.054 36.225 36.202 36.225 19.74 0 36.332-15.99 36.203-36.44A36.217 36.217 0 0 0 75.59 26.599a5.14 5.14 0 0 1-1.4-6.659l3.404-6.055c1.509-2.672 5-3.47 7.5-1.681Zm-22.41 45.232V5.718A5.16 5.16 0 0 0 57.508.546h-6.895a5.16 5.16 0 0 0-5.172 5.172v51.718a5.16 5.16 0 0 0 5.172 5.172h6.895a5.16 5.16 0 0 0 5.172-5.172Z"/>
</svg>
</button>
) : (
  
<Link href="/login">
<button type="button"
  className="text-[#fff8f0] bg-[#467FF7] hover:text-[#fff8f0] hover:bg-[#4675f7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-4 py-2 text-center h-10 "><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.1em" fill="none" viewBox="0 0 58 58">
  <path fill="#fff" d="m29.27 25.245-2.12-1.06L53.65.51h-7.067L21.85 22.065c-1.06-.354-2.12-.354-3.533-.354C8.422 21.712.648 29.486.648 39.38c0 9.893 8.127 17.667 17.668 17.667 9.54 0 17.667-7.774 17.667-17.667 0-2.12-.353-4.24-1.06-6.007l4.593-4.594v-7.066h7.067v-7.067h7.067l3.534-3.534V.511L29.269 25.245ZM14.781 47.152c-2.473 0-4.24-2.12-4.24-4.24s2.12-4.24 4.24-4.24 4.24 2.12 4.24 4.24-1.766 4.24-4.24 4.24Z"/>
</svg>

</button>
  </Link>
)}


          <button data-collapse-toggle="navbar-sticky" type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul 
            className="flex flex-col p-4 md:p-0 mt-4 font-semibold md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link href="/"
                className={`${pathname == "/" ? "block py-2 px-3 underline underline-offset-4 text-[#467FF7] hover:bg-white rounded md:hover:bg-transparent" : "block py-2 px-3 rounded text-[#1C2448] hover:text-[#467FF7] hover:bg-white md:hover:bg-transparent "}`}>Strona Główna
                </Link>
            </li>
            <li>
            <Link href="/promotions"
              
                className={`${pathname == "/promotions" ? "block py-2 px-3 underline underline-offset-4 text-[#467FF7] hover:bg-white rounded md:hover:bg-transparent" : "block py-2 px-3 rounded text-[#1C2448] hover:text-[#467FF7] hover:bg-white md:hover:bg-transparent "}`}>Promocje
            </Link>
            </li>
            <li>
              <Link href={menu}
                className={`${pathname == menu ? "block py-2 px-3 underline underline-offset-4 text-[#467FF7] hover:bg-white rounded md:hover:bg-transparent" : "block py-2 px-3 rounded text-[#1C2448] hover:text-[#467FF7] hover:bg-white md:hover:bg-transparent "}`}>Menu
                </Link>
            </li>
            <li>
              <Link href="/contact"
                className={`${pathname == "/contact" ? "block py-2 px-3 underline underline-offset-4 text-[#467FF7] hover:bg-white rounded md:hover:bg-transparent" : "block py-2 px-3 rounded text-[#1C2448] hover:text-[#467FF7] hover:bg-white md:hover:bg-transparent "}`}>Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
