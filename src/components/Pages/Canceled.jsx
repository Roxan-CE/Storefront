import React from "react";
import {
  CenterDiv,
  ContainerDiv,
  InnerDiv,
} from "../styleComponents/divStyles";

function Canceled() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv margin="20px">
          Checkout was successfully cancelled.
        </CenterDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Canceled;
