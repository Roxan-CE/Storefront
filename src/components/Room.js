import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
} from "./styleComponents/divStyles";
import Thumbnail from "./Thumbnail";

function Room() {
  let { room } = useParams();

  console.log(room);

  const categorized = products.filter((product) => product.category === room);

  return (
    <ContainerDiv>
      <InnerDiv>
        <CategoriesContainer>
          {categorized.map((product) => {
            return (
              <Thumbnail
                key={product.name + 1}
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

export default Room;
