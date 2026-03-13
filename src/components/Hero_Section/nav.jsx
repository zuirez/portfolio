import React, { useEffect, useRef, useState } from "react";
import homeDark from "../../assets/img/home-dark.png";
import homeWhite from "../../assets/img/home-white.png";
import projectsDark from "../../assets/img/projects-dark.png";
import projectsWhite from "../../assets/img/projects-white.png";
import aboutDark from "../../assets/img/about-dark.png";
import aboutWhite from "../../assets/img/about-white.png";
import contactDark from "../../assets/img/contact-dark.png";
import contactWhite from "../../assets/img/contact-white.png";
import cvDark from "../../assets/img/cv-dark.png";
import cvWhite from "../../assets/img/cv-white.png";


function Nav() 
{
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);
  const navRef = useRef(null);
  const icons = isOnDarkSection
    ? {
        home: homeDark,
        projects: projectsDark,
        about: aboutDark,
        contact: contactDark,
        cv: cvDark,
      }
    : {
        home: homeWhite,
        projects: projectsWhite,
        about: aboutWhite,
        contact: contactWhite,
        cv: cvWhite,
      };

  useEffect(() => {
    const projectsSection = document.querySelector(".projectsSection");
    const navElement = navRef.current;

    if (!projectsSection || !navElement)
    {
      return undefined;
    }

    const updateNavTheme = () => {
      const sectionRect = projectsSection.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();
      const overlapTop = Math.max(navRect.top, sectionRect.top);
      const overlapBottom = Math.min(navRect.bottom, sectionRect.bottom);
      const overlapHeight = Math.max(0, overlapBottom - overlapTop);
      const shouldUseLightNav = overlapHeight >= navRect.height * 0.5;

      setIsOnDarkSection(shouldUseLightNav);
    };

    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);

    return () => {
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, []);

  return (
    <div ref={navRef} className={`navBar ${isOnDarkSection ? "navBarLight" : ""}`} data-cursor="-inverse">
      <div className="navHome">
        <button className="navButton">
          <img src={icons.home} alt="" className="navIcon" />
          <span className="navText">Home</span>
        </button>
      </div>

      <div className="navProjects">
        <button className="navButton">
          <img src={icons.projects} alt="Projects Button" className="navIcon" />
          <span className="navText">Projects</span>
        </button>
      </div>

      <div className="navAbout">
        <button className="navButton">
          <img src={icons.about} alt="About Button" className="navIcon" />
          <span className="navText">About</span>
        </button>
      </div>

      <div className="navContact">
        <button className="navButton">
          <img src={icons.contact} alt="Contact Button" className="navIcon" />
          <span className="navText">Contact</span>
        </button>
      </div>

      <div className="navResume">
        <button className="navButton">
          <img src={icons.cv} alt="CV Button" className="navIcon" />
          <span className="navText">Resume</span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
