import React from "react";
import ToursBox from "./ToursBox";
import data from "./data";

const Tours = () => {
    return (
        <div className="w-full flex justify-center pt-24 pb-20">
            <div className="w-11/12 flex flex-col items-center">
                <p className="text-5xl font-normal mb-5">Our Tours</p>
                <div className="w-[120px] h-1 bg-[#10b981] my-3"></div>
                <div className="w-full grid grid-cols-3 gap-10 mt-20">
                    {data.map((value, index) =>
                        <ToursBox
                            key={index}
                            image={value.image}
                            price={value.price}
                            title={value.title}
                            info={value.info}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default Tours;