import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import me2 from "../images/me2.JPEG"
import { motion } from "framer-motion"
import { titleAnim, fade, photoAnim } from "../animations";

const AboutSection = () => {
  const linkedinUrl = "https://www.linkedin.com/in/nhier"
  const githubUrl ="https://github.com/nhier17"
  return (
    <motion.div className="md:min-h-screen md:flex items-center justify-between py-10 md:py-10 px-5 md:px-20 mt-32">
      <motion.div className="flex-1 pr-5 md:pr:20 z-[2]">
        <motion.div>
          <motion.div className="overflow-hidden">
            <motion.h2
            variants={titleAnim}
             className="text-[2rem] md:text-[3.2rem] font-bold font-Roboto">Hello, It's me</motion.h2>
            <h1 
            variants={titleAnim}
            className="text-[3.2rem] md:text-[5.6rem] lg:text-[5.6rem] xl:text-[5.6rem] font-bold">Abraham Nhier</h1>
          </motion.div>
          <motion.div className="overflow-hidden">
            <motion.h2 
            variants={titleAnim}
            className="text-[2rem] md:text-[3.2rem] font-bold">
              And  I am a <span className="text-[#0ef]">Software</span>
            </motion.h2>
          </motion.div>
          <motion.div className="text-[2rem] md:text-4xl lg:text-5xl font-bold overflow-hidden">
            <motion.h2 variants={titleAnim}>Developer.</motion.h2>
          </motion.div>
        </motion.div>
        <motion.p
        variants={fade}
          className="text-[1.1rem] md:text-base py-20  lg:text-lg xl:text-xl">
  I am a highly motivated software developer driven by a fervent passion for coding and problem-solving.As a developer I have proficiently designed, developed , tested , and deployed user-friendly projects utilizing cutting-edge technologies such as Javascript, React.js, Next.js, HTML, and CSS. I possess expertise in creating and developing restful APIs with Node.js. I have successfully developed RESTful that handle data processing, authentication and seamless integration with front-end technologies.
I have utilized Express.js to streamline the development process ensuring efficient and maintainable code.
Additionally I incorporated database management systems like mongoDB, PostgreSQL for effective data storage and retrivial.
 I am committed to continuous improvement, actively learning and staying current with the latest trends in software development. I am eager to utilize my skills and knowledge to spearhead innovation and collaborate on groundbreaking projects alongside fellow professionals. 
Distinguished as a forward-thinking innovator and solution finder, I successfully engineered an application that seamlessly integrates my passion for Health, Fitness, and wellness with cutting-edge technological tools and techniques.
        </motion.p>
        <motion.div className="flex items-center text-4xl md:text-5xl text-[#0ef] gap-4 cursor-pointer">
          <FaInstagram/>
          <a href={linkedinUrl}><FaLinkedin/></a>
          <a href={githubUrl}><FaGithub/></a>
          </motion.div>
        <a className="inline-block p-3 md:p-4 px-8 lg:p-5 bg-[#0ef] shadow-sm  rounded-xl text-lg md:text-xl font-bold mt-5 transition-all duration-75" href={githubUrl}>Download CV</a>
      </motion.div>
      <motion.div className="flex-1 overflow-hidden z-[2]">
        <motion.img 
        variants={photoAnim}
        className="w-50 h-auto md:w-2/3 lg:w-1/2 m-auto object-cover rounded-md mt-8 overflow-hidden"
        src={me2} alt="profile" />
      </motion.div>
       </motion.div>
  )
}

export default AboutSection