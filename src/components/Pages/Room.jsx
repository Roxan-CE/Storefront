import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products";
import {
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "../styleComponents/divStyles";
import Back from "../SmallerComponents/Back";

import DropdownBar from "../SmallerComponents/DropdownBar";
import { CenterDiv, CenterDiv40, FlexDiv } from "../styleComponents/FlexDivs";
import { RoomCrumb } from "../SmallerComponents/Breadcrumb";
import Paginate from "../SmallerComponents/Paginate";
import { RoomList } from "../SmallerComponents/RoomList";
import CountDropdown from "../SmallerComponents/CountDropdown";

function Room() {
  let { room } = useParams();
  const [roomChanged, setRoomChange] = useState(false);
  const [count, setCount] = useState(8);

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
    behavior: "smooth", // for smoothly scrolling
  });

  function resetCount(newCount) {
    setCount(newCount);
  }

  return (
    <ContainerDiv>
      <InnerDiv>
        <PaddedDiv>
          <Back></Back>
        </PaddedDiv>

        {room ? (
          <CenterDiv>
            <RoomCrumb></RoomCrumb>
          </CenterDiv>
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

          <CountDropdown resetCount={resetCount}></CountDropdown>
        </FlexDiv>

        <CenterDiv>
          {list.length > 0 ? (
            <Paginate
              roomChanged={roomChanged}
              data={list}
              dataLimit={count}
              resetRoomChange={resetRoomChange}
            ></Paginate>
          ) : (
            <CenterDiv40>No products to show.</CenterDiv40>
          )}
        </CenterDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Room;
