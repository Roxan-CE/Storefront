import styled from "styled-components";
import { device } from "./device.js";
import { FlexSpaced20 } from "./FlexDivs.js";
import { Link } from "react-router-dom";
import { Logo } from "./HeaderStyles.js";
import { LeftFlex20 } from "./FlexDivs.js";

const LogoSpaced20 = styled(FlexSpaced20)`
  width: 70%;
  margin: 0;

  @media ${device.mobileL} {
    justify-content: flex-start;
    gap: 20px;
  }
`;

const FooterLink = styled(Link)`
  padding: 5px 0 0;
`;

const FooterLogo = styled(Logo)`
  padding: 10px 0 0;
`;

const LogoDiv = styled.div`
  width: 58%;
  padding-left: 4px;

  @media ${device.tablet} {
    padding-left: 20px;
    width: 48%;
  }
  @media ${device.laptop} {
    padding-left: 60px;
    width: 25%;
  }
`;

const FlexColumnL = styled(LeftFlex20)`
  width: 58%;
  flex-direction: column;
  a {
    padding-left: 10px;
  }

  @media ${device.tablet} {
    padding-left: 10px;
    width: 48%;
  }

  @media ${device.laptop} {
    width: 25%;
  }
`;

const FlexColumnR = styled(LeftFlex20)`
  width: 40%;
  flex-direction: column;
  @media ${device.laptop} {
    width: 20%;
  }
`;

export {
  LogoSpaced20,
  FooterLink,
  FooterLogo,
  LogoDiv,
  FlexColumnL,
  FlexColumnR,
};
