import React from "react";
import { useNavigate } from "react-router-dom";
import { Backbutton, LeftFlex20 } from "../styleComponents/FlexDivs";
import { ButtonImg } from "../styleComponents/Imagestyles";
import { BackText, Title1 } from "../styleComponents/TextStyles";
import back from "../../assets/Icons/back.svg";

function Back() {
  const navigate = useNavigate();
  return (
    <Backbutton
      onClick={() => {
        navigate(-1);
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smoothly scrolling
        });
      }}
    >
      <ButtonImg src={back} />
      <a>
        <BackText>Back</BackText>
      </a>
    </Backbutton>
  );
}

export default Back;
