import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./HeaderStyles";

const Fineprint = styled.p`
  font-size: 0.75rem;
`;

const H3Link = styled.h3`
  cursor: pointer;
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
  padding: 0;
`;

const Striked = styled(Title1)`
  text-decoration: line-through;
`;
const RedText = styled(Title1)`
  color: red;
`;

const RegularText = styled.p`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  font-size: 16px;
  padding: 10px 8px;
  letter-spacing: 1px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

const LiStyled = styled.li``;

export {
  Fineprint,
  H3Link,
  UlStyled,
  LiStyled,
  Striked,
  RedText,
  Title1,
  RegularText,
};
