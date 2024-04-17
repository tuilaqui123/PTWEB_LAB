import React from "react";
import QuestionBox from "./QuestionBox";
import data from "./data";

const Accordion = () => {
    return (
        <div className="bg-[#cffafe] w-full h-auto flex justify-center items-center py-10">
            <div className="w-3/5 bg-white py-10">
                <p className="text-5xl text-[#164e63] h-auto font-medium text-center pb-10">Questions</p>
                <div className="w-full h-auto flex flex-col items-center gap-5">
                    {data.map((value, index) =>
                        <QuestionBox
                            key={index}
                            title={value.title}
                            context={value.info}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default Accordion;