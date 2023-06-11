import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Reviews from "../Reviews/Reviews";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Perfect Capture | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;