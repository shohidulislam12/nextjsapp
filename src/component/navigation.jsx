"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton,UserButton,SignedOut,SignedIn } from "@clerk/nextjs";

const Navigation = () => {
    const pathname=usePathname()
    return (
        <nav className="flex text-3xl justify-between  gap-10 ">
         
            <Link href='/' className={`${pathname==='/'?'font-bold text-blue-600':''} "mr-4  text-4xl text-blue-500 `}>Home</Link>
            <Link href='/profile' className={`${pathname==='/profile'?'font-bold':''} "mr-4  text-4xl text-blue-500 `}>Profile</Link>
           <SignedOut> <SignInButton></SignInButton></SignedOut>
           <SignedIn> <UserButton></UserButton></SignedIn>
        </nav>
   

    );
};

export default Navigation;