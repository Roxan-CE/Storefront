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

const PaddedDiv = styled.div`
  margin: 0 20px;
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
  PaddedDiv,
  StyledDiv,
};
