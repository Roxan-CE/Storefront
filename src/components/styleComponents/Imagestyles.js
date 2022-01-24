import styled from "styled-components";

const MainImage = styled.div`
  width: 100vw;
  height: 350px;
  margin: 0 1rem;
  background-image: url("products/Categories/mainpic.jpg");
  background-size: 650px auto;
  background-repeat: no-repeat;
  background-position: 60% 20%;
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

export { Category, MainImage, ProductImage };
