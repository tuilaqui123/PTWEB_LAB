import React, { useState } from "react";

const QuestionBox = ({ title, context }) => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className="w-10/12 p-5 border-2 shadow-xl">
            <div className="flex flex-row items-center justify-between">
                <p className="font-medium text-xl text-[#164e63]">{title}</p>
                <div
                    onClick={() => setIsShow(!isShow)}
                    className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#164e63] cursor-pointer"
                >
                    {!isShow ? (
                        <i className="fa-solid fa-plus text-sm text-white"></i>
                    ) : (
                        <i className="fa-solid fa-minus text-sm text-white"></i>

                    )}
                </div>
            </div>
            {isShow && (
                <div className="pt-5">
                    <p className="text-gray-500">{context}</p>
                </div>
            )}
        </div>
    );
}

export default QuestionBox;