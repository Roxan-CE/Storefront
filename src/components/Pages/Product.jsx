import React, { useState } from "react";
import products from "../../products";
import { DetailDiv, InnerDiv, PaddedDiv } from "../styleComponents/divStyles";
import { useParams } from "react-router-dom";
import { ArrowImg, ProductImage } from "../styleComponents/Imagestyles";
import { WideButton } from "../styleComponents/ButtonStyles";
import { useCart } from "react-use-cart";
import { ProductCrumb } from "../SmallerComponents/Breadcrumb";
import Price from "../SmallerComponents/Price";
import {
  CenterDiv20,
  FlexSpacedT20,
  LeftFlex,
  LeftFlex20,
} from "../styleComponents/FlexDivs";
import Back from "../SmallerComponents/Back";
import { BreakDiv } from "../styleComponents/BreakDivs";
import left from "../../assets/Icons/left.svg";
import right from "../../assets/Icons/right.svg";
import { QuantityInput } from "../styleComponents/CartStyles";
import toast, { Toaster } from "react-hot-toast";
import ToastOptions from "../SmallerComponents/ToastOptions";

function Product() {
  const { product } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = products.find((x) => x.name === product);

  function handleChange(e) {
    setQuantity(Number(e.target.value));
    console.log(typeof quantity);
  }

  console.log(typeof quantity);

  return (
    <InnerDiv>
      <PaddedDiv>
        <Back></Back>

        <ProductCrumb></ProductCrumb>

        <LeftFlex20>
          <ProductImage src={item.image} />

          <DetailDiv>
            <FlexSpacedT20>
              <div>
                <h2>{item.name}</h2>
              </div>

              <Price sale={item.sale} price={item.price}></Price>
            </FlexSpacedT20>

            <BreakDiv></BreakDiv>

            <FlexSpacedT20>
              <p style={{ marginTop: "20px" }}>{item.details}</p>

              <p style={{ marginTop: "20px" }}>
                Dimensions:{" "}
                <span
                  style={{ fontFamily: "Lato, sansserif", fontSize: "0.8rem " }}
                >
                  {item.dimensions.width}W x {item.dimensions.height}H x{" "}
                  {item.dimensions.depth}D{" "}
                </span>
              </p>
              <LeftFlex style={{ marginTop: "20px" }}>
                <p style={{ alignSelf: "center" }}>Quantity:</p>
                <ArrowImg
                  src={left}
                  onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : 1)}
                />
                <QuantityInput
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                ></QuantityInput>
                <ArrowImg
                  src={right}
                  onClick={() =>
                    quantity < 100 ? setQuantity(quantity + 1) : 100
                  }
                />
              </LeftFlex>

              <CenterDiv20>
                <WideButton
                  onClick={() => {
                    addItem(item, quantity);
                    quantity > 1
                      ? toast(
                          quantity + " items added to your cart.",
                          ToastOptions
                        )
                      : toast(
                          item.name + " has been added to your cart.",
                          ToastOptions
                        );
                  }}
                >
                  <h3>Add to Cart</h3>
                </WideButton>
              </CenterDiv20>
            </FlexSpacedT20>
          </DetailDiv>
        </LeftFlex20>
      </PaddedDiv>
    </InnerDiv>
  );
}

export default Product;
