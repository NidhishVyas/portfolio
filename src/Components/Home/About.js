import React from "react";
import styled from "styled-components";
import { ReactComponent as Portrait } from "../../Images/Logo.svg";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 90px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-top: 0;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    text-align: left;
    margin: 120px auto;
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
    width: 70%;
    /* max-width: 576px; */
  }
`;

// const SectionHeading = styled.p`
//   color: ${(props) => props.theme.Colors.LightWhite};
//   text-transform: uppercase;
//   font-size: 14px;

//   @media ${(props) => props.theme.MediaQueries.m.query} {
//     font-size: 16px;
//   }
// `;

// const AboutHeading = styled.p`
//   margin: 15px 0 40px;
//   font-size: 30px;

//   @media ${(props) => props.theme.MediaQueries.m.query} {
//     font-size: 48px;
//   }
// `;

const AboutMe = styled.p`
  color: ${(props) => props.theme.Colors.TextColor};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;
  /* text-align: justify; */

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 18px;
  }
`;

const LogoSection = styled.div`
  aspect-ratio: 1/1;
  /* width: 220px; */
  object-fit: cover;
  border-radius: 50%;
  width: 200px;
  border: 1px solid ${(props) => props.theme.Colors.White};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 30%;
  }
`;

const LogoImg = styled(Portrait)`
  aspect-ratio: 1/1;
  fill: transparent;
  stroke: ${(props) => props.theme.Colors.PrimaryColor};
  width: 320px;
`;

const About = () => {
  return (
    <MainWrapper>
      <FlexDiv>
        <AboutSection>
          {/* <SectionHeading
            heading="Full-Stack Developer and a little bit of everything"
            subHeading="About me"
          /> */}
          <SectionHeading heading="SELF PORTRAIT" subHeading="About me" about />
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
          <LogoImg />
        </LogoSection>
      </FlexDiv>
    </MainWrapper>
  );
};

export default About;

// Potential headings:
// "MY STORY"
// "BIOGRAPHY"
// "WHO I AM"
// "PERSONAL JOURNEY"
// "INSIDE LOOK"
// "SELF PORTRAIT"
// "MEET THE CREATOR"
// "BEHIND THE SCENES"
// "A GLIMPSE INTO ME"
// "THE JOURNEY SO FAR"
