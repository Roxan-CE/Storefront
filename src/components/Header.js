import React from "react";
import {
  ContainerDiv,
  NavDiv,
  MenuDiv,
  Menu,
  PaddedDiv,
} from "./styleComponents/divStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { H1styled } from "./styleComponents/HeaderStyles";
import { LiStyled, UlStyled } from "./styleComponents/UlStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <ContainerDiv>
      <NavDiv>
        <H1styled>Cozy Living</H1styled>
        <MenuDiv>
          <ShoppingCartIcon />
          <MenuIcon></MenuIcon>
          <Menu>
            <UlStyled>
              <LiStyled>
                <Link to="/shop">Shop</Link>
              </LiStyled>
              <LiStyled>Wishlist</LiStyled>
              <LiStyled>About</LiStyled>
              <LiStyled>Login</LiStyled>
            </UlStyled>
          </Menu>
        </MenuDiv>
      </NavDiv>
    </ContainerDiv>
  );
}

export default Header;
