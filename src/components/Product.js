import React from "react";
import products from "../products";
import { ContainerDiv } from "./styleComponents/divStyles";
import { useParams, useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const { name } = useParams();

  const product = products.find((x) => x.name === name);

  console.log(product);

  return (
    <ContainerDiv>
      <h1>{name}</h1>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </ContainerDiv>
  );
}

export default Product;
