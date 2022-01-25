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
import { Category, MainImage } from "./styleComponents/Imagestyles";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <MainImage src="products/Categories/mainpic.jpg" />
      </InnerDiv>
      <InnerDiv>
        <h2>TimeLess Beauty and Aesthetics</h2>
      </InnerDiv>
      <InnerDiv>
        <CategoriesContainer>
          <Link to="/livingroom">
            <Category
              image="products/Categories/LivingRoom.jpg"
              position="0 60%"
            />
          </Link>
          <Link to="/diningroom">
            <Category
              image="products/Categories/DiningRoom.jpg"
              position="0 55%"
            />
          </Link>
          <Link to="/kitchen">
            <Category
              image="products/Categories/Kitchen.jpg"
              position="0 60%"
            />
          </Link>
          <Link to="/bedroom">
            <Category
              image="products/Categories/bedroom.jpg"
              position="0 55%"
            />
          </Link>
          <Link to="/bathroom">
            <Category
              image="products/Categories/Bathroom.jpg"
              position="0 65%"
            />
          </Link>
          <Link to="/decor">
            <Category image="products/Categories/Decor.jpg" position="0 60%" />
          </Link>
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
