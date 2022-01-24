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

  svg {
    padding: 6px 6px;
  }

  &:hover nav {
    display: flex;
  }
`;
export { MenuDiv, Menu };
