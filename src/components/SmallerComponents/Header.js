import React from "react";
import { ContainerDiv } from "../styleComponents/divStyles";
import { Logo, NavDiv } from "../styleComponents/HeaderStyles";
import { LiStyled, UlStyled } from "../styleComponents/TextStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { HoverDiv, Menu, MenuDiv } from "../styleComponents/MenuStyles";
import CartIcon from "./CartIcon";

function Header() {
  const rooms = [
    { name: "Livingroom", url: "livingroom" },
    { name: "Diningroom", url: "diningroom" },
    { name: "Kitchen", url: "kitchen" },
    { name: "Bedroom", url: "bedroom" },
    { name: "Bathroom", url: "bathroom" },
    { name: "Decor", url: "decor" },
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
                      {rooms.map((room) => {
                        return (
                          <Link to={"/" + room.url} key={room.name + 1}>
                            <LiStyled>{room.name}</LiStyled>
                          </Link>
                        );
                      })}
                    </UlStyled>
                  </div>
                </LiStyled>
                <LiStyled>
                  <Link to="/about">About Us</Link>
                </LiStyled>
                <LiStyled>
                  <Link to="/contact">Contact</Link>
                </LiStyled>
                <LiStyled>
                  <br />
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
