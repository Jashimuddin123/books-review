import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full px-4 p-10">
            {/* banner section start here */}
            <div className="max-w-5xl mx-auto">
                <div className="hero h-[650px] lg:h-[550px]  bg-base-200 flex items-center justify-center">
                    <div className="hero-content flex flex-col lg:flex-row items-center text-center lg:text-left w-full lg:justify-center gap-8 lg:gap-16">
                        <div className="flex flex-col justify-center items-center lg:items-start">
                            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">Books to freshen up <br /> your bookshelf!</h1> <br />
                            <Link to="/listebook">
                                <button className="btn bg-green-500 text-white mt-4 lg:mt-6">View The List</button>
                            </Link>
                        </div>
                        <img src="https://i.ibb.co/6cStdQq/baner-png.png" className="w-full max-w-xs lg:max-w-sm rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
