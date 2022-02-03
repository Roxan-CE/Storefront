import React from "react";
import { InnerDiv } from "../styleComponents/divStyles";
import { CenterDiv20 } from "../styleComponents/FlexDivs";
import { Carousel } from "@trendyol-js/react-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import products from "../../products";
import Thumbnail from "./Thumbnail";
import CarThumb from "./CarThumb";

function CarouselDiv() {
  return (
    <div style={{ width: "85%", margin: "20px", display: "flex" }}>
      <Carousel
        show={1}
        slide={1}
        transition={0.5}
        swiping="true"
        responsive="true"
        leftArrow={
          <ArrowBackIos
            style={{ width: "80%", position: "relative", top: "120px" }}
          />
        }
        rightArrow={
          <ArrowForwardIos
            style={{ width: "80%", position: "relative", top: "120px" }}
          />
        }
      >
        {[...products]
          .sort((a, b) => b.itemsSold - a.itemsSold)
          .slice(0, 8)
          .map((product) => {
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
    </div>
  );
}

export default CarouselDiv;
