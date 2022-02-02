import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { CenterDiv20, FlexDiv, LeftFlex20 } from "../styleComponents/FlexDivs";
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
      {rooms.map((room) => {
        return (
          <Link to={"/" + room.url}>
            <RegularText>{room.name}</RegularText>
          </Link>
        );
      })}
    </CenterDiv20>
  );
}
