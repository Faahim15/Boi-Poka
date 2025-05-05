import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
    const {bookId} = useParams(); 
    const data = useLoaderData();
    const Id = parseInt(bookId);
    const book = data.find(book => book.bookId === Id)
    const {author,bookId:cur_bookId,bookName,image,review,totalPages,rating,category,tags,yearOfPublishing,publisher}=book;
    return (
        <div>
            <div className="flex gap-x-3" >
                <img src={image} alt="" />
                 <div>
                    <h1 className="font-bold" >{bookName}</h1>
                     <span>By: {author}</span>
                     <p><span className="font-bold mr-1" >Review:</span>{review}</p>
                     <p className="border-b border-gray-500 pb-2" >
                        <span className="font-bold mr-2">tag</span>
                        {
                            tags.map(tag=><button className="border border-green-100 rounded-md bg-green-600 bg-opacity-65 mr-1 p-[2px]" >#{tag}</button>)
                        }
                     </p>
                     <div className="flex justify-between " >
                        <p>Number of Pages: </p>
                         <p>{totalPages}</p>
                     </div>
                     <div className="flex justify-between  " >
                        <p>Publisher: </p>
                         <p>{publisher}</p>
                     </div>
                     <div className="flex justify-between  " >
                        <p>Year of publisher: </p>
                         <p>{yearOfPublishing}</p>
                     </div>
                     <div className="flex justify-between mb-3" >
                        <p>Rating: </p>
                         <p>{rating}</p>
                     </div>
                     <button className="btn btn-info mr-1" >Read</button>
                     <button className="btn btn-success" >Wishlist</button>
                 </div>
            </div>
        </div>
    );
};

export default BooksDetails;