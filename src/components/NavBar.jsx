import React from "react";
import { FcMenu } from "react-icons/fc";
import { Link,useLocation } from "react-router-dom"
import { motion } from "framer-motion"


const NavBar = () => {
    const { pathname } = useLocation();
  return (
    <nav className="fixed top-0 left-0 flex justify-between items-center z-10 p-4 sm:p-16 bg-gray-800 w-full">
      <h1 className="text-4xl cursor-pointer">Portfolio</h1>
      <FcMenu className="text-5xl text-white hidden"/>
        <ul className="flex list-none">
        <li className="relative px-10">   
        <Link to="/" className="text-white text-3xl">
        About  
        <motion.div className="h-0.5 bg-blue-500 w-0 absolute bottom-[-80%] left-60 lg:left-0 transition-all duration-750"
         transition={{ duration: 0.75 }}
         initial={{ width: "0%" }}
         animate={{ width: pathname === "/" ? "50%" : "0%" }}
        ></motion.div>
        </Link>   
        </li>
        <li className="relative px-10">   
        <Link to="/projects" className="text-white text-3xl">
        Projects  
        <motion.div className="h-0.5 bg-blue-500 w-0 absolute bottom-[-80%] left-60 lg:left-0 transition-all duration-750"
         transition={{ duration: 0.75 }}
         initial={{ width: "0%" }}
         animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
        ></motion.div>
        </Link>   
        </li>
        <li className="relative px-10">   
        <Link to="/contacts" className="text-white text-3xl">
        Contacts 
        <motion.div className="h-0.5 bg-blue-500 w-0 absolute bottom-[-80%] left-60 lg:left-0 transition-all duration-750"
         transition={{ duration: 0.75 }}
         initial={{ width: "0%" }}
         animate={{ width: pathname === "/contacts" ? "50%" : "0%" }}
        ></motion.div>
        </Link>   
        </li>  
        </ul>
       
    </nav>
  );
};


export default NavBar;
