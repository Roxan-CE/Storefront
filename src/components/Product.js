import React from "react";
import products from "../products";
import { ContainerDiv, InnerDiv, PaddedDiv } from "./styleComponents/divStyles";
import { useParams, useNavigate } from "react-router-dom";
import { ProductImage } from "./styleComponents/Imagestyles";

function Product() {
  const navigate = useNavigate();
  const { product } = useParams();

  const item = products.find((x) => x.name === product);

  console.log(item);

  return (
    <ContainerDiv>
      <InnerDiv>
        <PaddedDiv>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <div>
            <h3>{product}</h3>
            <p>{item.price}</p>
          </div>
          <ProductImage src={item.image} />
          <div>
            <p>{item.details}</p>

            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Product;
