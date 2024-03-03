import React from 'react'
import AboutSection from "../components/AboutSection"
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import ScrollTop from "../components/ScrollTop";

const About = () => {
  return (
    <motion.div
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    >
        <AboutSection/>
        <ScrollTop/>
    </motion.div>
  )
}

export default About