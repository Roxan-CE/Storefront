import React from "react";
import { useNavigate } from "react-router-dom";
import { LeftFlex20 } from "./styleComponents/FlexDivs";
import { ButtonImg } from "./styleComponents/Imagestyles";

function Back() {
  const navigate = useNavigate();
  return (
    <LeftFlex20>
      <ButtonImg src="/assets/back.svg" />
      <h4
        onClick={() => {
          navigate(-1);
          window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
          });
        }}
      >
        Back
      </h4>
    </LeftFlex20>
  );
}

export default Back;
