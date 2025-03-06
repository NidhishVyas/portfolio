import React from "react";
import styled, { useTheme } from "styled-components";
import Icon from "./Icon";

const MainWrapper = styled.div`
  background: ${(props) => props.theme.Colors.LightBlack};
  margin-top: 120px;
  padding: 50px 0;
  color: ${(props) => props.theme.Colors.White};
  text-align: center;
`;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SocialsIcon = styled.button`
  background: ${(props) => props.theme.Colors.LightBlack};
  border: 0px solid ${(props) => props.theme.Colors.White};
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
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

  return (
    <MainWrapper>
      <SocialsDiv>
        <SocialsIcon>
          <Icon name="linkedin" color={theme.Colors.White} size="2xl" />
        </SocialsIcon>
        <SocialsIcon>
          <Icon name="github" color={theme.Colors.White} size="2xl" />
        </SocialsIcon>
        <SocialsIcon>
          <Icon name="instagram" color={theme.Colors.White} size="2xl" />
        </SocialsIcon>
        <SocialsIcon>
          <Icon name="envelope" color={theme.Colors.White} size="2xl" />
        </SocialsIcon>
      </SocialsDiv>
      <FooterText>Designed and Developed with ❤ by Nidhish Vyas</FooterText>
      <Copyright>Copyright © {new Date().getFullYear()}</Copyright>
    </MainWrapper>
  );
};

export default Footer;
