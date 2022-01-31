import styled from "styled-components";
import { device } from "./device";

const MainImage = styled.div`
  /* width: 335px; */
  width: 100vw;
  height: 350px;
  background-image: url(${(props) => props.image});
  background-size: 650px auto;
  background-repeat: no-repeat;
  background-position: 60% 20%;
`;

const AboutImage = styled(MainImage)`
  background-size: 375px auto;
  background-position: 60% 55%;
`;
const Category = styled.div`
  height: 45px;
  margin: 5px 1rem;
  width: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 10px 0 0;

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
    height: 180px;
    width: 340px;

    p {
      display: none;
      position: absolute;
      z-index: 6;
      font-weight: 300;
      text-align: center;
      width: 340px;
      top: 60px;
      margin: 5px 0;
    }

    ::before {
      content: "";
      position: relative;
      height: 180px;
      width: 340px;
      background-size: 100vw auto;
      background-repeat: no-repeat;
      background-position: ${(props) => props.position};
      background-image: url(${(props) => props.image});

      :hover {
        border: solid 1px;
      }

      :hover::before {
        opacity: 20%;
      }

      :hover p {
        display: block;
      }
    }
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`;

const ProductImage = styled.img`
  width: 340px;
`;

const CartImage = styled.img`
  width: 22px;
  padding: 0px 7px;
`;

const ArrowImg = styled.img`
  position: relative;
  top: 2.4px;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  cursor: pointer;
  padding-right: 5px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
  cursor: pointer;
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
};
