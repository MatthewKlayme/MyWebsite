import "../App.css";
import "./projects.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/karto.jpg";
import oil from "../Images/oilRefinery.jpg";
import vinatta from "../Images/vinatta.PNG";
import solostarr from "../Images/solostarr.PNG";
import liqour from "../Images/liquors2u.PNG";
import delor from "../Video/delorean.mov";
import chrono from "../Video/chronospel.mov";

const projects = () => {
  return (
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
      <fill className="blobby">
        <section className="personalProjects">
          <h1>Personal Projects</h1>
          <figure className="kartocars">
            <video
              className="kartorotate"
              autoPlay
              loop
              src={delor}
              type="video/mov"
              alt="DeLorean"
            />
            <figcaption>
              Karto Cars is Retro-Wave collection of 2,500 NFT's thats been in
              development since October of 2021. Since founding Karto Cars NFT I
              have gained multiple skills involving in Marketing, Leadership
              Position, Public Speaking, and Time Management. The NFT is being
              developed along side a Play2Earn mobile racing game planned to
              move to the metaverse. Karto Cars to the moon!
            </figcaption>
          </figure>
        </section>

        <br />

        <section className="schoolProjects">
          <h1>School Projects</h1>
          <figure className="oil">
            <img src={oil} alt="oil refinery" />
            <figcaption>
              Oil Refinery was a school project I had at the University of
              Houston where I was grouped with a team to design a website where
              users could create profiles and once signed in request a quote to
              order gas to a specific location and time. During the project is
              when I got my first taste of website design, I gained experiance
              in react js, html, css, and SQL.
            </figcaption>
          </figure>

          <br />

          <figure className="virtual">
            <video
              className="chronospel"
              src={chrono}
              muted
              loop
              autoPlay
              type="video/mov"
              alt="chronospel"
            />
            <figcaption>
              ChronoSpel was a name I came up for the Virtual Reality game
              project I worked on. I got the name because of my love for the RPG
              classic Chrono Trigger. While working on this project I became
              profitient in Blueprint for Unreal Engine, and gained extra
              leadership skills until I broke my clavicle and lost my role for
              being AFK for too long :(|)
            </figcaption>
          </figure>
        </section>

        <br />

        <section className="workProjects">
          <h1>Work Projects</h1>
          <figure className="vinatta">
            <img src={vinatta} alt="Vinatta"></img>
            <figcaption>
              Vinatta is an A.I and Data Science agency that was commited to
              setting the benchmark in patient, fincancial, and therapeutic
              engagement. At Vinatta I was a Frontend Developer where I
              implemented basic front end technology for their website such as
              connecting and authorization page, a navigation side bar, and
              through Figma designed UI/UX for Verification tools and Doctors
              portal landing page.
            </figcaption>
          </figure>

          <br />

          <figure className="soloStarr">
            <img src={solostarr} alt="Better than TikTok?"></img>
            <figcaption>
              SoloStarr LLC is a social media application that allows users to
              post short videos. At SoloStarr I worked along side my co-worker
              as a Dev Ops Engineer and dealt with management over the front end
              team. I designed through Figma the UI/UX for the 5 main pages
              including Profile, Inbox, Recording, Workshop, Discover, Home, and
              their wireframes. Finally I created the backend for the chat
              platform using React Native
            </figcaption>
          </figure>

          <br />

          <figure className="liqours2u">
            <img src={liqour} alt="Best Liqour Store in Katy"></img>
            <figcaption>
              Liquors2U is a family owned liquor store that sells the best
              liquor at a low price. I am the manager at Liquors2U, and the
              tasks I deal with are running the cash register, keeping track of
              stock, signing off orders, scheduling work hours, advertizing and
              strategy to bring and keep loyal customers.
            </figcaption>
          </figure>
        </section>
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
      </fill>
    </body>
  );
};

export default projects;
