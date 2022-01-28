import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate, Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
} from "./styleComponents/divStyles";
import { Fineprint, H3Link } from "./styleComponents/TextStyles";
import { WideButton } from "./styleComponents/ButtonStyles";
import {
  CenterDiv20,
  CenterDiv40,
  FlexDiv,
  FlexSpaced20,
} from "./styleComponents/FlexDivs";
import { BreakDiv1020 } from "./styleComponents/BreakDivs";

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
            <CenterDiv40>
              <h4>Your cart is empty.</h4>
            </CenterDiv40>

            <CenterDiv20>
              <Link to="/all-products">
                <WideButton>
                  <h3>Add some items</h3>
                </WideButton>
              </Link>
            </CenterDiv20>
          </ContainerDiv>
        ) : (
          <CategoriesContainer>
            <FlexSpaced20>
              <h3>Total Items: {totalItems} </h3>

              <H3Link onClick={emptyCart}>Empty Cart</H3Link>
            </FlexSpaced20>

            <BreakDiv1020></BreakDiv1020>

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

            <FlexSpaced20>
              <h4>Total* </h4>
              <h4>{formatter.format(cartTotal)}</h4>
            </FlexSpaced20>

            <BreakDiv1020></BreakDiv1020>

            <FlexDiv margin="5px 20px">
              <Fineprint>
                *Final taxes and shipping are calculated at checkout.
                <br />
                Discounts can not be applied to sale items. Sale items are final
                sale.
              </Fineprint>
            </FlexDiv>

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
