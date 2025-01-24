
import Button from '@/component/Button';
import Data from '@/component/Data';
import Details from '@/component/details';
import React from 'react';
import '../app/globals.css'
const Home = async() => { 
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div className='my-5 '>
    <div className="p-2  grid gap-3 md:grid-cols-3 grid-cols-1 lg:grid-cols-4  border ">
       {posts.map((post) => (

  <div key={post.id} className="card bg-base-100 p-2 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Blog title!</h2>
    <p>{post.title}</p>
    <div className="card-actions justify-end">
    <Details id={post.id}></Details>
    </div>
  </div>
</div>
       ))}
     </div>
 </div>
  );
};

export default Home;