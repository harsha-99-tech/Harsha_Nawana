import React, { useState } from "react";
import "./Project.css";
import { projectsData } from "../../data/projectsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const pLength = projectsData.length;
  return (
    <div className="projects">
      <div className="left-p">
        <span>{projectsData[selected].field}</span>
        <span className="stroke-text">Latest Projects</span>
        <span>Done by me</span>
        <span>{projectsData[selected].review}</span>
        <span>
          <span className="nme">{projectsData[selected].name}</span> -{" "}
          {projectsData[selected].used}
        </span>
      </div>
      <div className="right-p">
        <div></div>
        <div></div>
        <img src={projectsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(pLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === pLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
