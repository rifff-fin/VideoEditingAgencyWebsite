import React from 'react';
import './Project.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Project = () => {
  return (
    <div className="projects">
      <div className="project">
        <img src={program_1} alt="Program 1" />
        <div className='caption'>
        <img src={program_icon_1} alt="" />
            <p>Podcast</p>
        </div>
      </div>
      <div className="project">
        <img src={program_2} alt="Program 2" />
        <div className='caption'>
            <img src={program_icon_2} alt="" />
            <p>Video Editing</p>
        </div>
      </div>
      <div className="project">
        <img src={program_3} alt="Program 3" />
        <div className='caption'>
            <img src={program_icon_3} alt="" />
            <p>Graphic Design</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
