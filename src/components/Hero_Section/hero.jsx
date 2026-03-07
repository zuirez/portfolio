import React from "react";
import Nav from "./nav.jsx";
import SiteLogo from "./site-logo.jsx";
import HeroContent from "./hero-content.jsx";

function Hero()
{
    return (
        <div className="heroPage">
            <header>
                <SiteLogo />
                <Nav />
            </header>
            
            <div className="heroSection">
                <HeroContent />
            </div>
        </div>
    );
}

export default Hero;