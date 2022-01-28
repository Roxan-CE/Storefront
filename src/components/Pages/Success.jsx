import React from "react";
import { ContainerDiv, InnerDiv } from "../styleComponents/divStyles";
import { CenterDiv20 } from "../styleComponents/FlexDivs";

function Success() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>Checkout was successful.</CenterDiv20>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Success;
