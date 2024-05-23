import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const book = useLoaderData();
    console.log('book', book);
    
    if (!book) {
        return <div>Book not found.</div>;
    }

    const { bookName, author, image, category, rating, description } = book;

    return (

    <div className="flex  justify-around mt-10">
      <div>
        <img className="w-[500px] h-[500px] rounded" src={book.image} alt="" />
      </div>
      <div className="space-y-6">
          <h2 className="text-4xl font-bold ">{book.bookName}</h2>
          <p className="text-xl text-gray-600"> By:{book.author}</p> 
          <hr />
          <p className="text-xl text-gray-600">{book.category}</p>
          <hr />
          <h6 className="font-semibold">Number of Pages:{book.totalPages}</h6>
          <h6 className="font-semibold">Publisher:{book.publisher}</h6>
          <h6 className="font-semibold">Year of Publishing:{book.publisher}</h6>
          <p className="font-semibold">Rating:{book.rating}</p>
          <div className="flex gap-10">
          <Link><button className="bg-green-500 text-white py-2 px-8 rounded">Read</button></Link>
          <Link><button className="bg-sky-500 text-white py-2 px-8 rounded">Wishlist</button></Link>
          </div>
      </div>
    </div>
   
        
    );
};

export default BookDetails;
