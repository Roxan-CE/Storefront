import React from "react";
import { useCart } from "react-use-cart";
import { CartDiv, CartImg, CartDetails } from "./styleComponents/CartStyles";
import { ArrowImg, ButtonImg } from "./styleComponents/Imagestyles";
import { FlexDiv, BreakDiv } from "./styleComponents/divStyles";
import { useNavigate } from "react-router-dom";
import formatter from "./formatter";

function CartItem(props) {
  const { updateItemQuantity, removeItem } = useCart();

  const navigate = useNavigate();

  function handleClick() {
    navigate(props.name);
  }

  return (
    <CartDiv>
      <CartImg src={props.image} />
      <CartDetails>
        <ul>
          <FlexDiv>
            <h1 onClick={handleClick}>{props.name}</h1>
            <ButtonImg
              src="/assets/close.svg"
              onClick={() => removeItem(props.id)}
            />
          </FlexDiv>
          <BreakDiv></BreakDiv>

          <li>Unit Price: {formatter.format(props.price)}</li>
          <li>
            Quantity:
            <ArrowImg
              src="/assets/left.svg"
              onClick={() => updateItemQuantity(props.id, props.quantity - 1)}
            />
            <span>{props.quantity}</span>
            <ArrowImg
              src="/assets/right.svg"
              onClick={() => updateItemQuantity(props.id, props.quantity + 1)}
            />
          </li>
          <li>Total price: {formatter.format(props.quantity * props.price)}</li>
        </ul>
      </CartDetails>
    </CartDiv>
  );
}

export default CartItem;
