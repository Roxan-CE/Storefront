import styled from "styled-components";
import { device } from "./device.js";

const Dropdown = styled.nav`
  width: 300px;
  background: transparent;
  margin: 10px auto 10px;
  position: relative;
  border-bottom: solid 1px;
  height: 50px;

  :hover {
    border-bottom: 0;

    .slide {
      border-bottom: solid 1px;
      transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
    }

    h4 {
      font-weight: 500;
      letter-spacing: 1.5px;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  li {
    cursor: pointer;
    :hover {
      font-weight: 700;
      letter-spacing: 1.2px;
      font-style: italic;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      background-color: #efefef;
      border-radius: 4px;
    }
  }

  h4 {
    padding: 10px;
    background: transparent;
    cursor: pointer;
    display: block;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
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
    transition: height 1s cubic-bezier(0.19, 1, 0.22, 1);
    background-color: white;
    position: absolute;
    z-index: 2;
    left: -1px;
    top: 51px;
    border-left: solid 1px;
    border-right: solid 1px;
    z-index: 10;
  }

  .slide li {
    padding: 20px 0 10px;

    p {
      margin: 0;
    }
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: 0px;
  }

  #touch:checked + .slide {
    height: 300px;
  }

  @media ${device.tablet} {
    width: 300px;
    margin: 26px 50px 26px;
  }
`;

const CountDropdownStyled = styled.nav`
  width: 300px;
  background: transparent;
  margin: 10px auto 10px;
  position: relative;
  border-bottom: solid 1px;
  height: 50px;

  :hover {
    border-bottom: 0;
    .slide2 {
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      border-bottom: solid 1px;
    }

    h4 {
      font-weight: 500;

      letter-spacing: 1.5px;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  li {
    cursor: pointer;
    :hover {
      font-weight: 700;
      letter-spacing: 1.2px;
      font-style: italic;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      background-color: #efefef;
      border-radius: 4px;
    }
  }

  h4 {
    padding: 10px;
    background: transparent;
    cursor: pointer;
    display: block;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
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
    transition: height 1s cubic-bezier(0.19, 1, 0.22, 1);
    background-color: white;
    position: absolute;
    z-index: 2;
    left: -1px;
    top: 51px;
    border-left: solid 1px;
    border-right: solid 1px;
  }

  .slide2 li {
    padding: 20px 0 10px;
    p {
      margin: 0;
    }
  }

  #touch2 {
    position: absolute;
    opacity: 0;
    height: 0px;
  }

  #touch2:checked + .slide2 {
    height: 151px;
  }

  @media ${device.tablet} {
    margin: 20px 50px 20px;
  }
`;
export { Dropdown, CountDropdownStyled };
