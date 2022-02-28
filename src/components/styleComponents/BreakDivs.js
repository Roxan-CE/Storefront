import styled from "styled-components";

const BreakDiv = styled.div`
  width: 100%;
  height: 0;
  border-bottom: solid 1px;
  margin: ${(props) => props.margin};
`;

const BreakDiv10 = styled(BreakDiv)`
  margin: 1vw 0;
`;
const BreakDiv20 = styled(BreakDiv)`
  margin: 2vw 0;
`;
const BreakDiv1020 = styled(BreakDiv)`
  margin: 1vw 2vw;
`;

const BreakDiv40 = styled(BreakDiv)`
  margin: 4vw 0 2vw;
`;

export { BreakDiv, BreakDiv10, BreakDiv20, BreakDiv1020, BreakDiv40 };
