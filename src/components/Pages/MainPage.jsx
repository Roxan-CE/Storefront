import React from "react";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
} from "../styleComponents/divStyles";
import { Category, MainImage } from "../styleComponents/Imagestyles";
import { Link } from "react-router-dom";
import { CenterDiv20, CenterDiv } from "../styleComponents/FlexDivs";
import mainpic from "../../assets/Categories/mainpic.jpg";
import livingroom from "../../assets/Categories/LivingRoom.jpg";
import diningroom from "../../assets/Categories/DiningRoom.jpg";
import kitchen from "../../assets/Categories/Kitchen.jpg";
import bedroom from "../../assets/Categories/bedroom.jpg";
import bathroom from "../../assets/Categories/Bathroom.jpg";
import decor from "../../assets/Categories/Decor.jpg";

function MainPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>
          <MainImage image={mainpic} />
        </CenterDiv20>
        <CenterDiv>
          <h2>TimeLess Beauty and Aesthetics</h2>
        </CenterDiv>

        <CategoriesContainer>
          <Link to="/livingroom">
            <Category image={livingroom} position="0 60%" />
          </Link>
          <Link to="/diningroom">
            <Category image={diningroom} position="0 55%" />
          </Link>
          <Link to="/kitchen">
            <Category image={kitchen} position="0 60%" />
          </Link>
          <Link to="/bedroom">
            <Category image={bedroom} position="0 55%" />
          </Link>
          <Link to="/bathroom">
            <Category image={bathroom} position="0 65%" />
          </Link>
          <Link to="/decor">
            <Category image={decor} position="0 60%" />
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
