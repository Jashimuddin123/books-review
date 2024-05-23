import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const book = useLoaderData();
    console.log('book', book);
    
    if (!book) {
        return <div>Book not found.</div>;
    }

    const { bookName, author, image, category, rating, description } = book;

    return (

    <div>
      <div>
        <img className="w-full" src={book.image} alt="" />
      </div>
      <div>
          <h2>{book.bookName}</h2>
          <p> By:{book.author}</p> 
          <hr />
          <p>{book.category}</p>
          <hr />
          <p>{book.review}</p>
      </div>
    </div>
        // <div className="book-details">
        //     <div className="card w-80 bg-base-100 shadow-xl mx-auto">
        //         <figure>
        //             <img className="w-56 rounded h-56" src={image} alt="book" />
        //         </figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{bookName}</h2>
        //             <p>By: {author}</p>
        //             <div>{category}</div>
        //             <div className="flex items-center gap-4">
        //                 <span>{rating}</span>
        //             </div>
        //             <p>{description}</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BookDetails;
