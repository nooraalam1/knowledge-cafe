import PropTypes from 'prop-types';
const Blog = ({blog,bookmarkBtn,btnRead}) => {
    const {hashtag} = blog
    
    return (
        <div className='my-6'>
            
            <img src={blog.cover_img} width='400px'/>
            <h1 className='text-2xl my-4'> Title: {blog.title} </h1>
            <div className="flex items-center ">
                <img src={blog.author_img} width='50px' alt="" />
               <div className="flex justify-center items-center">
                <div className="">
                <h2 className="text-xl">{blog.name}</h2>
                <h2 className="">{blog.posted_date}</h2>
                
                </div>
               </div>
                <h2 className='mx-8 '>{blog.reading_time} min read</h2>
                <button onClick={()=>bookmarkBtn(blog)}>Bookmark</button>
                <button onClick={()=>btnRead(blog)}>Mark as read</button>
            </div>
            <p className='my-5'> {
                hashtag.map((hashtag,idx)=><p key={idx}>#{hashtag}</p>)}
            </p>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;
