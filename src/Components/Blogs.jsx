import { useEffect } from 'react';
import { useState } from 'react';
import Blog from "../Components/Blog"
const Blogs = ({bookmarkBtn,btnRead}) => {
    const[blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='w-2/3'>
            Total: {blogs.length}
            {
                blogs.map(blog=><Blog blog={blog} key={blog.id} btnRead={btnRead} bookmarkBtn={bookmarkBtn}></Blog>)
            }
           
        </div>
    );
};

export default Blogs;