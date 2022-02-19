import styled from "styled-components";
import { device } from "./device.js";
const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexSpacedT20 = styled(FlexDiv)`
  margin-top: 20px;
`;

const FlexSpaced20 = styled(FlexDiv)`
  margin: 20px;
`;

const FlexSpacedS20 = styled(FlexDiv)`
  margin: 0 20px;
`;

const RightFlex = styled(FlexDiv)`
  justify-content: end;
`;

const LeftFlex = styled(FlexDiv)`
  justify-content: start;
`;

const LeftFlex20 = styled(LeftFlex)`
  margin: 20px 0;
`;

const CenterDiv = styled(FlexDiv)`
  justify-content: center;
  position: relative;
`;

const CenterDiv20 = styled(CenterDiv)`
  margin: 20px 0;
  position: relative;
`;

const CenterDiv40 = styled(CenterDiv)`
  margin: 40px 0;
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
};
