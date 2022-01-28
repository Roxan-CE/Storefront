import React from "react";
import {
  CenterDiv,
  ContainerDiv,
  InnerDiv,
} from "../styleComponents/divStyles";

function Success() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv margin="20px">Checkout was successful.</CenterDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Success;
