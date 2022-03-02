import styled from "styled-components";
import { device } from "./device.js";
const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexSpacedT20 = styled(FlexDiv)`
  margin-top: 2vw 4vw;
`;

const FlexSpaced20 = styled(FlexDiv)`
  margin: 2vw 4vw;
`;

const FlexSpacedS20 = styled(FlexDiv)`
  margin: 0 4vw;
`;

const RightFlex = styled(FlexDiv)`
  justify-content: end;
`;

const LeftFlex = styled(FlexDiv)`
  justify-content: start;
`;

const LeftFlex20 = styled(LeftFlex)`
  margin: 2vw 0;
`;

const Backbutton = styled(LeftFlex20)`
  width: 70px;
  padding: 6px;
  position: relative;

  :hover {
    cursor: pointer;
    background-color: #efefef;
    border-radius: 4px;

    p {
      font-weight: 700;
    }
  }

  p,
  p > span {
    position: relative;
    color: inherit;
    text-decoration: none;
    letter-spacing: 1px;

    :hover {
    }
  }

  a {
    align-self: center;
  }
`;

const LeftFlexfull20 = styled(LeftFlex)`
  margin: 2vw 0;
`;

const CenterDiv = styled(FlexDiv)`
  justify-content: center;
  position: relative;
`;

const CenterDiv20 = styled(CenterDiv)`
  margin: 2vw 0;
  position: relative;
`;

const MenuLinks = styled(CenterDiv)`
  a,
  a > span {
    position: relative;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    :hover {
      font-weight: 900;
      letter-spacing: 1.5px;
    }

    &:before {
      left: 0;
      bottom: 8px;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.6);
      transform: scaleX(0);
    }
    &:hover:before {
      transform: scaleX(1);
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.5s ease;
    }
  }
`;

const CenterDiv40 = styled(CenterDiv)`
  margin: 4vw 0;
`;

const RegularFlex = styled.div`
  display: flex;
`;

export {
  FlexDiv,
  RightFlex,
  LeftFlex,
  CenterDiv,
  FlexSpacedT20,
  LeftFlex20,
  CenterDiv20,
  CenterDiv40,
  FlexSpaced20,
  RegularFlex,
  FlexSpacedS20,
  LeftFlexfull20,
  Backbutton,
  MenuLinks,
};
