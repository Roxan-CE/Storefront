import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100vw;
`;

const ThumbnailDiv = styled.div`
  width: 20%;
  background-color: transparent;
  margin: 2%;

  img {
    width: 100%;
    height: 300px;
  }
  ul {
    list-style-type: none;
  }
  &:hover img {
    opacity: 50%;
  }
`;

const InnerDiv = styled(ContainerDiv)`
  display: flex;
`;

const CategoriesContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const BreakDiv = styled.div`
  flex-basis: 100%;
`;

const Menu = styled.nav`
  display: none;
  top: 60px;
  right: 0;
  position: absolute;
  border: solid 1px;
  width: 100vw;

  ul {
    padding: 0 20px;
    flex-direction: column;
    li {
      padding: 10px;
    }
  }
`;

const MenuDiv = styled.div`
  padding: 25px 10px;
  display: flex;

  svg {
    padding: 2px 6px;
  }

  &:hover nav {
    display: flex;
  }
`;

const PaddedDiv = styled.div`
  padding: 10px;
`;

const NavDiv = styled(ContainerDiv)`
  display: flex;
  justify-content: space-between;

  position: fixed;
  background-color: white;
  top: 0;
`;

export {
  ContainerDiv,
  ThumbnailDiv,
  InnerDiv,
  NavDiv,
  CategoriesContainer,
  BreakDiv,
  MenuDiv,
  Menu,
  PaddedDiv,
};
