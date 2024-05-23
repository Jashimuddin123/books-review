import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [activeTab, setActiveTab] = useState('read');
    const [sortOption, setSortOption] = useState('rating');

    useEffect(() => {
        const storedReadBooks = JSON.parse(localStorage.getItem('readList')) || [];
        const storedWishlistBooks = JSON.parse(localStorage.getItem('wishlist')) || [];
        setReadBooks(storedReadBooks);
        setWishlistBooks(storedWishlistBooks);
    }, []);

    const sortBooks = (books) => {
        switch (sortOption) {
            case 'rating':
                return [...books].sort((a, b) => b.rating - a.rating);
            case 'totalPages':
                return [...books].sort((a, b) => b.totalPages - a.totalPages);
            case 'yearOfPublishing':
                return [...books].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            default:
                return books;
        }
    };

    const renderBooks = (books) => {
        return books.map((book, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-6 w-full max-w-md">
                <img src={book.image} alt={book.bookName} className="w-full h-64 object-cover rounded-t-lg mb-4" />
                <div className="card-details space-y-2">
                    <h2 className="text-2xl font-bold">{book.bookName}</h2>
                    <p className="text-gray-700">By: {book.author}</p>
                    <p className="text-gray-700">Category: {book.category}</p>
                    <p className="text-gray-700">Tags: {book.tags}</p>
                    <p className="text-gray-700">Total Pages: {book.totalPages}</p>
                    <p className="text-gray-700">Publisher: {book.publisher}</p>
                    <p className="text-gray-700">Year of Publishing: {book.yearOfPublishing}</p>
                    <p className="text-gray-700">Rating: {book.rating}</p>
                    <Link to={`/book/${book.id}`}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
                    </Link>
                </div>
            </div>
        ));
    };

    return (
        <div className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-4xl font-bold">Listed Books</h1>
            </header>
            <div className="flex justify-between items-center mb-4">
                <div className="tabs flex space-x-4">
                    <button
                        className={`tab ${activeTab === 'read' ? 'bg-blue-500 text-white' : 'bg-gray-200'} py-2 px-4 rounded`}
                        onClick={() => setActiveTab('read')}
                    >
                        Read Books
                    </button>
                    <button
                        className={`tab ${activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'} py-2 px-4 rounded`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        Wishlist Books
                    </button>
                </div>
                <div className="sort">
                    <label htmlFor="sort" className="mr-2">Sort by: </label>
                    <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="bg-gray-200 py-2 px-4 rounded"
                    >
                        <option value="rating">Rating</option>
                        <option value="totalPages">Number of Pages</option>
                        <option value="yearOfPublishing">Published Year</option>
                    </select>
                </div>
            </div>
            <div className="book-list grid grid-cols-1  gap-6">
                {activeTab === 'read' ? renderBooks(sortBooks(readBooks)) : renderBooks(sortBooks(wishlistBooks))}
            </div>
        </div>
    );
};

export default ListedBooks;
