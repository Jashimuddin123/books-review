import { NavLink } from "react-router-dom";




const Header = () => {
     const links = <>
         
     <li className="  mr-2"><NavLink to="/">Home</NavLink></li>
     <li className="mr-2"><NavLink to="/listebook">Listed Books</NavLink></li>
     <li className=""><NavLink to="/pages">Pages To Read</NavLink></li>
        
     </>
        
     
    return (
        <div>
               {/* navbar section start here */}
               <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        <li>
{/*           
          <ul className="p-2"> */}
          {
            links
          }
          {/* </ul> */}
        </li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Books Review</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn  bg-green-500 text-white">Sign In</a>
    <a className="btn bg-sky-500 text-white">Sign Up</a>
  </div>
</div>

{/* banner section start here */}
 <div className="w-[1100px] mx-auto">
 <div className="hero h-[550px] bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/6cStdQq/baner-png.png" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf!</h1> <br />

      <button className="btn bg-green-500 text-white">View The List</button>
    </div>
  </div>
</div>
 </div>
        </div>
    );
};

export default Header;