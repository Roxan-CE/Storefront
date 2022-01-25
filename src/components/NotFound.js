import React from "react";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";

function NotFound() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <h1>404</h1>
        <span>Page not Found</span>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default NotFound;
