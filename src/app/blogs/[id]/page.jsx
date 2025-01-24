

const page = async ({params}) => {
    const {id}=await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log(post)
    return (
        <div className="max-w-md mx-auto   p-5">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-lg">
        <div className="card-actions items-center justify-between">
              <span className="text-sm text-center  text-gray-500">User ID: {post.userId}</span>
           
            </div>
          <div className="card-body p-5">
            <h2 className="card-title text-lg font-bold text-primary">Header: {post.title}</h2>
            <p className="text-gray-600 mb-4">Details:{post.body}</p>
         
          </div>
        </div>
      </div>
    );
};

export default page;