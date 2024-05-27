import React, { useState } from "react";
import "./Projects.css";
import { projectsData } from "../../data/projectsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const ProjectsUi = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const pLength = projectsData.length;
  return (
    <div className="projects" id="portfolio">
      <div className="left-p">
        <span>{projectsData[selected].field}</span>
        <span className="stroke-text">Latest Projects</span>
        <span>Done by me</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {projectsData[selected].review}
        </motion.span>
        <span>
          <span className="nme">{projectsData[selected].name}</span> -{" "}
          {projectsData[selected].used}
        </span>
      </div>
      <div className="right-p">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ transition }}
          src={projectsData[selected].image}
          alt=""
        />
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

export default ProjectsUi;
