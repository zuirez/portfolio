import React from "react";
import photo from "../../assets/img/photo.png";
import AnimatedButton from "../Buttons/AnimatedButton.jsx";

function HeroContent()
{
    return (
        <div className="heroContent">
            <div className="leftDiv">
                <div className="photo">
                    <img src={photo} alt="me"/>
                </div>
            </div>

            <div className="rightDiv">
                <div className="rightDivText">
                    <p className="hi">Hello! I<span className="apostrophe">'</span>m</p>
                    <p className="nameLight">Rashed</p>

                    <div className="animatedText">
                        I&apos;m a <span></span>
                    </div>
                </div>

                <div className="rightDivButton">
                    <AnimatedButton text="Projects" backgroundColor="#0D1015"/>
                    <AnimatedButton text="Contact" backgroundColor="#ff5100"/>
                </div>
            </div>
        </div>
)};

export default HeroContent;