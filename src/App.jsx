// import components
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {

  const [isCoderProfile, setIsCoderProfile] = useState(false); // boolean to check profile mode
  const toggleProfile = () => setIsCoderProfile((prevState) => !prevState);

  return (

    // common classes for the entire project
    <div className={`cursor-default overflow-x-hidden text-neutral-300 antialiased  ${isCoderProfile ? "selection:bg-orange-400 selection:text-gray-900" : "selection:bg-cyan-300 selection:text-gray-900"}`}>
      <div className="bg-black">
        <div className="container mx-auto px-8">

          {/* navbar */}
          <Navbar isCoderProfile={isCoderProfile} />

          {/* hero */}
          <Hero isCoderProfile={isCoderProfile} toggleProfile={toggleProfile} />

          {/* achievements */}
          <Achievements isCoderProfile={isCoderProfile} />

          {/* projects */}
          <Projects isCoderProfile={isCoderProfile} />

          {/* contact */}
          <Contact isCoderProfile={isCoderProfile} />

        </div>
      </div>
    </div>
  );
};

export default App;
