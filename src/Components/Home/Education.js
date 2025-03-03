import React from "react";
import styled from "styled-components";
import ExEdu from "../Common/ExEdu";
import EducationData from "../../Data/Education";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

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

const Education = () => {
  return (
    <MainWrapper>
      <SectionHeading>Education</SectionHeading>
      <ProjectHeading>Education</ProjectHeading>
      {EducationData.map((item, i) => (
        <ExEdu data={item} key={i} />
      ))}
    </MainWrapper>
  );
};

export default Education;
