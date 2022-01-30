import React from "react";
import {
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "../styleComponents/divStyles";
import { Title1 } from "../styleComponents/TextStyles";
import { BreakDiv } from "../styleComponents/BreakDivs";
import aboutimg from "../../assets/aboutimg.jpg";
import { CenterDiv20 } from "../styleComponents/FlexDivs";
import { AboutImage } from "../styleComponents/Imagestyles";

function About() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv20>
          <AboutImage image={aboutimg} />
        </CenterDiv20>
        <PaddedDiv>
          <br />
          <h2>About us</h2>
          <BreakDiv></BreakDiv>
          <br />
          <p>
            Established in 2022 by a young Canadian couple in Toronto, Cozy
            Living hopes to deliver elegant and modern contemporary pieces at a
            reasonable pricepoint. By collaborating with celebrated designers
            and craftspeople all over the world, we produce small runs of new
            products using high quality materials and unique processes.
            <br />
            <br />
          </p>

          <center>
            <Title1>
              Cozy Living is the easiest way to create a timeless and beautiful
              modern space that will never go out of style.
            </Title1>
          </center>
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default About;
