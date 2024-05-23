import { NavLink } from "react-router-dom";

const Header = () => {
    const links = (
        <>
            <li className="mr-2"><NavLink to="/">Home</NavLink></li>
            <li className="mr-2"><NavLink to="/listebook">Listed Books</NavLink></li>
            <li className="mr-2"><NavLink to="/pages">Pages To Read</NavLink></li>
            <li className="mr-2"><NavLink to="/about">About Us</NavLink></li>
            <li className=""><NavLink to="/contact">Contact Us</NavLink></li>
        </>
    );

    return (
        <div>
            {/* navbar section start here */}
            <div className="navbar bg-base-100 max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl text-green-600 font-bold">Books Review</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-2 bg-green-500 text-white">Sign In</a>
                    <a className="btn bg-sky-500 text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
