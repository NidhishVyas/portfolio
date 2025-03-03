import React from "react";
import styled, { useTheme } from "styled-components";
import Icon from "./Icon";

const Container = styled.div`
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  width: 260px;
  height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.Colors.SecondaryColor};
  transform: translateX(0);
  transition: all 0.5s ease;
`;

const CloseDiv = styled.div`
  margin-bottom: 30px;
  padding: 16px;
`;

const CloseButton = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  height: 20px;
  width: 20px;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuDiv = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-self: start;
  flex-direction: column;
`;

const MenuItem = styled.a`
  padding: 7px 5px;
  font-size: 20px;
  color: ${(props) => props.theme.Colors.White};
  text-align: center;
  text-transform: uppercase;
`;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22.5px;
`;

const SocialsIcon = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  height: 20px;
  width: 20px;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideNav = ({ close }) => {
  const theme = useTheme();

  return (
    <Container>
      <CloseDiv>
        <CloseButton onClick={close}>
          <Icon name="x" color={theme.Colors.White} />
        </CloseButton>
      </CloseDiv>
      <MenuDiv>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Blog</MenuItem>
      </MenuDiv>
      <SocialsDiv>
        <SocialsIcon>
          <Icon name="linkedin-in" color={theme.Colors.White} />
        </SocialsIcon>
        <SocialsIcon>
          <Icon name="github" color={theme.Colors.White} />
        </SocialsIcon>
        <SocialsIcon>
          <Icon name="envelope" color={theme.Colors.White} />
        </SocialsIcon>
      </SocialsDiv>
    </Container>
  );
};

export default SideNav;
