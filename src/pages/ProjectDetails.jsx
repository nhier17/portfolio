import React, { useState, useEffect } from 'react'
import ProjectState from "../ProjectState"
import { useLocation } from "react-router-dom"
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const ProjectDetails = () => {
    const location = useLocation()
    const { pathname } = location;

    const [projects] = useState(ProjectState)
    const [project, setProject] = useState(null)

    useEffect(() => {
      const currentProject = projects.filter((stateProject) => stateProject.url === pathname);
      setProject(currentProject[0])    
    }, [projects, pathname])
    
  return (
    <>
    {project && (
    <motion.div 
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    className="min-h-screen mt-56">
        <div className="pt-20 relative">
            <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-10 text-4xl">{project.title}</h2>
            <img 
            className="w-3/4 h-full object-cover  mx-20"
            src={project.mainImg} alt="shoppers" />
        </div>

        <div className="my-20 mx-10 md:mx-20 items-center">
            <h3 className="text-3xl">Links</h3>
            <div className="w-full h-1 bg-[#0ef] m-4"></div>
        </div>
        <div className="md:flex  items-center justify-center m-auto">
            {project.links.map((link) => (
                <div className="my-20 mx-10" key={link.url}>
                <a
                className="font-semibold text-3xl no-underline p-4 rounded-md ring-2 transition-transform ease-in-out duration-300 hover:transform scale-105 hover:ring-[#0ef]"
                 href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                    {link.title}
                </a>
                </div>
            ))}
        </div>
        <div className="my-20 mx-20 items-center">
            <h3 className="text-3xl">Project Description</h3>
            <div className="w-full h-1 bg-[#0ef] m-4"></div>
            <p className="p-4 text-2xl">{project.description}</p>
        </div>
        <div className="min-h-[50vh]">
            <img 
            className="w-3/4 h-full object-cover my-20 mx-20"
            src={project.secondaryImg} alt={project.title} />
        </div>
    </motion.div>
    )}
    </>
  )
}

export default ProjectDetails