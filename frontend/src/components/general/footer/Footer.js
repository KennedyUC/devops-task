import React from "react";
import FooterWrapper from "./footer.styled";
import axeLogo from "./images/logos.png";
import Linkbtn from "./LinkBtn";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <img src={axeLogo} alt="Axe API" />
      </div>
      <div className="footbar">
        <div className="footbarone">
          <h4>Features</h4>
          <Linkbtn href="#" child="Axe API Feature" classname="footlink" />
          <Linkbtn href="#" child="How it works" classname="footlink" />
        </div>
        <div className="footbarone">
          <h4>Help & Support</h4>
          <Linkbtn href="#" child="FAQ" classname="footlink" />
          <Linkbtn href="#" child="Help Center" classname="footlink" />
        </div>
        <div className="footbarone">
          <h4>Terms & Condition</h4>
          <Linkbtn href="#" child="Privacy Policy" classname="footlink" />
        </div>
        <div className="footbarone">
          <h4>Company</h4>
          <Linkbtn href="#" child="About us" classname="footlink" />
          <Linkbtn href="#" child="Meet our team" classname="footlink" />
          <Linkbtn href="#" child="Vision & Mission" classname="footlink" />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
