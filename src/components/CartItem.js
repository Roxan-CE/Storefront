import React from "react";
import { useCart } from "react-use-cart";
import { CartDiv } from "./styleComponents/CartStyles";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";

function CartItem(props) {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <ContainerDiv>
      <InnerDiv>
        <CartDiv>
          <img src={props.image} />
          <div>
            <ul>
              <li>{props.name}</li>
              <li>{props.price}</li>
              <li>Quantity: {props.quantity}</li>
              <li>Total price: {props.quantity * props.price}</li>
            </ul>
          </div>

          <button
            onClick={() => updateItemQuantity(props.id, props.quantity - 1)}
          >
            -
          </button>
          <button
            onClick={() => updateItemQuantity(props.id, props.quantity + 1)}
          >
            +
          </button>
          <button onClick={() => removeItem(props.id)}>Remove</button>
        </CartDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default CartItem;
