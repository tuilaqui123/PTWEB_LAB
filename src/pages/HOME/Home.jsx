import React from "react";
import Projects from "./Project";
import data from './Home.json'

const Home = () => {
    return (
        <div className="w-full py-10 flex items-center justify-center ">
            <div className="w-11/12 flex flex-col items-center justify-center ">
                <div className="w-full flex flex-col items-center justify-center">
                    <p className="text-5xl pb-5 font-medium text-[#3e3e3e]">Course Projects</p>
                    <div className="border-2 w-[200px] border-[#7a46f5]"></div>
                </div>
                <div className="w-11/12 grid grid-cols-3 gap-10 mt-10">
                    {data.map((value, index) =>
                        <Projects
                            key={index}
                            name={value.name}
                            path={value.path}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;