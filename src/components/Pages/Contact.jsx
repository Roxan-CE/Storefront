import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import {
  ContainerDiv,
  InnerDiv,
  PaddedDiv,
} from "../styleComponents/divStyles";
import { CenterDiv20, LeftFlex20 } from "../styleComponents/FlexDivs";
import { FormDiv } from "../styleComponents/FormStyles";
import { Title1 } from "../styleComponents/TextStyles";

function Contact() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <PaddedDiv>
          <br />
          <br />
          <Title1>Contact Us</Title1>
          <ContactForm></ContactForm>
          <br />
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
        </PaddedDiv>
      </InnerDiv>
    </ContainerDiv>
  );
}

export default Contact;
