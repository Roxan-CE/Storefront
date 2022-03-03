import styled from "styled-components";
import { device } from "./device";

const CartImg = styled.img`
  width: 136px;

  :hover {
    cursor: pointer;
    filter: saturate(30%);
  }

  @media ${device.mobileL} {
    width: 160px;
  }

  @media ${device.tablet} {
    width: 230px;
  }
`;

const QuantityInput = styled.input`
  width: 20px;
  height: 20px;
  align-self: center;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 0.7rem;
  border: solid 1px;
  color: inherit;

  @media ${device.tablet} {
  }
`;

const CartDetails = styled.div`
  width: 80%;
  padding: 0 0 0 5px;
  ul {
    li {
      padding-top: 10px;
      padding-bottom: 0;
      margin: 0;
    }
  }

  @media ${device.tablet} {
    padding-top: 0px;
    padding-left: 10px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2vw;
  width: 100%;

  @media ${device.tablet} {
  }
`;

const CartLeft = styled.div`
  margin: 2vw 0;
  position: relative;
  width: 95%;

  @media ${device.laptop} {
    width: 50%;
  }
`;

const CartRight = styled(CartLeft)`
  width: 90%;

  @media ${device.tablet} {
    width: 94%;
  }

  @media ${device.laptop} {
    width: 44%;
  }
`;

const CartDiv = styled.div`
  width: 94%;
  height: 150px;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-family: "Lato", sans-serif;

  @media ${device.mobileL} {
    height: 175px;
    width: 96%;
  }

  @media ${device.tablet} {
    height: 240px;
    width: 100%;
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

export {
  CartDiv,
  CartImg,
  CartDetails,
  CartLeft,
  CartRight,
  QuantityInput,
  TopDiv,
};
