import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100vw;
`;

const ThumbnailDiv = styled.div`
  width: 300px;
  background-color: transparent;
  margin: 20px 0;

  img {
    width: 100%;
    height: 300px;
  }

  div {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 6px;
      margin: 0;
    }

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
`;

const BreakDiv = styled.div`
  flex-basis: 100%;
`;

const PaddedDiv = styled.div`
  margin: 16px;
`;

export {
  ContainerDiv,
  ThumbnailDiv,
  InnerDiv,
  CategoriesContainer,
  BreakDiv,
  PaddedDiv,
};
