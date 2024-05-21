import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

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

function User({ id, login, firstName, lastName, email }) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <span className="font-bold text-center">{login}</span>
            <span className="pt-2 text-center">{firstName} {lastName}</span>
            <span className="pt-2 text-center">{email}</span>
        </div>
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
