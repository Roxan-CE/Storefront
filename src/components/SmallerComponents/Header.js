import React from "react";
import { ContainerDiv } from "../styleComponents/divStyles";
import { Logo, NavDiv } from "../styleComponents/HeaderStyles";
import { LiStyled, MainLogo, UlStyled } from "../styleComponents/TextStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { HoverDiv, Menu, MenuDiv } from "../styleComponents/MenuStyles";
import CartIcon from "./CartIcon";
import { Toaster } from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const rooms = [
    { name: "Livingroom", url: "livingroom" },
    { name: "Diningroom", url: "diningroom" },
    { name: "Kitchen", url: "kitchen" },
    { name: "Bedroom", url: "bedroom" },
    { name: "Bathroom", url: "bathroom" },
    { name: "Decor", url: "decor" },
  ];

  function handleClick() {
    navigate("/all-products");
  }

  function mainpage() {
    navigate("/");
  }
  return (
    <ContainerDiv>
      <NavDiv>
        <Logo>
          <MainLogo onClick={mainpage}>Cozy Living</MainLogo>
        </Logo>
        <MenuDiv>
          <HoverDiv>
            <MenuIcon />
            <Menu>
              <UlStyled>
                <LiStyled className="shop-li">
                  <em
                    className="shopButton"
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                  >
                    Shop
                  </em>
                  <div className="room-menu">
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
                  <Link to="/about">About</Link>
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
          <CartIcon></CartIcon>
        </MenuDiv>
      </NavDiv>
      <Toaster />
    </ContainerDiv>
  );
}

export default Header;
