import styled from "styled-components";

const BreakDiv = styled.div`
  width: 100%;
  height: 0;
  border-bottom: solid 1px;
  margin: ${(props) => props.margin};
`;

const BreakDiv10 = styled(BreakDiv)`
  margin: 10px 0;
`;
const BreakDiv20 = styled(BreakDiv)`
  margin: 20px 0;
`;
const BreakDiv1020 = styled(BreakDiv)`
  margin: 10px 20px;
`;

export { BreakDiv, BreakDiv10, BreakDiv20, BreakDiv1020 };
