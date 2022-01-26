import React from "react";
import products from "../products";
import {
  BreakDiv,
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
  LeftFlex,
  CenterDiv,
  StyledDiv,
} from "./styleComponents/divStyles";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonImg, ProductImage } from "./styleComponents/Imagestyles";
import { WideButton } from "./styleComponents/ButtonStyles";
import { useCart } from "react-use-cart";
import formatter from "./formatter";

function Product() {
  const navigate = useNavigate();
  const { product } = useParams();
  const { addItem } = useCart();

  const item = products.find((x) => x.name === product);

  return (
    <ContainerDiv>
      <InnerDiv>
        <PaddedDiv>
          <LeftFlex margin="20px 0">
            <ButtonImg src="/assets/back.svg" />
            <h4
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </h4>
          </LeftFlex>
          <BreakDiv margin="10px 0 30px"></BreakDiv>

          <StyledDiv>
            <h2>{product}</h2>
            <h3>{formatter.format(item.price)}</h3>
          </StyledDiv>

          <ProductImage src={item.image} />
          <div>
            <p>{item.details}</p>

            <CenterDiv margin="20px 0">
              <WideButton onClick={() => addItem(item)}>
                <h3>Add to Cart</h3>
              </WideButton>
            </CenterDiv>
          </div>
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Product;
