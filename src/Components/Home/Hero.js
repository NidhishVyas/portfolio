import React from "react";
import styled, { useTheme } from "styled-components";
import Portrait from "../../Images/portrait1.png";
import Icon from "../Common/Icon";
import Resume from "../../Data/Resume - Nidhish Vyas.pdf";
import HeroImg from "../../Images/heroimg.png";
import Hidden from "../Common/Hidden";
import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const MainWrapper = styled.div`
  position: relative;
  /* background-image: url(${HeroImg}); */
  background-position: center;
  background-size: cover;
  /* height: calc(100vh - 54px); */

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
  top: 80px;
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
  padding-top: 380px;
  width: 100%;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding-top: 590px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: 470px;
    /* height: auto; */
    align-self: flex-start;
    padding-top: 0px;
  }
`;

const TitleText = styled(motion.h3)`
  font-size: 24px;
  margin-top: 30px;
  font-weight: 400;
  font-family: ${(props) => props.theme.Fonts.Jost};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 36px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 42px;
  }
`;

const Name = styled(motion.h1)`
  font-size: 45px;
  font-weight: 400;
  font-family: ${(props) => props.theme.Fonts.Fruitos};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 55px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 65px;
  }
`;

const SubTitleText = styled(motion.p)`
  margin: 20px 0;
  font-family: ${(props) => props.theme.Fonts.Jost};
  color: ${(props) => props.theme.Colors.TextColor};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin: 15px 0 25px;
    font-size: 26px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin: 40px 0 60px;
    font-size: 20px;
  }
`;

const ResumeDownload = styled(motion.a)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  padding: 15px 25px;
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
  font-size: 14px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 20px;
  }
`;

const Hero = () => {
  const theme = useTheme();
  // const socialIcons = ["linkedin-in", "github", "instagram", "envelope"];

  const animateProps = {
    initial: "initial",
    animate: "animate",
  };

  const animateVariants = {
    initial: { x: "-100%" },
    animate: {
      x: 0,
      transition: { duration: 0.5 },
    },
  };

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
              <Icon name="linkedin-in" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
            <SocialsIcon>
              <Icon name="github" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
            <SocialsIcon>
              <Icon name="instagram" color={theme.Colors.White} size="xl" />
            </SocialsIcon>
            <SocialsIcon>
              <Mail color={theme.Colors.White} size={18} />
            </SocialsIcon>
          </SocialsDiv>
          {/* <SocialsDiv>
          {socialIcons.map((icon, index) => (
            <SocialsIcon key={icon} index={index + 1}>
              <Icon name={icon} color={theme.Colors.White} size={20} />
            </SocialsIcon>
          ))}
        </SocialsDiv> */}
        </HeroImageDiv>
        <GreetingsDiv>
          <Hidden>
            <TitleText variants={animateVariants} {...animateProps}>
              Hello! I'm
            </TitleText>
          </Hidden>
          <Hidden>
            <Name variants={animateVariants} {...animateProps}>
              Nidhish Vyas
            </Name>
          </Hidden>
          <Hidden>
            <SubTitleText variants={animateVariants} {...animateProps}>
              Code by day, data by night! I'm a Full-Stack Developer who
              transforms ideas into dynamic web apps and raw data into powerful
              insights.
            </SubTitleText>
          </Hidden>
          <Hidden>
            <ResumeDownload
              href={Resume}
              download="Resume - Nidhish Vyas.pdf"
              variants={animateVariants}
              {...animateProps}
            >
              <DownloadText>Get Resume</DownloadText>
              <Download color={theme.Colors.White} size={16} />
            </ResumeDownload>
          </Hidden>
        </GreetingsDiv>
      </MainWrapper>
    </>
  );
};

export default Hero;
