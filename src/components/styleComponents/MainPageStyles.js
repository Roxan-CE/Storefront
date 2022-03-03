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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.tablet} {
    position: absolute;
    flex-direction: column;
    top: 42%;
  }
  @media ${device.laptop} {
    position: absolute;
    flex-direction: column;
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
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    text-shadow: 1px -2px rgba(0, 0, 0, 0.8);
  }
  @media ${device.laptop} {
    font-size: 2.4rem;
  }

  @media ${device.laptopL} {
    font-size: 2.8rem;
  }

  @media ${device.desktop} {
    font-size: 4.5rem;
  }
`;

const HeadingUnderline = styled(BreakDiv)`
  @media ${device.tablet} {
    color: white;
    box-shadow: 0.5px -0.5px rgba(0, 0, 0, 0.8);
    border-bottom: solid 2px;
  }
`;

const HeadingButton = styled.button`
  margin: 10px auto 0;
  background-color: transparent;
  padding: 0px;
  font-size: 0.6rem;
  border: solid 1px;
  cursor: pointer;
  width: 120px;

  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  :hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }

  @media ${device.tablet} {
    margin: 10px auto;
    background-color: rgba(0, 0, 0, 0.1);
    border: solid 1px white;
    color: rgba(0, 0, 0, 0.8);
    box-shadow: 0.5px -1px rgba(0, 0, 0, 0.8);
    font-size: 0.8rem;
  }
`;

const HeadingButtonText = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;

  @media ${device.tablet} {
    color: white;
    text-shadow: 1px -1px rgba(0, 0, 0, 0.8);
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
  font-size: 0.9rem;

  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;

const CarouselBox = styled.div`
  width: 100%;
  margin-left: 14vw;

  @media ${device.mobileL} {
    margin-left: 12vw;
  }
  @media ${device.tablet} {
    margin-left: 11vw;
  }
  @media ${device.laptop} {
    margin-left: 9vw;
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
