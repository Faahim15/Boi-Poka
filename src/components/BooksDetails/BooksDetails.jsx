import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
    const {bookId} = useParams(); 
    const data = useLoaderData();
    const Id = parseInt(bookId);
    const book = data.find(book => book.bookId === Id)
    console.log(book)
    return (
        <div>
            <h1>Write book details.</h1>
            {bookId}
        </div>
    );
};

export default BooksDetails;