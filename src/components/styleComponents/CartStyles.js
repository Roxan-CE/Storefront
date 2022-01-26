import styled from "styled-components";

const CartImg = styled.img`
  width: 40%;
`;

const CartDetails = styled.div`
  width: 60%;
  padding: 15px 0;
`;

const CartDiv = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-family: "Lato", sans-serif;

  h1 {
    font-size: 0.9rem;
    letter-spacing: 2px;
    padding: 10px 0 5px;
    margin: 0;
    cursor: pointer;
  }

  ul {
    padding-left: 20px;
  }

  li {
    padding: 5px 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  button {
    width: 65px;
    height: 20px;
  }

  span {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export { CartDiv, CartImg, CartDetails };
