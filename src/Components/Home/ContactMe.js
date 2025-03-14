import React from "react";
import styled, { useTheme } from "styled-components";
import Icon from "../Common/Icon";
import SectionHeading from "../Common/SectionHeading";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const MainWrapper = styled.div`
  margin-top: 90px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    /* text-align: left; */
    margin: 120px auto;
  }
`;

// const Heading = styled.h1`
//   font-size: 32px;
//   font-family: ${(props) => props.theme.Fonts.Quicksand};
//   font-weight: 700;
// `;

const ConnectText = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin: 10px 0px;
  color: ${(props) => props.theme.Colors.TextColor};
`;

const ConnectMeBtn = styled(motion.a)`
  display: flex;
  align-items: center;
  margin: 40px auto;
  gap: 15px;
  background-color: ${(props) => props.theme.Colors.PrimaryColor};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  color: ${(props) => props.theme.Colors.White};
  padding: 15px 30px;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  border-radius: 50px;
  cursor: pointer;
  width: fit-content;
`;

const ContactMeText = styled.p`
  font-size: 16px;
`;

const ContactMe = () => {
  const theme = useTheme();
  return (
    <MainWrapper>
      <SectionHeading heading="BUILD TOGETHER" subHeading="Let's connect" />
      {/* <Heading>Lets's Connect</Heading> */}
      <ConnectText>
        Have a project in mind? Let's work together to bring your ideas to life!
      </ConnectText>
      <ConnectMeBtn
        whileHover={{
          boxShadow: `0px 0px 10px ${theme.Colors.LightWhite}`,
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        href="https://www.linkedin.com/in/nidhish-vyas/"
        target="_blank"
        noopener="noreferrer"
      >
        <Icon name="linkedin" size="2xl" />
        <ContactMeText>Contact Me</ContactMeText>
        <MoveRight size={24} />
      </ConnectMeBtn>
    </MainWrapper>
  );
};

export default ContactMe;

// potential headings
// "STAY IN TOUCH"
// "GET IN TOUCH"
// "CONNECT WITH ME"
// "LET’S TALK"
// "REACH OUT"
// "CONTACT ME"
// "NETWORK & COLLABORATE"
// "LET’S CHAT"
// "BUILD TOGETHER"
// "JOIN THE CONVERSATION"
