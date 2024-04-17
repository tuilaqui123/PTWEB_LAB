import React from "react";
import BirthdayBox from "./BirthdayBox";
import data from "./data";

const BirthdayReminder = () => {
    return (
        <div className="w-full h-screen bg-[#f089b1] flex justify-center items-center">
            <div className="w-1/4 h-3/4 bg-white rounded-lg flex justify-center items-center">
                <div className="w-9/12 h-5/6 flex flex-col justify-between">
                    <p className="text-xl font-medium">24 birthdays today</p>
                    <div className="w-full h-4/6 flex flex-col gap-3 overflow-y-scroll">
                        {data.map((value, index) =>
                            <BirthdayBox
                                key={index}
                                image={value.image}
                                name={value.name}
                                age={value.age}
                            />
                        )}
                    </div>
                    <button className="h-[60px] border-none outline-none bg-[#f089b1] rounded-lg">
                        <p className="text-xl font-medium text-white">View all</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BirthdayReminder;