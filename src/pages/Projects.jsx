import React from 'react'
import { Link } from "react-router-dom"
//images
import dl from "../images/dl.jpeg"
import mt from "../images/mt.jpeg"
import sc from "../images/sc.jpeg"
import st from "../images/st.jpeg"
import gm from "../images/gm.jpeg"
import ma from "../images/ma.jpeg"
import rm from "../images/rm.jpeg"
//animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animations";

const Projects = () => {
  return (
    <motion.div
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
     className="min-h-svh overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 md:p-2 mt-36">

     <motion.div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Shoppers Paradise</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/shoppers-paradise">
        <motion.img
        variants={photoAnim}
          className="object-cover rounded-md"
          width="300"
          height="300"
         src={st} alt="shopping" />
        </Link>
        </motion.div>   

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Netflix Clone</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/netflix-clone">
        <motion.img 
        variants={photoAnim}
          className="object-cover rounded-md"
          width="365.55"
          height="365.55"
        src={mt} alt="movies" />
        </Link>
        </div>  

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Delicious Delicacies</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/delicious-delicacies">
        <motion.img 
        variants={photoAnim}
          className="object-cover rounded-md"
          width={365.55}
          height={365.55}
        src={dl} alt="panda" />
        </Link>
        </div>  

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Games Tracker</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/games-tracker">
        <motion.img 
        variants={photoAnim}
          className="object-cover rounded-md"
          width="70%"
          height="50%"
        src={gm} alt="games tracker" />
        </Link>
        </div>  

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Music App</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/music-app">
        <motion.img
        variants={photoAnim}
          className="object-cover rounded-md"
          width="70%"
          height="10%"
         src={ma} alt="hiker" />
        </Link>
        </div> 

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Rick & Morty</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/rick-morty">
        <motion.img
        variants={photoAnim}
          className="object-cover rounded-md"
          width="70%"
          height="10%"
         src={rm} alt="rick" />
        </Link>
        </div>   

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Shopping Cart</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/shopping-cart">
        <motion.img
        variants={photoAnim}
        className="object-cover rounded-md"
        width="70%"
        height="50%"  
        src={sc} alt="cart" />
        </Link>
        </div>  
    </motion.div>
  )
}

export default Projects