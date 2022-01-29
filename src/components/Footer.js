import React from "react";
import { ContainerDiv, InnerDiv } from "./styleComponents/divStyles";
import { CenterDiv20 } from "./styleComponents/FlexDivs";
import { Title1 } from "./styleComponents/TextStyles";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>
          <Title1>Roxan © {year}</Title1>
        </CenterDiv20>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Footer;
