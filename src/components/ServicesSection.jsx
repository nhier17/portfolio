import React from 'react'
import { FaCode } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div>
        <h2>My <span>Services</span></h2>
        <div className="container">
            <div className="box">
            <FaCode />
            <h3>Web Development</h3>
            <p>Creating applications and elegant website designs suited for your needs</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
            <FaCode />
            <h3>Web Development</h3>
            <p>Creating applications and elegant website designs suited for your needs</p>
            </div>
        </div>
        <div className="container">
            <div className="box">
            <FaCode />
            <h3>Web Development</h3>
            <p>Creating applications and elegant website designs suited for your needs</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection