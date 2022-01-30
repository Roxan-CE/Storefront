import React from "react";
import { BreakDiv, ContainerDiv, InnerDiv } from "../styleComponents/divStyles";
import { useCart } from "react-use-cart";
import { CartImg } from "../styleComponents/CartStyles";
import { WideButton } from "../styleComponents/ButtonStyles";
import { useNavigate } from "react-router-dom";
import {
  CenterDiv20,
  FlexDiv,
  FlexSpaced20,
} from "../styleComponents/FlexDivs";
import { BreakDiv1020 } from "../styleComponents/BreakDivs";
import { Title1 } from "../styleComponents/TextStyles";

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
        <CenterDiv20>
          <BreakDiv1020></BreakDiv1020>

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

          <FlexSpaced20>
            <Title1>Total </Title1>
            <Title1>{formatter.format(cartTotal)}</Title1>
          </FlexSpaced20>

          <WideButton
            onClick={() => {
              navigate("/checkout");
            }}
          >
            <h3>Pay Now</h3>
          </WideButton>
        </CenterDiv20>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default PreviewCart;
