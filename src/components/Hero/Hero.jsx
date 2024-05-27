import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <section>
      <div className="hero" id="home">
        <div className="blur blur-h"></div>
        {/* Left Side */}
        <div className="left-h">
          <Header />

          {/*The best add section*/}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
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
              <span>
                <CountUp end={10} start={0} prefix="+" />
              </span>
              <span>Web Sites</span>
            </div>
            <div>
              <span>
                <CountUp end={4} start={0} prefix="+" />
              </span>
              <span>Apps</span>
            </div>
            <div>
              <span>
                <CountUp end={25} start={0} prefix="+" />
              </span>
              <span>Graphic Designs</span>
            </div>
          </div>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <Link to="contact-us" smooth={true} duration={500} className="btn">
              Contact Me
            </Link>
            <Link to="about" smooth={true} duration={500} className="btn">
              See More
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-h">
          <Link to="contact" smooth={true} duration={500} className="btn">
            Contact Me
          </Link>

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
