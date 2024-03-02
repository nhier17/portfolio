import React from "react";
import {motion} from "framer-motion"
import { pageAnimation,titleAnim } from "../animations";
import styled from "styled-components"
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import code from "../images/code.jpeg"

const Contact = () => {
    return (
<ContactStyle
exit="exit" 
variants={pageAnimation} 
initial="hidden" 
animate="show"
style={{background: "white"}}
>
<motion.h2 variants={titleAnim}>Get in touch</motion.h2>  
  <motion.div>
      <Social variants={titleAnim}>
        <Container>
          <Vcard>
            <div className="icon">
        <IoCall/>
<h2>+254795642609.</h2>
</div>
</Vcard>
</Container>
        </Social>
             <Social variants={titleAnim}>
        <Container>
          <Vcard>
            <div className="icon">
        <FaLinkedin/>
<h2>traylhikes.</h2>
</div>
</Vcard>
</Container>
        </Social>
  
        <Social variants={titleAnim}>
        
        <Container>
          <Vcard>
            <div className="icon">
        <MdOutlineEmail/>
<h2>abrahamnhier97@gmail.com</h2>
</div>
</Vcard>
</Container>

        </Social>
    
    </motion.div>
</ContactStyle>
    )
}
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  margin-top: 10rem;
    h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
    color: black;
  }
  background-image: url(${code})
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width:768px){
    padding: 2rem;
    font-size: 0.1rem;
  }
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin: 2rem;
    color: black;
  }
`;
const Container = styled.div`
display: flex;
flex-wrap: wrap;
svg{
  font-size: 3rem;
  color: #0ef;
}
`
const Vcard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 0.1rem;
      background: white;
      color: black;
      padding: 0.1rem;
    }
  }
`;
export default Contact