import styled from "styled-components";
import { device } from "./device";

const Menu = styled.nav`
  display: none;
  top: 45px;
  right: 0;
  position: absolute;
  width: 100vw;
  background-color: white;
  padding-top: 20px;

  ul {
    padding: 0 20px;
    flex-direction: column;
    li {
      padding: 10px;
      div {
        :hover {
          a:hover {
            letter-spacing: 1.5px;
            font-style: italic;

            &:before {
              display: none;
            }
            &:hover:before {
              display: none;
            }

            &:before,
            &:after {
              display: none;
            }
          }
        }
      }
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
        height: 20px;
      }
      .shop-li {
        padding-bottom: 10px;
        padding-top: 5.5px;
      }

      li .shopButton {
        margin: 0 3px 0 0px;
        padding-bottom: 10px;
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
      }
      .shopButton:hover + div {
        display: flex;
      }
    }
    .room-menu {
      display: none;
      position: absolute;
      top: 40px;
      right: 0px;

      ul {
        flex-direction: column;
        background-color: white;
        padding: 10px 20px 15px 0;
        width: 200px;
      }

      li {
        padding: 10px 0 10px 20px;

        :hover {
          background-color: #efefef;
          border-radius: 4px;
        }
      }

      a,
      a > span {
        position: relative;
        color: inherit;
        text-decoration: none;

        :hover {
          font-weight: 700;
          letter-spacing: 2px;
          font-style: italic;
          transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
        }

        &:before {
          left: 0;
          bottom: -4spx;
          width: 100%;
          height: 1px;
          background: #000;
          transform: scaleX(0);
        }
        &:hover:before {
          transform: scaleX(0);
        }

        &:before,
        &:after {
          content: "";
          position: relative;
          transition: transform 0.5s ease;
        }
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
