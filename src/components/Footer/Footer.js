import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Paragraph,
} from "./FooterStyles";
import Form from "../Form/Form";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#4EB1BA", textAlign: "center", marginTop: "-50px" }}>
        JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <Paragraph>Lorem Ipsum</Paragraph>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/JUMHC1966/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/jumhc1966/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Form />
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
