import React from 'react'
import AboutSection from "../components/AboutSection"
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import ScrollTop from "../components/ScrollTop";
import ServicesSection from "../components/ServicesSection";
import Faqs from "../components/Faqs";

const About = () => {
  return (
    <motion.div
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    >
        <AboutSection/>
        <ServicesSection/>
        <Faqs/>
        <ScrollTop/>
    </motion.div>
  )
}

export default About