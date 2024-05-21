import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import Users from '../Components/Account';
import Userss from '../Components/Account2';
import { authOptions } from '../api/auth/[...nextauth]/route';


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
          <Userss />
        </>
      );
    }
  }
  
  export default MenuAdmin;
  
