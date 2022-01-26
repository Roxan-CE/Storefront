import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100vw;
`;

const ThumbnailDiv = styled.div`
  width: 300px;
  background-color: transparent;
  margin: 20px 0;

  div {
    &:hover img {
      opacity: 50%;
    }
  }
`;

const InnerDiv = styled(ContainerDiv)`
  display: flex;
  position: relative;
  top: 60px;
  flex-wrap: wrap;
`;

const CategoriesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${(props) => props.padding};
`;

const BreakDiv = styled.div`
  width: 100%;
  height: 0;
  border-bottom: solid 1px;
  margin: ${(props) => props.margin};
`;

const PaddedDiv = styled.div`
  margin: 0 20px;
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: ${(props) => props.margin};
`;

const RightFlex = styled(FlexDiv)`
  justify-content: end;
  margin: ${(props) => props.margin};
`;

const LeftFlex = styled(FlexDiv)`
  justify-content: start;
  margin: ${(props) => props.margin};
`;

const CenterDiv = styled(FlexDiv)`
  justify-content: center;
  margin: ${(props) => props.margin};
`;

const StyledDiv = styled.div`
  justify-content: center;
  margin: 20px 0 10px;
`;

export {
  ContainerDiv,
  ThumbnailDiv,
  InnerDiv,
  CategoriesContainer,
  BreakDiv,
  PaddedDiv,
  FlexDiv,
  RightFlex,
  LeftFlex,
  CenterDiv,
  StyledDiv,
};
