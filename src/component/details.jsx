import Link from "next/link";
import { auth,currentUser } from "@clerk/nextjs/server"; 

const Details =async ({id}) => {
//     const authObj=await auth()
// const userOj=await currentUser()
//console.log('auth',authObj,userOj)
    return (
        <div >
            <Link className="btn btn-outline text-3xl"  href={`/blogs/${id}`}>Details</Link>
        </div>
    );
};

export default Details;