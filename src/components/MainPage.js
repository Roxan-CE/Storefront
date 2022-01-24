import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import {
  BreakDiv,
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
} from "./styleComponents/divStyles";
import products from "../products";
import {
  DivImages,
  ImageStyled,
  LeftImage,
  MainImage,
} from "./styleComponents/Imagestyles";

function MainPage() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <MainImage src="products/Categories/mainpic.jpg" />
      </InnerDiv>
      <InnerDiv>
        <CategoriesContainer>
          <ImageStyled src="products/Categories/Decor.jpg" />
          <ImageStyled src="products/Categories/Kitchen.jpg" />
          <ImageStyled src="products/Categories/DiningRoom.jpg" />
          <ImageStyled src="products/Categories/Bedroom.jpg" />
          <ImageStyled src="products/Categories/Bathroom.jpg" />
        </CategoriesContainer>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default MainPage;

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
