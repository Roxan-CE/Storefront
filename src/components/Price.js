import React from "react";
import { RedText, Striked } from "./styleComponents/TextStyles";
import formatter from "./formatter";
import sale from "./Sale";

function Price(props) {
  return (
    <div>
      {props.sale ? (
        <h4>
          <Striked>{formatter.format(props.price)}</Striked>
          <RedText>{formatter.format(props.price * sale)}</RedText>
        </h4>
      ) : (
        <h4>{formatter.format(props.price)}</h4>
      )}
    </div>
  );
}

export default Price;
