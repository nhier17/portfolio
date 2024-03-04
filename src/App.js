import React from 'react';
import NavBar from "./components/NavBar"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import { AnimatePresence } from "framer-motion"
import ScrollTop from "./components/ScrollTop"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ScrollTop/>
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      </AnimatePresence>
       </div>
  );
}

export default App;
