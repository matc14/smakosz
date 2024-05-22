import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import User from '../Components/User';

const prisma = new PrismaClient();
const session = await getServerSession(authOptions);

async function getUsers() {
    const users = await prisma.user.findMany();
    return users;
}

function Title() {
    return (
        <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
            <span className="text-6xl font-bold text-center py-5 text-[#fff]">KONTO</span>
        </section>
    );
}

export default async function Users() {
    const users = await getUsers();
    return (
        <>
            <title>Smakosz - Users</title>
            <Navbar />
            <Title />
            <section className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 py-10">
                    {users.map(user => (
                        <User
                            key={user.id}
                            id={user.id}
                            login={user.login}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
