import React from "react";
import products from "../products";
import {
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
  StyledDiv,
} from "./styleComponents/divStyles";
import { useParams } from "react-router-dom";
import { ProductImage } from "./styleComponents/Imagestyles";
import { WideButton } from "./styleComponents/ButtonStyles";
import { useCart } from "react-use-cart";
import CustomSeparator from "./Breadcrumb";
import Price from "./Price";
import { CenterDiv20, FlexSpacedT20 } from "./styleComponents/FlexDivs";
import Back from "./Back";
import { BreakDiv20 } from "./styleComponents/BreakDivs";

function Product() {
  const { product } = useParams();
  const { addItem } = useCart();

  const item = products.find((x) => x.name === product);

  return (
    <ContainerDiv>
      <InnerDiv>
        <PaddedDiv>
          <Back></Back>
          <BreakDiv20></BreakDiv20>

          <CustomSeparator></CustomSeparator>

          <StyledDiv>
            <h2>{item.name}</h2>
            <Price sale={item.sale} price={item.price}></Price>
          </StyledDiv>

          <ProductImage src={item.image} />
          <FlexSpacedT20>
            <p>{item.details}</p>

            <CenterDiv20>
              <WideButton onClick={() => addItem(item)}>
                <h3>Add to Cart</h3>
              </WideButton>
            </CenterDiv20>
          </FlexSpacedT20>
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Product;
