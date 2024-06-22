import React from "react";
import "./About.css";
import { aboutData } from "../../data/aboutData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="Programs" id="about">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Learn</span>
        <span>More About</span>
        <span className="stroke-text">Me</span>
      </div>

      <div className="program-categories">
        {aboutData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <Link to={program.link} smooth={true} duration={500}>
              <div className="projects-done">
                <span>See projects</span>
                <img src={RightArrow} alt="" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
