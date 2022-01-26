import React from "react";
import {
  CenterDiv,
  ContainerDiv,
  InnerDiv,
  FooterDiv,
} from "./styleComponents/divStyles";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv margin="20px">
          <h4>Roxan © {year}</h4>
        </CenterDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Footer;
