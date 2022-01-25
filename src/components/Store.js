import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
} from "./styleComponents/divStyles";
import products from "../products";

function Store() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <CategoriesContainer>
          {products.map((product) => {
            return (
              <Thumbnail
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.details}
              ></Thumbnail>
            );
          })}
        </CategoriesContainer>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Store;

{
  /* <div>
<ul>
  <li>{product.category}</li>
  <li>{product.description}</li>
  <li>{product.id}</li>
  <li>
    <img src={} />
  </li>
  <li>{product.price}</li>
  <li>{product.rating.count}</li>
  <li>{product.rating.rate}</li>
  <li>{product.title}</li>
</ul>
</div> */
}
