import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="py-[3rem] cursor-pointer" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout className="text-4xl">{title}</motion.h4>
      {toggle ? children : ""}
      <div className="bg-[#0ef] h-[0.2rem] my-[2rem] w-full"></div>
    </motion.div>
  );
};

export default Toggle;