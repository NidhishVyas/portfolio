import React from "react";
import styled, { useTheme } from "styled-components";
import Icon from "./Icon";
import { motion } from "framer-motion";

const MainWrapper = styled.div`
  background: ${(props) => props.theme.Colors.Black};
  margin-top: 80px;
  padding: 50px 0;
  color: ${(props) => props.theme.Colors.White};
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-top: 100px;
    padding: 50px 0;
  }
`;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SocialsIcon = styled(motion.a)`
  background: ${(props) => props.theme.Colors.LightBlack};
  border: 0px solid ${(props) => props.theme.Colors.White};
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  font-weight: 700;
`;

const Copyright = styled.p`
  font-size: 14px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;

const Footer = () => {
  const theme = useTheme();
  const socialIcons = [
    { name: "linkedin-in", link: "https://www.linkedin.com/in/nidhish-vyas/" },
    { name: "github", link: "https://github.com/NidhishVyas" },
    { name: "discord", link: "https://discord.com/users/nids1312" },
    { name: "envelope", link: "mailto:nv373@njit.edu" },
  ];

  return (
    <MainWrapper>
      <SocialsDiv>
        {socialIcons.map((icon, index) => (
          <SocialsIcon
            key={icon}
            index={index + 1}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.8 }}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.name}
          >
            <Icon name={icon.name} color={theme.Colors.White} size="xl" />
          </SocialsIcon>
        ))}
      </SocialsDiv>
      <FooterText>Designed and Developed with ❤ by Nidhish Vyas</FooterText>
      <Copyright>Copyright © {new Date().getFullYear()}</Copyright>
    </MainWrapper>
  );
};

export default Footer;
