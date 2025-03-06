import React from "react";
import styled, { useTheme } from "styled-components";
import Portrait from "../../Images/portrait1.png";
import Icon from "../Common/Icon";
import Resume from "../../Data/Resume - Nidhish Vyas.pdf";
import HeroImg from "../../Images/heroimg.png";

const MainWrapper = styled.div`
  position: relative;
  /* background-image: url(${HeroImg}); */
  background-position: center;
  background-size: cover;
  height: calc(100vh - 54px);

  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;
    /* max-width: 960px; */
    margin: 0 auto;
  }
`;

// const HeroImgDiv = styled.div`
//   background-image: url(${HeroImg});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: -1;
// `;

const HeroImageDiv = styled.div`
  position: absolute;
  left: calc(50% - 22px);
  transform: translateX(-50%);
  top: 50px;
  width: 240px;
  height: auto;
  overflow-y: clip;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 400px;
    height: auto;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    position: relative;
    left: auto;
    top: auto;
    transform: translateX(-25%);
    /* width: 60%; */
    /* height: auto; */
  }
`;

const HeroImage = styled.img`
  width: 240px;
  height: auto;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 400px;
    height: auto;
  }
`;

const SemiCircle = styled.div`
  position: absolute;
  width: 150px;
  height: 230px;
  top: 30px;
  left: 125px;
  border-radius: 0 150px 150px 0;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  z-index: -1;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 250px;
    height: 400px;
    top: 60px;
    left: 200px;
    border-radius: 0 600px 600px 0;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    top: 90px;
  }
`;

const OtherSemiCircle = styled.div`
  position: absolute;
  width: ${(props) => (props.inner ? "200px" : "300px")};
  height: ${(props) => (props.inner ? "320px" : "480px")};
  top: ${(props) => (props.inner ? "130px" : "50px")};
  left: 200px;
  border-radius: 0 600px 600px 0;
  border: 1px solid ${(props) => props.theme.Colors.LightestWhite};
  z-index: -1;
  display: none;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: block;
  }
`;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialsIcon = styled.button`
  background: ${(props) => props.theme.Colors.PrimaryColor};
  border: 1px solid ${(props) => props.theme.Colors.White};
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    left: 170px;
    top: 15px;
  }
  &:nth-child(2) {
    left: 225px;
    top: 50px;
  }
  &:nth-child(3) {
    left: 255px;
    top: 115px;
  }
  &:nth-child(4) {
    left: 240px;
    top: 182.5px;
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 15px;

    &:nth-child(1) {
      left: 285px;
      top: 50px;
    }
    &:nth-child(2) {
      left: 360px;
      top: 90px;
    }
    &:nth-child(3) {
      left: 415px;
      top: 170px;
    }
    &:nth-child(4) {
      left: 425px;
      top: 270px;
    }
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    padding: 15px;

    &:nth-child(1) {
      left: 285px;
      top: 80px;
    }
    &:nth-child(2) {
      left: 360px;
      top: 120px;
    }
    &:nth-child(3) {
      left: 415px;
      top: 200px;
    }
    &:nth-child(4) {
      left: 425px;
      top: 300px;
    }
  }

  /* ${({ index }) => `
    left: ${175 + 50 * (index - 1) - 21 * Math.pow(index - 2, 2)}px;
    top: ${20 + 20 * (index - 1) + 13 * Math.pow(index - 1, 2)}px;
  `} */
`;

const GreetingsDiv = styled.div`
  padding-top: 350px;
  width: 100%;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding-top: 560px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: 400px;
    /* height: auto; */
    align-self: flex-start;
    padding-top: 0px;
  }
`;

const TitleText = styled.h3`
  font-size: 32px;
  margin-top: 30px;
  font-weight: 400;
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 36px;
  }
`;

const Name = styled.h1`
  font-size: 45px;
  font-weight: 700;
  font-family: ${(props) => props.theme.Fonts.Cinzel};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 60px;
  }
`;

const SubTitleText = styled.p`
  margin: 15px 0 20px;
  font-family: ${(props) => props.theme.Fonts.Inter};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin: 15px 0 25px;
    font-size: 26px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin: 40px 0 60px;
    font-size: 20px;
  }
`;

const ResumeDownload = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  padding: 20px 30px;
  width: fit-content;
  border-radius: 50px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  box-shadow: inset 0 0px 10px ${(props) => props.theme.Colors.LightestWhite};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 20px 45px;
  }
`;

const DownloadText = styled.p`
  color: ${(props) => props.theme.Colors.White};
  margin-right: 10px;
  font-size: 16px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 22px;
  }
`;

const Hero = () => {
  const theme = useTheme();
  // const socialIcons = ["linkedin-in", "github", "instagram", "envelope"];

  return (
    <>
      {/* <HeroImgDiv /> */}
      <MainWrapper>
        <HeroImageDiv>
          <HeroImage src={Portrait} />
          <SemiCircle />
          <OtherSemiCircle inner="true" />
          <OtherSemiCircle />
          <SocialsDiv>
            <SocialsIcon>
              <Icon name="linkedin" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
            <SocialsIcon>
              <Icon name="github" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
            <SocialsIcon>
              <Icon name="instagram" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
            <SocialsIcon>
              <Icon name="envelope" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
          </SocialsDiv>
          {/* <SocialsDiv>
          {socialIcons.map((icon, index) => (
            <SocialsIcon key={icon} index={index + 1}>
              <Icon name={icon} color={theme.Colors.White} size="xl" />
            </SocialsIcon>
          ))}
        </SocialsDiv> */}
        </HeroImageDiv>
        <GreetingsDiv>
          <TitleText>Hello! I'm</TitleText>
          <Name>Nidhish Vyas</Name>
          <SubTitleText>
            Your friendly neighborhood Full-Stack Developer
          </SubTitleText>
          <ResumeDownload href={Resume} download="Resume - Nidhish Vyas.pdf">
            <DownloadText>Get Resume</DownloadText>
            <Icon name="download" color={theme.Colors.White} size="l" />
          </ResumeDownload>
        </GreetingsDiv>
      </MainWrapper>
    </>
  );
};

export default Hero;
