import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { PrismaClient } from "@prisma/client";
import { getSession } from 'next-auth';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    console.log("No session found");
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    console.log("No user found for the session");
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  console.log("User found: ", user);

  if (session.user.name === user.name) {
    console.log("Session user name matches database user name");
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)), // Ensure serializable data
    },
  };
}

function Title() {
  return (
    <section className="py-20 flex justify-center w-full h-auto bg-[#467FF7]">
      <span className="text-6xl font-bold text-center py-5 text-[#fff]">KONTO</span>
    </section>
  );
}

function UserDetails({ user }) {
  console.log("Rendering user details for: ", user);
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
      <span className="font-bold text-center">{user.login}</span>
      <span className="pt-2 text-center">{user.firstName} {user.lastName}</span>
      <span className="pt-2 text-center">{user.email}</span>
    </div>
  );
}

export default function Users({ user }) {
  console.log("Rendering Users component for: ", user);
  return (
    <>
      <title>Smakosz - Konto</title>
      <Navbar />
      <Title />
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 py-10">
          {user ? <UserDetails user={user} /> : <p>No user data available</p>}
        </div>
      </section>
      <Footer />
    </>
  );
}
