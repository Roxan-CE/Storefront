import React from "react";
import { Link } from "react-router-dom";
import { WideButton } from "../styleComponents/ButtonStyles";
import { ContainerDiv } from "../styleComponents/divStyles";
import { CenterDiv20, CenterDiv40 } from "../styleComponents/FlexDivs";
import { Title1 } from "../styleComponents/TextStyles";

function EmptyCart() {
  return (
    <ContainerDiv>
      <CenterDiv40>
        <Title1>Your cart is empty.</Title1>
      </CenterDiv40>

      <CenterDiv20>
        <Link to="/all-products">
          <WideButton>
            <h3>Add some items</h3>
          </WideButton>
        </Link>
      </CenterDiv20>
    </ContainerDiv>
  );
}

export default EmptyCart;
