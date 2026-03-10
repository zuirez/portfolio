import React from "react";
import Cursor from "./Cursor.jsx";
import Hero from "./Hero_Section/hero.jsx";
import Projects from "./Projects_Section/Projects.jsx";
import LenisSmoothScroll from "./LenisSmoothScroll.jsx";

function App()
{
    return <div>
        <LenisSmoothScroll />
        <Cursor />
        <Hero />
        <Projects />
    </div>
}

export default App;