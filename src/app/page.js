
import Button from '@/component/Button';
import Data from '@/component/Data';
import Details from '@/component/details';
import React from 'react';

const Home = async() => { 
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div className='my-5 '>
      <Data></Data>
    <ul className="p-2  grid md:grid-cols-5 grid-cols-2  border border-green-500">
       {posts.map((post) => (
         <li className="p-2 border border-green-500"  key={post.id}>{post.title}  <br/>
   <Details id={post.id}></Details>
         </li>
       ))}
     </ul>
 </div>
  );
};

export default Home;