import React from "react";
import {
  BreakDiv,
  CenterDiv,
  ContainerDiv,
  FlexDiv,
  InnerDiv,
} from "./styleComponents/divStyles";
import { useCart } from "react-use-cart";
import CartItem from "./CartItem";
import { CartImg } from "./styleComponents/CartStyles";
import { WideButton } from "./styleComponents/ButtonStyles";
import { useNavigate } from "react-router-dom";

function PreviewCart() {
  const { isEmpty, items, cartTotal, emptyCart, totalItems } = useCart();
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  });

  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv margin="20px">
          <BreakDiv margin="10px 20px"></BreakDiv>

          {items.map((item, index) => {
            return (
              <div key={item.id} id={item.id}>
                <CartImg src={item.image} />
                <br />
                Name: {item.name}
                <br />
                Price: {item.price}
                <br />
                Quantity: {item.quantity}
              </div>
            );
          })}

          <FlexDiv margin="15px 20px 5px">
            <h4>Total </h4>
            <h4>{formatter.format(cartTotal)}</h4>
          </FlexDiv>

          <WideButton
            onClick={() => {
              navigate("/checkout");
            }}
          >
            <h3>Pay Now</h3>
          </WideButton>
        </CenterDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default PreviewCart;
