import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button``;

const Toggle = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
