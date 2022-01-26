import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate, Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  BreakDiv,
  CategoriesContainer,
  CenterDiv,
  ContainerDiv,
  FlexDiv,
  InnerDiv,
  RightAligned,
} from "./styleComponents/divStyles";
import { Fineprint, H3Link } from "./styleComponents/TextStyles";
import { WideButton } from "./styleComponents/ButtonStyles";

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
          <ContainerDiv>
            <CenterDiv margin="100px 0 10px">
              <h4>Your cart is empty.</h4>
            </CenterDiv>

            <CenterDiv margin="10px 0 50px">
              <Link to="/all-products">
                <WideButton>
                  <h3>Add some items</h3>
                </WideButton>
              </Link>
            </CenterDiv>
          </ContainerDiv>
        ) : (
          <CategoriesContainer>
            <FlexDiv margin="20px 20px 0">
              <h3>Total Items: {totalItems} </h3>

              <H3Link onClick={emptyCart}>Empty Cart</H3Link>
            </FlexDiv>

            <BreakDiv margin="10px 20px"></BreakDiv>

            {items.map((item, index) => {
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

            <FlexDiv margin="15px 20px 5px">
              <h4>Total* </h4>
              <h4>{formatter.format(cartTotal)}</h4>
            </FlexDiv>

            <BreakDiv></BreakDiv>

            <FlexDiv margin="5px 20px">
              <Fineprint>
                *Final taxes and shipping are calculated at checkout.
                <br />
                Discounts can not be applied to sale items. Sale items are final
                sale.
              </Fineprint>
            </FlexDiv>

            <FlexDiv margin="10px 20px">
              <WideButton onClick={emptyCart}>
                <h3>Checkout</h3>
              </WideButton>
              <WideButton onClick={handleClick}>
                <h3>Continue Shopping</h3>
              </WideButton>
            </FlexDiv>
          </CategoriesContainer>
        )}
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Cart;
