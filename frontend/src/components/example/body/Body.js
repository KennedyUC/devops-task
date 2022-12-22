import React from "react";
import BodyWrapper from "./body.styled";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <BodyWrapper>
      <h3>Hello Dev</h3>
      <p>
        I am PINK when the theme is Dark <br /> And YELLOW when the team is
        white
      </p>
      <small>I was implemented with styled components</small> <br />
      <Link className="btn" to="/">
        Back to home
      </Link>
    </BodyWrapper>
  );
};

export default Body;
