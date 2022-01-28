import styled from "styled-components";

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

const RightFlex = styled(FlexDiv)`
  justify-content: end;
  margin: ${(props) => props.margin};
`;

const LeftFlex = styled(FlexDiv)`
  justify-content: start;
  margin: ${(props) => props.margin};
`;

const LeftFlex20 = styled(LeftFlex)`
  margin: 20px 0;
`;

const CenterDiv = styled(FlexDiv)`
  justify-content: center;
`;

const CenterDiv20 = styled(CenterDiv)`
  margin: 20px 0;
`;

const CenterDiv40 = styled(CenterDiv)`
  margin: 40px 0;
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
};
