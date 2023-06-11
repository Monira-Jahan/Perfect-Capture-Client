import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading={"VERIFIED REVIEWS"}
                subHeading={"It’s important to know that the people behind your training know their stuff, so meet your Perfect Capture instructors and course instructors."}></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="card w-96 h-96 px-8 py-6 bg-sky-500 shadow-xl flex flex-col items-center m-24">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={review.image} />
                                </div>
                            </div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h3 className="text-2xl text-white">{review.name}</h3>
                            <p className="py-8 text-white">{review.details}</p>
                            
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Reviews;