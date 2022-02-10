import styled from "styled-components";
import { BreakDiv } from "./BreakDivs";
import { device } from "./device";

const TagLineDiv = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 340px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const MainHeading = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.tablet} {
    position: absolute;
    flex-direction: column;
    top: 60%;
  }
`;

const HeadingH1 = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  padding: 10px 0 0;
  margin-bottom: 0;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    font-size: 2rem;
    font-weight: 600;
    color: white;
    text-shadow: 1px -1px rgba(0, 0, 0, 0.6);
  }
`;

const HeadingUnderline = styled(BreakDiv)`
  @media ${device.tablet} {
    color: white;
    box-shadow: 0.5px -0.5px rgba(0, 0, 0, 0.6);
    border-bottom: solid 2px;
  }
`;

const HeadingButton = styled.button`
  margin: 10px auto 0;
  background-color: transparent;
  padding: 10px;
  font-size: 0.6rem;
  border: solid 1px;
  cursor: pointer;
  width: 120px;

  @media ${device.tablet} {
    margin: 10px auto;
    background-color: rgba(0, 0, 0, 0.1);
    border: solid 1px white;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 0.5px -1px rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
  }
`;

const HeadingButtonText = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;

  @media ${device.tablet} {
    color: white;
    text-shadow: 1px -1px rgba(0, 0, 0, 0.6);
  }
`;

const TagDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  @media ${device.tablet} {
    width: 30%;
  }
`;

const CarouselTitle = styled.h2`
  letter-spacing: 2px;
  @media ${device.mobileL} {
  }
`;

const CarouselBox = styled.div`
  margin: 0 50px 0;
  width: 100%;
  @media ${device.mobileL} {
  }
`;

const TagLine = styled.p`
  padding: 0 20px;

  @media ${device.mobileL} {
  }
`;

const CarouselImg = styled.img``;

export {
  TagLineDiv,
  CarouselImg,
  TagDiv,
  CarouselTitle,
  TagLine,
  CarouselBox,
  MainHeading,
  HeadingH1,
  HeadingUnderline,
  HeadingButton,
  HeadingButtonText,
};
