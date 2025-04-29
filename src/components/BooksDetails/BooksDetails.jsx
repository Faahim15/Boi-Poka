import { useParams } from "react-router-dom";

const BooksDetails = () => {
    const {bookId} = useParams();
    return (
        <div>
            <h1>Write book details.</h1>
            {bookId}
        </div>
    );
};

export default BooksDetails;