// import stuff
import React from "react";
import { HERO_EDITOR_DESC, HERO_CODER_DESC } from "../constants/index";
import Switch from "./Switch";

const Hero = ({ isCoderProfile, toggleProfile }) => { /* accept the args passed */
  
  return (
    
    <section className="min-h-screen flex flex-col justify-center text-white py-12">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-center px-6">
        
        {/*editor section*/}
        <div // blur functionality
          className={`flex-1 text-center transition-all duration-500 mb-6 md:mb-0 space-y-6 ${
            isCoderProfile
              ? "blur-sm brightness-75 opacity-50"
              : "blur-0 brightness-100 opacity-100"
          }`}
        >
          <div className="relative flex flex-col items-center">
            <img // editor image
              src="./editor_profile.png"
              alt="Video Editor"
              className="h-52 w-52 lg:h-96 lg:w-96 md:h-72 md:w-72 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center font-light">
              <h1 className=" text-2xl sm:text-3xl md:text-4xl">Video Editor</h1> {/*editor title*/}
              <p className=" mt-2 sm:mt-4 text-sm sm:text-lg sm:max-width-md max-w-xs">{HERO_EDITOR_DESC}</p> {/*editor desc*/}
            </div>
          </div>
        </div>

        {/* toggle */}
        <div className="flex sm:items-left space-x-4 mb-6 md:mb-0 md:mx-8 hover:scale-110 transition-transform duration-200">
          <Switch isChecked={isCoderProfile} onToggle={toggleProfile} />
        </div>

        {/* coder section */}
        <div // blur functionality
          className={`flex-1 text-center transition-all duration-500 space-y-6 ${
            isCoderProfile
              ? "blur-0 brightness-100 opacity-100"
              : "blur-sm brightness-75 opacity-50"
          }`}
        >
          <div className="relative flex flex-col items-center">
            <img //coder image
              src="coder_profile.png"
              alt="Coder"
              className="h-52 w-52 lg:h-96 lg:w-96 md:h-72 md:w-72 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center font-light">
              <h1 className=" text-2xl sm:text-3xl md:text-4xl">Coder</h1> {/*coder title*/}
              <p className=" mt-2 sm:mt-4 text-sm sm:text-lg sm:max-width-md max-w-xs">{HERO_CODER_DESC}</p> {/*coder desc*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
