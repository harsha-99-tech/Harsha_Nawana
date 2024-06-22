import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img
            src={Github}
            alt=""
            onClick={() =>
              (window.location.href = "https://github.com/harsha-99-tech")
            }
            style={{
              cursor: "pointer",

              textDecoration: "underline",
            }}
          />
          <img
            src={Instagram}
            alt=""
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/harsha_nawana/")
            }
            style={{
              cursor: "pointer",

              textDecoration: "underline",
            }}
          />
          <img
            src={Linkedin}
            alt=""
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/harsha-nawana")
            }
            style={{
              cursor: "pointer",

              textDecoration: "underline",
            }}
          />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
