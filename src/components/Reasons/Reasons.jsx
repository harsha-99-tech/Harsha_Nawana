import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.jpg";
import ps from "../../assets/adobe-photoshop.512x512.png";
import ai from "../../assets/adobe-illustrator.512x512.png";
import word from "../../assets/ms-word.512x449.png";
import excel from "../../assets/ms-excel.512x449.png";
import pp from "../../assets/ms-powerpoint.512x463.png";
import figma from "../../assets/figma.512x512.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why </span>
          <span>me?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>BICT(HONS) Graduate</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Followed certified courses related to field</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Worked in many projects</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Flexible and understandable</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Skillful worker with fast learning ability</span>
          </div>
        </div>
        <span className="hbby">Softwares familiar with</span>
        <div className="partners">
          <img src={ps} alt="" />
          <img src={ai} alt="" />
          <img src={word} alt="" />
          <img src={excel} alt="" />
          <img src={pp} alt="" />
          <img src={figma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
