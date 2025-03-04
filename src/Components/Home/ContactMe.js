import React from "react";
import styled from "styled-components";
import Icon from "../Common/Icon";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
`;

const ConnectText = styled.p`
  font-size: 18px;
  margin: 10px 0px;
`;

const ConnectMeBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 40px auto;
  gap: 15px;
  background-color: ${(props) => props.theme.Colors.PrimaryColor};
  color: ${(props) => props.theme.Colors.White};
  padding: 15px 30px;
  border: 1px solid ${(props) => props.theme.Colors.White};
  border-radius: 50px;
`;

const ContactMeText = styled.p`
font-size: 16px;
`;

const ContactMe = () => {
  return (
    <MainWrapper>
      <Heading>Lets's Connect</Heading>
      <ConnectText>
        Have a project in mind? Let's work together to bring your ideas to life!
      </ConnectText>
      <ConnectMeBtn>
        <Icon name="linkedin" size="2xl"  />
        <ContactMeText>Contact Me</ContactMeText>
        <Icon name="arrow-right" size="2xl" />
      </ConnectMeBtn>
    </MainWrapper>
  );
};

export default ContactMe;
