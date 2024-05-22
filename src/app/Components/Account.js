'use client'

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import User from "./User";
import { useState, useEffect } from "react";


function Title() {
  return (
    <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
      <span className="text-6xl font-bold text-center py-5 text-[#fff]">KONTO</span>
    </section>
  );
}

export default function UserData({ }) {
  const [user, setUser] = useState([]);

  async function fetchUser() {
    const response = await fetch('/api/user');
    const data = await response.json();
    setUser(data);
}
useEffect(() => {
    
  fetchUser();
}, []);

  return (
    <>
      <title>Smakosz - Konto</title>
      <Navbar />
      <Title />
      <section className="flex justify-center items-center w-full">
        <div className="w-72 h-48 my-10">
        {user.map(user => {
                        return (<User key={user.id} firstName={user.firstName} lastName={user.lastName} login={user.login} email={user.email}/>
        )}
        )}
        </div>
      </section>
      <Footer />
    </>
  );
}
