import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const BookDetails = () => {
    const book = useLoaderData();
    
    if (!book) {
        return <div>Book not found.</div>;
    }

    const { bookName, author, image, review, category, rating, description, totalPages, publisher, yearOfPublishing } = book;

    const handleAddToList = (listType) => {
        const existingReadList = JSON.parse(localStorage.getItem('readList')) || [];
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (listType === 'read') {
            if (existingReadList.some(item => item.bookName === bookName)) {
                Swal.fire({
                    icon: 'info',
                    title: 'Already Added',
                    text: 'This book is already in your Read list.'
                });
            } else if (existingWishlist.some(item => item.bookName === bookName)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Action Denied',
                    text: 'This book is already in your Wishlist. Remove it from there first.'
                });
            } else {
                existingReadList.push(book);
                localStorage.setItem('readList', JSON.stringify(existingReadList));
                Swal.fire({
                    icon: 'success',
                    title: 'Added to Read List',
                    text: 'This book has been added to your Read list.'
                });
            }
        } else if (listType === 'wishlist') {
            if (existingWishlist.some(item => item.bookName === bookName)) {
                Swal.fire({
                    icon: 'info',
                    title: 'Already Added',
                    text: 'This book is already in your Wishlist.'
                });
            } else if (existingReadList.some(item => item.bookName === bookName)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Action Denied',
                    text: 'This book is already in your Read list. Remove it from there first.'
                });
            } else {
                existingWishlist.push(book);
                localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
                Swal.fire({
                    icon: 'success',
                    title: 'Added to Wishlist',
                    text: 'This book has been added to your Wishlist.'
                });
            }
        }
    };

    return (
        <div className="flex flex-col lg:flex-row mx-10 justify-around mt-10  mb-10">
            <div>
                <img className="w-[500px] h-[500px] rounded" src={image} alt="" />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold">Book Name: {bookName}</h2>
                <p className="text-xl text-gray-600">By: {author}</p>
                <hr />
                <p className="text-xl text-gray-600">{category}</p>
                <hr />
                <p className="text-gray-500">Review:{review}</p>
                <h6 className="font-semibold">Number of Pages: {totalPages}</h6>
                <h6 className="font-semibold">Publisher: {publisher}</h6>
                <h6 className="font-semibold">Year of Publishing: {yearOfPublishing}</h6>
                <p className="font-semibold">Rating: {rating}</p>
                <div className="flex gap-10">
                    <button onClick={() => handleAddToList('read')} className="bg-green-500 text-white py-2 px-8 rounded">Read</button>
                    <button onClick={() => handleAddToList('wishlist')} className="bg-sky-500 text-white py-2 px-8 rounded">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
