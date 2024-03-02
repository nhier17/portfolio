import React from 'react'
import { Link } from "react-router-dom"
//images
import dl from "../images/dl.jpeg"
import h from "../images/h.JPG"
import mt from "../images/mt.jpeg"
import sc from "../images/sc.jpeg"
import st from "../images/st.jpeg"
import gm from "../images/gm.jpeg"
//animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
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
        <motion.h2 variants={fade} className="py-4 text-2xl">Shoppers Paradise</motion.h2>
        <motion.div variants={lineAnim} className="h-0.5 bg-blue-500 my-4"></motion.div>
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
        <motion.h2 variants={fade} className="py-4 text-2xl">Netflix Clone</motion.h2>
        <motion.div variants={lineAnim} className="h-0.5 bg-blue-500 my-4"></motion.div>
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
        <motion.h2 variants={fade} className="py-4 text-2xl">Delicious Delicacies</motion.h2>
        <motion.div variants={lineAnim} className="h-0.5 bg-blue-500 my-4"></motion.div>
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
        <motion.h2 variants={fade} className="py-4 text-2xl">Games Tracker</motion.h2>
        <motion.div variants={lineAnim} className="h-0.5 bg-blue-500 my-4"></motion.div>
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
        <motion.h2 variants={fade} className="py-4 text-2xl">Happy Trayls</motion.h2>
        <motion.div variants={lineAnim} className="h-0.5 bg-blue-500 my-4"></motion.div>
        <Link to="/projects/happy-trayls">
        <motion.img
        variants={photoAnim}
          className="object-cover rounded-md"
          width="70%"
          height="10%"
         src={h} alt="hiker" />
        </Link>
        </div>  

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-2xl">Shopping Cart</motion.h2>
        <motion.div variants={lineAnim} className="h-0.5 bg-blue-500 my-4"></motion.div>
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