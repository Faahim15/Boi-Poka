import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {author,bookId,bookName,image,review,totalPages,rating,category,tags,yearOfPublishing,publisher} = book;
    return (
        <Link to={`/books/${bookId}`} > 
         
         <div className=" border border-red-300 card h-[482px] rounded-2xl bg-base-100 w-full p-6 shadow-sm">
        <figure className=' bg-[#F3F3F3] bg-opacity-10 h-[230px] border border-white rounded-2xl' >
          <img
            src={image} 
            className='h-[166px]'
            alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {
                tags.map((tag,idx)=><span key={idx} className="badge badge-secondary">{tag}</span>)
            }
            
          </h2>
          <p className='text-left text-xl font-bold' >{bookName}</p> 
          <p className='border-b border-dashed border-white' >By: {author}</p>
          <div className="flex justify-between">
            <div>{category}</div>
            <div>{rating} ⭐</div>
          </div>
        </div>
      </div>

        </Link>
    );
};

export default Book;