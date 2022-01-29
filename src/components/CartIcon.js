import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { RightFlex } from "./styleComponents/FlexDivs";
import { CartCount } from "./styleComponents/HeaderStyles";
import { CartImage } from "./styleComponents/Imagestyles";

function CartIcon() {
  let navigate = useNavigate();
  const { totalItems } = useCart();

  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <RightFlex>
      <CartImage
        src="/assets/shoppingbag.svg"
        onClick={() => handleClick("cart")}
      />
      {totalItems ? (
        <CartCount onClick={() => handleClick("cart")}>{totalItems}</CartCount>
      ) : null}
    </RightFlex>
  );
}

export default CartIcon;
