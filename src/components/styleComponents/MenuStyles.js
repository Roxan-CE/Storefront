import styled from "styled-components";

const Menu = styled.nav`
  display: none;
  top: 60px;
  right: 0;
  position: absolute;
  width: 100vw;
  background-color: white;

  ul {
    padding: 0 20px;
    flex-direction: column;
    li {
      padding: 10px;
    }
  }
`;

const MenuDiv = styled.div`
  padding: 10px;
  display: flex;
  background-color: white;
  justify-content: flex-end;
`;

const HoverDiv = styled.div`
  svg {
    padding: 10px 6px;
    cursor: pointer;
  }

  &:hover nav {
    display: flex;
  }
`;
export { MenuDiv, Menu, HoverDiv };
