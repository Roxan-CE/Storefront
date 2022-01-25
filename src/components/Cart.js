import React from "react";
import { useCart } from "react-use-cart";

import CartItem from "./CartItem";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";

function Cart() {
  const { isEmpty, totalUniqueItems, totalItems, items, cartTotal, emptyCart } =
    useCart();

  console.log(items);
  return (
    <ContainerDiv>
      <InnerDiv>
        <div>
          Unique Items: {totalUniqueItems} Total Items: {totalItems}
          <button onClick={emptyCart}>Empty Cart</button>
          <button onClick={emptyCart}>Pay Now</button>
        </div>
        <div>Total Price: {cartTotal}</div>
        {isEmpty ? (
          <div>Your cart is currently empty.</div>
        ) : (
          <div>
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
          </div>
        )}
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Cart;
