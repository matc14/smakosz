import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import UserData from '../Components/Account';
import Users from '../Components/Accounts';
import { authOptions } from '../api/auth/[...nextauth]/route';
export const dynamic = "force-dynamic";



const MenuAdmin = async () => {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      redirect('/login');
    }
  
    if (session?.user.name === "admin") {
      return (
        <>
          <Users />
        </>
      );
    } else {
      return (
        <>
          <UserData/>
        </>
      );
    }
  }
  
  export default MenuAdmin;
  
