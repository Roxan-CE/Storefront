import React from "react";
import {
  CarouselMain,
  ContainerDiv,
  InnerDiv,
} from "../styleComponents/divStyles";
import { Category, MainImage } from "../styleComponents/Imagestyles";
import { Link } from "react-router-dom";
import { CenterDiv20, CenterDiv, RightFlex } from "../styleComponents/FlexDivs";
import { WideButton } from "../styleComponents/ButtonStyles";
import {
  BreakDiv,
  BreakDiv1020,
  BreakDiv20,
} from "../styleComponents/BreakDivs";
import mainpic from "../../assets/Categories/mainpic.jpg";
import CarouselDiv from "../SmallerComponents/CarouselDiv";
import furniture from "../../assets/Icons/furniture.svg";
import priceTag from "../../assets/Icons/priceTag.svg";
import deliveryTruck from "../../assets/Icons/deliveryTruck.svg";

import bedroom from "../../assets/Categories/bedroom.jpg";
import Decor from "../../assets/Categories/Decor.jpg";
import DiningRoom from "../../assets/Categories/DiningRoom.jpg";
import Kitchen from "../../assets/Categories/Kitchen.jpg";
import sales from "../../assets/Categories/sales.jpg";
import Bathroom from "../../assets/Categories/Bathroom.jpg";

function MainPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20 style={{ position: "relative" }}>
          <Link to="/all-products">
            <MainImage image={Decor} />
          </Link>

          <div
            style={{
              position: "relative",
            }}
          >
            <div style={{ paddingBottom: "10px" }}>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  padding: "10px 0 0",
                  marginBottom: 0,
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                TimeLess and Modern Aesthetics
              </h1>
              <BreakDiv></BreakDiv>
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "solid 1px",
                padding: "10px 20px",
                color: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
                fontSize: "0.7rem",
                margin: "0 0 0 100px",
              }}
            >
              <p style={{ letterSpacing: "1px", textTransform: "uppercase" }}>
                Shop now
              </p>
            </button>
          </div>
        </CenterDiv20>

        <div
          className="tags"
          style={{
            margin: "20px 20px 40px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "375px",
          }}
        >
          <div style={{ display: "flex", width: "100%", margin: "10px 0" }}>
            <img src={furniture} style={{ width: "50px", padding: "0 30px" }} />
            <p style={{ padding: "0 20px" }}>Elegant quality pieces.</p>
          </div>
          <div style={{ display: "flex", width: "100%", margin: "10px 0" }}>
            <img src={priceTag} style={{ width: "50px", padding: "0 30px" }} />
            <p style={{ padding: "0 20px" }}>Affordable Prices.</p>
          </div>
          <div style={{ display: "flex", width: "100%", margin: "10px 0" }}>
            <img
              src={deliveryTruck}
              style={{ width: "50px", padding: "0 30px" }}
            />
            <p style={{ padding: "0 20px" }}>Fast reliable shipping.</p>
          </div>
        </div>
        <div style={{ margin: "0 50px 0", width: "100%" }}>
          <h2 style={{ letterSpacing: "2px" }}>Pieces you will love.</h2>
        </div>
        <CarouselMain>
          <CarouselDiv type="bestSeller"></CarouselDiv>
        </CarouselMain>

        <div
          style={{
            margin: "0 50px",
            padding: 0,
            width: "260px",
          }}
        >
          <h4 style={{ letterSpacing: "2px" }}>Get them while they last.</h4>
        </div>
        <CarouselMain>
          <CarouselDiv type="sale"></CarouselDiv>
        </CarouselMain>
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
