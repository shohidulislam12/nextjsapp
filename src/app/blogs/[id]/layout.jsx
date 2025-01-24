"use client";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    if (!isLoaded) return <p className="min-h-screen text-3xl  text-center">Loading...</p>;

  }

  if (!isSignedIn) {
    return <div className="min-h-screen items-center text-center text-2xl  my-10">Plese Sign in Frist <SignedOut > <SignInButton className='btn btn-outline'>SignIn</SignInButton></SignedOut></div>;;
  }

  return (
    <div className="min-h-screen">
      <h2 className="text-2xl font-semibold text-center">Blog Details</h2>

      <div>{children}</div>
    </div>
  );
}
