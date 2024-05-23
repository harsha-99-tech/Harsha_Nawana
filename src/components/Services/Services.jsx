import React from "react";
import "./Services.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="blur blur-s-1"></div>
      <div className="blur blur-s-2"></div>
      <div className="programs-header">
        <span className="stroke-text">Ready to</span>
        <span>Build your project</span>
        <span className="stroke-text">from Me</span>
      </div>

      {/* Services Cards */}
      <div className="services">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more -></span>
            </div>
            <button className="btn">Contact now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
