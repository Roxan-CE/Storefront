import React from "react";
import products from "../../products";
import {
  ContainerDiv,
  DetailDiv,
  InnerDiv,
  PaddedDiv,
  StyledDiv,
} from "../styleComponents/divStyles";
import { useParams } from "react-router-dom";
import { ProductImage } from "../styleComponents/Imagestyles";
import { WideButton } from "../styleComponents/ButtonStyles";
import { useCart } from "react-use-cart";
import { ProductCrumb } from "../SmallerComponents/Breadcrumb";
import Price from "../SmallerComponents/Price";
import {
  CenterDiv20,
  FlexDiv,
  FlexSpacedT20,
  LeftFlex20,
  RegularFlex,
} from "../styleComponents/FlexDivs";
import Back from "../SmallerComponents/Back";
import { BreakDiv, BreakDiv20 } from "../styleComponents/BreakDivs";

function Product() {
  const { product } = useParams();
  const { addItem } = useCart();

  const item = products.find((x) => x.name === product);

  return (
    <InnerDiv>
      <PaddedDiv>
        <Back></Back>

        <ProductCrumb></ProductCrumb>

        <LeftFlex20>
          <ProductImage src={item.image} />

          <DetailDiv>
            <FlexSpacedT20>
              <div>
                <h2>{item.name}</h2>
              </div>

              <Price sale={item.sale} price={item.price}></Price>
            </FlexSpacedT20>

            <BreakDiv></BreakDiv>

            <FlexSpacedT20>
              <p>{item.details}</p>

              <CenterDiv20>
                <WideButton onClick={() => addItem(item)}>
                  <h3>Add to Cart</h3>
                </WideButton>
              </CenterDiv20>
            </FlexSpacedT20>
          </DetailDiv>
        </LeftFlex20>
      </PaddedDiv>
    </InnerDiv>
  );
}

export default Product;
