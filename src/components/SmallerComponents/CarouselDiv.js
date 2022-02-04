import React from "react";
import { InnerCarouselDiv, InnerDiv } from "../styleComponents/divStyles";
import { CenterDiv20 } from "../styleComponents/FlexDivs";
import { Carousel } from "@trendyol-js/react-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import products from "../../products";
import Thumbnail from "./Thumbnail";
import CarThumb from "./CarThumb";
import carouselArrowStyles from "../styleComponents/carouselArrowStyles";

function CarouselDiv(props) {
  let bestSellerList = [...products]
    .sort((a, b) => b.itemsSold - a.itemsSold)
    .slice(0, 10);

  let saleList = [...products].filter((product) => product.sale);

  let setList = props.type === "bestSeller" ? bestSellerList : saleList;
  return (
    <InnerCarouselDiv>
      <Carousel
        show={1}
        slide={1}
        transition={0.5}
        swiping="true"
        responsive="true"
        leftArrow={<ArrowBackIos style={carouselArrowStyles} />}
        rightArrow={<ArrowForwardIos style={carouselArrowStyles} />}
      >
        {setList.map((product) => {
          return (
            <CarThumb
              key={product.name}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              sale={product.sale}
              description={product.details}
            ></CarThumb>
          );
        })}
      </Carousel>
    </InnerCarouselDiv>
  );
}

export default CarouselDiv;
