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
        <div className="mt-20">
            <h2 className="text-4xl text-center my-6"> All Books Here</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 ">
                {
             books.map(book=><Book key={book.id} book={book}></Book>)
            }
                </div>
        </div>
    );
};

export default Books;