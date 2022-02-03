import React from "react";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "../styleComponents/divStyles";
import { Category, MainImage } from "../styleComponents/Imagestyles";
import { Link } from "react-router-dom";
import { CenterDiv20, CenterDiv, RightFlex } from "../styleComponents/FlexDivs";
import { WideButton } from "../styleComponents/ButtonStyles";
import { BreakDiv1020, BreakDiv20 } from "../styleComponents/BreakDivs";
import mainpic from "../../assets/Categories/mainpic.jpg";
import livingroom from "../../assets/Categories/LivingRoom.jpg";
import diningroom from "../../assets/Categories/DiningRoom.jpg";
import kitchen from "../../assets/Categories/Kitchen.jpg";
import bedroom from "../../assets/Categories/bedroom.jpg";
import bathroom from "../../assets/Categories/Bathroom.jpg";
import decor from "../../assets/Categories/Decor.jpg";
import CarouselDiv from "../SmallerComponents/CarouselDiv";

function MainPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>
          <Link to="/all-products">
            <MainImage image={mainpic} />
          </Link>
        </CenterDiv20>
        <CenterDiv>
          <h2>TimeLess and Modern Aesthetics</h2>
        </CenterDiv>
        <BreakDiv1020></BreakDiv1020>

        <CategoriesContainer>
          <Link to="/livingroom">
            <Category image={livingroom} position="0 58%">
              <p>Livingroom</p>
            </Category>
          </Link>
          <Link to="/diningroom">
            <Category image={diningroom} position="0 60%">
              <p>Diningroom</p>
            </Category>
          </Link>
          <Link to="/kitchen">
            <Category image={kitchen} position="0 60%">
              <p>Kitchen</p>
            </Category>
          </Link>
          <Link to="/bedroom">
            <Category image={bedroom} position="0 55%">
              <p>Bedroom</p>
            </Category>
          </Link>
          <Link to="/bathroom">
            <Category image={bathroom} position="0 57%">
              <p>Bathroom</p>
            </Category>
          </Link>
          <Link to="/decor">
            <Category image={decor} position="0 60%">
              <p>Decor</p>
            </Category>
          </Link>
        </CategoriesContainer>

        <div
          className="carouselMain"
          style={{
            height: "380px",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CarouselDiv></CarouselDiv>
        </div>
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
