import React from 'react';
import SingleBookmrk from './SingleBookmrk';

const Bookmark = ({bookmarks,btnRead}) => {
    return (
        <div className='w-1/3 bg-red-500'>
            <h1>Time: {btnRead.reading_time}</h1>
            <h1>Bookmark: {bookmarks.length}</h1>

            {
                bookmarks.map((bookmark,idx)=><SingleBookmrk key={idx}  bookmark={bookmark}></SingleBookmrk>)
            }
        </div>
    );
};

export default Bookmark;