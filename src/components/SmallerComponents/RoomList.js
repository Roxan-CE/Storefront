import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { CenterDiv20, FlexDiv, LeftFlex20 } from "../styleComponents/FlexDivs";

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
            <p
              style={{
                fontFamily: "Cormorant Garamond,serif",
                fontSize: "16px",
                padding: "5px 5px",
                letterSpacing: "0.15px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              {room.name + " | "}
            </p>
          </Link>
        );
      })}
    </CenterDiv20>
  );
}
