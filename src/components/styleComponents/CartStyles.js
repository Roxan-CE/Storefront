import styled from "styled-components";
import { device } from "./device";

const CartImg = styled.img`
  width: 136px;

  @media ${device.mobileL} {
    width: 160px;
  }

  @media ${device.tablet} {
    width: 230px;
    height: 200px;
  }
`;

const CartDetails = styled.div`
  width: 80%;
  padding: 15px 0;

  @media ${device.mobileL} {
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

const CartDiv = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-family: "Lato", sans-serif;

  @media ${device.mobileL} {
    height: 175px;
  }

  @media ${device.tablet} {
    height: 200px;
  }

  h1 {
    font-size: 0.9rem;
    letter-spacing: 2px;
    padding: 10px 0 5px;
    margin: 0;
    cursor: pointer;
  }

  ul {
    padding-left: 20px;
  }

  li {
    padding: 5px 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  button {
    width: 65px;
    height: 20px;
  }

  span {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export { CartDiv, CartImg, CartDetails };
