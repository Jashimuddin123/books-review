import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            
{/* banner section start here */}
 <div className="lg:w-[1100px] mx-auto">
 <div className="hero h-[550px] bg-base-200 ">
  <div className="hero-content flex flex-col lg:flex-row">
    <img src="https://i.ibb.co/6cStdQq/baner-png.png" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf!</h1> <br />

         <Link to="/listebook"><button className="btn bg-green-500 text-white">View The List</button></Link>
    </div>
  </div>
</div>
 </div>
        </div>
    );
};

export default Banner;