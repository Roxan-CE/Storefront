import React from "react";
import { ContainerDiv, InnerDiv } from "../styleComponents/divStyles";
import { CenterDiv20 } from "../styleComponents/FlexDivs";

function Canceled() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>Checkout was successfully cancelled.</CenterDiv20>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Canceled;
