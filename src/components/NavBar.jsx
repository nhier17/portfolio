import React from "react";
import { FcMenu } from "react-icons/fc";
import { Link,useLocation } from "react-router-dom"


const NavBar = () => {
    const { pathname } = useLocation();
  return (
    <nav className="fixed top-0 left-0 flex justify-between items-center z-10 p-4 sm:p-16 bg-gray-800 w-full">
      <h1 className="text-4xl cursor-pointer">Portfolio</h1>
      <FcMenu className="text-5xl text-white hidden"/>
        <ul className="flex list-none">
           <NavItem to="/" currentPath={pathname}>
            About
           </NavItem>
           <NavItem to="/projects" currentPath={pathname}>
            Projects
           </NavItem>
           <NavItem to="/contacts" currentPath={pathname}>
            Contacts
           </NavItem>
        </ul>
       
    </nav>
  );
};
const NavItem = ({ to, currentPath, children}) => (
    <li className="relative px-10">
      <Link className="text-white text-3xl" t0={to}>
      {children}
      </Link>  
      <div className={`${currentPath === to ? "w-1/2": "w-0"} h-0.3rem bg-gray-500 absolute bottom-0 left-60 sm:left-0 transition-all duration-750`}>

      </div>
    </li>
)

export default NavBar;
