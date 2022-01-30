import styled from "styled-components";

const Dropdown = styled.nav`
  width: 300px;
  background: transparent;
  margin: 10px auto 10px;
  border-bottom: solid 1px;

  li {
    cursor: pointer;
  }

  h4 {
    padding: 10px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  h4::after {
    float: right;
    right: 10%;
    content: "+";
  }

  .slide {
    clear: both;
    width: 300px;
    height: 0px;
    overflow: hidden;
    text-align: center;
    transition: height 0.4s ease;
    background-color: white;
    position: absolute;
    z-index: 2;
  }

  .slide li {
    padding: 20px 0 10px;
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: 0px;
  }

  #touch:checked + .slide {
    height: 371px;
  }
`;

export { Dropdown };
