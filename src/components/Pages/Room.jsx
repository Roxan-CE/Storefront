import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products";
import {
  CategoriesContainer,
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "../styleComponents/divStyles";
import Back from "../SmallerComponents/Back";
import Thumbnail from "../SmallerComponents/Thumbnail";
import DropdownBar from "../SmallerComponents/DropdownBar";
import { CenterDiv40, FlexDiv } from "../styleComponents/FlexDivs";
import { RoomCrumb } from "../SmallerComponents/Breadcrumb";
import Paginate from "../SmallerComponents/Paginate";
import { RoomList } from "../SmallerComponents/RoomList";

function Room() {
  let { room } = useParams();

  const [list, setList] = useState(
    room ? products.filter((product) => product.category === room) : products
  );

  useEffect(() => {
    setList(
      room ? products.filter((product) => product.category === room) : products
    );
  }, [room]);

  window.scrollTo({
    top: 0,
  });

  return (
    <ContainerDiv>
      <InnerDiv>
        <FlexDiv>
          <PaddedDiv>
            <Back></Back>
            {room ? <RoomCrumb></RoomCrumb> : <RoomList></RoomList>}
          </PaddedDiv>
          <DropdownBar list={list} setList={setList} room={room}></DropdownBar>
        </FlexDiv>

        <CategoriesContainer>
          {list.length > 0 ? (
            <Paginate data={list} dataLimit={6}></Paginate>
          ) : (
            <CenterDiv40>No products to show.</CenterDiv40>
          )}
        </CategoriesContainer>
      </InnerDiv>
    </ContainerDiv>
  );
}

{
  /* (
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
          )  */
}

export default Room;
