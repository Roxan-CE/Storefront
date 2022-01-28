import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "./styleComponents/divStyles";
import Back from "./Back";
import Thumbnail from "./Thumbnail";
import DropdownBar from "./DropdownBar";
import { CenterDiv40, FlexDiv } from "./styleComponents/FlexDivs";

function Room() {
  let { room } = useParams();

  const [list, setList] = useState(
    room ? products.filter((product) => product.category === room) : products
  );

  window.scrollTo({
    top: 0,
  });

  return (
    <ContainerDiv>
      <InnerDiv>
        <FlexDiv>
          <PaddedDiv>
            <Back></Back>
          </PaddedDiv>
          <DropdownBar list={list} setList={setList} room={room}></DropdownBar>
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
            <CenterDiv40>No products to show.</CenterDiv40>
          )}
        </CategoriesContainer>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Room;
