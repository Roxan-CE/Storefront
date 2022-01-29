import React from "react";
import { ContainerDiv } from "./styleComponents/divStyles";
import { Logo, NavDiv } from "./styleComponents/HeaderStyles";
import { LiStyled, UlStyled } from "./styleComponents/TextStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { HoverDiv, Menu, MenuDiv } from "./styleComponents/MenuStyles";
import CartIcon from "./CartIcon";

function Header() {
  const rooms = [
    { name: "Livingroom", url: "/livingroom" },
    { name: "Diningroom", url: "/diningroom" },
    { name: "Kitchen", url: "/kitchen" },
    { name: "Bedroom", url: "/bedroom" },
    { name: "Bathroom", url: "/bathroom" },
    { name: "Decor", url: "/decor" },
  ];

  return (
    <ContainerDiv>
      <NavDiv>
        <Logo>
          <Link to="/">Cozy Living</Link>
        </Logo>
        <MenuDiv>
          <CartIcon></CartIcon>
          <HoverDiv>
            <MenuIcon />
            <Menu>
              <UlStyled>
                <LiStyled>
                  <em>
                    <Link to="/all-products">Shop</Link>
                  </em>
                  <div>
                    <UlStyled>
                      {rooms.map((room, index) => {
                        return (
                          <Link key={index} to="{room.url}">
                            <LiStyled>{room.name}</LiStyled>
                          </Link>
                        );
                      })}
                    </UlStyled>
                  </div>
                </LiStyled>
                <LiStyled>
                  <Link to="/about">About</Link>
                </LiStyled>
                <LiStyled>
                  <input></input>
                </LiStyled>
              </UlStyled>
            </Menu>
          </HoverDiv>
        </MenuDiv>
      </NavDiv>
    </ContainerDiv>
  );
}

export default Header;
