"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton,UserButton,SignedOut,SignedIn } from "@clerk/nextjs";

const Navigation = () => {
    const pathname=usePathname()
    const list=<>
   <Link href='/' className={`${pathname==='/'?'font-bold text-blue-600':''} "mr-4 mx-4  text-3xl text-blue-500 `}>Home</Link>
   <Link href='/profile' className={`${pathname==='/profile'?'font-bold':''} "mr-4  text-3xl text-blue-500 `}>Profile</Link>
  
    </>
  
    return ( 



        <div>
                 <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {list }
      </ul>
    </div>
    <a className=" font-bold text-xl">Blog Profile Web</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {list }
    </ul>
  </div>
  <div className="navbar-end  ">
  <SignedOut> <SignInButton  className='btn btn-outline'>SignIn</SignInButton></SignedOut>
  <SignedIn> <UserButton></UserButton></SignedIn>
  </div>
</div>

            
        {/* <nav className="flex text-3xl justify-between  gap-10 ">
         
        
        
       
     </nav> */}
        </div>
   

    );
};

export default Navigation;