import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./HeaderStyles";

const MainLogo = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  :hover {
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;
const Fineprint = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1px;
`;
const H1Link = styled.h1`
  :hover {
    font-weight: 700;
  }
`;
const H3Link = styled.h3`
  cursor: pointer;

  :hover {
    font-weight: 700;

    position: relative;
    color: inherit;
    text-decoration: none;

    &:before {
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.6);
      transform: scaleX(0);
    }
    &:hover:before {
      transform: scaleX(1);
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.5s ease;
    }
  }
`;

const UlStyled = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

const Title1 = styled.p`
  font-size: 13px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  padding: 10px 0 0 0;
`;

const BackText = styled.p`
  font-size: 13px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
`;

const Striked = styled(Title1)`
  text-decoration: line-through;
`;
const RedText = styled(Title1)`
  color: red;
  padding-left: 5px;
`;

const RegularText = styled.p`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  font-size: 16px;
  margin: 10px 20px;
  letter-spacing: 1px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);

  :hover {
    font-weight: 900;
  }
`;

const LinedLink = styled(RegularText)`
  position: relative;
  color: inherit;
  text-decoration: none;
  padding: 0;

  &:before {
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.6);
    transform: scaleX(0);
  }
  &:hover:before {
    transform: scaleX(1);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: transform 0.5s ease;
  }
`;

const LiStyled = styled.li`
  a,
  a > span {
    position: relative;
    color: inherit;
    text-decoration: none;

    &:before {
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.6);
      transform: scaleX(0);
    }
    &:hover:before {
      transform: scaleX(1);
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.5s ease;
    }
  }
`;

export {
  Fineprint,
  H3Link,
  UlStyled,
  LiStyled,
  Striked,
  RedText,
  Title1,
  RegularText,
  BackText,
  LinedLink,
  H1Link,
  MainLogo,
};
