import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../products";
import {
  BreakDiv,
  CategoriesContainer,
  CenterDiv,
  ContainerDiv,
  FlexDiv,
  InnerDiv,
  LeftFlex,
  StyledDiv,
} from "./styleComponents/divStyles";
import { Dropdown } from "./styleComponents/DropdownStyles";
import { ButtonImg } from "./styleComponents/Imagestyles";
import Thumbnail from "./Thumbnail";

function Room() {
  const navigate = useNavigate();
  let { room } = useParams();

  window.scrollTo({
    top: 0,
  });

  const [list, setList] = useState(
    room ? products.filter((product) => product.category === room) : products
  );

  const listReset = room
    ? products.filter((product) => product.category === room)
    : products;

  return (
    <ContainerDiv>
      <InnerDiv>
        <FlexDiv>
          <Dropdown>
            <LeftFlex margin="20px 0">
              <ButtonImg src="/assets/back.svg" />
              <h4
                onClick={() => {
                  navigate(-1);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // for smoothly scrolling
                  });
                }}
              >
                Back
              </h4>
            </LeftFlex>
            <StyledDiv>
              <label for="touch">
                <h4>Sort</h4>
              </label>
              <input type="checkbox" id="touch" />

              <ul className="slide">
                <li
                  onClick={() => {
                    setList(
                      listReset.sort((a, b) => a.name.localeCompare(b.name))
                    );
                  }}
                >
                  <p>Alphabetical</p>
                </li>
                <li
                  onClick={() => {
                    setList(
                      listReset.sort((a, b) => b.itemsSold - a.itemsSold)
                    );
                  }}
                >
                  <p>Bestseller</p>
                </li>
                <li
                  onClick={() => {
                    setList(listReset.sort((a, b) => a.price - b.price));
                  }}
                >
                  <p>Price - Low to High</p>
                </li>
                <li
                  onClick={() => {
                    setList(listReset.sort((a, b) => b.price - a.price));
                  }}
                >
                  <p>Price - High to Low</p>
                </li>
                <li
                  onClick={() => {
                    setList(
                      listReset.sort((a, b) => b.dateAdded - a.dateAdded)
                    );
                  }}
                >
                  <p>Newest</p>
                </li>
                <li
                  onClick={() => {
                    setList(
                      listReset.sort((a, b) => a.dateAdded - b.dateAdded)
                    );
                  }}
                >
                  <p>Oldest</p>
                </li>
                <li
                  onClick={() => {
                    setList(listReset.filter((product) => product.sale));
                  }}
                >
                  <p>On Sale</p>
                </li>
                <li>
                  <BreakDiv></BreakDiv>
                </li>
              </ul>
            </StyledDiv>
          </Dropdown>
        </FlexDiv>
        <CategoriesContainer>
          {list.length > 0 ? (
            list.map((product) => {
              return (
                <Thumbnail
                  key={product.name}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  sale={product.sale}
                  description={product.details}
                ></Thumbnail>
              );
            })
          ) : (
            <CenterDiv margin="40px 0">No products to show.</CenterDiv>
          )}
        </CategoriesContainer>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Room;
