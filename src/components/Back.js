import React from "react";
import { useNavigate } from "react-router-dom";
import { LeftFlex20 } from "./styleComponents/FlexDivs";
import { ButtonImg } from "./styleComponents/Imagestyles";
import { Title1 } from "./styleComponents/TextStyles";

function Back() {
  const navigate = useNavigate();
  return (
    <LeftFlex20>
      <ButtonImg src="/assets/back.svg" />
      <Title1
        onClick={() => {
          navigate(-1);
          window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
          });
        }}
      >
        Back
      </Title1>
    </LeftFlex20>
  );
}

export default Back;
