
import { ImStarEmpty } from "react-icons/im";

const Book = ({book}) => {
    console.log(book);
    const {bookName,author,image,category,rating} = book
    return (
        <div>

    <div className="card w-80 bg-base-100 shadow-xl mx-auto">
  <figure><img className="w-56 rounded h-56" src={image} alt="books" /></figure>
  <div className="card-body">
    <div className="flex justify-around">
        <button className="text-[#23BE0A]  bg-slate-100 py-2 px-4 rounded-full">Young Adult</button>
        <button  className="text-[#23BE0A]  bg-slate-100 py-2 px-4 rounded-full">Identity</button>
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p> By:{author}</p>
    <div className="card-actions justify-between">
      <div className="">{category}</div> 
      <div className="flex items-center gap-4">
        <span>{rating}</span>
        <ImStarEmpty />
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;