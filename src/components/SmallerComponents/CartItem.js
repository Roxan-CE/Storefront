import React, { useState } from "react";
import { useCart } from "react-use-cart";
import {
  CartDiv,
  CartImg,
  CartDetails,
  QuantityInput,
} from "../styleComponents/CartStyles";
import { ArrowImg, ButtonImg } from "../styleComponents/Imagestyles";
import { useNavigate } from "react-router-dom";
import formatter from "../SmallerComponents/formatter";
import { FlexDiv, LeftFlex } from "../styleComponents/FlexDivs";
import { BreakDiv } from "../styleComponents/BreakDivs";
import close from "../../assets/Icons/close.svg";
import left from "../../assets/Icons/left.svg";
import right from "../../assets/Icons/right.svg";
import { H3Link } from "../styleComponents/TextStyles";

function CartItem(props) {
  const { updateItemQuantity, removeItem } = useCart();
  let [show, setShow] = useState(false);
  let [value, setValue] = useState(props.quantity);

  const navigate = useNavigate();

  function handleClick() {
    navigate(props.name);
  }

  function handleChange(e) {
    const newQuantity = Number(e.target.value);
    setShow(true);
    setValue(newQuantity);
  }

  return (
    <CartDiv>
      <CartImg onClick={handleClick} src={props.image} />
      <CartDetails>
        <ul>
          <FlexDiv>
            <h1 onClick={handleClick}>{props.name}</h1>
            <ButtonImg src={close} onClick={() => removeItem(props.id)} />
          </FlexDiv>
          <BreakDiv></BreakDiv>

          <li>Unit Price: {formatter.format(props.price)}</li>
          <li>
            <LeftFlex>
              <p style={{ alignSelf: "center" }}>Quantity:</p>
              <ArrowImg
                src={left}
                onClick={() => {
                  setValue(value - 1);
                  setShow(true);
                }}
              />
              <QuantityInput
                placeholder={props.quantity}
                onChange={handleChange}
                value={value}
              ></QuantityInput>
              <ArrowImg
                src={right}
                onClick={() => {
                  setValue(value + 1);
                  setShow(true);
                }}
              />
              {show ? (
                <H3Link
                  style={{ alignSelf: "center", marginLeft: "20px" }}
                  onClick={() => {
                    updateItemQuantity(props.id, value);
                    setShow(false);
                  }}
                >
                  Update Quantity
                </H3Link>
              ) : null}
            </LeftFlex>
          </li>
          <li>Total price: {formatter.format(props.quantity * props.price)}</li>
        </ul>
      </CartDetails>
    </CartDiv>
  );
}

export default CartItem;
