import React from "react";
import { InnerDiv, PaddedDiv } from "../styleComponents/divStyles";
import { CenterDiv20, LeftFlex20 } from "../styleComponents/FlexDivs";
import { MainLogo, Title1 } from "../styleComponents/TextStyles";
import instagram from "../../assets/Icons/instagram.svg";
import pinterest from "../../assets/Icons/pinterest.svg";
import facebook from "../../assets/Icons/facebook.svg";
import twitter from "../../assets/Icons/twitter.svg";
import youtube from "../../assets/Icons/youtube.svg";
import { useNavigate } from "react-router-dom";
import { BreakDiv40 } from "../styleComponents/BreakDivs";
import {
  FlexColumnL,
  FlexColumnR,
  FooterLink,
  FooterLogo,
  LogoDiv,
  LogoSpaced20,
} from "../styleComponents/FooterStyles";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <InnerDiv>
      <PaddedDiv>
        <BreakDiv40></BreakDiv40>
        <LeftFlex20>
          <LogoDiv>
            <FooterLogo>
              <MainLogo onClick={handleClick}>Cozy Living</MainLogo>
            </FooterLogo>
            <LogoSpaced20>
              <FooterLink to="#">
                <img src={instagram} />
              </FooterLink>

              <FooterLink to="#">
                <img src={pinterest} />
              </FooterLink>

              <FooterLink to="#">
                <img src={facebook} />
              </FooterLink>

              <FooterLink to="#">
                <img src={twitter} />
              </FooterLink>

              <FooterLink to="#">
                <img src={youtube} />
              </FooterLink>
            </LogoSpaced20>
          </LogoDiv>
          <FlexColumnR>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="#">Stores</FooterLink>
          </FlexColumnR>
          <FlexColumnL>
            <FooterLink to="#">Track Your Order</FooterLink>
            <FooterLink to="#">Shipping Information</FooterLink>
            <FooterLink to="#">Return Policy</FooterLink>
          </FlexColumnL>
          <FlexColumnR>
            <FooterLink to="#">Careers</FooterLink>
            <FooterLink to="#">FAQ</FooterLink>
            <FooterLink to="#">Help Centre</FooterLink>
          </FlexColumnR>
          <CenterDiv20>
            <br></br>
            <br></br>
            <br></br>

            <Title1>Roxan © {year}</Title1>
          </CenterDiv20>
        </LeftFlex20>
      </PaddedDiv>
    </InnerDiv>
  );
}

export default Footer;
