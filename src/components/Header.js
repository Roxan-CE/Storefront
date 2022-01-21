import React from "react";
import { ContainerDiv } from "./styleComponents/divStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <ContainerDiv>
      <h1>Store Name</h1>
      <nav>Menu</nav>
      <ShoppingCartIcon />
    </ContainerDiv>
  );
}

export default Header;
