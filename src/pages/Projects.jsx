import React from 'react'
import { Link } from "react-router-dom"
//images
import { dl,
      mt, 
      sc, 
      st, 
      gm, 
      ma, 
      rm, 
      tk, 
      sm, 
      pt,
      fitness3
    }from "../images";
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
          className="object-cover rounded-md w-full h-auto"
          src={st} alt="shopping" />
        </Link>
        </motion.div>  

        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">My Fitness</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/my-fitness">
        <motion.img 
        variants={photoAnim}
          className="object-cover rounded-md"
          width="365.55"
          height="365.55"
        src={fitness3} alt="fitness" />
        </Link>
        </div>
        
        <div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Share Me</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/share-me">
        <motion.img 
        variants={photoAnim}
          className="object-cover rounded-md"
          width="365.55"
          height="365.55"
        src={sm} alt="social" />
        </Link>
        </div>   

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

        <motion.div className="py-10">
        <motion.h2 variants={fade} className="py-4 text-4xl">Post It</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/post-it">
        <motion.img
        variants={photoAnim}
          className="object-cover rounded-md w-full h-auto"
          src={pt} alt="posts" />
        </Link>
        </motion.div>  

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
        <motion.h2 variants={fade} className="py-4 text-4xl">Task Manager</motion.h2>
        <motion.div variants={lineAnim} className="h-1 bg-[#0ef] my-4"></motion.div>
        <Link to="/projects/task-manager">
        <motion.img
        variants={photoAnim}
          className="object-cover rounded-md"
          width="70%"
          height="10%"
         src={tk} alt="rick" />
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