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
    <div className="mt-32">
        <div>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="shoppers" />
        </div>
    </div>
    )}
    </>
  )
}

export default ProjectDetails