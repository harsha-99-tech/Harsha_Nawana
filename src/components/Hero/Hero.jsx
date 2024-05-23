import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <section>
      <div className="hero">
        <div className="blur blur-h"></div>
        {/* Left Side */}
        <div className="left-h">
          <Header />

          {/*The best add section*/}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>the best developer at the field</span>
          </div>

          {/*Heading*/}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Harsha </span>
              <span>Nawana</span>
            </div>
            <div>
              <span>
                I am fullstack developer from Nikaweratiya, Sri Lanka. An I have
                experience with working web development & mobile app development
                and also graphic design.
              </span>
            </div>
          </div>

          {/* Figures */}
          <div className="figures">
            <div>
              <span>+10</span>
              <span>Web Sites</span>
            </div>
            <div>
              <span>+4</span>
              <span>Apps</span>
            </div>
            <div>
              <span>+25</span>
              <span>Graphic Designs</span>
            </div>
          </div>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Contact Me</buttons>
            <buttons className="btn">See More</buttons>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-h">
          <button className="btn">Contact Me</button>

          {/* Hero Image */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "25rem" }}
            transition={transition}
            src={hero_image_back}
            alt=""
            className="hero-image-back"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
