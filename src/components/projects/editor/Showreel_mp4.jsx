// import stuff
import React, { useEffect, useRef, useState } from 'react';
import { PROJECT_SHOWREEL_DESC } from "../../../constants/index";

const Showreel_mp4 = () => {
  const videoRef = useRef(null); // reference for video container
  const [isVideoVisible, setIsVideoVisible] = useState(false); // useState to autoplay video only when in viewport

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true); // start autoplay when visible
        } else {
          setIsVideoVisible(false); // stop autoplay when out of view
        }
      },
      { threshold: 0.5 } // trigger when 50% of the container visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      
      {/* embedded video container */}
      <div className="w-full md:w-1/2 flex justify-center relative" ref={videoRef}>
        <div className="w-full h-0 pb-[56.25%] relative">
          {isVideoVisible ? (
            <iframe
              src="https://www.youtube.com/embed/etCqIaT_WNE?autoplay=1&mute=1&rel=0&vq=hd1080"
              title="Showreel Video"
              className="absolute top-0 left-0 w-full h-full border-2 border-cyan-300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/etCqIaT_WNE?autoplay=0&rel=0"
              title="Showreel Video"
              className="absolute top-0 left-0 w-full h-full border-2 border-cyan-300"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      {/* about project */}
      <div className="flex justify-end flex-col w-full md:w-1/2">
        <h2 className="lg:text-5xl text-3xl md:text-3xl sm:text-3xl font-light customtracking-tight text-white mb-4 flex items-center">
          <a
            href="https://www.youtube.com/watch?v=etCqIaT_WNE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 hover:scale-103 transition-all duration-100 inline-block"
          >
            showreel.mp4
          </a>
        </h2>

        {/* skill tags */}
        <div className="flex flex-wrap space-x-4 mb-4">
          <span className="px-2 py-1 text-xs bg-sky-600 text-white rounded-full mb-2 md:mb-0">Filmora</span>
          <span className="px-2 py-1 text-xs bg-sky-700 text-white rounded-full mb-2 md:mb-0">Filming</span>
          <span className="px-2 py-1 text-xs bg-gray-800 text-white rounded-full mb-2 md:mb-0">Production</span>
          <span className="px-2 py-1 text-xs bg-gray-600 text-white rounded-full mb-2 md:mb-0">Script</span>
        </div>
        <p className="text-xs sm:text-sm lg:text-lg text-gray-400">
          {PROJECT_SHOWREEL_DESC}
        </p>
      </div>
    </div>
  );
};

export default Showreel_mp4;
