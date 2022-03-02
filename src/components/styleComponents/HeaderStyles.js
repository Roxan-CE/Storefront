import styled from "styled-components";
import { device } from "./device.js";

const Logo = styled.h1`
  letter-spacing: 2.5px;
  padding: 6px 20px;
  font-size: 1.3rem;
  width: 100%;

  a:hover {
    font-weight: inherit;
  }
`;

const NavDiv = styled.div`
  width: 100vw;
  height: 65px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 2;
`;

const CartCount = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  right: 20.5px;
  top: 28px;
  font-size: 0.7rem;
  font-family: "Lato", sans-serif;
  width: 15px;
  font-weight: 300;
  z-index: 2;
  cursor: pointer;
`;

export { Logo, NavDiv, CartCount };
