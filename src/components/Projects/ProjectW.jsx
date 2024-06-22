import React, { useState } from "react";
import "./Projects.css";
import { webData } from "../../data/webData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const ProjectsWeb = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const pLength = webData.length;
  return (
    <div className="projects" id="web">
      <div className="left-p">
        <span>Web Development</span>
        <span className="stroke-text">Latest Projects</span>
        <span>Done by me</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {webData[selected].review}
        </motion.span>
        <span>
          <span
            className="nme"
            onClick={() => (window.location.href = webData[selected].link)}
            style={{
              cursor: "pointer",

              textDecoration: "underline",
            }}
          >
            {webData[selected].name}
          </span>{" "}
          - <span>{webData[selected].used}</span>
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
          src={webData[selected].image}
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

export default ProjectsWeb;
