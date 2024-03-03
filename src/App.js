import React from 'react';
import NavBar from "./components/NavBar"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
       </div>
  );
}

export default App;
