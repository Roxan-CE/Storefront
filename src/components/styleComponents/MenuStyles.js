import styled from "styled-components";
import { device } from "./device";

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

  @media ${device.tablet} {
    display: flex;
    position: relative;
    top: 0;
    right: 0;
    padding-top: 6px;
    width: 220px;
    vertical-align: baseline;

    ul {
      padding: 0 10px;
      flex-direction: row;

      li {
        padding: 8px 10px;
      }
      .shop-li {
        padding-bottom: 10px;
        padding-top: 5.5px;
      }

      li .shopButton {
        margin: 0 3px 0 0px;
        padding-bottom: 10px;
        font-weight: 200;
        background-color: transparent;
      }
      .shopButton:hover + div {
        display: flex;
      }
    }
    .room-menu {
      display: none;
      position: absolute;
      top: 40px;
      right: -20px;

      ul {
        flex-direction: column;
        background-color: white;
        padding: 10px 20px 15px;
        width: 200px;
      }

      li {
        padding: 10px 0;
      }
    }

    .room-menu:hover {
      display: flex;
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

  @media ${device.tablet} {
    svg {
      display: none;
    }
  }
`;
export { MenuDiv, Menu, HoverDiv };
