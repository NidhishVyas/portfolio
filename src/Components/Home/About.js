import React from "react";
import styled from "styled-components";
import Portrait from "../../Images/ProjectImg.png";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    text-align: left;
    margin-top: 80px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    flex-direction: row;
  }
`;

const AboutSection = styled.div`
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 576px;
  }
`;

const SectionHeading = styled.p`
  color: ${(props) => props.theme.Colors.LightWhite};
  text-transform: uppercase;
  font-size: 14px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const AboutHeading = styled.p`
  margin: 15px 0 40px;
  font-size: 30px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 48px;
  }
`;

const AboutMe = styled.p`
  color: ${(props) => props.theme.Colors.LightWhite};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 18px;
  }
`;

const LogoSection = styled.div``;

const LogoImg = styled.img`
  aspect-ratio: 1/1;
  width: 220px;
  object-fit: cover;
  border-radius: 50%;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: 320px;
  }
`;

const About = () => {
  return (
    <MainWrapper>
      <FlexDiv>
        <AboutSection>
          <SectionHeading>About Me</SectionHeading>
          <AboutHeading>
            Full-Stack Developer and a little bit of everything
          </AboutHeading>
          <AboutMe>
            I'm Nidhish Vyas, a proactive full-stack developer passionate about
            creating dynamic web experiences. From frontend to backend, I thrive
            on solving complex problems with clean, efficient code. My expertise
            spans React, Next.js, and Node.js, and I'm always eager to learn
            more.
            <br />
            <br />
            When I'm not coding, I'm exploring new ideas and staying curious.
            Life's about balance, and I love embracing every part of it.
            <br />
            <br />I believe in waking up each day eager to make a difference!
          </AboutMe>
        </AboutSection>
        <LogoSection>
          <LogoImg src={Portrait} />
        </LogoSection>
      </FlexDiv>
    </MainWrapper>
  );
};

export default About;
