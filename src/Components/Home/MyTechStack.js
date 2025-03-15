import React from "react";
import styled from "styled-components";
import TechStackData from "../../Data/TechStack.json";
import Java from "../../Images/java.png";
import SectionHeading from "../Common/SectionHeading";
import { motion } from "framer-motion";

const MainWrapper = styled.div`
  margin-top: 90px;
  text-align: center;
  /* color: ${(props) => props.theme.Colors.Black}; */

  @media ${(props) => props.theme.MediaQueries.m.query} {
    /* text-align: left; */
    margin: 120px auto;
  }
`;

const StackDiv = styled.div`
  margin-top: 50px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin-top: 60px;
  }
`;

const StackCategory = styled(motion.div)`
  font-size: 22px;
  margin: 0 0 25px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 20%;
    font-size: 28px;
    margin: 0;
  }
`;

const MyTechWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 75%;
    justify-content: flex-start;
  }
`;

const TechStackItems = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid ${(props) => props.theme.Colors.LightestWhite};
  background-color: ${(props) => props.theme.Colors.TechBg};
  border-radius: 15px;
  /* color: ${(props) => props.theme.Colors.Black}; */
  cursor: pointer;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 5px 25px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    padding: 8px 25px;
  }
`;

const TechImage = styled.img`
  height: 20px;
  width: auto;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 25px;
  }

  &.dark {
    filter: invert(100%);
  }

  &.bright {
    filter: brightness(200%);
  }
`;

const Tech = styled.p`
  font-size: 14px;
  margin-left: 10px;
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const TechStack = () => {
  const fadeInVariant = (id) => ({
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: id * 0.05,
        duration: 0.5,
        type: "spring",
      },
    },
  });

  return (
    <MainWrapper>
      {/* <SectionHeading
        subHeading="I constantly try to improve"
        heading="My Tech Stack"
      /> */}
      <SectionHeading heading="STACK & SKILLS" subHeading="My Tech Stack" />
      {TechStackData.map((item, i) => (
        <StackDiv key={i}>
          <StackCategory
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  type: "spring",
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {item.category}
          </StackCategory>
          <MyTechWrap>
            {item.stack.map((tech, id) => (
              <TechStackItems
                key={id}
                variants={fadeInVariant(id)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <TechImage
                  src={
                    tech.icon !== "java"
                      ? `https://cdn.simpleicons.org/${tech.icon}`
                      : Java
                  }
                  alt={tech.name}
                  className={
                    tech?.color === "dark"
                      ? "dark"
                      : tech?.color === "bright"
                      ? "bright"
                      : ""
                  }
                />
                <Tech>{tech.name}</Tech>
              </TechStackItems>
            ))}
          </MyTechWrap>
        </StackDiv>
      ))}
    </MainWrapper>
  );
};

export default TechStack;

// Potential headings:
// "TOOLS & TECHNOLOGIES"
// "DEVELOPMENT KIT"
// "TECHNOLOGY STACK"
// "FRAMEWORKS & TOOLS"
// "MY TOOLBOX"
// "SOFTWARE EXPERTISE"
// "STACK & SKILLS"
// "TECHNOLOGY ARSENAL"
// "CODING ECOSYSTEM"
// "PLATFORMS & LANGUAGES"
