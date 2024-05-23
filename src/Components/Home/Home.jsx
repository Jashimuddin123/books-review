

import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
         
           <div className=" max-w-6xl mx-auto">
           <Banner></Banner>
           <Books></Books>
           </div>
        </div>
    );
};

export default Home;