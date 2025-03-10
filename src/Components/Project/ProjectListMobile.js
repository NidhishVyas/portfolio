import React, { useRef } from "react";
import styled, { useTheme } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ProjectsData from "../../Data/ProjectsData";
import Icon from "../Common/Icon";
import TechStack from "../Common/TechStack";
import Hero from "../../Images/hero.png";

const ProjectDiv = styled(motion.div)`
  margin-bottom: 80px;
  text-align: left;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 90%;
    margin: 0 auto 80px;
  }
`;

const ProjectImgDiv = styled.div`
  backdrop-filter: blur(28px);
  background-color: ${(props) => props.theme.Colors.LightestWhite};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 5%,
      rgba(255, 255, 255, 0.8) 35%,
      rgb(255, 255, 255) 50%,
      rgba(255, 255, 255, 0.8) 65%,
      rgba(0, 0, 0, 0) 95%
    );
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 350px;
  }
`;

const ColorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 20%,
      rgb(255, 255, 255) 50%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`;

const ProjectImage = styled.img`
  object-fit: cover;
  max-width: 85%;
  rotate: -3deg;
  transform: translateY(30px);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  /* padding: 10px; */
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 1);

  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 90%;
  }
`;

const ProjectName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 25px 0 15px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
`;

const ProjectInfo = styled.p`
  color: ${(props) => props.theme.Colors.TextColor};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 18px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  color: ${(props) => props.theme.Colors.White};
  border: 1px solid ${(props) => props.theme.Colors.LightestWhite};
  border-radius: 15px;
  padding: 10px;
  /* box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.15) inset;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.15) inset;
  -moz-box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.15) inset; */
  /* box-shadow: inset 0 2px 10px ${(props) =>
    props.theme.Colors.LightestWhite}; */
  box-shadow: inset 0 0px 10px ${(props) => props.theme.Colors.LightestWhite};
`;

const ButtonName = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;
const ProjectListMobile = () => {
  const theme = useTheme();
  const ref = useRef(null);

  return (
    <>
      {ProjectsData.map((data, i) => (
        <AnimatePresence>
          <ProjectDiv
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <ProjectImgDiv>
              <ColorDiv style={{ backgroundColor: data.color }}>
                <ProjectImage src={Hero} alt={data.name} />
              </ColorDiv>
            </ProjectImgDiv>
            <ProjectName>{data.name}</ProjectName>
            <ProjectInfo>{data.info}</ProjectInfo>
            <TechStack data={data.techStack} color={data.color} />
            <ButtonDiv>
              {!data.sourceCode && (
                <Button
                  href={data.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" color={theme.Colors.White} />
                  <ButtonName>Source Code</ButtonName>
                </Button>
              )}
              {!data.website && (
                <Button
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="arrow-up-right-from-square"
                    color={theme.Colors.White}
                    size="sm"
                  />
                  <ButtonName>Website</ButtonName>
                </Button>
              )}
            </ButtonDiv>
          </ProjectDiv>
        </AnimatePresence>
      ))}
    </>
  );
};

export default ProjectListMobile;
