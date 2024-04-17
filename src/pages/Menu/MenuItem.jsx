import React from "react";

const MenuItem = ({ name, price, context, image }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <img
                src={image}
                className="w-full rounded-md"
            />
            <div className="w-[90%] mt-7">
                <div className="flex flex-row justify-between items-center mb-5">
                    <p className="text-xl font-medium">{name.toUpperCase()}</p>
                    <p className="bg-[#f59e0b] text-white px-2 rounded-md">$ {price}</p>
                </div>
                <p className="text-gray-500">
                    {context}
                </p>
            </div>
        </div>
    );
}

export default MenuItem;