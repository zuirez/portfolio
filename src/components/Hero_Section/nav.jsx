import React from "react";
import home from "../../assets/img/home-white.png";
import projects from "../../assets/img/projects-white.png";
import about from "../../assets/img/about-white.png";
import contact from "../../assets/img/contact-white.png";
import cv from "../../assets/img/cv-white.png";


function Nav() 
{
  return (
    <div className="navBar" data-cursor="-inverse">
      <div className="navHome">
        <button className="navButton">
          <img src={home} alt="" className="navIcon" />
          <span className="navText">Home</span>
        </button>
      </div>

      <div className="navProjects">
        <button className="navButton">
          <img src={projects} alt="Projects Button" className="navIcon" />
          <span className="navText">Projects</span>
        </button>
      </div>

      <div className="navAbout">
        <button className="navButton">
          <img src={about} alt="About Button" className="navIcon" />
          <span className="navText">About</span>
        </button>
      </div>

      <div className="navContact">
        <button className="navButton">
          <img src={contact} alt="Contact Button" className="navIcon" />
          <span className="navText">Contact</span>
        </button>
      </div>

      <div className="navResume">
        <button className="navButton">
          <img src={cv} alt="CV Button" className="navIcon" />
          <span className="navText">Resume</span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
