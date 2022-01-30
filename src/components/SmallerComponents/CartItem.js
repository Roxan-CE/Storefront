import React from "react";
import { useCart } from "react-use-cart";
import { CartDiv, CartImg, CartDetails } from "../styleComponents/CartStyles";
import { ArrowImg, ButtonImg } from "../styleComponents/Imagestyles";
import { useNavigate } from "react-router-dom";
import formatter from "../SmallerComponents/formatter";
import { FlexDiv } from "../styleComponents/FlexDivs";
import { BreakDiv } from "../styleComponents/BreakDivs";
import close from "../../assets/Icons/close.svg";
import left from "../../assets/Icons/left.svg";
import right from "../../assets/Icons/right.svg";

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
            <ButtonImg src={close} onClick={() => removeItem(props.id)} />
          </FlexDiv>
          <BreakDiv></BreakDiv>

          <li>Unit Price: {formatter.format(props.price)}</li>
          <li>
            Quantity:
            <ArrowImg
              src={left}
              onClick={() => updateItemQuantity(props.id, props.quantity - 1)}
            />
            <span>{props.quantity}</span>
            <ArrowImg
              src={right}
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
