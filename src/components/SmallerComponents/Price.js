import React from "react";
import { RedText, Striked, Title1 } from "../styleComponents/TextStyles";
import formatter from "../SmallerComponents/formatter";
import sale from "./Sale";
import { RegularFlex } from "../styleComponents/FlexDivs";

function Price(props) {
  return (
    <RegularFlex>
      {props.sale ? (
        <div style={{ display: "flex" }}>
          <Striked>{formatter.format(props.price)}</Striked>
          <RedText>{formatter.format(props.price * sale)}</RedText>
        </div>
      ) : (
        <Title1 style={{ alignSelf: "center", paddingTop: "0" }}>
          {formatter.format(props.price)}
        </Title1>
      )}
    </RegularFlex>
  );
}

export default Price;
