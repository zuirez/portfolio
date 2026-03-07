import React from "react";
import photo from "../../assets/img/photo.png";
import AnimatedButton from "../Buttons/AnimatedButton.jsx";

function hero_content()
{
    return (
        <div className="heroContent">
            <div class="leftDiv">
                <div class="photo">
                    <img src={photo} alt="Image of Rashedul Islam"/>
                </div>
            </div>

            <div class="rightDiv">
                <div class="rightDivText">
                    <p class="hi">Hello! I<span class="apostrophe">'</span>m</p>
                    <p class="name">Rashed</p>
                    
                    <div class="animatedText">
                        I'm a <span></span>
                    </div>
                </div>

                <div className="rightDivButton">
                    <AnimatedButton text="Projects" backgroundColor="#0D1015"/>
                    <AnimatedButton text="Contact" backgroundColor="#ff5100"/>
                </div>
            </div>
        </div>
)};

export default hero_content;