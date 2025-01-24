"use client"
import { useUser } from "@clerk/nextjs";
import { SignInButton,UserButton,SignedOut,SignedIn } from "@clerk/nextjs";
const page = () => {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) return <p className="min-h-screen text-3xl  text-center">Loading...</p>;
    if (!isSignedIn) {
        return  <div className="min-h-screen items-center text-center text-2xl  my-10">Plese Sign in Frist <SignedOut > <SignInButton className='btn btn-outline'>SignIn</SignInButton></SignedOut></div>;
      }
    console.log(user)
    return (
        <div className="min-h-screen">
            <div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* User Avatar */}
      <h2 className="text-2xl font-bold text-center">WelCome To Your Profile </h2>
      <div className="flex justify-center mt-6">
        <img
          src={user?.imageUrl
            || "/placeholder-avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
      </div>

      {/* User Details */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="text-gray-600">{user?.emailAddresses[0]?.emailAddress}</p>
        <p className="mt-4 text-blue-500 font-medium">
          {user?.publicMetadata?.role || "User"}
        </p>
      </div>

    </div>
          
        </div>
    );
};

export default page;