import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor/PopularInstructor";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Perfect Capture | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;