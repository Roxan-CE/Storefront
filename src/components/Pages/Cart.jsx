import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import CartItem from "../SmallerComponents/CartItem";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
} from "../styleComponents/divStyles";
import { Fineprint, H3Link, Title1 } from "../styleComponents/TextStyles";
import { WideButton } from "../styleComponents/ButtonStyles";
import { CenterDiv20, FlexSpaced20 } from "../styleComponents/FlexDivs";
import { BreakDiv1020 } from "../styleComponents/BreakDivs";
import EmptyCart from "../SmallerComponents/EmptyCart";

function Cart() {
  const { isEmpty, items, cartTotal, emptyCart, totalItems } = useCart();
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  });

  // formatter.format(1000); // "$1,000.00"

  function handleClick() {
    navigate("/all-products");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <ContainerDiv>
      <InnerDiv>
        {isEmpty ? (
          <EmptyCart></EmptyCart>
        ) : (
          <CategoriesContainer>
            <FlexSpaced20>
              <h3>Total Items: {totalItems} </h3>

              <H3Link onClick={emptyCart}>Empty Cart</H3Link>
            </FlexSpaced20>

            <BreakDiv1020></BreakDiv1020>

            <CenterDiv20>
              {items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    description={item.details}
                    quantity={item.quantity}
                  ></CartItem>
                );
              })}
            </CenterDiv20>

            <FlexSpaced20>
              <Title1>Total* </Title1>
              <Title1>{formatter.format(cartTotal)}</Title1>
            </FlexSpaced20>

            <BreakDiv1020></BreakDiv1020>

            <FlexSpaced20>
              <Fineprint>
                *Final taxes and shipping are calculated at checkout.
                <br />
                Discounts can not be applied to sale items. Sale items are final
                sale.
              </Fineprint>
            </FlexSpaced20>

            <FlexSpaced20>
              <WideButton
                onClick={() => {
                  navigate("/preview");
                }}
              >
                <h3>Checkout</h3>
              </WideButton>
              <WideButton onClick={handleClick}>
                <h3>Continue Shopping</h3>
              </WideButton>
            </FlexSpaced20>
          </CategoriesContainer>
        )}
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Cart;
