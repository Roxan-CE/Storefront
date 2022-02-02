import styled from "styled-components";
import { device } from "./device.js";

const ContainerDiv = styled.div`
  width: 100vw;
`;

const ThumbnailDiv = styled.div`
  width: 300px;
  background-color: transparent;
  margin: 20px 20px;

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

const DetailDiv = styled.div`
  @media ${device.tablet} {
    width: 45%;
    padding: 0 0 0 30px;
  }
`;

const ContactFormDiv = styled(DetailDiv)`
  @media ${device.tablet} {
    order: 2;
  }
`;

const ContactDetailsDiv = styled(DetailDiv)`
  @media ${device.tablet} {
    order: 1;
  }
`;

export {
  ContainerDiv,
  ThumbnailDiv,
  InnerDiv,
  CategoriesContainer,
  PaddedDiv,
  StyledDiv,
  DetailDiv,
  ContactFormDiv,
  ContactDetailsDiv,
};
