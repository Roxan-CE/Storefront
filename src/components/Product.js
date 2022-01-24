import React from "react";
import products from "../products";
import { ContainerDiv, InnerDiv, PaddedDiv } from "./styleComponents/divStyles";
import { useParams, useNavigate } from "react-router-dom";
import { ProductImage } from "./styleComponents/Imagestyles";

function Product() {
  const navigate = useNavigate();
  const { name } = useParams();

  const product = products.find((x) => x.name === name);

  console.log(product);

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
            <h3>{name}</h3>
            <p>{product.price}</p>
          </div>
          <ProductImage src={product.image} />
          <div>
            <ul>
              <li>{product.name}</li>
              <li>{product.price}</li>
              <li>{product.category}</li>
              <li>{product.details}</li>
            </ul>
          </div>
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Product;
