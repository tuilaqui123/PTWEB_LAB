import React, { useState } from "react";
import tour from '../../assets/tour.jpeg'

const ToursBox = ({ image, price, title, info }) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <div className="w-full rounded-lg flex flex-col items-center shadow-2xl overflow-hidden">
            <div className="mb-12 relative w-full">
                <img
                    src={image}
                    className="rounded-t-lg h-[200px] w-full"
                />
                <div className="bg-[#10b981] absolute top-0 right-0 py-2 px-3">
                    <p className="text-white text-base tracking-wide">${price}</p>
                </div>
            </div>
            <div className="w-11/12 flex flex-col items-center mb-5">
                <p className="text-xl font-medium mb-5">{title}</p>
                <p>
                    {readMore ? readInfo : `${info.substring(0, 200)}...`}
                    <button className="block" onClick={() => setReadMore(!readMore)}>
                        <p className="text-[#10b981] font-semibold">{readMore ? 'Show less' : 'Read more'}</p>
                    </button>
                </p>
                <button className="w-full border border-[#10b981] rounded-md mt-5 py-1">
                    <p className="text-[#10b981] font-medium">Not Interested</p>
                </button>
            </div>
        </div>
    );
}

export default ToursBox;