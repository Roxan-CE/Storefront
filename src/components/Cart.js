import React, { useState } from "react";
import products from "../products";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";

function Cart() {
  return (
    <ContainerDiv>
      <InnerDiv>
        {cart.length === 0 ? (
          <div>Your cart is currently empty.</div>
        ) : (
          <div>{cart}</div>
        )}
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Cart;
