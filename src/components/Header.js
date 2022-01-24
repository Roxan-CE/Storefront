import React from "react";
import { ContainerDiv } from "./styleComponents/divStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Logo, NavDiv } from "./styleComponents/HeaderStyles";
import { LiStyled, UlStyled } from "./styleComponents/UlStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Menu, MenuDiv } from "./styleComponents/MenuStyles";

function Header() {
  return (
    <ContainerDiv>
      <NavDiv>
        <Logo>
          <Link to="/">Cozy Living</Link>
        </Logo>
        <MenuDiv>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <MenuIcon />
          <Menu>
            <UlStyled>
              <LiStyled>
                <em>
                  <Link to="/shop">Shop</Link>
                </em>
                <div>
                  <UlStyled>
                    <LiStyled>Living Room</LiStyled>
                    <LiStyled>Dining Room</LiStyled>
                    <LiStyled>Kitchen</LiStyled>
                    <LiStyled>Bedroom</LiStyled>
                    <LiStyled>Bathroom</LiStyled>
                    <LiStyled>Decor</LiStyled>
                  </UlStyled>
                </div>
              </LiStyled>
              <LiStyled>
                <Link to="/about">About</Link>
              </LiStyled>
              <LiStyled>
                <Link to="/wishlist">Wishlist</Link>
              </LiStyled>

              <LiStyled>Login</LiStyled>
              <LiStyled>
                <input></input>
              </LiStyled>
            </UlStyled>
          </Menu>
        </MenuDiv>
      </NavDiv>
    </ContainerDiv>
  );
}

export default Header;
