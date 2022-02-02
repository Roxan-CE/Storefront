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
import {
  CenterDiv,
  CenterDiv20,
  CenterDiv40,
  FlexDiv,
  FlexSpaced20,
} from "../styleComponents/FlexDivs";
import { RoomCrumb } from "../SmallerComponents/Breadcrumb";
import Paginate from "../SmallerComponents/Paginate";
import { RoomList } from "../SmallerComponents/RoomList";
import { BreakDiv, BreakDiv20 } from "../styleComponents/BreakDivs";

function Room() {
  let { room } = useParams();
  const [roomChanged, setRoomChange] = useState(false);

  const [list, setList] = useState(
    room ? products.filter((product) => product.category === room) : products
  );

  useEffect(() => {
    setList(
      room ? products.filter((product) => product.category === room) : products
    );
    setRoomChange(true);
  }, [room]);

  function resetRoomChange(t) {
    setRoomChange(t);
  }

  window.scrollTo({
    top: 0,
  });

  return (
    <ContainerDiv>
      <InnerDiv>
        <PaddedDiv>
          <Back></Back>
        </PaddedDiv>

        {room ? (
          <FlexSpaced20>
            <PaddedDiv>
              <RoomCrumb></RoomCrumb>
            </PaddedDiv>
          </FlexSpaced20>
        ) : (
          <CenterDiv>
            <RoomList></RoomList>{" "}
          </CenterDiv>
        )}

        <FlexDiv>
          <DropdownBar
            roomChanged={roomChanged}
            resetRoomChange={resetRoomChange}
            list={list}
            setList={setList}
            room={room}
          ></DropdownBar>
        </FlexDiv>

        <CenterDiv20>
          {list.length > 0 ? (
            <Paginate
              roomChanged={roomChanged}
              data={list}
              dataLimit={6}
              resetRoomChange={resetRoomChange}
            ></Paginate>
          ) : (
            <CenterDiv40>No products to show.</CenterDiv40>
          )}
        </CenterDiv20>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Room;
