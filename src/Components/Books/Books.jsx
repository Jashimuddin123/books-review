import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book-data.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl text-center">Books card here{books.length} </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 ">
                {
             books.map(book=><Book key={book.id} book={book}></Book>)
            }
                </div>
        </div>
    );
};

export default Books;