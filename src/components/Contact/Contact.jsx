import React, { useRef } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lr0plju", "template_ppbq6wi", form.current, {
        publicKey: "T92oJ_qLdcGjqxVo9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <span className="stroke-text">Get in</span>
        <span>touch</span>
        <span className="stroke-text">with me</span>
      </div>
      <div className="contact-section">
        <div className="contact-l">
          <span>Let's talk</span>
          <span>
            I'm currently available to take on new projects. Contact whenever
            you needed to know enything about my projects and sevices.{" "}
          </span>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <span>harshanawana@gmail.com</span>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <span>+9476-1646525 / +9472-5172343</span>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <span>Nikaweratiya, Sri Lanka</span>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-r">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
