import React from "react";
import { useNavigate } from "react-router-dom";
import { LeftFlex20 } from "../styleComponents/FlexDivs";
import { ButtonImg } from "../styleComponents/Imagestyles";
import { Title1 } from "../styleComponents/TextStyles";
import back from "../../assets/Icons/back.svg";

function Back() {
  const navigate = useNavigate();
  return (
    <LeftFlex20
      onClick={() => {
        navigate(-1);
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smoothly scrolling
        });
      }}
    >
      <ButtonImg src={back} />
      <Title1>Back</Title1>
    </LeftFlex20>
  );
}

export default Back;
