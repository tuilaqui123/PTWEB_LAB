import React from "react";
import ReviewBox from "./ReviewBox";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperButton from "./SwiperButton";

import data from "./data";


const Reviews = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f8fafc]">
            <div className="w-[45%] h-3/4 bg-white shadow-xl ">
                <Swiper
                    loop={true}
                >
                    {data.map((value, index) =>
                        <SwiperSlide key={index}>
                            <ReviewBox
                                name={value.name}
                                job={value.job}
                                reviews={value.text}
                                image={value.image}
                            />
                        </SwiperSlide>
                    )}
                    <SwiperButton />
                </Swiper>
            </div>
        </div>
    );
}

export default Reviews;