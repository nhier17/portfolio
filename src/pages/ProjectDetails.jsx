import React, { useState, useEffect } from 'react'
import ProjectState from "../ProjectState"
import { useLocation } from "react-router-dom"
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const ProjectDetails = () => {
    const location = useLocation()
    const { pathname } = location;

    const [projects, setProjects] = useState(ProjectState)
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
            className="w-full h-full object-cover"
            src={project.mainImg} alt="shoppers" />
        </div>

        <div className="flex items-center justify-around my-20 mx-40">
            {project.links.map((link) => (
                <div>
                <h3>{link.title}</h3>
                <a href={link.url} target="_blank" key={link.url}>
                    {link.title}
                </a>
                </div>
            ))}
        </div>
        <div className="my-20 mx-40 items-center">
            <h3 className="text-3xl">Project Description</h3>
            <div className="w-full h-1 bg-blue-500 m-4"></div>
            <p className="p-4 text-2xl">{project.description}</p>
        </div>
        <div className="min-h-[50vh]">
            <img 
            className="w-full h-full object-cover"
            src={project.secondaryImg} alt={project.title} />
        </div>
    </motion.div>
    )}
    </>
  )
}

export default ProjectDetails