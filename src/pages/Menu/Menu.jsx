import React, { useState } from "react";
import MenuItem from "./MenuItem";
import data from "./data";

const Menu = () => {
    const [category, setCategory] = useState("All")
    return (
        <div className="w-full py-20 flex items-center justify-center">
            <div className="w-11/12 flex flex-col items-center justify-center ">
                <div className="w-full flex flex-col items-center justify-center">
                    <p className="text-5xl pb-5">Our Menu</p>
                    <div className="border-2 w-[100px] border-[#f59e0b]"></div>
                </div>
                <div className="w-1/3 flex flex-row items-center justify-center gap-5 mt-10">
                    <p
                        onClick={() => setCategory("All")}
                        className="bg-[#f59e0b] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#b45309] duration-300">
                        All
                    </p>
                    <p
                        onClick={() => setCategory("Breakfast")}
                        className="bg-[#f59e0b] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#b45309] duration-300">
                        Breakfast
                    </p>
                    <p
                        onClick={() => setCategory("Lunch")}
                        className="bg-[#f59e0b] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#b45309] duration-300">
                        Lunch
                    </p>
                    <p
                        onClick={() => setCategory("Shakes")}
                        className="bg-[#f59e0b] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#b45309] duration-300">
                        Shakes
                    </p>
                </div>
                <div className="w-full grid grid-cols-3 mt-10  gap-10">
                    {data.map((value, index) =>
                        <MenuItem
                            key={index}
                            name={value.title}
                            image={value.img}
                            price={value.price}
                            context={value.desc}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default Menu;