// import stuff
import React from 'react';
import Folio_web from './projects/coder/Folio';
import Showreel from './projects/editor/Showreel_mp4';

const Projects = ({ isCoderProfile }) => {
  return (
    <div className="px-8 py-16 md:mt-0 lg::mt-0 mt-10">
      {isCoderProfile ?
        <Folio_web /> // show web project
        :
        <Showreel /> // else video project
      }
    </div>
  );
};

export default Projects;