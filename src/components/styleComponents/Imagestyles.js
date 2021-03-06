import styled from "styled-components";
import { device } from "./device";

const MainImage = styled.div`
  width: 90vw;
  height: 350px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% 50%;

  @media ${device.tablet} {
    height: 500px;
  }
  @media ${device.laptop} {
    height: 575px;
  }
  @media ${device.laptopL} {
    height: 750px;
  }
  @media ${device.desktop} {
    height: 1024px;
  }
`;

const AboutImage = styled.div`
  width: 93vw;
  height: 350px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 55%;

  @media ${device.tablet} {
    height: 500px;
  }
  @media ${device.laptop} {
    height: 575px;
  }
  @media ${device.laptopL} {
    height: 670px;
  }
  @media ${device.desktop} {
    height: 1024px;
  }
`;

const Category = styled.div`
  height: 45px;
  margin: 5px 1rem;
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 10px 0 0;

  @media ${device.mobileL} {
    width: 180px;
  }

  :hover {
    p {
      letter-spacing: 3px;
      border-bottom: solid 1px;
      padding-bottom: 8px;
    }
  }

  p {
    height: 20px;
    font-family: "Cormorant Garamond", serif;
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  @media ${device.tablet} {
    height: 90px;
    width: 340px;
    border: solid 1px;

    p {
      position: absolute;
      z-index: 2;
      font-size: 1.15rem;
      font-weight: 300;
      text-align: center;
      width: 340px;
      top: 28px;
      margin: 5px 0;
    }

    :hover p {
      display: block;
      border: none;
    }

    /* ::before {
      content: "";
      position: relative;
      height: 180px;
      width: 340px;
      display: flex;
      background-size: 45vw auto;
      background-repeat: no-repeat;
      background-position: ${(props) => props.position};
      background-image: url(${(props) => props.image});
      opacity: 100%;
      z-index: 1;
    }
    :hover::before {
      opacity: 10%;
      border: solid 1px;
    } */
  }

  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`;

const ProductImage = styled.img`
  width: 340px;
  height: 400px;

  @media ${device.mobileL} {
    margin: 0 auto;
  }

  @media ${device.laptop} {
    width: 460px;
    height: 500px;
  }
`;

const TagsImage = styled.img`
  width: 50px;
  padding: 0 30px;

  @media ${device.tablet} {
  }
`;

const CartImage = styled.img`
  width: 22px;
  padding: 0px 7px;

  :hover {
    cursor: pointer;
    filter: saturate(30%);
  }

  @media ${device.tablet} {
  }
`;

const ArrowImg = styled.img`
  position: relative;
  align-self: center;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  cursor: pointer;
  padding-right: 5px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 4px;
  z-index: 2;

  :hover {
    background-color: #efefef;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
  cursor: pointer;

  :hover {
    filter: saturate(30%);
  }
`;

const CarThumbImg = styled.div`
  width: 270px;
  height: 270px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 55%;
  cursor: pointer;

  :hover {
    filter: saturate(30%);
  }
`;

export {
  Category,
  MainImage,
  ProductImage,
  CartImage,
  ArrowImg,
  ButtonImg,
  ThumbnailImage,
  AboutImage,
  CarThumbImg,
  TagsImage,
};
