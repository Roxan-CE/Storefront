import styled from "styled-components";

const Logo = styled.h1`
  letter-spacing: 2.5px;
  padding: 6px 20px;
  font-size: 1.3rem;
`;

const NavDiv = styled.div`
  width: 100vw;
  height: 60px;
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
  right: 56px;
  top: 26px;
  font-size: 0.7rem;
  font-family: "Lato", sans-serif;
  width: 15px;
  font-weight: 300;
  cursor: pointer;
`;

export { Logo, NavDiv, CartCount };
