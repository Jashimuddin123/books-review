import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import Pages from './Components/Pages/Pages';
import BookDetails from './Components/BookDetails/BookDetails';
import Books from './Components/Books/Books';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
        {
          path:"/",
          element:<Home></Home>
        },
      {
        path:"/listebook",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/pages",
        element:<Pages></Pages>
      },
      {
        path:"/books",
        element:<Books></Books>
      },
      {
        path:"/books/:id",
        loader: async ({ params }) => {
          const response = await fetch('/book-data.json');
          const books = await response.json();
          return books.find(book => book.bookId === params.id);
        },
        element:<BookDetails></BookDetails>
      }
     
    ]
      
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
