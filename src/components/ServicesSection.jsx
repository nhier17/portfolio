import React from 'react';
import { FaCode, FaHashtag, FaChartLine } from 'react-icons/fa';


const ServicesSection = () => {
  return (
    <div>
    <h2 className="mb-8 text-[5rem] text-center">My <span className="text-[#0ef]">Services</span></h2>
    <div className="services-container">
      <div className="service-item">
        <div className="bg-[#323946] p-12 pt-8 pb-16 text-center border-solid border-2 border-[#0ef]">
          <FaCode className="text-center text-[7rem] text-[#0ef] m-auto"/>
          <h3 className="text-3xl p-4">Web Development</h3>
          <p className="text-xl">Creating applications and elegant website designs suited for your needs</p>
        </div>
      </div>
      <div className="service-item">
        <div className="bg-[#323946] p-12 pt-8 pb-16 text-center">
          <FaHashtag className="text-center text-[7rem] text-[#0ef] m-auto"/>
          <h3 className="text-3xl p-4">Code Your Dream Project</h3>
          <p className="text-xl">Do you have an idea for your next great website? Let's make it a reality.</p>
        </div>
      </div>
      <div className="service-item">
        <div className="bg-[#323946] p-12 pt-8 pb-16 text-center border-solid border-2 border-[#0ef]">
          <FaChartLine className="text-center text-[7rem] text-[#0ef] m-auto"/>
          <h3 className="text-3xl p-4">Analytics</h3>
          <p className="text-xl">Utilize data to drive insights and improve your online presence</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesSection;
