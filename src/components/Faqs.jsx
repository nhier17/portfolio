import React from 'react'
import Toggle from "./Toggle";
import { AnimatePresence } from "framer-motion";

const Faqs = () => {
  return (
    <div className="block mx-10">
        <h2 className="pb-8 text-6xl">Any Questions <span className="text-[#0ef] block mt-2">FAQs</span></h2>
        <AnimatePresence>
        <Toggle title="What is Abraham's TechStack and SkillSet?">
          <div className="py-[2rem]">
          <div className="py-[1rem] text-2xl">
            <ul className="p-[2rem]">
             <li> Software immersive development using React.js, JavaScript, Next.js, Node.js, HTML and CSS.</li>  
             <ul>
                <li>
                Design and development of Restful APIs with Node.js 
                </li>
                <li> Version control framework i.e. Git for overall collaboration on projects and effective code management.</li>
                <li>Client-side application programming using React.js.</li>
                <li> Agile/ scrum methodology development in project management and the ability to work in iterative 
                    cycles.</li>
                    <li>
                    Database management with competence in working with databases including SQL, MySQL, PostgreSQL
                    and MongoDB
                     </li>
                    <li> Information security on the application layer encompassing best practice in user authentication and 
                        authorization</li>
                </ul> 
            </ul>
          </div>
          </div>
        </Toggle>
        </AnimatePresence>
    </div>
  )
}

export default Faqs