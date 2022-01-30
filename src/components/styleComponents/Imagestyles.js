import styled from "styled-components";

const MainImage = styled.div`
  width: 100vw;
  height: 350px;
  margin: 0 1rem;
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
  height: 180px;
  margin: 0 1rem;
  width: 340px;
  background-size: 100vw auto;
  background-repeat: no-repeat;
  background-position: ${(props) => props.position};
  background-image: url(${(props) => props.image});
`;

const ProductImage = styled.img`
  width: 340px;
`;

const CartImage = styled.img`
  width: 19%;
  padding: 0px 6px;
`;

const ArrowImg = styled.img`
  position: relative;
  top: 2.4px;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  cursor: pointer;
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
