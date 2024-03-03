import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import me from "../images/me.JPEG"
import { motion } from "framer-motion"
import { titleAnim, fade, photoAnim } from "../animations";

const AboutSection = () => {
  const linkedinUrl = "https://www.linkedin.com/in/nhier"
  const githubUrl ="https://github.com/nhier17"
  return (
    <motion.div className="min-h-svh flex items-center justify-between py-20 px-40">
      <motion.div className="flex-1 pr-20 z-2">
        <motion.div>
          <motion.div>
            <motion.h2
            variants={titleAnim}
             className="text-3xl lg:text-4xl xl:text-5xl font-bold font-Roboto">Hello, It's me</motion.h2>
            <h1 
            variants={titleAnim}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold">Abraham</h1>
          </motion.div>
          <motion.div>
            <motion.h2 
            variants={titleAnim}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold">
              And  I am a <span className="text-[#0ef]">Software</span>
            </motion.h2>
          </motion.div>
          <motion.div className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            <motion.h2 variants={titleAnim}>Developer.</motion.h2>
          </motion.div>
        </motion.div>
        <motion.p
        variants={fade}
          className="text-sm py-20 md:text-base lg:text-lg xl:text-xl max-w-xl">
        I am a software developer passionate about coding and problem solving with a solid foundation in both front-end and back-end technologies. 
        So far I've developed responsive and intuitive user interfaces using technologies and libraries like Javascript, ReactJs, HTML and CSS.
         I have designed and developed restful APIs with Node.js and integrating them with diverse databases like MongoDB.
          My experience with version control systems i.e Git ensures smooth collaboration and effective code management.
           I am open to learning and staying updated on the latest industry trends which will allow me to incorporate cutting edge solutions into my work.
            Looking forward to contribute to innovative projects and collaborate with like-minded individuals.
        </motion.p>
        <motion.div className="flex items-center text-5xl text-[#0ef] gap-4 cursor-pointer">
          <FaInstagram/>
          <a href={linkedinUrl}><FaLinkedin/></a>
          <a href={githubUrl}><FaGithub/></a>
          </motion.div>
        <a className="inline-block p-4 lg:p-7 bg-[#0ef] ring-2 ring-[#0ef] rounded-xl mt-4 text-xl font-bold" href={githubUrl}>Download CV</a>
      </motion.div>
      <motion.div>
        <motion.img 
        className="w-full md:w-96 lg:w-80 xl:w-96 mx-auto"
        width="300"  src={me} alt="profile" />
      </motion.div>
       </motion.div>
  )
}

export default AboutSection