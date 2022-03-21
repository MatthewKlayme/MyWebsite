import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import win from "../Images/perfectvictory.PNG";
import chillin from "../Images/chillin.jpeg";
import doodle from "../Images/doodlekarto.JPEG";
import logo from "../Images/karto.jpg";
import gitlogo from "../Images/gitlogo.png";
import linklogo from "../Images/linklogo.jpg";
import instalogo from "../Images/instalogo.png";
import disclogo from "../Images/disclogo.png";

const home = () => {
  return (
    <>
      <body className="bigbody">
        <header className="header">
          <nav>
            <ul className="headerul">
              <li className="logo">
                <Link to="/home"><img src={logo} alt = "logo"/></Link>
              </li>
            </ul>
          </nav>
          <h1></h1>
        </header>

        <section className="triplesec">

          <figure>
              <Link to="/freeTime"><img src={win} alt="Super Auto Pets perfect victory"/></Link>
              <figcaption>Free Time</figcaption>
          </figure>

          <figure>
              <Link to="/aboutMe"><img src={chillin} alt="Klayme"/></Link>
              <figcaption>About Me</figcaption>
          </figure>
          
          <figure>
              <Link to="/projects"><img src={doodle} alt="Klayme"/></Link>
              <figcaption>Projects</figcaption>
          </figure>

        </section>

        <footer className="footer">
            <a className="ye" href="https://www.linkedin.com/in/matthew-klayme/"><img src={linklogo} alt="Matthew Klayme"/></a>
            <a className="ye" href="https://github.com/MatthewKlayme"><img src={gitlogo} alt = "Matthew Klayme"/></a>
            <a className="ye" href="https://www.instagram.com/matthewklayme/"><img src={instalogo} alt = "Matthew Klayme"/></a>
            <a className="ye" href="https://disboard.org/server/900425912707862528"><img src={disclogo} alt = "Matthew Klayme"/></a>
        </footer>
      </body>
      
    </>
  );
};

export default home;
