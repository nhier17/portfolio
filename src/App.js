import React from 'react';
import NavBar from "./components/NavBar"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
       </div>
  );
}

export default App;
