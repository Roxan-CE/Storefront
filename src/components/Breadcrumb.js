import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";

export function ProductCrumb() {
  let { room } = useParams();
  let { product } = useParams();

  const breadcrumbs = [
    <Link key={room + 2} to="/all-products">
      <p style={{ fontFamily: "Cormorant Garamond,serif" }}>All Products</p>
    </Link>,
    <Link key={room + 1} to={"/" + room}>
      <p style={{ fontFamily: "Cormorant Garamond,serif" }}>
        {room.replace(/^\w/, (c) => c.toUpperCase())}
      </p>
    </Link>,
    <p style={{ fontFamily: "Cormorant Garamond,serif" }}>{product}</p>,
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
    <Link key="5" to="/all-products">
      <p style={{ fontFamily: "Cormorant Garamond,serif" }}>All Products</p>
    </Link>,
    <p style={{ fontFamily: "Cormorant Garamond,serif" }}>
      {room.replace(/^\w/, (c) => c.toUpperCase())}
    </p>,
    <p style={{ fontFamily: "Cormorant Garamond,serif" }}>{product}</p>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs key="6" separator=" | " aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
