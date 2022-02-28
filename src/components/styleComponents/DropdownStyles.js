import styled from "styled-components";
import { device } from "./device.js";

const Dropdown = styled.nav`
  width: 300px;
  background: transparent;
  margin: 10px auto 10px;
  border-bottom: solid 1px;

  @media ${device.tablet} {
    width: 300px;
    margin: 10px 50px 10px;
  }

  li {
    cursor: pointer;
  }

  h4 {
    padding: 10px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  h4::after {
    float: right;
    right: 10%;
    content: "+";
  }

  .slide {
    clear: both;
    width: 300px;
    height: 0px;
    overflow: hidden;
    text-align: center;
    transition: height 0.4s ease;
    background-color: white;
    position: absolute;
    z-index: 2;
  }

  .slide li {
    padding: 20px 0 10px;
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: 0px;
  }

  #touch:checked + .slide {
    height: 371px;
  }
`;

const CountDropdownStyled = styled.nav`
  width: 300px;
  background: transparent;
  margin: 10px auto 10px;
  border-bottom: solid 1px;

  @media ${device.tablet} {
    width: 300px;
    margin: 10px 50px 10px;
  }

  li {
    cursor: pointer;
  }

  h4 {
    padding: 10px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  h4::after {
    float: right;
    right: 10%;
    content: "+";
  }

  .slide2 {
    clear: both;
    width: 300px;
    height: 0px;
    overflow: hidden;
    text-align: center;
    transition: height 0.4s ease;
    background-color: white;
    position: absolute;
    z-index: 2;
  }

  .slide2 li {
    padding: 20px 0 10px;
  }

  #touch2 {
    position: absolute;
    opacity: 0;
    height: 0px;
  }

  #touch2:checked + .slide2 {
    height: 171px;
  }
`;
export { Dropdown, CountDropdownStyled };
