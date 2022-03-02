import React from "react";
import {
  CarouselMain,
  ContainerDiv,
  InnerDiv,
} from "../styleComponents/divStyles";
import { MainImage, TagsImage } from "../styleComponents/Imagestyles";
import { Link, useNavigate } from "react-router-dom";
import { CenterDiv, CenterDiv20 } from "../styleComponents/FlexDivs";
import CarouselDiv from "../SmallerComponents/CarouselDiv";
import furniture from "../../assets/Icons/furniture.svg";
import priceTag from "../../assets/Icons/priceTag.svg";
import deliveryTruck from "../../assets/Icons/deliveryTruck.svg";

import mainImage from "../../assets/Categories/mainImage.jpg";
import {
  CarouselBox,
  CarouselTitle,
  HeadingH1,
  HeadingUnderline,
  MainHeading,
  TagDiv,
  TagLine,
  TagLineDiv,
  HeadingButton,
  HeadingButtonText,
} from "../styleComponents/MainPageStyles";

function MainPage() {
  const navigate = useNavigate();
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });

  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>
          <MainImage image={mainImage} />

          <MainHeading>
            <div style={{ paddingBottom: "10px" }}>
              <HeadingH1>TimeLess and Modern Aesthetics</HeadingH1>
              <HeadingUnderline></HeadingUnderline>
            </div>
            <HeadingButton
              onClick={() => {
                navigate("/all-products");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // for smoothly scrolling
                });
              }}
            >
              <HeadingButtonText>Shop now</HeadingButtonText>
            </HeadingButton>
          </MainHeading>
        </CenterDiv20>

        <CenterDiv>
          <TagLineDiv>
            <TagDiv>
              <TagsImage src={furniture} />
              <TagLine>Elegant quality pieces.</TagLine>
            </TagDiv>
            <TagDiv>
              <TagsImage src={priceTag} />
              <TagLine>Affordable Prices.</TagLine>
            </TagDiv>
            <TagDiv>
              <TagsImage src={deliveryTruck} />
              <TagLine>Fast reliable shipping.</TagLine>
            </TagDiv>
          </TagLineDiv>
        </CenterDiv>
        <CarouselBox>
          <CarouselTitle>Pieces you will love.</CarouselTitle>
        </CarouselBox>
        <CarouselMain>
          <CarouselDiv type="bestSeller"></CarouselDiv>
        </CarouselMain>

        <CarouselBox>
          <CarouselTitle>Get them while they last.</CarouselTitle>
        </CarouselBox>
        <CarouselMain>
          <CarouselDiv type="sale"></CarouselDiv>
        </CarouselMain>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default MainPage;
