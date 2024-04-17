import React from "react";
import avt from '../../assets/avt.jpg'
import { Link } from "react-router-dom";

const Projects = ({ name, path }) => {
    return (
        <Link
            to={path}
            className="w-full flex flex-col items-center border overflow-hidden cursor-pointer hover:bg-gray-50 rounded-md shadow-xl"
        >
            <p className="font-medium text-xl my-5">{name}</p>
        </Link>
    );
}

export default Projects;