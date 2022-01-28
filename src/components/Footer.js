import React from "react";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";
import { CenterDiv20 } from "./styleComponents/FlexDivs";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>
          <h4>Roxan © {year}</h4>
        </CenterDiv20>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Footer;
