import React from "react";
import { ButtonWrapper } from "./button.styled";
import PropTypes from "prop-types";

/*
This is a reusable Button Component 

Button component takes in props

 style - overides default styling - (object),
 onClick - on click function,
 text - strings/children
*/
const Button = ({ style, text, onClick }) => {
  return (
    <ButtonWrapper style={style} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
Button.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};
