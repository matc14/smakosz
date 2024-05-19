import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import Home from '../Components/menuadmin';
import { authOptions } from '../api/auth/[...nextauth]/route';


const MenuAdmin = async() => {
  const session = await getServerSession(authOptions);


  if (!session) {
    redirect('/login');
    }

  return (
    <>
    <Home />
    </>
  );
}

export default MenuAdmin
