import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Reviews from "../Reviews/Reviews";
import QnASection from "../QnA/QnASection";
import PopularClass from "./PopularClass/PopularClass";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Perfect Capture | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClass></PopularClass>
           <Reviews></Reviews>
           <QnASection></QnASection>
        </div>
    );
};

export default Home;