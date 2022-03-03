import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../SmallerComponents/ContactForm";
import {
  ContactDetailsDiv,
  ContactFormDiv,
  InnerDiv,
} from "../styleComponents/divStyles";
import { FlexSpaced20, LeftFlex20 } from "../styleComponents/FlexDivs";
import { Title1 } from "../styleComponents/TextStyles";

function Contact() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
  return (
    <InnerDiv>
      <FlexSpaced20>
        <ContactFormDiv>
          <br />
          <br />
          <Title1>Contact Us</Title1>
          <ContactForm></ContactForm>
          <br />
        </ContactFormDiv>

        <ContactDetailsDiv className="this one">
          <Title1>Email</Title1>
          <LeftFlex20>
            <p>
              Customer Inquiries:
              <br />
              customerservice@permanentcollection.com
              <br />
              <br />
              General:
              <br />
              Inquiries contact@permanentcollection.com
              <br />
              <br />
              Press Inquiries:
              <br />
              press@permanentcollection.com
            </p>
          </LeftFlex20>
          <br />
          <Title1>Social Media</Title1>
          <LeftFlex20>
            <p>
              <Link to="#">Instagram</Link>
              <br />
              <br />
              <Link to="#">Twitter</Link>
              <br />
            </p>
          </LeftFlex20>
          <br />
          <Title1>Address</Title1>
          <LeftFlex20>
            <p>
              Cozy Living
              <br />
              100 Queen St W,
              <br />
              Toronto, ON
              <br />
              M5H 2N2
            </p>
          </LeftFlex20>
        </ContactDetailsDiv>
      </FlexSpaced20>
    </InnerDiv>
  );
}

export default Contact;
