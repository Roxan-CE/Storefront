import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
`;

const ThumbnailDiv = styled.div`
  width: 20%;
  border: solid;

  img {
    width: 100%;
    height: 300px;
  }
  ul {
    list-style-type: none;
  }
`;

export { ContainerDiv, ThumbnailDiv };
