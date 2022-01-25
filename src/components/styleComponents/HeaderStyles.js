import styled from "styled-components";

const Logo = styled.h1`
  letter-spacing: 2.5px;
  padding: 5px 20px;
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

export { Logo, NavDiv };
