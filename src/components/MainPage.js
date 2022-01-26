import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import {
  BreakDiv,
  CategoriesContainer,
  CenterDiv,
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
        <CenterDiv margin="20px 0 0">
          <MainImage src="assets/Categories/mainpic.jpg" />
        </CenterDiv>
        <CenterDiv>
          <h2>TimeLess Beauty and Aesthetics</h2>
        </CenterDiv>

        <CategoriesContainer>
          <Link to="/livingroom">
            <Category
              image="assets/Categories/LivingRoom.jpg"
              position="0 60%"
            />
          </Link>
          <Link to="/diningroom">
            <Category
              image="assets/Categories/DiningRoom.jpg"
              position="0 55%"
            />
          </Link>
          <Link to="/kitchen">
            <Category image="assets/Categories/Kitchen.jpg" position="0 60%" />
          </Link>
          <Link to="/bedroom">
            <Category image="assets/Categories/bedroom.jpg" position="0 55%" />
          </Link>
          <Link to="/bathroom">
            <Category image="assets/Categories/Bathroom.jpg" position="0 65%" />
          </Link>
          <Link to="/decor">
            <Category image="assets/Categories/Decor.jpg" position="0 60%" />
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
