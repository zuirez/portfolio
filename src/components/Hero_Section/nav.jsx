import React from "react";
import home from "../../assets/img/home-white.png";
import projects from "../../assets/img/projects-white.png";
import about from "../../assets/img/about-white.png";
import contact from "../../assets/img/contact-white.png";
import cv from "../../assets/img/cv-white.png";


function Nav() 
{
  return (
    <div className="navBar">
      <div className="navHome">
        <button className="navButton">
          <img src={home} alt="" className="navIcon" />Home
        </button>
      </div>

      <div className="navProjects">
        <button className="navButton">
          <img src={projects} alt="Projects Button" className="navIcon" />
          Projects
        </button>
      </div>

      <div className="navAbout">
        <button className="navButton">
          <img src={about} alt="About Button" className="navIcon" />
          About
        </button>
      </div>

      <div className="navContact">
        <button className="navButton">
          <img src={contact} alt="Contact Button" className="navIcon" />
          Contact
        </button>
      </div>

      <div className="navResume">
        <button className="navButton">
          <img src={cv} alt="CV Button" className="navIcon" />
          Resume
        </button>
      </div>
    </div>
  );
}

export default Nav;
