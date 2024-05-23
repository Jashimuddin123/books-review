import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./lissted.css";
import { FaLocationDot } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { PiSimCardDuotone } from "react-icons/pi";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");
  const [sortOption, setSortOption] = useState("rating");

  useEffect(() => {
    const storedReadBooks = JSON.parse(localStorage.getItem("readList")) || [];
    const storedWishlistBooks =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setReadBooks(storedReadBooks);
    setWishlistBooks(storedWishlistBooks);
  }, []);

  const sortBooks = (books) => {
    switch (sortOption) {
      case "rating":
        return [...books].sort((a, b) => b.rating - a.rating);
      case "totalPages":
        return [...books].sort((a, b) => b.totalPages - a.totalPages);
      case "yearOfPublishing":
        return [...books].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
      default:
        return books;
    }
  };

  const renderBooks = (books) => {
    return books.map((book, index) => (
      <div key={index} className="book-card ">
        <img src={book.image} alt={book.bookName} className="book-image" />
        <div className="book-details">
          <h2 className="book-title text-3xl font-bold">{book.bookName}</h2>
          <p className="book-info text-lg font-semibold my-4">By: {book.author}</p>
          <div className="flex items-center my-4 gap-8">
               <div>
               {book.tags.map((tag, index) => (
              <span
                className=" border px-2 py-0.5 text-md text-green-500 font-semibold rounded whitespace-nowrap"
                key={index}
              >
                #{tag}
              </span>
              
            ))}
               </div>
            <div className="flex items-center text-gray-600 gap-2"> 
            <FaLocationDot />
            <span>Year of Publishing:{book.yearOfPublishing}</span>
            </div>
          </div>
          <div className="flex gap-10 text-lg items-center">
            <div className="flex gap-2 items-center">
                <span><VscAccount /></span>
                <p>Publisher: {book.publisher}</p>
            </div>
            <div  className="flex gap-2 items-center">
                <span><PiSimCardDuotone /></span>
                <p>Page:{book.totalPages}</p>
            </div>
          </div>
                <div className="flex items-center flex-col lg:flex-row mt-4  gap-8">
                < button className="book-info bg-sky-200 px-4 py-2 rounded-full">Category:{book.category}</button>
          <button className="text-yellow-600 bg-orange-100 px-8 py-2   rounded-full">Ratings:{book.rating}</button>
          <Link to={`/book/${book.id}`}>
            <button className="bg-green-500 text-white rounded-full w-full  px-8 py-2">View Details</button>
          </Link>
                </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container  max-w-6xl mx-auto">
      <header>
        <h1 className="text-center text-3xl p-4 font-bold bg-gray-100 mt-4">
          Listed Books
        </h1>
        <div className="sort  text-lg font-bold border-none rounded w-32 mx-auto">
          <label htmlFor="sort ">Sort by: </label>
          <select
            className="bg-green-200"
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="rating">Rating</option>
            <option value="totalPages">Number of Pages</option>
            <option value="yearOfPublishing">Published Year</option>
          </select>
        </div>
      </header>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "read" ? "active" : ""}`}
          onClick={() => setActiveTab("read")}
        >
          Read Books
        </button>
        <button
          className={`tab ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist Books
        </button>
      </div>

      <div className="book-list">
        {activeTab === "read"
          ? renderBooks(sortBooks(readBooks))
          : renderBooks(sortBooks(wishlistBooks))}
      </div>
    </div>
  );
};

export default ListedBooks;
