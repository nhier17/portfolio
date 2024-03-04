import React from "react";
import { FcMenu } from "react-icons/fc";
import { Link,useLocation } from "react-router-dom"
import { motion } from "framer-motion"


const NavBar = () => {

  return (
    <nav className="fixed min-h-[10vh] top-0 left-0 flex justify-between items-center z-[100] p-4 sm:p-16 bg-gray-800 w-full">
      <h1 className="text-4xl cursor-pointer">Portfolio</h1>
      <FcMenu className="text-5xl text-white hidden"/>
        <ul className="flex list-none">
            <NavLink to='/' text="About"/>
            <NavLink to='/projects' text="Projects"/>
            <NavLink to='/contacts' text="Contact"/>
        </ul>
       
    </nav>
  );
};

const NavLink = ({ to, text }) => {
    const { pathname } = useLocation();
  
    return (
      <li className="relative px-10">
        <Link to={to} className="text-white text-3xl">
          {text}
          <motion.div
            className="h-1 bg-[#0ef] w-0 absolute bottom-[-80%] left-1/2 transform -translate-x-1/2 transition-all duration-750"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === to ? "50%" : "0%" }}
          ></motion.div>
        </Link>
      </li>
    );
  };
  

export default NavBar;
