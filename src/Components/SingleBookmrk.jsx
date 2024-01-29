import React from 'react';

const SingleBookmrk = ({bookmark}) => {
    //console.log(bookmark)
    return (
        <div className='bg-gray-400 py-4 my-4 rounded-xl'>
            <h1>{bookmark.title}</h1>
        </div>
    );
};

export default SingleBookmrk;