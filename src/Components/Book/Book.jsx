import { ImStarEmpty } from "react-icons/im";
import { Link } from "react-router-dom";

const Book = ({book}) => {
  console.log(book);
  const {tags, bookId, bookName, author, image, category, rating } = book;
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="card w-80 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img className="w-56 rounded h-56" src={image} alt="books" />
          </figure>
          <div className="card-body">
            <div className="flex justify-around">
              <button className="text-[#23BE0A]  bg-slate-100 py-2 px-4 rounded-full">
                Young Adult
              </button>
              <button className="text-[#23BE0A]  bg-slate-100 py-2 px-4 rounded-full">
                Identity
              </button>
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p> By:{author}</p>
         <div className="flex items-center flex-wrap gap-2">
         {
             tags.map((tag, index)=><span className=" bg-green-100 text-green-600 px-2 py-0.5 rounded whitespace-nowrap" key={index}>#{tag}</span>)
            }
         </div>
            <div className="card-actions justify-between">
              <div className="">{category}</div>
              <div className="flex items-center gap-4">
                <span>{rating}</span>
                <ImStarEmpty />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
