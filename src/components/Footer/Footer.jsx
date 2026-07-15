"use client";
import "./Footer.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { IoMail } from "react-icons/io5";
import Copy from "../Copy/Copy";

const Footer = () => {
  // const [localTime, setLocalTime] = useState("");

  // useEffect(() => {
  //   const updateLocalTime = () => {
  //     const options = {
  //       timeZone: "Asia/Kolkata",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //       second: "2-digit",
  //       hour12: false,
  //     };

  //     const formatter = new Intl.DateTimeFormat("en-US", options);
  //     const localTimeString = formatter.format(new Date());
  //     setLocalTime(localTimeString);
  //   };

  //   updateLocalTime();
  //   const timeInterval = setInterval(updateLocalTime, 1000);

  //   return () => clearInterval(timeInterval);
  // }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer-header-content">
          <div className="footer-header">
            <Copy animateOnScroll={true} delay={0.2}>
              <h1>Let's build something that feels alive</h1>
            </Copy>
          </div>
          <div className="footer-link">
            <Button
              animateOnScroll={true}
              delay={0.5}
              variant="light"
              icon={IoMail}
              href="/contact"
            >
              Say Hello
            </Button>
          </div>
        </div>
        <div className="footer-byline">
          <div className="footer-time">
            <p>
              Odisha
            </p>
          </div>

          <div className="footer-author">
            <p>Siddharth Transport</p>
          </div>

          <div className="footer-copyright">
            <p>&copy; Siddharth Transport</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
