import React from "react";
import {
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "../styleComponents/divStyles";
import { Title1 } from "../styleComponents/TextStyles";
import { BreakDiv } from "../styleComponents/BreakDivs";
import aboutimg from "../../assets/aboutimg.jpg";
import { CenterDiv } from "../styleComponents/FlexDivs";
import { AboutImage } from "../styleComponents/Imagestyles";

function About() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });

  return (
    <ContainerDiv>
      <InnerDiv>
        <CenterDiv>
          <AboutImage image={aboutimg} />
        </CenterDiv>
        <PaddedDiv>
          <div>
            <br />
            <h2>About us</h2>
            <BreakDiv></BreakDiv>
            <br />
            <p>
              Established in 2022 by a young Canadian couple in Toronto, Cozy
              Living hopes to deliver elegant and modern contemporary pieces at
              a reasonable pricepoint. By collaborating with celebrated
              designers and craftspeople all over the world, we produce small
              runs of new products using high quality materials and unique
              processes.
              <br />
              <br />
            </p>

            <center>
              <Title1>
                Cozy Living is the easiest way to create a timeless and
                beautiful modern space that will never go out of style.
              </Title1>
            </center>
          </div>
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default About;
