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


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[

      {
        path:"/listebook",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/pages",
        element:<Pages></Pages>
      },
     
    ]
      
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
