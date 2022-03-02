import styled from "styled-components";
import { device } from "./device";

const WideButton = styled.button`
  width: 100%;
  border: solid 1px;
  background: transparent;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;

  h3 {
    color: rgba(0, 0, 0, 0.6);
  }

  :hover {
    background-color: #efefef;
    h3 {
      font-weight: 700;
    }
  }

  @media ${device.laptop} {
  }
`;

export { WideButton };
