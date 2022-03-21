import "../App.css";
import "./aboutMe.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/karto.jpg";

const aboutMe = () => {
  return (
    <>
    <body>
      <header className="header">
        <nav>
          <ul className="headerul">
            <li className="logo">
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
        </nav>
        <h1></h1>
      </header>
      <h1>Hey!</h1>
      <text>
        My name is Matthew Klayme I'm 23 and I am a senior in Computer Science
        at the University of Houston. Im am a Greek Orthodox Christian that
        enjoys spending time in church helping in all the events that take
        place. I was born and raised in Texas but my parents came over from
        Lebanon over 30 years ago, because of this I have very conservative
        roots as my parents have raised me the same way they lived their lives
        in the harsher struggles Lebanon has gone through. Im a passionate
        worker who enjoys making others happy through what I produce.
      </text>

      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </body>
    </>
  );
};

export default aboutMe;
