import { Link } from "react-router-dom";
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
  @media ${device.mobileL} {
    width: 50%;
    padding: 0 0 0 30px;
  }
  @media ${device.tablet} {
    width: 45%;
    padding: 0 0 0 30px;
  }
`;

const ContactFormDiv = styled(DetailDiv)`
  @media ${device.tablet} {
    padding: 0 10px 0 20px;
    order: 2;
  }
`;

const ContactDetailsDiv = styled(DetailDiv)`
  @media ${device.tablet} {
    order: 1;
    padding: 0 10px 0 30px;
  }
`;

const CarouselMain = styled.div`
  height: 380px;
  width: 100vw;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
  }
`;

const InnerCarouselDiv = styled.div`
  width: 85%;
  margin: 0 20px 0;
  display: flex;

  @media ${device.tablet} {
  }
`;

const LogoDiv = styled.div`
  width: 58%;
  padding-left: 4px;

  @media ${device.tablet} {
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
  CarouselMain,
  InnerCarouselDiv,
  LogoDiv,
};
