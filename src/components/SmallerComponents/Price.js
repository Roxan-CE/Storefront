import React from "react";
import { RedText, Striked, Title1 } from "../styleComponents/TextStyles";
import formatter from "../SmallerComponents/formatter";
import sale from "./Sale";

function Price(props) {
  return (
    <div>
      {props.sale ? (
        <div>
          <Striked>{formatter.format(props.price)}</Striked>
          <RedText>{formatter.format(props.price * sale)}</RedText>
        </div>
      ) : (
        <Title1>{formatter.format(props.price)}</Title1>
      )}
    </div>
  );
}

export default Price;
