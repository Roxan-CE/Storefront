import React from "react";
import { ContainerDiv } from "./styleComponents/divStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartCount, Logo, NavDiv } from "./styleComponents/HeaderStyles";
import { LiStyled, UlStyled } from "./styleComponents/TextStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { HoverDiv, Menu, MenuDiv } from "./styleComponents/MenuStyles";
import { CartImage } from "./styleComponents/Imagestyles";
import { useCart, totalItems } from "react-use-cart";

function Header() {
  let navigate = useNavigate();
  const { totalItems } = useCart();

  const handleClick = (link) => {
    if (link === "wishlist") {
      navigate("/wishlist");
    } else if (link === "cart") {
      navigate("/cart");
    }
  };

  return (
    <ContainerDiv>
      <NavDiv>
        <Logo>
          <Link to="/">Cozy Living</Link>
        </Logo>
        <MenuDiv>
          <CartImage
            src="/assets/shoppingbag.svg"
            onClick={() => handleClick("cart")}
          />

          {totalItems ? (
            <CartCount onClick={() => handleClick("cart")}>
              {totalItems}
            </CartCount>
          ) : null}

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
                      <Link to="/livingroom">
                        <LiStyled>Living Room</LiStyled>
                      </Link>
                      <Link to="/diningroom">
                        <LiStyled>Dining Room</LiStyled>
                      </Link>
                      <Link to="/kitchen">
                        <LiStyled>Kitchen</LiStyled>
                      </Link>
                      <Link to="/bedroom">
                        <LiStyled>Bedroom</LiStyled>
                      </Link>
                      <Link to="/bathroom">
                        <LiStyled>Bathroom</LiStyled>
                      </Link>
                      <Link to="/decor">
                        <LiStyled>Decor</LiStyled>
                      </Link>
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
          </HoverDiv>
        </MenuDiv>
      </NavDiv>
    </ContainerDiv>
  );
}

export default Header;
