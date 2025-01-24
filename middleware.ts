import { clerkMiddleware,createRouteMatcher, getAuth } from "@clerk/nextjs/server";
const isProtectedRoute=createRouteMatcher(["/profile"])
// export default clerkMiddleware(async(auth,req)=>{
//  if(isProtectedRoute(req)) auth.protect();
// });

export default clerkMiddleware(async (req, res) => {
  const { userId } = getAuth(req);

  // Protect route if it matches
  if (isProtectedRoute(req)) {
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    // Fetch full user details using Clerk SDK
    const user = await Clerk.users.getUser(userId);

    console.log("User Details:", user); // Logs user details to console

    // Example: Accessing user details
    console.log(`User Email: ${user.emailAddresses[0].emailAddress}`);
  }
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};