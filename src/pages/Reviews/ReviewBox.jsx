import React from "react";
import avt from '../../assets/avt.jpg'

const ReviewBox = ({ name, job, reviews, image }) => {
    return (
        <div className="w-full flex flex-col items-center pt-10">
            <div className=" w-full flex flex-col items-center">
                <div className="w-1/4 relative flex">
                    <img
                        src={image}
                        className="w-[150px] h-[150px] rounded-full z-10"
                    />
                    <div className="absolute z-20 w-[40px] h-[40px] rounded-full bg-[#645cff] top-2 left-0 flex justify-center items-center">
                        <i class="fa-solid fa-quote-left rotate-180 text-xl text-white"></i>
                    </div>
                    <div className=" absolute left-1 bottom-1 w-[150px] h-[150px] bg-[#645cff] rounded-full"></div>
                </div>
                <div className="w-11/12 text-center mt-10">
                    <p className="text-3xl">{name}</p>
                    <p className="text-[#645cff] font-medium">{job.toUpperCase()}</p>
                    <p className="mt-5 text-gray-500">{reviews}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewBox;