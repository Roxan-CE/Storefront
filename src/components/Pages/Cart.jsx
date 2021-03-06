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
import { FlexSpaced20, LeftFlex } from "../styleComponents/FlexDivs";
import { BreakDiv1020, BreakDiv20 } from "../styleComponents/BreakDivs";
import EmptyCart from "../SmallerComponents/EmptyCart";
import { CartLeft, CartRight, TopDiv } from "../styleComponents/CartStyles";

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
            <LeftFlex>
              <CartLeft>
                <TopDiv>
                  <h3>Total Items: {totalItems} </h3>

                  <H3Link onClick={emptyCart}>Empty Cart</H3Link>
                </TopDiv>

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
              </CartLeft>

              <CartRight>
                <FlexSpaced20>
                  <Title1>Total* </Title1>
                  <Title1>{formatter.format(cartTotal)}</Title1>

                  <BreakDiv20></BreakDiv20>

                  <Fineprint>
                    *Final taxes and shipping are calculated at checkout.
                    <br />
                    Discounts can not be applied to sale items. Sale items are
                    final sale.
                  </Fineprint>

                  <br />
                  <br />
                  <br />
                  <WideButton onClick={() => {}}>
                    <h3>Checkout</h3>
                  </WideButton>
                  <WideButton onClick={handleClick}>
                    <h3>Continue Shopping</h3>
                  </WideButton>
                </FlexSpaced20>
              </CartRight>
            </LeftFlex>
          </CategoriesContainer>
        )}
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Cart;
