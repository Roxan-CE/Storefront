import * as React from "react";
import { Link } from "react-router-dom";
import { CenterDiv20 } from "../styleComponents/FlexDivs";
import { RegularText } from "../styleComponents/TextStyles";

export function RoomList() {
  const rooms = [
    { name: "Livingroom", url: "livingroom" },
    { name: "Diningroom", url: "diningroom" },
    { name: "Kitchen", url: "kitchen" },
    { name: "Bedroom", url: "bedroom" },
    { name: "Bathroom", url: "bathroom" },
    { name: "Decor", url: "decor" },
  ];

  return (
    <CenterDiv20 id="roomlist">
      {rooms.map((room, index) => {
        return (
          <Link key={room + index} to={"/" + room.url}>
            <RegularText>{room.name}</RegularText>
          </Link>
        );
      })}
    </CenterDiv20>
  );
}
