import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useParams } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  let { room } = useParams();
  let { product } = useParams();

  const breadcrumbs = [
    <Link to="/">All Products</Link>,
    <Link to={"/" + room}>{room.replace(/^\w/, (c) => c.toUpperCase())}</Link>,
    <Typography key="3" color="text.primary">
      {product}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator=" | " aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
