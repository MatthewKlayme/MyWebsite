import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import Home from "./Pages/home";
import FreeTime from "./Pages/freeTime";
import Projects from "./Pages/projects";
import AboutMe from "./Pages/aboutMe";
import Instalogo from "./Images/instalogo.png";
import Twitterlogo from "./Images/twitterlogo.png";
import Git from "./Images/gitlogo.png";
import Linklogo from "./Images/linklogo.jpg";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/freeTime" element={<FreeTime />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route exact path="https://www.instagram.com/matthewklayme/"  element={<Instalogo/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
