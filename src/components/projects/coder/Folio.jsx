// import stuff
import React from 'react';
import { PROJECT_FOLIO_DESC } from "../../../constants/index";
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing the icon

const Folio_web = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 flex justify-center relative">

        {/* embedded webpage container */}
        <div className="w-full h-0 pb-[56.25%] relative">
          <iframe // using iframe tag to embed the website
            src="http://shahanxd.vercel.app"
            title="Folio Web Preview"
            className="absolute top-0 left-0 w-full h-full object-cover border-2 border-orange-400"
            frameBorder="0"
            allowFullScreen
            style={{
              pointerEvents: "auto", // allow interactions with iframe content
              transform: "scale(1)",
            }}
          ></iframe>
        </div>
      </div>

      {/* about project */}
      <div className="flex justify-end flex-col w-full md:w-1/2">
        <h2 className="lg:text-5xl text-3xl md:text-3xl sm:text-3xl font-light customtracking-tighter text-white mb-4 flex items-center">
          <a
            className="hover:text-orange-400 hover:scale-103 transition-all duration-100 inline-block"
          >
            folio.web
          </a>
          
          {/* repo button */}
          <a
            href="https://github.com/shahanxd/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 mt-2 flex items-center text-sm text-white bg-zinc-500 px-2 py-1 rounded-full hover:bg-orange-400 transition-all duration-200"
          >
            <span className="tracking-wide">Repo</span> <FaExternalLinkAlt className="ml-2" />
          </a>
        </h2>

        {/* skill tags */}
        <div className="flex flex-wrap space-x-4 mb-4">
          <span className="px-2 py-1 text-xs bg-[#f83] text-white rounded-full mb-2 md:mb-0">React</span>
          <span className="px-2 py-1 text-xs bg-[rgb(255,81,0)] text-white rounded-full mb-2 md:mb-0">Tailwind</span>
          <span className="px-2 py-1 text-xs bg-gray-800 text-white rounded-full mb-2 md:mb-0">HTML</span>
          <span className="px-2 py-1 text-xs bg-gray-600 text-white rounded-full mb-2 md:mb-0">CSS</span>
        </div>
        <p className="text-xs sm:text-sm lg:text-lg text-gray-400">
          {PROJECT_FOLIO_DESC}
        </p>
      </div>
    </div>
  );
};

export default Folio_web;
