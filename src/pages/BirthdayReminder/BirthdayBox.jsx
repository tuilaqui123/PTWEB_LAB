import React from "react";

const BirthdayBox = ({ image, name, age }) => {
    return (
        <div className="w-full flex flex-row gap-3">
            <img
                src={image}
                className="w-1/5 rounded-full"
            />
            <div>
                <p className="font-medium">{name}</p>
                <p className="text-gray-500 text-sm">{age} years</p>
            </div>
        </div>
    );
}

export default BirthdayBox;