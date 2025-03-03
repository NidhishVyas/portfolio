import React from "react";
import styled from "styled-components";
import TechStackData from "../../Data/TechStack.json";
import Java from "../../Images/java.png";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;
  /* color: ${(props) => props.theme.Colors.Black}; */

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
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

const ProjectHeading = styled.div`
  margin: 15px 0 40px;
  font-size: 30px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 48px;
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

const StackCategory = styled.div`
  font-size: 25px;
  margin: 0 0 25px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 30%;
    font-size: 35px;
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
    width: 70%;
    justify-content: flex-start;
  }
`;

const TechStackItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  /* border: 1px solid ${(props) => props.theme.Colors.White}; */
  border-radius: 25px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 5px 25px;
  }
`;

const TechImage = styled.img`
  height: 30px;
  width: auto;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 35px;
  }
`;

const Tech = styled.p`
  font-size: 18px;
  margin-left: 10px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 20px;
  }
`;

const TechStack = () => {
  return (
    <MainWrapper>
      <SectionHeading>I constantly try to improve</SectionHeading>
      <ProjectHeading>My Tech Stack</ProjectHeading>
      {TechStackData.map((item, i) => (
        <StackDiv key={i}>
          <StackCategory>{item.category}</StackCategory>
          <MyTechWrap>
            {item.stack.map((tech, id) => (
              <TechStackItems key={id}>
                <TechImage
                  src={
                    tech.icon !== "java"
                      ? `https://cdn.simpleicons.org/${tech.icon}`
                      : Java
                  }
                  alt={tech.name}
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
