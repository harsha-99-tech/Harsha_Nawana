import React from "react";
import "./About.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const About = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Learn</span>
        <span>More About</span>
        <span className="stroke-text">Me</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="projects-done">
              <span>See projects</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
