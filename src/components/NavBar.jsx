import React from "react";
import { FcMenu } from "react-icons/fc";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 flex justify-between items-center z-10 p-4 sm:p-16 bg-gray-800 w-full">
      <h1 className="text-4xl cursor-pointer">Portfolio</h1>
      <FcMenu className="text-5xl text-white hidden"/>
        <ul className="flex list-none">
            <li><a href="#about" className="text-2xl ml-16">About</a></li>
            <li><a href="#projects" className="text-2xl ml-16">Projects</a></li>
            <li><a href="#contact" className="text-2xl ml-16">Contact</a></li>
        </ul>
       
    </nav>
  );
};

export default NavBar;
