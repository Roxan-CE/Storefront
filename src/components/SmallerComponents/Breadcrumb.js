import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { LinedLink, RegularText } from "../styleComponents/TextStyles";

export function ProductCrumb() {
  let { room } = useParams();
  let { product } = useParams();

  const breadcrumbs = [
    <Link key={room + 2} to="/all-products">
      <LinedLink>All Products</LinedLink>
    </Link>,
    <Link key={room + 1} to={"/" + room}>
      <LinedLink style={{ fontFamily: "Cormorant Garamond,serif" }}>
        {room.replace(/^\w/, (c) => c.toUpperCase())}
      </LinedLink>
    </Link>,
    <RegularText key={room + 9} style={{ opacity: "60%" }}>
      {product}
    </RegularText>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs key="6" separator=" | " aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

export function RoomCrumb() {
  let { room } = useParams();
  let { product } = useParams();

  const breadcrumbs = [
    <Link key={room + 7} to="/all-products">
      <LinedLink style={{ width: "100px" }}>All Products</LinedLink>
    </Link>,
    <RegularText key={room + 6} style={{ opacity: "60%" }}>
      {room.replace(/^\w/, (c) => c.toUpperCase())}
    </RegularText>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs key="6" separator=" | " aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
