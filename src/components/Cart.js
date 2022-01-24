import React from "react";
import products from "../products";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";

function Cart() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <h1>This is your cart.</h1>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Cart;
